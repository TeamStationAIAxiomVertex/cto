import fs from 'node:fs/promises';
import { URL } from 'node:url';
import * as cheerio from 'cheerio';

const ROOT = 'https://cto.teamstation.dev';
const MAIN_DOMAIN = 'teamstation.dev';

const STOPWORDS = new Set([
  'the','and','for','that','with','you','your','from','this','are','our','not','have','has','was','were','will','can','all','but','about','into','out','when','what','why','how','who','they','their','them','its','it','to','of','in','on','at','as','is','be','or','an','a','by','if','we','us','than','then','also','more','most','these','those','over','under','up','down','via','per','no','yes','do','does','did','done','so','such','may','might','should','could','would'
]);

async function fetchText(url, timeoutMs = 25000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'TeamStation-SEO-Audit/1.0' }
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, finalUrl: res.url, text };
  } catch (e) {
    return { ok: false, status: 0, finalUrl: url, text: '', error: String(e) };
  } finally {
    clearTimeout(timer);
  }
}

function parseSitemapUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1].trim());
  return urls;
}

function normalizeUrl(href, base) {
  try {
    const u = new URL(href, base);
    if (!/^https?:$/.test(u.protocol)) return null;
    u.hash = '';
    return u.toString();
  } catch {
    return null;
  }
}

function getTextWords(text) {
  const words = (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w) && /[a-z]/.test(w));
  return words;
}

function topKeywords(words, topN = 8) {
  const freq = new Map();
  for (const w of words) freq.set(w, (freq.get(w) || 0) + 1);
  const total = words.length || 1;
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([k, c]) => ({ keyword: k, count: c, densityPct: +(c * 100 / total).toFixed(2) }));
}

function extractSchema($) {
  const scripts = $('script[type="application/ld+json"]');
  const types = [];
  const errors = [];
  scripts.each((_, el) => {
    const raw = $(el).html() || '';
    try {
      const parsed = JSON.parse(raw);
      const arr = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of arr) {
        if (item && typeof item === 'object') {
          if (Array.isArray(item['@type'])) types.push(...item['@type']);
          else if (typeof item['@type'] === 'string') types.push(item['@type']);
          if (Array.isArray(item['@graph'])) {
            for (const g of item['@graph']) {
              if (Array.isArray(g?.['@type'])) types.push(...g['@type']);
              else if (typeof g?.['@type'] === 'string') types.push(g['@type']);
            }
          }
        }
      }
    } catch (e) {
      errors.push(String(e));
    }
  });
  return {
    schemaScripts: scripts.length,
    schemaTypes: [...new Set(types)],
    schemaParseErrors: errors.length
  };
}

