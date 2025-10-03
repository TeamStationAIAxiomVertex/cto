import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/', '/studio/'],
    },
    sitemap: 'https://cto.teamstation.dev/sitemap.xml',
  };
}
