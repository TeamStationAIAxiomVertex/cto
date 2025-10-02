
import { MetadataRoute } from 'next';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { getAllCaseStudies } from '@/lib/case-studies';
import { comparisonPages } from '@/lib/comparisonPages';
import { playbookSlugs } from '@/lib/playbook';

const baseUrl = 'https://cto.teamstation.dev';

const staticPages = [
  '/',
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
  '/sitemap'
];

const researchPages = [
    '/research/axiom-cortex-scientific-report',
    '/research/heuristically-trained-ai',
    '/research/framework-for-measuring-capacity',
    '/research/performance-metrics-in-ai-age',
    '/research/performance-evaluation-report-example'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.8,
  }));
  
  const researchEntries = researchPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const playbookEntries = playbookSlugs.map((slug) => ({
    url: `${baseUrl}/playbook/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const comparisonEntries = comparisonPages.map((page) => ({
    url: `${baseUrl}/comparisons/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hireByCountryEntries = countries.flatMap((c) => {
    const base = {
        url: `${baseUrl}/hire/by-country/${c.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    };
    const techPages = techCategories.flatMap(cat => cat.tech).map(t => ({
        url: `${baseUrl}/hire/by-country/${c.slug}/${t.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));
    return [base, ...techPages];
  });

  const hireByRoleEntries = roleCategories.map((r) => ({
    url: `${baseUrl}/hire/by-role/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hireByTechEntries = techCategories.flatMap((cat) =>
    cat.tech.map((t) => ({
      url: `${baseUrl}/hire/by-technology/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified ? new Date(study.lastModified).toISOString() : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...researchEntries,
    ...playbookEntries,
    ...comparisonEntries,
    ...hireByCountryEntries,
    ...hireByRoleEntries,
    ...hireByTechEntries,
    ...caseStudyEntries,
  ];
}
