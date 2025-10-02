
import { MetadataRoute } from 'next';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { getAllCaseStudies } from '@/lib/case-studies';
import { comparisonPages } from '@/lib/comparisonPages';
import { getAllPlaybookSlugs } from '@/lib/playbook';

const baseUrl = 'https://cto.teamstation.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // 1. Core Hubs & Static Pages
  const homeEntry: MetadataRoute.Sitemap = [{
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  }];
  
  const hubPages = [
    '/playbook/hub', '/research/hub', '/comparisons', 
    '/case-studies', '/hire', '/hire/by-country', '/hire/by-role', 
    '/hire/by-team-topologies', '/hire/by-technology', '/faq'
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const staticPages = [
    '/about', '/platform', '/pricing', '/process', '/services/integrated-services',
    '/services/talent-onboarding', '/technical-interview-evaluation', '/trust'
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  const legalPages = ['/privacy-policy', '/terms-of-service', '/sitemap'].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  const playbookSlugs = await getAllPlaybookSlugs();
  const playbookEntries = playbookSlugs.map(slug => ({
    url: `${baseUrl}/playbook/${slug}`,
    lastModified: now, // Placeholder, ideally from file stats
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const researchEntries = [
    '/research/axiom-cortex-scientific-report',
    '/research/framework-for-measuring-capacity',
    '/research/heuristically-trained-ai',
    '/research/performance-metrics-in-ai-age',
    '/research/performance-evaluation-report-example',
    '/research/technical-talent-evaluation-system'
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));


  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified || now,
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

  return [
    ...homeEntry,
    ...hubPages,
    ...staticPages,
    ...legalPages,
    ...playbookEntries,
    ...researchEntries,
    ...caseStudyEntries,
    ...comparisonEntries,
    ...hireByCountryEntries,
    ...hireByRoleEntries,
    ...hireByTechEntries,
  ];
}
