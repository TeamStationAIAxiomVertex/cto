
import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import * as url from "node:url";
import cheerio from "cheerio";
import { blue, green, yellow, red, gray } from "kleur/colors";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "out");           // your static export
const SITE = "https://cto.teamstation.dev";

const HUBS = [
  "/playbook/hub",
  "/research/hub",
  "/comparisons",
  "/hire",
  "/trust"
];

const COMPETITORS = {
  andela: ["andela.com"],
  bairesdev: ["bairesdev.com"],
  deel: ["deel.com"],
  globant: ["globant.com"],
  nearsure: ["nearsure.com"],
  "new-gen-nearshore": [], // optional, skip
  parallelstaff: ["parallelstaff.com"],
  revelo: ["revelo.com"],
  tecla: ["tecla.io"],
  terminal: ["terminal.io"],
  toptal: ["toptal.com"],
  unosquare: ["unosquare.com"],
};

function fileToUrl(file) {
  let rel = path.relative(OUT, file).replace(/\\/g, "/");
  if (rel.endsWith("index.html")) rel = rel.slice(0, -("index.html".length));
  else if (rel.endsWith(".html")) rel = rel.slice(0, -(".html".length));
  if (!rel.startsWith("/")) rel = "/" + rel;
  if (rel !== "/" && rel.endsWith("/")) rel = rel.slice(0, -1);
  return SITE + rel;
}

function normalizeCanonical(href) {
  if (!href) return "";
  const u = new URL(href, SITE);
  let p = u.pathname || "/";
  if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
  return `${SITE}${p}`;
}

function flattenTypes(node, bag = new Set()) {
  if (!node || typeof node !== "object") return bag;
  if (Array.isArray(node)) {
    node.forEach(n => flattenTypes(n, bag));
  } else {
    const t = node["@type"];
    if (typeof t === "string") bag.add(t);
    if (Array.isArray(t)) t.forEach(v => typeof v === "string" && bag.add(v));
    Object.values(node).forEach(v => flattenTypes(v, bag));
  }
  return bag;
}

function expectedTypes(urlStr) {
  if (urlStr === SITE || urlStr === SITE + "/") return ["Organization", "WebSite"];
  if (urlStr.includes("/research/")) return ["ScholarlyArticle"];
  if (urlStr.includes("/playbook/")) return ["Article"]; // FAQPage optional
  if (urlStr.includes("/comparisons/")) return ["Product", "Service"]; // either is fine
  if (urlStr.includes("/hire/by-technology")
   || urlStr.includes("/hire/by-country")
   || urlStr.includes("/hire/by-role")) return ["Service"]; // FAQPage encouraged
  return [];
}

function pathPart(urlStr, idxFromEnd=1) {
  const u = new URL(urlStr);
  const parts = u.pathname.split("/").filter(Boolean);
  return parts[parts.length - idxFromEnd] || "";
}

function scorePage(p) {
  const issues = [];
  // Title
  if (!p.title) issues.push("missing <title>");
  else if (p.title.length > 60) issues.push(`title too long (${p.title.length})`);

  // Description
  if (!p.description) issues.push("missing meta description");
  else if (p.description.length < 80 || p.description.length > 160)
    issues.push(`meta description length ${p.description.length}`);

  // Canonical
  const normCanon = normalizeCanonical(p.canonical);
  if (!normCanon) issues.push("missing canonical");
  else if (normCanon !== p.url) issues.push(`canonical mismatch → ${normCanon}`);

  // Schema
  const need = expectedTypes(p.url);
  if (need.length) {
    const has = need.some(t => p.types.has(t));
    if (!has) issues.push(`missing schema: one of [${need.join(", ")}]`);
  }

  // Internal link mesh
  const hubHits = HUBS.filter(h => p.internalLinks.has(h)).length;
  if (hubHits < 2) issues.push(`needs ≥2 hub links (has ${hubHits})`);

  // Programmatic links from pillars / comparisons
  const isPillar = p.url.includes("/playbook/") || p.url.includes("/research/");
  const isComparison = p.url.includes("/comparisons/");
  const programmaticHits = [...p.internalLinks].filter(h =>
    h.startsWith("/hire/") || h.startsWith("/latam/") || h.startsWith("/roles/")
  ).length;
  if ((isPillar || isComparison) && programmaticHits < 2)
    issues.push(`needs ≥2 programmatic links (has ${programmaticHits})`);

  // Comparisons: ensure competitor homepage is linked (nofollow+noopener)
  if (isComparison) {
    const slug = pathPart(p.url, 1); // e.g., "bairesdev"
    const domains = COMPETITORS[slug] || [];
    if (domains.length) {
      const hasVendor = [...p.externalLinks].some(h =>
        domains.some(d => h.includes(d))
      );
      if (!hasVendor) issues.push(`no vendor homepage link for "${slug}"`);
    }
    // Check rel attrs on external links
    if (p.externalCount && p.externalMissingRel > 0) {
      issues.push(`external links missing rel="nofollow noopener noreferrer": ${p.externalMissingRel}`);
    }
  }

  return issues;
}

