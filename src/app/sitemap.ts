
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/case-studies';
import { getAllPlaybookSlugs } from '@/lib/playbook';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/research';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  
  const countryRoutes = countries.map((c) => `/hire/by-country/${c.slug}`);
  const roleRoutes = roleCategories.map((r) => `/hire/by-role/${r.slug}`);
  const techRoutes = techCategories.flatMap((cat) =>
    cat.tech.map((t) => `/hire/by-technology/${t.slug}`)
  );

  const [caseStudies, playbookSlugs, researchSlugs] = await Promise.all([
    getAllCaseStudies(),
    getAllPlaybookSlugs(),
    getAllResearchSlugs(),
  ]);

  const research = (await Promise.all(researchSlugs.map(slug => getResearchBySlug(slug)))).filter(Boolean) as Awaited<ReturnType<typeof getResearchBySlug>>[];

  // Static → use today's date
  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic → use frontmatter lastModified if available
  const caseStudyEntries = caseStudies.map((s) => ({
    url: `${base}/case-studies/${s.slug}`,
    lastModified: new Date(s.lastModified || Date.now()).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const playbookEntries = playbookSlugs.map((slug) => ({
    url: `${base}/playbook/${slug}`,
    lastModified: new Date().toISOString(), // No date in frontmatter yet
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const comparisonPages = [
      '/comparisons/andela',
      '/comparisons/bairesdev',
      '/comparisons/deel',
      '/comparisons/globant',
      '/comparisons/howdy',
      '/comparisons/nearsure',
      '/comparisons/terminal',
      '/comparisons/toptal',
      '/comparisons/revelo',
      '/comparisons/parallelstaff',
      '/comparisons/unosquare',
  ];

  const comparisonEntries = comparisonPages.map((c) => ({
    url: `${base}${c}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const researchEntries = research.map((r) => ({
    url: `${base}/research/${r.slug}`,
    lastModified: new Date().toISOString(), // No date in frontmatter yet
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const programmaticEntries = [
    ...countryRoutes,
    ...roleRoutes,
    ...techRoutes,
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...caseStudyEntries,
    ...playbookEntries,
    ...comparisonEntries,
    ...researchEntries,
    ...programmaticEntries,
  ];
}
