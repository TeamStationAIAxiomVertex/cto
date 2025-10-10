
// scripts/generate-sitemaps.mjs
import fs from 'fs';
import path from 'path';
import { generateSitemapXml } from '../src/lib/sitemap-utils.js'; // Note the .js extension for ES modules
import {
  collectAllStaticUrls,
  collectPlaybookUrls,
  collectCaseStudyUrls,
  collectComparisonUrls,
  collectHireByCountryUrls,
  collectHireByRoleUrls,
  collectHireByTechnologyUrls,
} from '../src/lib/sitemap-data.js'; // Note the .js extension

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAPS_DIR = path.join(PUBLIC_DIR, 'sitemaps');
const BASE_URL = "https://cto.teamstation.dev";

async function generate() {
  // Ensure directories exist
  if (!fs.existsSync(SITEMAPS_DIR)) {
    fs.mkdirSync(SITEMAPS_DIR, { recursive: true });
  }

  // Sitemap file configuration
  const sitemapFileConfig = [
    { filename: 'sitemaps/static.xml', collector: collectAllStaticUrls },
    { filename: 'sitemaps/playbook.xml', collector: collectPlaybookUrls },
    { filename: 'sitemaps/case-studies.xml', collector: collectCaseStudyUrls },
    { filename: 'sitemaps/comparisons.xml', collector: collectComparisonUrls },
    {
      filename: 'sitemaps/hire-pages.xml',
      collector: async () => {
        const [countryUrls, roleUrls, techUrls] = await Promise.all([
          collectHireByCountryUrls(),
          collectHireByRoleUrls(),
          collectHireByTechnologyUrls(),
        ]);
        return [...countryUrls, ...roleUrls, ...techUrls];
      },
    },
  ];

  // Generate each sitemap file
  for (const config of sitemapFileConfig) {
    const urls = await config.collector();
    const xmlContent = generateSitemapXml(urls);
    fs.writeFileSync(path.join(PUBLIC_DIR, config.filename), xmlContent);
    console.log(`Generated ${config.filename}`);
  }

  // Generate the main sitemap index file
  const sitemapIndexContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapFileConfig
        .map(
          (config) =>
            `<sitemap><loc>${BASE_URL}/${config.filename}</loc></sitemap>`
        )
        .join('\n      ')}
    </sitemapindex>
  `;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapIndexContent.trim());
  console.log('Generated sitemap.xml (index)');
}

generate();
