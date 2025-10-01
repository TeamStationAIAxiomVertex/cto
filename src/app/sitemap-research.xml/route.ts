import { MetadataRoute } from 'next';

const baseUrl = 'https://cto.teamstation.dev';

const researchPages = [
  '/playbook/bias-free-technical-hiring-axiom-cortex',
  '/playbook/build-vs-buy',
  '/playbook/latam-economics',
  '/playbook/nearshore-vs-offshore',
  '/playbook/tco-model',
  '/research/axiom-cortex-scientific-report',
  '/research/performance-evaluation-framework',
  '/research/technical-talent-evaluation-system',
  '/research/framework-for-measuring-capacity',
  '/research/heuristically-trained-ai',
  '/research/performance-metrics-in-ai-age',
];

export async function GET() {
  const now = new Date().toISOString();
  const sitemapEntries: MetadataRoute.Sitemap = researchPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));
  
  const sitemap = generateSitemap(sitemapEntries);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

function generateSitemap(pages: MetadataRoute.Sitemap): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;
}
