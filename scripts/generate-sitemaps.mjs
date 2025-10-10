
// scripts/generate-sitemaps.mjs
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { promisify } from 'util';
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

const gzip = promisify(zlib.gzip);

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAPS_DIR = path.join(PUBLIC_DIR, 'sitemaps');
const BASE_URL = "https://cto.teamstation.dev";
const SHARD_SIZE = 5000; // Max URLs per shard file, keeping it well below the 10k limit.

function generateSitemapXml(urls) {
  const urlset = urls.map(url => {
      let urlContent = `<loc>${url.loc}</loc>`;
      if (url.lastmod) urlContent += `<lastmod>${url.lastmod}</lastmod>`;
      // changefreq and priority are omitted as per the new strategy.
      return `  <url>\n    ${urlContent}\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;
}

function generateSitemapIndexXml(urls) {
  const sitemapEntries = urls.map(url => `  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</sitemapindex>`;
}

async function writeGzippedFile(filePath, content) {
    const gzippedContent = await gzip(content);
    fs.writeFileSync(filePath, gzippedContent);
}

async function generate() {
  console.log("Starting enterprise sitemap generation...");

  // 1. Clean and create directories
  if (fs.existsSync(SITEMAPS_DIR)) {
    fs.rmSync(SITEMAPS_DIR, { recursive: true });
  }
  fs.mkdirSync(SITEMAPS_DIR, { recursive: true });

  const sections = [
    { name: 'core', collector: collectAllStaticUrls },
    { name: 'playbook', collector: collectPlaybookUrls },
    { name: 'research', collector: collectResearchUrls },
    { name: 'case-studies', collector: collectCaseStudyUrls },
    { name: 'comparisons', collector: collectComparisonUrls },
    {
      name: 'hire',
      collector: async () => {
        const [country, role, tech] = await Promise.all([
          collectHireByCountryUrls(),
          collectHireByRoleUrls(),
          collectHireByTechnologyUrls(),
        ]);
        return [...country, ...role, ...tech];
      },
    },
  ];

  const rootSitemapIndexUrls = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');

  for (const section of sections) {
    console.log(`Processing section: ${section.name}...`);
    const urls = await section.collector();
    if (urls.length === 0) continue;

    const sectionDir = path.join(SITEMAPS_DIR, section.name, year.toString(), month);
    fs.mkdirSync(sectionDir, { recursive: true });

    const sectionSitemapIndexUrls = [];
    for (let i = 0; i < urls.length; i += SHARD_SIZE) {
        const shardUrls = urls.slice(i, i + SHARD_SIZE);
        const shardIndex = (i / SHARD_SIZE) + 1;
        const xml = generateSitemapXml(shardUrls);
        const shardFilename = `${year}-${month}-01-${shardIndex}.xml.gz`;
        const shardPath = path.join(sectionDir, shardFilename);
        
        await writeGzippedFile(shardPath, xml);
        console.log(`  - Wrote shard: ${shardPath}`);
        sectionSitemapIndexUrls.push(`${BASE_URL}/sitemaps/${section.name}/${year}/${month}/${shardFilename}`);
    }

    const sectionIndexXml = generateSitemapIndexXml(sectionSitemapIndexUrls);
    const sectionIndexPath = path.join(SITEMAPS_DIR, section.name, 'index.xml');
    fs.writeFileSync(sectionIndexPath, sectionIndexXml);
    console.log(`  - Wrote section index: ${sectionIndexPath}`);
    rootSitemapIndexUrls.push(`${BASE_URL}/sitemaps/${section.name}/index.xml`);
  }
  
  // Placeholder for Delta Sitemap
  const deltaXml = generateSitemapXml([]);
  const deltaPath = path.join(SITEMAPS_DIR, 'delta.xml.gz');
  await writeGzippedFile(deltaXml, deltaPath);
  rootSitemapIndexUrls.push(`${BASE_URL}/sitemaps/delta.xml.gz`);
  console.log("Wrote placeholder delta sitemap.");
  
  // Write the main sitemap index to the /public root, not a route handler
  const rootSitemapIndexXml = generateSitemapIndexXml(rootSitemapIndexUrls);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-index.xml'), rootSitemapIndexXml);

  console.log("Enterprise sitemap generation complete!");
  console.log(`Root index file created at: ${path.join(PUBLIC_DIR, 'sitemap-index.xml')}`);
}

generate();
