import { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/case-studies';
import { getAllPlaybookSlugs } from '@/lib/playbook';
import { roleCategories } from '@/lib/roles';
import { countries } from '@/lib/countries';
import { techCategories } from '@/lib/tech';

const siteUrl = 'https://cto.teamstation.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '',
    '/about',
    '/case-studies',
    '/comparisons',
    '/comparisons/andela',
    '/comparisons/bairesdev',
    '/comparisons/deel',
    '/comparisons/globant',
    '/comparisons/nearsure',
    '/comparisons/new-gen-nearshore',
    '/comparisons/parallelstaff',
    '/comparisons/revelo',
    '/comparisons/tecla',
    '/comparisons/terminal',
    '/comparisons/toptal',
    '/comparisons/unosquare',
    '/hire',
    '/hire/by-country',
    '/hire/by-role',
    '/hire/by-team-topologies',
    '/hire/by-technology',
    '/platform',
    '/playbook/hub',
    '/pricing',
    '/process',
    '/research/hub',
    '/research/axiom-cortex-scientific-report',
    '/research/performance-evaluation-framework',
    '/research/technical-talent-evaluation-system',
    '/services/integrated-services',
    '/services/talent-onboarding',
    '/trust',
  ].map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const caseStudies = await getAllCaseStudies();
  const caseStudyPages = caseStudies.map(study => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const playbookPages = (await getAllPlaybookSlugs()).map(slug => ({
      url: `${siteUrl}/playbook/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
  }));

  const rolePages = roleCategories.map(role => ({
    url: `${siteUrl}/hire/by-role/${role.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const countryPages = countries.map(country => ({
    url: `${siteUrl}/hire/by-country/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const techPages = techCategories.flatMap(category => category.tech).map(tech => ({
    url: `${siteUrl}/hire/by-technology/${tech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...playbookPages,
    ...rolePages,
    ...countryPages,
    ...techPages,
  ];
}