async function main() {
  const started = new Date().toISOString();
  const sitemapIndexRes = await fetchText(`${ROOT}/sitemap.xml`);
  if (!sitemapIndexRes.ok) {
    throw new Error(`Failed to fetch sitemap index: ${sitemapIndexRes.status}`);
  }
  const sitemapFiles = parseSitemapUrls(sitemapIndexRes.text);

  const pageUrls = new Set();
  for (const sm of sitemapFiles) {
    const smRes = await fetchText(sm);
    if (!smRes.ok) continue;
    for (const url of parseSitemapUrls(smRes.text)) pageUrls.add(url);
  }

  const urls = [...pageUrls].filter((u) => u.startsWith(ROOT));
  const pageSet = new Set(urls.map((u) => normalizeUrl(u, ROOT)).filter(Boolean));

  const results = [];
  const discoveredInternal = new Set();
  const graphOut = new Map();

  const concurrency = 20;
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const idx = i++;
      const url = urls[idx];
      const res = await fetchText(url);
      const base = {
        url,
        status: res.status,
        ok: res.ok,
        finalUrl: res.finalUrl,
        title: '',
        metaDescriptionLength: 0,
        h1Count: 0,
        wordCount: 0,
        topKeywords: [],
        internalLinks: 0,
        uniqueInternalLinks: 0,
        linksToMainDomain: 0,
        linksToSubdomains: 0,
        schemaScripts: 0,
        schemaTypes: [],
        schemaParseErrors: 0,
        lowContent: false,
        weakInterlinking: false,
        error: res.error || ''
      };

      if (!res.ok || !res.text) {
        results.push(base);
        continue;
      }

      const $ = cheerio.load(res.text);
      base.title = ($('title').first().text() || '').trim();
      base.metaDescriptionLength = (($('meta[name="description"]').attr('content') || '').trim()).length;
      base.h1Count = $('h1').length;

      const schema = extractSchema($);
      base.schemaScripts = schema.schemaScripts;
      base.schemaTypes = schema.schemaTypes;
      base.schemaParseErrors = schema.schemaParseErrors;

      const textSource = ($('main').text() || $('body').text() || '').replace(/\s+/g, ' ').trim();
      const words = getTextWords(textSource);
      base.wordCount = words.length;
      base.topKeywords = topKeywords(words, 8);

      const allLinks = [];
      $('a[href]').each((_, el) => {
        const href = ($(el).attr('href') || '').trim();
        const n = normalizeUrl(href, url);
        if (n) allLinks.push(n);
      });

      const internal = allLinks.filter((l) => l.startsWith(ROOT));
      const uniqueInternal = [...new Set(internal)];
      base.internalLinks = internal.length;
      base.uniqueInternalLinks = uniqueInternal.length;
      for (const l of uniqueInternal) discoveredInternal.add(l);
      graphOut.set(normalizeUrl(url, ROOT), new Set(uniqueInternal));

      const mainDomainLinks = allLinks.filter((l) => {
        try {
          const host = new URL(l).hostname;
          return host === MAIN_DOMAIN || host.endsWith(`.${MAIN_DOMAIN}`);
        } catch { return false; }
      });
      base.linksToMainDomain = mainDomainLinks.length;

      const subdomainLinks = allLinks.filter((l) => {
        try {
          const host = new URL(l).hostname;
          return host.endsWith('.teamstation.dev') && host !== 'cto.teamstation.dev';
        } catch { return false; }
      });
      base.linksToSubdomains = subdomainLinks.length;

      base.lowContent = base.wordCount < 1500;
      base.weakInterlinking = base.uniqueInternalLinks < 5;

      results.push(base);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  const indegree = new Map();
  for (const u of pageSet) indegree.set(u, 0);
  for (const [from, tos] of graphOut.entries()) {
    if (!from) continue;
    for (const to of tos) {
      if (pageSet.has(to)) indegree.set(to, (indegree.get(to) || 0) + 1);
    }
  }

  const enriched = results.map((r) => {
    const n = normalizeUrl(r.url, ROOT);
    return {
      ...r,
      indegree: n ? (indegree.get(n) || 0) : 0,
      orphanInSitemap: n ? (indegree.get(n) || 0) === 0 : false
    };
  });

  const summary = {
    started,
    finished: new Date().toISOString(),
    totalSitemapFiles: sitemapFiles.length,
    totalPages: enriched.length,
    okPages: enriched.filter((r) => r.ok).length,
    errorPages: enriched.filter((r) => !r.ok).length,
    pages404: enriched.filter((r) => r.status === 404).length,
    pages5xx: enriched.filter((r) => r.status >= 500).length,
    lowContentPages: enriched.filter((r) => r.lowContent).length,
    weakInterlinkingPages: enriched.filter((r) => r.weakInterlinking).length,
    missingSchemaPages: enriched.filter((r) => r.schemaScripts === 0).length,
    missingMetaDescriptionPages: enriched.filter((r) => r.metaDescriptionLength < 50).length,
    pagesWithoutH1: enriched.filter((r) => r.h1Count === 0).length,
    orphanPagesInSitemap: enriched.filter((r) => r.orphanInSitemap).length
  };

  const report = { summary, pages: enriched };
  await fs.writeFile('reports/seo-live-audit.json', JSON.stringify(report, null, 2));

  const header = [
    'url','status','ok','wordCount','lowContent','uniqueInternalLinks','weakInterlinking',
    'indegree','orphanInSitemap','linksToMainDomain','linksToSubdomains','schemaScripts',
    'schemaTypes','metaDescriptionLength','h1Count','topKeywords'
  ];
  const lines = [header.join(',')];
  for (const p of enriched) {
    const row = [
      p.url,
      p.status,
      p.ok,
      p.wordCount,
      p.lowContent,
      p.uniqueInternalLinks,
      p.weakInterlinking,
      p.indegree,
      p.orphanInSitemap,
      p.linksToMainDomain,
      p.linksToSubdomains,
      p.schemaScripts,
      `"${p.schemaTypes.join('|')}"`,
      p.metaDescriptionLength,
      p.h1Count,
      `"${p.topKeywords.map((k) => `${k.keyword}:${k.densityPct}%`).join('|')}"`
    ];
    lines.push(row.join(','));
  }
  await fs.writeFile('reports/seo-live-audit.csv', lines.join('\n'));

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
