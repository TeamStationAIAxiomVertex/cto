
// scripts/generate-sitemap.mjs
import fs from 'fs';
import path from 'path';
import {
  collectAllStaticUrls,
  collectPlaybookUrls,
  collectCaseStudyUrls,
  collectComparisonUrls,
  collectHireByCountryUrls,
  collectHireByRoleUrls,
  collectHireByTechnologyUrls,
  collectResearchUrls
} from '../src/lib/sitemap-data.js';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAPS_DIR = path.join(PUBLIC_DIR, 'sitemaps');
const BASE_URL = "https://cto.teamstation.dev";

function generateSitemapXml(urls) {
  const urlset = urls.map(url => {
    // Use lastmod if available, otherwise omit it.
    const lastmod = url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : '';
    return `  <url>
    <loc>${url.loc}</loc>${lastmod}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}

function generateSitemapIndexXml(sitemapUrls) {
  const sitemapEntries = sitemapUrls.map(url => `  <sitemap>
    <loc>${url}</loc>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
}

async function generate() {
  console.log("Starting XML sitemap domination...");

  // 1. Clean and create directories
  if (fs.existsSync(SITEMAPS_DIR)) {
    fs.rmSync(SITEMAPS_DIR, { recursive: true });
  }
  fs.mkdirSync(SITEMAPS_DIR, { recursive: true });

  const sections = [
    { name: 'static', collector: collectAllStaticUrls },
    { name: 'playbook', collector: collectPlaybookUrls },
    { name: 'case-studies', collector: collectCaseStudyUrls },
    { name: 'comparisons', collector: collectComparisonUrls },
    { name: 'research', collector: collectResearchUrls },
    {
      name: 'hire-pages',
      collector: async () => {
        const [country, role, tech] = await Promise.all([
          collectHireByCountryUrls(),
          collectHireByRoleUrls(),
          collectHireByTechnologyUrls(),
        ]);
        // Combine all 'hire' related URLs into a single, comprehensive list.
        return [...country, ...role, ...tech];
      },
    },
  ];

  const sitemapIndexUrls = [];

  for (const section of sections) {
    console.log(`- Generating sitemap for: ${section.name}`);
    const urls = await section.collector();
    if (urls.length === 0) {
        console.log(`  - No URLs found, skipping.`);
        continue;
    }

    const xml = generateSitemapXml(urls);
    const sitemapPath = path.join(SITEMAPS_DIR, `${section.name}.xml`);
    fs.writeFileSync(sitemapPath, xml);
    console.log(`  - Wrote ${urls.length} URLs to ${sitemapPath}`);
    sitemapIndexUrls.push(`${BASE_URL}/sitemaps/${section.name}.xml`);
  }

  // Generate the root sitemap index file
  const rootSitemapIndexXml = generateSitemapIndexXml(sitemapIndexUrls);
  const rootSitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(rootSitemapPath, rootSitemapIndexXml);
  console.log(`
Root sitemap index generated at: ${rootSitemapPath}`);

  console.log("
XML sitemap domination complete.");
}

generate();
