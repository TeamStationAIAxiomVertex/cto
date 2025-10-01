import { MetadataRoute } from 'next';

const baseUrl = 'https://cto.teamstation.dev';

export default function sitemap(): MetadataRoute.SitemapIndex {
  const now = new Date().toISOString();
  return [
    { url: `${baseUrl}/sitemap-static.xml`, lastModified: now },
    { url: `${baseUrl}/sitemap-playbook-research.xml`, lastModified: now },
    { url: `${baseUrl}/sitemap-hire.xml`, lastModified: now },
    { url: `${baseUrl}/sitemap-case-studies.xml`, lastModified: now },
  ];
}
