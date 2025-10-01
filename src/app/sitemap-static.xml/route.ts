
import { MetadataRoute } from 'next';

const baseUrl = 'https://cto.teamstation.dev';

const staticPages = [
  '', '/about', '/comparisons', '/faq', '/platform',
  '/pricing', '/process', '/trust',
  '/privacy-policy', '/terms-of-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
