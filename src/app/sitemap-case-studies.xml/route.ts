import { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/case-studies';

const baseUrl = 'https://cto.teamstation.dev';

export async function GET() {
  const now = new Date().toISOString();
  const caseStudies = await getAllCaseStudies();

  const sitemapEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified ? new Date(study.lastModified).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.7,
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