function toCsvRow(p) {
  const types = [...p.types].join("|");
  return [
    p.url,
    JSON.stringify(p.title || ""),
    JSON.stringify(p.h1 || ""),
    p.description ? p.description.length : 0,
    [...p.internalLinks].length,
    p.externalCount,
    types,
    p.issues.length ? JSON.stringify(p.issues.join("; ")) : ""
  ].join(",");
}

(async function run() {
  const files = await fg(["**/*.html"], { cwd: OUT, absolute: true });
  const results = [];

  for (const file of files) {
    const html = await fs.readFile(file, "utf8");
    const $ = cheerio.load(html);

    const urlStr = fileToUrl(file);
    const title = $("title").first().text().trim();
    const h1 = $("h1").first().text().trim();
    const description = $('meta[name="description"]').attr("content")?.trim() || "";
    const canonical = $('link[rel="canonical"]').attr("href") || "";

    // JSON-LD
    const types = new Set();
    $('script[type="application/ld+json"]').each((_, el) => {
      const text = $(el).contents().text();
      try {
        const node = JSON.parse(text);
        flattenTypes(node, types);
      } catch {/* ignore */}
    });

    // Links
    const internalLinks = new Set();
    const externalLinks = new Set();
    let externalMissingRel = 0;

    $("a[href]").each((_, a) => {
      const href = ($(a).attr("href") || "").trim();
      if (!href) return;
      if (/^mailto:|^tel:|^javascript:/i.test(href)) return;

      const abs = new URL(href, SITE);
      if (abs.origin === SITE) {
        let p = abs.pathname || "/";
        if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
        internalLinks.add(p);
      } else {
        externalLinks.add(abs.href);
        const rel = (($(a).attr("rel") || "") + "").toLowerCase();
        const needs = ["nofollow", "noopener", "noreferrer"];
        if (!needs.every(n => rel.includes(n))) externalMissingRel++;
      }
    });

    const page = {
      url: urlStr,
      title,
      h1,
      description,
      canonical,
      types,
      internalLinks,
      externalLinks,
      externalCount: externalLinks.size,
      externalMissingRel,
    };
    page.issues = scorePage(page);
    results.push(page);
  }

  // Write JSON + CSV + simple HTML
  await fs.writeFile(path.join(ROOT, "seo-xray-report.json"), JSON.stringify(results, null, 2));
  const header = "url,title,h1,meta_desc_len,internal_links,external_links,types,issues\n";
  const csv = header + results.map(toCsvRow).join("\n");
  await fs.writeFile(path.join(ROOT, "seo-xray-report.csv"), csv);

  // HTML summary
  const rows = results.map(p => `
    <tr>
      <td><a href="${p.url}">${p.url.replace(SITE,"") || "/"}</a></td>
      <td>${p.title || ""}</td>
      <td>${p.h1 || ""}</td>
      <td>${p.description ? p.description.length : 0}</td>
      <td>${[...p.types].join(", ")}</td>
      <td>${[...p.internalLinks].length}</td>
      <td>${p.externalCount}</td>
      <td style="color:${p.issues.length ? '#b91c1c' : '#065f46'}">${p.issues.join(" • ") || "OK"}</td>
    </tr>
  `).join("");

  const html = `<!doctype html><meta charset="utf-8">
  <title>SEO X-Ray</title>
  <style>body{font:14px/1.5 system-ui;margin:24px} table{border-collapse:collapse;width:100%} th,td{border:1px solid #ddd;padding:8px} th{background:#f3f4f6;text-align:left}</style>
  <h1>SEO X-Ray</h1>
  <p>${results.length} pages scanned from <code>out/</code>.</p>
  <table><thead>
    <tr><th>URL</th><th>Title</th><th>H1</th><th>Meta</th><th>Schema</th><th>Internal</th><th>External</th><th>Issues</th></tr>
  </thead><tbody>${rows}</tbody></table>`;
  const xrayDir = path.join(OUT, "seo-xray");
  await fs.mkdir(xrayDir, { recursive: true });
  await fs.writeFile(path.join(xrayDir, "index.html"), html);

  const bad = results.filter(r => r.issues.length);
  console.log(blue(`\nScanned ${results.length} pages`));
  if (bad.length) {
    console.log(yellow(`Issues on ${bad.length} pages:`));
    bad.slice(0, 20).forEach(p => console.log(" -", p.url, gray("→"), red(p.issues.join("; "))));
  } else {
    console.log(green("All pages OK"));
  }
})();
