import fs from "node:fs";
import path from "node:path";
import fg from "fast-glob";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const REPORT_JSON = path.join(ROOT, "seo-report.json");
const REPORT_MD = path.join(ROOT, "seo-report.md");
const OUT_DIR = path.join(ROOT, "out");
const SHARED_AUDIT_FILES = [
  path.join(ROOT, "src", "app", "layout.tsx"),
  path.join(ROOT, "src", "components", "Footer.tsx"),
  path.join(ROOT, "src", "components", "layout", "Header.tsx"),
];
const COMPOSITE_COMPONENT_FILES: Record<string, string> = {
  ProgrammaticContent: path.join(ROOT, "src", "components", "ProgrammaticContent.tsx"),
  ComparisonWidget: path.join(ROOT, "src", "components", "ComparisonWidget.tsx"),
  ComparisonProse: path.join(ROOT, "src", "components", "ComparisonProse.tsx"),
  PlaybookContentRenderer: path.join(ROOT, "src", "components", "PlaybookContentRenderer.tsx"),
};

type Severity = "warn" | "fail";
type Intent = "informational" | "commercial" | "comparison" | "research" | "unknown";
type RouteKind = "core" | "hire" | "comparisons" | "research" | "playbook" | "legal" | "other";
type LinkCategory = "hub" | "lateral" | "programmatic";

type Finding = {
  severity: Severity;
  code: string;
  message: string;
};

type RouteAudit = {
  file: string;
  route: string;
  indexable: boolean;
  dynamicTemplate: boolean;
  routeKind: RouteKind;
  intent: Intent;
  metrics: {
    wordCount: number;
    uniqueTermRatio: number;
    internalLinksTotal: number;
    internalLinksByCategory: Record<LinkCategory, number>;
    keywordDensityPct: number | null;
    keywordHits: number;
    hasMetadata: boolean;
    hasCanonical: boolean;
    hasLastModifiedSignal: boolean;
    hasSchemaInjection: boolean;
    hasNoindexSignal: boolean;
    hasH1: boolean;
    primaryKeywordSource: "contract" | "metadata" | "none";
    primaryKeyword: string | null;
  };
  contract: {
    present: boolean;
    schemaType?: string;
    canonical?: string;
    lastModified?: string;
    internalLinksDeclared?: number;
    thinPageMinWords?: number;
    noindex?: boolean;
  };
  findings: Finding[];
};

type AggregateReport = {
  generatedAt: string;
  summary: {
    totalRoutes: number;
    indexableRoutes: number;
    dynamicTemplates: number;
    failures: number;
    warnings: number;
    thinPages: number;
    missingSchema: number;
    missingCanonical: number;
    missingMetadata: number;
    missingContract: number;
  };
  thresholds: Record<string, number>;
  routes: RouteAudit[];
};

const THRESHOLDS = {
  core: 700,
  hire: 900,
  comparisons: 1200,
  research: 1000,
  playbook: 1000,
  minInternalLinks: 6,
  minHubLinks: 2,
  minLateralLinks: 2,
  minProgrammaticLinks: 2,
  minUniqueTermRatio: 0.28,
  keywordDensityWarnMin: 0.3,
  keywordDensityFailMax: 2.5,
};

const HUB_PREFIXES = new Set([
  "/",
  "/hire",
  "/hire/by-role",
  "/hire/by-technology",
  "/hire/by-country",
  "/comparisons",
  "/playbook",
  "/playbook/hub",
  "/research",
  "/research/hub",
  "/case-studies",
  "/pricing",
  "/platform",
  "/faq",
  "/about",
  "/trust",
  "/sitemap",
]);

function read(file: string) {
  return fs.readFileSync(file, "utf8");
}

function readIfExists(file: string) {
  try {
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  } catch {
    return "";
  }
}

const SHARED_AUDIT_SOURCE = SHARED_AUDIT_FILES.map(readIfExists).join("\n");
const COMPOSITE_COMPONENT_SOURCE = Object.fromEntries(
  Object.entries(COMPOSITE_COMPONENT_FILES).map(([k, v]) => [k, readIfExists(v)]),
);

