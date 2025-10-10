
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
const SHARD_SIZE = 5000;

// --- XML Generation Helpers ---
function generateSitemapXml(urls) {
  const urlset = urls.map(url => {
      let urlContent = `<loc>${url.loc}</loc>`;
      if (url.lastmod) urlContent += `<lastmod>${url.lastmod}</lastmod>`;
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

// --- Main Generation Logic ---
async function generate() {
  console.log("Starting enterprise sitemap generation...");

  if (fs.existsSync(SITEMAPS_DIR)) {
    fs.rmSync(SITEMAPS_DIR, { recursive: true });
  }
  fs.mkdirSync(SITEMAPS_DIR, { recursive: true });

  const rootSitemapIndexUrls = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');

  // --- Process Standard Sections ---
  const standardSections = [
    { name: 'core', collector: collectAllStaticUrls },
    { name: 'playbook', collector: collectPlaybookUrls },
    { name: 'research', collector: collectResearchUrls },
    { name: 'case-studies', collector: collectCaseStudyUrls },
    { name: 'comparisons', collector: collectComparisonUrls },
    { name: 'hire-roles', collector: collectHireByRoleUrls }, // Separated roles for clarity
  ];

  for (const section of standardSections) {
    console.log(`Processing standard section: ${section.name}...`);
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

  // --- Process Hire-By-Country Section (Specialized Logic) ---
  console.log("Processing specialized section: hire-by-country...");
  const techUrls = await collectHireByTechnologyUrls();
  const countryUrls = await collectHireByCountryUrls();
  const allHireUrls = [...techUrls, ...countryUrls];

  const hireByCountry = allHireUrls.reduce((acc, url) => {
    const match = url.loc.match(/\/hire\/by-country\/([^\/]+)/);
    const country = match ? match[1] : 'other'; // Group tech-only pages under 'other'
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(url);
    return acc;
  }, {});

  for (const country in hireByCountry) {
    console.log(`  - Processing country: ${country}`);
    const urls = hireByCountry[country];
    const countryDir = path.join(SITEMAPS_DIR, 'hire', country, year.toString(), month);
    fs.mkdirSync(countryDir, { recursive: true });

    const countrySitemapIndexUrls = [];
    for (let i = 0; i < urls.length; i += SHARD_SIZE) {
      const shardUrls = urls.slice(i, i + SHARD_SIZE);
      const shardIndex = (i / SHARD_SIZE) + 1;
      const xml = generateSitemapXml(shardUrls);
      const shardFilename = `${year}-${month}-01-${shardIndex}.xml.gz`;
      const shardPath = path.join(countryDir, shardFilename);
      
      await writeGzippedFile(shardPath, xml);
      console.log(`    - Wrote shard: ${shardPath}`);
      countrySitemapIndexUrls.push(`${BASE_URL}/sitemaps/hire/${country}/${year}/${month}/${shardFilename}`);
    }

    const countryIndexXml = generateSitemapIndexXml(countrySitemapIndexUrls);
    const countryIndexPath = path.join(SITEMAPS_DIR, 'hire', country, 'index.xml');
    fs.writeFileSync(countryIndexPath, countryIndexXml);
    console.log(`    - Wrote country index: ${countryIndexPath}`);
    rootSitemapIndexUrls.push(`${BASE_URL}/sitemaps/hire/${country}/index.xml`);
  }

  // --- Finalize Root Sitemap ---
  const deltaXml = generateSitemapXml([]);
  const deltaPath = path.join(SITEMAPS_DIR, 'delta.xml.gz');
  await writeGzippedFile(deltaXml, deltaPath);
  rootSitemapIndexUrls.push(`${BASE_URL}/sitemaps/delta.xml.gz`);
  console.log("Wrote placeholder delta sitemap.");
  
  const rootSitemapIndexXml = generateSitemapIndexXml(rootSitemapIndexUrls);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-index.xml'), rootSitemapIndexXml);

  console.log("\nEnterprise sitemap generation complete!");
  console.log(`Root index file created at: ${path.join(PUBLIC_DIR, 'sitemap-index.xml')}`);
}

generate();
