
import { MetadataRoute } from 'next';

const staticPages = [
  '',
  '/about',
  '/comparisons',
  '/faq',
  '/hire',
  '/hire/by-country',
  '/hire/by-role',
  '/hire/by-team-topologies',
  '/hire/by-technology',
  '/platform',
  '/playbook/hub',
  '/pricing',
  '/process',
  '/privacy-policy',
  '/research/hub',
  '/services/integrated-services',
  '/services/talent-onboarding',
  '/technical-interview-evaluation',
  '/terms-of-service',
  '/trust',
  '/case-studies',
];

const researchPapers = [
  { slug: 'axiom-cortex-scientific-report', lastmod: '2025-09-01' },
  { slug: 'heuristically-trained-ai', lastmod: '2025-09-01' },
  { slug: 'framework-for-measuring-capacity', lastmod: '2025-09-01' },
  { slug: 'performance-metrics-in-ai-age', lastmod: '2025-09-01' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cto.teamstation.dev';

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  const researchEntries = researchPapers.map((paper) => ({
    url: `${baseUrl}/research/${paper.slug}`,
    lastModified: paper.lastmod,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...researchEntries];
}