function routeFromFile(file: string) {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, "/");
  const withoutPage = rel.replace(/\/page\.(t|j)sx?$/, "");
  const cleaned = withoutPage
    .split("/")
    .filter((segment) => segment && !segment.startsWith("(") && !segment.startsWith("@"))
    .join("/");
  return cleaned ? `/${cleaned}` : "/";
}

function readExportHtmlForRoute(route: string) {
  if (!fs.existsSync(OUT_DIR)) return "";
  const candidates: string[] = [];
  if (route === "/") {
    candidates.push(path.join(OUT_DIR, "index.html"));
  } else {
    const clean = route.replace(/^\//, "");
    candidates.push(path.join(OUT_DIR, `${clean}.html`));
    candidates.push(path.join(OUT_DIR, clean, "index.html"));
  }
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      try {
        return fs.readFileSync(candidate, "utf8");
      } catch {
        return "";
      }
    }
  }
  return "";
}

function isDynamicTemplateRoute(route: string) {
  return route.includes("[");
}

function isIndexableRoute(route: string) {
  if (route.startsWith("/api")) return false;
  return true;
}

function classifyRouteKind(route: string): RouteKind {
  if (route === "/privacy-policy" || route === "/terms-of-service") return "legal";
  if (route.startsWith("/hire")) return "hire";
  if (route.startsWith("/comparisons")) return "comparisons";
  if (route.startsWith("/research")) return "research";
  if (route.startsWith("/playbook")) return "playbook";
  if (
    route === "/" ||
    route === "/pricing" ||
    route === "/about" ||
    route === "/platform" ||
    route === "/case-studies" ||
    route === "/trust" ||
    route === "/faq"
  ) {
    return "core";
  }
  return "other";
}

function inferIntent(route: string): Intent {
  if (route.startsWith("/comparisons")) return "comparison";
  if (route.startsWith("/research")) return "research";
  if (route.startsWith("/hire") || route === "/pricing") return "commercial";
  if (route.startsWith("/playbook") || route === "/engineering-doctrine" || route === "/platform") {
    return "informational";
  }
  return "unknown";
}

function thresholdForRoute(kind: RouteKind, route: string) {
  if (route === "/" || route === "/sitemap") return THRESHOLDS.core;
  switch (kind) {
    case "hire":
      return THRESHOLDS.hire;
    case "comparisons":
      return THRESHOLDS.comparisons;
    case "research":
      return THRESHOLDS.research;
    case "playbook":
      return THRESHOLDS.playbook;
    case "legal":
      return THRESHOLDS.core;
    default:
      return THRESHOLDS.core;
  }
}

