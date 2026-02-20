// scripts/generate-sitemap.mjs
import fs from 'fs';
import path from 'path';
// Note: This script runs in Node (ESM). Avoid importing TypeScript files.
// We inline the minimal helpers needed instead of importing from src/lib/*.ts

const BASE_URL = "https://cto.teamstation.dev";
const today = new Date().toISOString();

// Recursively collect all page.tsx files under a directory, with optional exclusions
function getPages(dir, exclude = []) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getPages(filePath, exclude));
    } else if (path.basename(filePath) === 'page.tsx') {
      const isExcluded = exclude.some((pattern) => filePath.includes(pattern));
      if (!isExcluded) results.push(filePath);
    }
  });
  return results;
}

// Transform file paths to absolute URL strings
function formatPaths(filePaths) {
  return filePaths.map((p) => {
    let route = p.replace(/^src\/app/, '').replace(/\/page\.tsx$/, '');
    if (route === '') route = '/';
    if (route.length > 1 && route.endsWith('/')) route = route.slice(0, -1);
    return `${BASE_URL}${route}`;
  });
}

// SitemapUrl mappers (mirror logic from src/lib/sitemap-data.ts)
async function collectAllStaticUrls() {
  const exclude = ['/api/', '/sitemaps/', 'sitemap.xml', '[slug]', '[vendor]'];
  const pageFiles = getPages('src/app', exclude);
  const urls = formatPaths(pageFiles);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'weekly', priority: 0.8 }));
}

async function collectPlaybookUrls() {
  const pageFiles = getPages('src/app/playbook', ['[slug]']);
  const urls = formatPaths(pageFiles);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.7 }));
}

async function collectCaseStudyUrls() {
  const pageFiles = getPages('src/app/case-studies', ['[slug]']);
  const urls = formatPaths(pageFiles);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.7 }));
}

async function collectComparisonUrls() {
  const pageFiles = getPages('src/app/comparisons', ['[vendor]']);
  const urls = formatPaths(pageFiles);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.7 }));
}

async function collectHireByCountryUrls() {
  const pageFiles = getPages('src/app/hire/by-country', ['[slug]']);
  const urls = formatPaths(pageFiles);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.7 }));
}

async function collectHireByRoleUrls() {
  // These must match the keys in the roleData object from src/app/hire/by-role/[slug]/page.tsx
  const roleSlugs = [
    'platform-infra-sre',
    'security-grc',
    'backend-services',
    'frontend-web',
    'mobile-cross-platform',
    'data-engineering-analytics',
    'ml-ai-llm-ops',
    'product-design-growth',
    'qa-quality-engineering',
    'it-enterprise-ops',
    'finops-biztech',
  ];
  
  const urls = roleSlugs.map(slug => `${BASE_URL}/hire/by-role/${slug}`);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.7 }));
}

async function collectHireByTechnologyUrls() {
  // Part 1: Dynamically find all main technology slugs by reading the data directory
  const techDir = path.join(process.cwd(), 'src/data/technologies');
  const techFiles = fs.readdirSync(techDir);
  const dynamicTechSlugs = techFiles
    .filter(file => file.endsWith('.ts') && file !== 'index.ts')
    .map(file => file.replace(/\.ts$/, ''));
  const dynamicTechUrls = dynamicTechSlugs.map(slug => `${BASE_URL}/hire/by-technology/${slug}`);

  // Part 2: Keep the original logic for finding static nested country-tech pages
  const allHirePages = getPages('src/app/hire');
  const staticHirePages = allHirePages.filter((p) => !p.includes('['));
  const nestedCountryTechPages = staticHirePages.filter((p) => {
    const isNestedTechPage = p.includes('/by-country/');
    // The heuristic from the original script to find pages like /hire/by-country/argentina/react
    if (isNestedTechPage) return p.split('/').length > 6;
    return false;
  });
  const nestedCountryTechUrls = formatPaths(nestedCountryTechPages);

  // Combine both lists
  const allTechUrls = [...dynamicTechUrls, ...nestedCountryTechUrls];

  // Return in the correct format
  return allTechUrls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.6 }));
}

async function collectResearchUrls() {
  const pageFiles = getPages('src/app/research', ['[slug]']);
  const urls = formatPaths(pageFiles);
  return urls.map((loc) => ({ loc, lastmod: today, changefreq: 'monthly', priority: 0.7 }));
}

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAPS_DIR = path.join(PUBLIC_DIR, 'sitemaps');

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
  console.log(`\nRoot sitemap index generated at: ${rootSitemapPath}`);
  console.log("\nXML sitemap domination complete.");
}

generate();