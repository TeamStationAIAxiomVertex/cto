// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cto.teamstation.dev';

  // Static hubs
  const staticRoutes = [
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

  // Programmatic SEO stubs (expand as needed)
  const programmaticRoutes = [
    '/hire/by-country/mexico',
    '/hire/by-country/colombia',
    '/hire/by-country/brazil',
    '/hire/by-country/argentina',
    '/hire/by-country/chile',
    '/hire/by-country/peru',
    '/hire/by-country/costa-rica',
    '/hire/by-country/uruguay',
    '/hire/by-country/ecuador',
    '/hire/by-country/guatemala',
    '/hire/by-role/platform-infra-sre',
    '/hire/by-role/security-grc',
    '/hire/by-role/backend-services',
    '/hire/by-role/frontend-web',
    '/hire/by-role/data-engineering-analytics',
    '/hire/by-role/ml-ai-llm-ops',
    '/hire/by-role/product-design-growth',
    '/hire/by-role/qa-quality-engineering',
    '/hire/by-role/mobile-cross-platform',
    '/hire/by-role/it-enterprise-ops',
    '/hire/by-role/finops-biztech',
  ];

  const allRoutes = [...staticRoutes, ...programmaticRoutes];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
