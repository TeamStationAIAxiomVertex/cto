
// src/lib/sitemap-data.ts
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { getAllCaseStudies } from '@/lib/case-studies';
import { comparisonPages } from '@/lib/comparisonPages';
import { getAllPlaybookSlugs } from '@/lib/playbook';

export type UrlRec = {
  url: string;
  lastmod: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: string; // keep as string for simple xml/CSV join
};

export const baseUrl = 'https://cto.teamstation.dev';

// Playbook-only (≈288 pages)
export async function collectPlaybookUrls(): Promise<UrlRec[]> {
  const now = new Date().toISOString();
  const slugs = await getAllPlaybookSlugs();

  const urls: UrlRec[] = [
    {
      url: `${baseUrl}/playbook/hub`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9',
    },
    ...slugs.map((slug) => ({
      url: `${baseUrl}/playbook/${slug}`,
      lastmod: now, // if you track per-page mtime, inject it here
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  return urls;
}

// Everything else from your previous sitemap.ts (minus /playbook/*)
export async function collectCoreUrls(): Promise<UrlRec[]> {
  const now = new Date().toISOString();

  const home: UrlRec[] = [
    { url: baseUrl, lastmod: now, changefreq: 'weekly', priority: '1.0' },
  ];

  const hubPages = [
    '/research/hub',
    '/comparisons',
    '/case-studies',
    '/hire',
    '/hire/by-country',
    '/hire/by-role',
    '/hire/by-team-topologies',
    '/hire/by-technology',
    '/faq',
  ].map((p) => ({
    url: `${baseUrl}${p}`,
    lastmod: now,
    changefreq: 'weekly' as const,
    priority: '0.9',
  }));

  const staticPages = [
    '/about',
    '/platform',
    '/pricing',
    '/process',
    '/services/integrated-services',
    '/services/talent-onboarding',
    '/technical-interview-evaluation',
    '/trust',
  ].map((p) => ({
    url: `${baseUrl}${p}`,
    lastmod: now,
    changefreq: 'monthly' as const,
    priority: '0.8',
  }));

  const legalPages = ['/privacy-policy', '/terms-of-service', '/sitemap'].map(
    (p) => ({
      url: `${baseUrl}${p}`,
      lastmod: now,
      changefreq: 'yearly' as const,
      priority: '0.3',
    })
  );

  const researchEntries = [
    '/research/axiom-cortex-scientific-report',
    '/research/framework-for-measuring-capacity',
    '/research/heuristically-trained-ai',
    '/research/performance-metrics-in-ai-age',
    '/research/performance-evaluation-report-example',
    '/research/technical-talent-evaluation-system',
  ].map((p) => ({
    url: `${baseUrl}${p}`,
    lastmod: now,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));

  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries: UrlRec[] = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastmod: study.lastModified || now,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const comparisonEntries: UrlRec[] = comparisonPages.map((page) => ({
    url: `${baseUrl}/comparisons/${page.slug}`,
    lastmod: now,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const hireByCountryEntries: UrlRec[] = countries.flatMap((c) => {
    const base: UrlRec = {
      url: `${baseUrl}/hire/by-country/${c.slug}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7',
    };
    const techPages: UrlRec[] = techCategories
      .flatMap((cat) => cat.tech)
      .map((t) => ({
        url: `${baseUrl}/hire/by-country/${c.slug}/${t.slug}`,
        lastmod: now,
        changefreq: 'monthly',
        priority: '0.6',
      }));
    return [base, ...techPages];
  });

  const hireByRoleEntries: UrlRec[] = roleCategories.map((r) => ({
    url: `${baseUrl}/hire/by-role/${r.slug}`,
    lastmod: now,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const hireByTechEntries: UrlRec[] = techCategories.flatMap((cat) =>
    cat.tech.map((t) => ({
      url: `${baseUrl}/hire/by-technology/${t.slug}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.6',
    }))
  );

  return [
    ...home,
    ...hubPages,
    ...staticPages,
    ...legalPages,
    ...researchEntries,
    ...caseStudyEntries,
    ...comparisonEntries,
    ...hireByCountryEntries,
    ...hireByRoleEntries,
    ...hireByTechEntries,
  ];
}
