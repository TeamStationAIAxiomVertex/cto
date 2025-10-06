// src/app/sitemap.xml/route.ts
import { generateSitemapXml } from '@/lib/sitemap-utils';

const SITE_URL = 'https://cto.teamstation.dev';

/**
 * Handles GET requests to /sitemap.xml
 * This serves as the sitemap index file.
 */
export async function GET() {
  const sitemaps = [
    `${SITE_URL}/sitemaps/static.xml`,
    `${SITE_URL}/sitemaps/playbook.xml`,
    `${SITE_URL}/sitemaps/case-studies.xml`,
    `${SITE_URL}/sitemaps/comparisons.xml`,
    `${SITE_URL}/sitemaps/hire-pages.xml`, 
  ];

  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(url => `<sitemap><loc>${url}</loc></sitemap>`).join('')}
</sitemapindex>`;

  return new Response(sitemapIndexXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