function stripNoise(text: string) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/\/\/.*$/gm, " ")
    .replace(/import\s+[\s\S]*?from\s+["'][^"']+["'];?/g, " ")
    .replace(/className\s*=\s*["'`][\s\S]*?["'`]/g, " ")
    .replace(/https?:\/\/[^\s"')>]+/g, " ")
    .replace(/[{}()[\];=<>/\\_*#+|]/g, " ");
}

function extractTextForAudit(source: string): string {
  const chunks: string[] = [];

  // JSX text nodes
  for (const match of source.matchAll(/>([^<{][^<>]{0,500})</g)) {
    chunks.push(match[1]);
  }

  // String literals and template literals
  for (const match of source.matchAll(/(["'`])((?:\\.|(?!\1)[\s\S]){1,500}?)\1/g)) {
    const content = match[2];
    if (/^(use client|use server)$/.test(content.trim())) continue;
    if (/^[A-Za-z0-9_./:-]+$/.test(content.trim()) && content.includes("/")) continue;
    if (/^[a-z-]+$/.test(content.trim()) && content.length > 24) continue; // likely utility class token
    if (content.includes("className") || content.includes("href")) continue;
    chunks.push(content);
  }

  return stripNoise(chunks.join(" "));
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !/^\d+$/.test(w));
}

function countWords(text: string) {
  return tokenize(text).length;
}

function uniqueTermRatio(text: string) {
  const terms = tokenize(text);
  if (terms.length === 0) return 0;
  return new Set(terms).size / terms.length;
}

function extractInternalLinks(source: string) {
  const links = new Set<string>();
  const patterns = [
    /<Link[^>]*href=\"(\/[^\"]*)\"/g,
    /<Link[^>]*href=\{'(\/[^']*)'\}/g,
    /href=\"(\/[^\"]*)\"/g,
    /href=\{'(\/[^']*)'\}/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      const href = match[1].split("#")[0];
      if (!href.startsWith("/")) continue;
      links.add(href);
    }
  }

  return [...links];
}

function categorizeLink(href: string): LinkCategory {
  if (HUB_PREFIXES.has(href)) return "hub";
  const programmaticPatterns = [
    /^\/hire\/by-country\/[^/]+\/[^/]+$/,
    /^\/hire\/by-country\/[^/]+$/,
    /^\/hire\/by-role\/[^/]+$/,
    /^\/hire\/by-technology\/[^/]+$/,
    /^\/comparisons\/[^/]+$/,
    /^\/playbook\/[^/]+$/,
    /^\/research\/[^/]+$/,
    /^\/case-studies\/[^/]+$/,
  ];
  if (programmaticPatterns.some((re) => re.test(href))) return "programmatic";
  return "lateral";
}

function countLinksByCategory(hrefs: string[]) {
  const counts: Record<LinkCategory, number> = {
    hub: 0,
    lateral: 0,
    programmatic: 0,
  };
  for (const href of hrefs) counts[categorizeLink(href)] += 1;
  return counts;
}

function hasSchemaInjectionSignal(source: string) {
  return /application\/ld\+json|<JsonLd|<SchemaInjector|<ScholarlyArticleSchema|<Breadcrumbs/.test(source);
}

function hasNoindexSignal(source: string) {
  return /(noindex)|(robots\s*:\s*\{[\s\S]{0,200}index\s*:\s*false)/i.test(source);
}

function hasCanonicalSignal(source: string) {
  return /canonical\s*:\s*["'`]/.test(source)
    || /alternates\s*:\s*\{[\s\S]*?canonical\s*:/m.test(source)
    || /<link[^>]+rel=["']canonical["'][^>]*>/i.test(source);
}

function hasLastModifiedSignal(source: string) {
  return /lastModified|dateModified/.test(source);
}

function hasMetadataSignal(source: string) {
  return /export\s+const\s+metadata\s*:|export\s+async\s+function\s+generateMetadata/.test(source)
    || /<title>[\s\S]*?<\/title>/i.test(source);
}

function hasH1Signal(source: string) {
  return /<h1[\s>]/i.test(source);
}

function isRedirectOnlyPage(source: string) {
  return /(permanentRedirect|redirect)\s*\(/.test(source) && countWords(extractTextForAudit(source)) < 80;
}

function usesSharedContentRenderer(source: string) {
  return /ProgrammaticContent|ComparisonWidget|PlaybookContentRenderer|PSPCards|PSPCard/.test(source);
}

function enrichSourceForCompositeContent(source: string) {
  let enriched = source;
  for (const [componentName, componentSource] of Object.entries(COMPOSITE_COMPONENT_SOURCE)) {
    if (componentSource && new RegExp(`\\b${componentName}\\b`).test(source)) {
      enriched += `\n${componentSource}`;
    }
  }
  return enriched;
}

function extractTitleFromMetadata(source: string): string | null {
  const match = source.match(/title\s*:\s*["'`]([^"'`]+)["'`]/);
  return match?.[1]?.trim() ?? null;
}

function extractDescriptionFromMetadata(source: string): string | null {
  const match = source.match(/description\s*:\s*["'`]([\s\S]{1,240}?)["'`]/);
  return match?.[1]?.replace(/\s+/g, " ").trim() ?? null;
}

function inferPrimaryKeyword(route: string, source: string): { keyword: string | null; source: "contract" | "metadata" | "none" } {
  const contractMatch = source.match(/primaryKeyword\s*:\s*["'`]([^"'`]+)["'`]/);
  if (contractMatch?.[1]) return { keyword: contractMatch[1].trim(), source: "contract" };

  const title = extractTitleFromMetadata(source);
  if (title) {
    const cleaned = title
      .split(/[|:]/)[0]
      .replace(/TeamStation AI/gi, "")
      .replace(/CTO/gi, "cto")
      .replace(/\s+/g, " ")
      .trim();
    if (cleaned.length >= 6) return { keyword: cleaned.toLowerCase(), source: "metadata" };
  }

  if (route !== "/") {
    const routeKeyword = route
      .replace(/^\//, "")
      .replace(/\[[^\]]+\]/g, "")
      .split("/")
      .filter(Boolean)
      .slice(-2)
      .join(" ")
      .replace(/-/g, " ")
      .trim();
    if (routeKeyword) return { keyword: routeKeyword, source: "none" };
  }

  return { keyword: null, source: "none" };
}

function countPhraseOccurrences(haystack: string, phrase: string) {
  if (!phrase) return 0;
  const escaped = phrase.trim().toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!escaped) return 0;
  return (haystack.toLowerCase().match(new RegExp(escaped, "g")) ?? []).length;
}

function firstWords(text: string, count: number) {
  return tokenize(text).slice(0, count).join(" ");
}

function parseContractSummary(source: string) {
  const hasContract = /defineSeoContentContract\s*\(/.test(source) || /seoContract\s*=/.test(source);
  if (!hasContract) return { present: false } as RouteAudit["contract"];

  const getString = (key: string) =>
    source.match(new RegExp(`${key}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`, "m"))?.[1];
  const schemaType = source.match(/schemaType\s*:\s*["'`]([^"'`]+)["'`]/)?.[1];
  const canonical = source.match(/canonical\s*:\s*["'`]([^"'`]+)["'`]/)?.[1];
  const lastModified = source.match(/lastModified\s*:\s*["'`]([^"'`]+)["'`]/)?.[1];
  const thinPageMinWordsRaw = source.match(/thinPageMinWords\s*:\s*(\d+)/)?.[1];
  const internalLinksDeclared = source.match(/internalLinks\s*:\s*\[([\s\S]*?)\]/m)?.[1];
  const noindex = /noindex\s*:\s*true/.test(source);

  return {
    present: true,
    schemaType,
    canonical: canonical ?? getString("canonical"),
    lastModified: lastModified ?? getString("lastModified"),
    internalLinksDeclared: internalLinksDeclared ? (internalLinksDeclared.match(/href\s*:/g) ?? []).length : 0,
    thinPageMinWords: thinPageMinWordsRaw ? Number(thinPageMinWordsRaw) : undefined,
    noindex,
  } as RouteAudit["contract"];
}

function detectExpectedSchema(routeKind: RouteKind, route: string): string {
  if (route.startsWith("/research/") && route !== "/research" && route !== "/research/hub") return "ScholarlyArticle|Article";
  if (routeKind === "research" || route.endsWith("/hub") || route === "/comparisons" || route === "/playbook" || route === "/playbook/hub") return "WebPage";
  if (routeKind === "hire") return "Service";
  if (routeKind === "comparisons") return "Service|Product";
  return "WebPage|Article|Organization";
}

function buildFindings(input: {
  route: string;
  source: string;
  text: string;
  wordCount: number;
  uniqueRatio: number;
  internalLinks: string[];
  linkCounts: Record<LinkCategory, number>;
  routeKind: RouteKind;
  dynamicTemplate: boolean;
  contract: RouteAudit["contract"];
  primaryKeyword: string | null;
  primaryKeywordSource: RouteAudit["metrics"]["primaryKeywordSource"];
}): Finding[] {
  const {
    route,
    source,
    text,
    wordCount,
    uniqueRatio,
    internalLinks,
    linkCounts,
    routeKind,
    dynamicTemplate,
    contract,
    primaryKeyword,
    primaryKeywordSource,
  } = input;
  const findings: Finding[] = [];

  const hasMetadata = hasMetadataSignal(source);
  const hasCanonical = hasCanonicalSignal(source) || Boolean(contract.canonical);
  const hasLastModified = hasLastModifiedSignal(source) || Boolean(contract.lastModified);
  const hasSchema = hasSchemaInjectionSignal(`${source}\n${SHARED_AUDIT_SOURCE}`);
  const noindex = hasNoindexSignal(source) || Boolean(contract.noindex);
  const redirectOnly = isRedirectOnlyPage(source);
  const sharedRendererPage = usesSharedContentRenderer(source);
  const minWords = contract.thinPageMinWords ?? thresholdForRoute(routeKind, route);

  if (!hasMetadata) findings.push({ severity: "fail", code: "metadata-missing", message: "Missing metadata or generateMetadata export." });
  if (!hasCanonical && route !== "/sitemap.xml") findings.push({ severity: "warn", code: "canonical-missing", message: "Missing canonical signal in page metadata/config." });
  if (!hasLastModified && (routeKind === "research" || routeKind === "playbook" || routeKind === "comparisons")) {
    findings.push({ severity: "warn", code: "lastmod-missing", message: "Missing lastModified/dateModified signal for a content page." });
  }
  if (!hasSchema && !redirectOnly) {
    findings.push({ severity: "fail", code: "schema-missing", message: `Missing JSON-LD schema injection. Expected ${detectExpectedSchema(routeKind, route)}.` });
  }

  if (!contract.present) {
    findings.push({ severity: "warn", code: "contract-missing", message: "Missing seo content contract declaration (defineSeoContentContract)." });
  } else {
    if (!contract.schemaType) findings.push({ severity: "fail", code: "contract-schemaType-missing", message: "SEO contract present but schemaType is missing." });
    if (!contract.canonical) findings.push({ severity: "fail", code: "contract-canonical-missing", message: "SEO contract present but canonical is missing." });
    if (!contract.lastModified) findings.push({ severity: "fail", code: "contract-lastmod-missing", message: "SEO contract present but lastModified is missing." });
    if ((contract.internalLinksDeclared ?? 0) < THRESHOLDS.minInternalLinks) {
      findings.push({ severity: "fail", code: "contract-internal-links-low", message: `SEO contract declares ${contract.internalLinksDeclared ?? 0} internal links. Minimum is ${THRESHOLDS.minInternalLinks}.` });
    }
  }

  if (!dynamicTemplate && !redirectOnly) {
    if (wordCount < minWords && !noindex && !sharedRendererPage) {
      findings.push({ severity: "fail", code: "thin-content", message: `Word count ${wordCount} is below minimum ${minWords} for ${routeKind} pages.` });
    }
    if (uniqueRatio < THRESHOLDS.minUniqueTermRatio) {
      findings.push({ severity: "warn", code: "low-unique-ratio", message: `Unique term ratio ${uniqueRatio.toFixed(2)} is low; page may be repetitive or template-heavy.` });
    }
  }

  if (route !== "/sitemap" && route !== "/sitemap.xml") {
    if (internalLinks.length < THRESHOLDS.minInternalLinks && !noindex && !redirectOnly && !sharedRendererPage) {
      findings.push({ severity: "fail", code: "internal-links-low", message: `Only ${internalLinks.length} internal links detected. Minimum is ${THRESHOLDS.minInternalLinks}.` });
    }
    if (linkCounts.hub < THRESHOLDS.minHubLinks) {
      findings.push({ severity: "warn", code: "hub-links-low", message: `Only ${linkCounts.hub} hub links detected. Target is ${THRESHOLDS.minHubLinks}+.` });
    }
    if (linkCounts.lateral < THRESHOLDS.minLateralLinks) {
      findings.push({ severity: "warn", code: "lateral-links-low", message: `Only ${linkCounts.lateral} lateral links detected. Target is ${THRESHOLDS.minLateralLinks}+.` });
    }
    if (linkCounts.programmatic < THRESHOLDS.minProgrammaticLinks && routeKind !== "legal") {
      findings.push({ severity: "warn", code: "programmatic-links-low", message: `Only ${linkCounts.programmatic} programmatic links detected. Target is ${THRESHOLDS.minProgrammaticLinks}+ where applicable.` });
    }
  }

  const weakAnchorHits = (source.match(/>\s*(click here|learn more|read more|here)\s*</gi) ?? []).length;
  if (weakAnchorHits > 0) {
    findings.push({ severity: "warn", code: "weak-anchor-text", message: `Detected ${weakAnchorHits} weak anchor phrases (click here / learn more / read more / here).` });
  }

  const hasH1 = hasH1Signal(source);
  if (!hasH1 && !redirectOnly) findings.push({ severity: "warn", code: "h1-missing", message: "No <h1> detected in page component." });

  const normalizedText = tokenize(text).join(" ");
  if (primaryKeyword) {
    const hits = countPhraseOccurrences(normalizedText, primaryKeyword.toLowerCase());
    const density = wordCount > 0 ? (hits * Math.max(1, primaryKeyword.split(/\s+/).length) * 100) / wordCount : 0;
    if (!dynamicTemplate && !noindex && !redirectOnly) {
      if (density < THRESHOLDS.keywordDensityWarnMin) {
        findings.push({ severity: "warn", code: "keyword-density-low", message: `Primary keyword density ${density.toFixed(2)}% is below ${THRESHOLDS.keywordDensityWarnMin}%.` });
      }
      if (density > THRESHOLDS.keywordDensityFailMax && routeKind !== "legal") {
        findings.push({ severity: "fail", code: "keyword-density-high", message: `Primary keyword density ${density.toFixed(2)}% exceeds ${THRESHOLDS.keywordDensityFailMax}% stuffing threshold.` });
      }
    }

    const first120 = firstWords(text, 120);
    if (primaryKeywordSource === "contract") {
      if (!countPhraseOccurrences(first120, primaryKeyword.toLowerCase())) {
        findings.push({ severity: "fail", code: "keyword-first-120-missing", message: "Primary keyword missing from first 120 words." });
      }
      const h1Block = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, " ") ?? "";
      if (!countPhraseOccurrences(h1Block.toLowerCase(), primaryKeyword.toLowerCase())) {
        findings.push({ severity: "fail", code: "keyword-h1-missing", message: "Primary keyword missing from H1." });
      }
      const headingBlocks = Array.from(source.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)).map((m) => m[1].replace(/<[^>]+>/g, " "));
      const subheadingHit = headingBlocks.some((h) => countPhraseOccurrences(h.toLowerCase(), primaryKeyword.toLowerCase()) > 0);
      if (!subheadingHit) {
        findings.push({ severity: "warn", code: "keyword-subheading-missing", message: "Primary keyword not found in H2/H3 headings." });
      }
    }
  } else {
    findings.push({ severity: "warn", code: "primary-keyword-missing", message: "Could not infer primary keyword from contract or metadata title." });
  }

  if (!dynamicTemplate && /\/hire\/by-country\/[^/]+\/[^/]+$/.test(route) && wordCount < minWords && !noindex && !redirectOnly && !sharedRendererPage) {
    findings.push({ severity: "fail", code: "programmatic-thin-noindex-missing", message: "Thin programmatic country+technology page should declare noindex/canonical strategy or be expanded." });
  }

  return findings;
}

function auditRoute(file: string): RouteAudit {
  const source = read(file);
  const route = routeFromFile(file);
  const exportedHtml = readExportHtmlForRoute(route);
  const sourceForContent = enrichSourceForCompositeContent(source);
  const sourceForSignals = `${sourceForContent}\n${SHARED_AUDIT_SOURCE}\n${exportedHtml}`;
  const dynamicTemplate = isDynamicTemplateRoute(route);
  const indexable = isIndexableRoute(route);
  const routeKind = classifyRouteKind(route);
  const intent = inferIntent(route);
  const text = extractTextForAudit(`${sourceForContent}\n${exportedHtml}`);
  const wordCount = countWords(text);
  const uniqueRatio = uniqueTermRatio(text);
  const internalLinks = extractInternalLinks(sourceForSignals);
  const linkCounts = countLinksByCategory(internalLinks);
  const contract = parseContractSummary(source);
  const inferredKeyword = inferPrimaryKeyword(route, source);
  const hasMetadata = hasMetadataSignal(`${source}\n${exportedHtml}`);
  const hasCanonical = hasCanonicalSignal(`${source}\n${exportedHtml}`) || Boolean(contract.canonical);
  const hasLastModified = hasLastModifiedSignal(`${sourceForContent}\n${exportedHtml}`) || Boolean(contract.lastModified);
  const hasSchema = hasSchemaInjectionSignal(sourceForSignals);
  const hasNoindex = hasNoindexSignal(`${source}\n${exportedHtml}`) || Boolean(contract.noindex);
  const hasH1 = hasH1Signal(`${source}\n${exportedHtml}`);

  const normalizedText = tokenize(text).join(" ");
  const keywordHits = inferredKeyword.keyword
    ? countPhraseOccurrences(normalizedText, inferredKeyword.keyword.toLowerCase())
    : 0;
  const keywordDensityPct = inferredKeyword.keyword && wordCount > 0
    ? (keywordHits * Math.max(1, inferredKeyword.keyword.split(/\s+/).length) * 100) / wordCount
    : null;

  const findings = buildFindings({
    route,
    source,
    text,
    wordCount,
    uniqueRatio,
    internalLinks,
    linkCounts,
    routeKind,
    dynamicTemplate,
    contract,
    primaryKeyword: inferredKeyword.keyword,
    primaryKeywordSource: inferredKeyword.source,
  });

  return {
    file: path.relative(ROOT, file).replace(/\\/g, "/"),
    route,
    indexable,
    dynamicTemplate,
    routeKind,
    intent,
    metrics: {
      wordCount,
      uniqueTermRatio: Number(uniqueRatio.toFixed(3)),
      internalLinksTotal: internalLinks.length,
      internalLinksByCategory: linkCounts,
      keywordDensityPct: keywordDensityPct === null ? null : Number(keywordDensityPct.toFixed(3)),
      keywordHits,
      hasMetadata,
      hasCanonical,
      hasLastModifiedSignal: hasLastModified,
      hasSchemaInjection: hasSchema,
      hasNoindexSignal: hasNoindex,
      hasH1,
      primaryKeywordSource: inferredKeyword.source,
      primaryKeyword: inferredKeyword.keyword,
    },
    contract,
    findings,
  };
}

function generateMarkdown(report: AggregateReport) {
  const lines: string[] = [];
  lines.push("# SEO Audit Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total routes: ${report.summary.totalRoutes}`);
  lines.push(`- Indexable routes: ${report.summary.indexableRoutes}`);
  lines.push(`- Dynamic templates: ${report.summary.dynamicTemplates}`);
  lines.push(`- Failures: ${report.summary.failures}`);
  lines.push(`- Warnings: ${report.summary.warnings}`);
  lines.push(`- Thin pages (fail): ${report.summary.thinPages}`);
  lines.push(`- Missing schema (fail): ${report.summary.missingSchema}`);
  lines.push(`- Missing canonical (warn): ${report.summary.missingCanonical}`);
  lines.push(`- Missing metadata (fail): ${report.summary.missingMetadata}`);
  lines.push(`- Missing SEO contract (warn): ${report.summary.missingContract}`);
  lines.push("");
  lines.push("## Thresholds");
  lines.push("");
  for (const [key, value] of Object.entries(report.thresholds)) {
    lines.push(`- ${key}: ${value}`);
  }
  lines.push("");

  const failing = report.routes
    .filter((r) => r.findings.some((f) => f.severity === "fail"))
    .sort((a, b) => {
      const af = a.findings.filter((f) => f.severity === "fail").length;
      const bf = b.findings.filter((f) => f.severity === "fail").length;
      return bf - af || a.route.localeCompare(b.route);
    });

  lines.push("## Failing Routes");
  lines.push("");
  if (failing.length === 0) {
    lines.push("No failing routes.");
    lines.push("");
  } else {
    for (const route of failing.slice(0, 100)) {
      lines.push(`### ${route.route}`);
      lines.push("");
      lines.push(`- File: \`${route.file}\``);
      lines.push(`- Words: ${route.metrics.wordCount}`);
      lines.push(`- Internal links: ${route.metrics.internalLinksTotal} (hub ${route.metrics.internalLinksByCategory.hub}, lateral ${route.metrics.internalLinksByCategory.lateral}, programmatic ${route.metrics.internalLinksByCategory.programmatic})`);
      lines.push(`- Schema: ${route.metrics.hasSchemaInjection ? "yes" : "no"}`);
      lines.push(`- Metadata: ${route.metrics.hasMetadata ? "yes" : "no"}`);
      lines.push(`- Canonical: ${route.metrics.hasCanonical ? "yes" : "no"}`);
      lines.push(`- Contract: ${route.contract.present ? "yes" : "no"}`);
      const fails = route.findings.filter((f) => f.severity === "fail");
      const warns = route.findings.filter((f) => f.severity === "warn");
      lines.push("- Fails:");
      for (const f of fails) lines.push(`  - [${f.code}] ${f.message}`);
      if (warns.length) {
        lines.push("- Warnings:");
        for (const w of warns.slice(0, 6)) lines.push(`  - [${w.code}] ${w.message}`);
      }
      lines.push("");
    }
    if (failing.length > 100) {
      lines.push(`... ${failing.length - 100} more failing routes omitted. See \`seo-report.json\`.`);
      lines.push("");
    }
  }

  const topWarnings = report.routes
    .filter((r) => r.findings.some((f) => f.severity === "warn") && !r.findings.some((f) => f.severity === "fail"))
    .slice(0, 50);
  lines.push("## Warning-only Routes (sample)");
  lines.push("");
  if (topWarnings.length === 0) {
    lines.push("None.");
  } else {
    for (const route of topWarnings) {
      const warns = route.findings.filter((f) => f.severity === "warn");
      lines.push(`- \`${route.route}\` (${warns.map((w) => w.code).join(", ")})`);
    }
  }
  lines.push("");

  return lines.join("\n");
}

async function main() {
  const files = await fg(["src/app/**/page.tsx", "src/app/**/page.jsx", "src/app/**/page.ts", "src/app/**/page.js"], {
    cwd: ROOT,
    absolute: true,
    dot: false,
  });

  const routes = files.map(auditRoute).sort((a, b) => a.route.localeCompare(b.route));

  const failures = routes.reduce((sum, r) => sum + r.findings.filter((f) => f.severity === "fail").length, 0);
  const warnings = routes.reduce((sum, r) => sum + r.findings.filter((f) => f.severity === "warn").length, 0);
  const report: AggregateReport = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalRoutes: routes.length,
      indexableRoutes: routes.filter((r) => r.indexable).length,
      dynamicTemplates: routes.filter((r) => r.dynamicTemplate).length,
      failures,
      warnings,
      thinPages: routes.filter((r) => r.findings.some((f) => f.code === "thin-content" && f.severity === "fail")).length,
      missingSchema: routes.filter((r) => r.findings.some((f) => f.code === "schema-missing")).length,
      missingCanonical: routes.filter((r) => r.findings.some((f) => f.code === "canonical-missing")).length,
      missingMetadata: routes.filter((r) => r.findings.some((f) => f.code === "metadata-missing")).length,
      missingContract: routes.filter((r) => r.findings.some((f) => f.code === "contract-missing")).length,
    },
    thresholds: THRESHOLDS,
    routes,
  };

  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(REPORT_MD, generateMarkdown(report));

  const summaryLine = `SEO audit complete: ${report.summary.totalRoutes} routes, ${failures} failures, ${warnings} warnings.`;
  if (failures > 0) {
    console.error(summaryLine);
    console.error(`See ${path.basename(REPORT_MD)} and ${path.basename(REPORT_JSON)} for details.`);
    process.exit(1);
  }

  console.log(summaryLine);
  console.log(`Reports written: ${path.basename(REPORT_MD)}, ${path.basename(REPORT_JSON)}`);
}

main().catch((error) => {
  console.error("SEO audit failed unexpectedly.");
  console.error(error);
  process.exit(1);
});
