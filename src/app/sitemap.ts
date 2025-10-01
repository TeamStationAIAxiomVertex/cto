import { MetadataRoute } from "next";
import { getAllCaseStudies } from '@/lib/case-studies';
import { getAllPlaybookSlugs } from '@/lib/playbook';
import { getAllResearchSlugs } from '@/lib/research';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://cto.teamstation.dev";

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
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  const caseStudies = await getAllCaseStudies();
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const playbookSlugs = await getAllPlaybookSlugs();
  const playbookRoutes = playbookSlugs.map(slug => ({
      url: `${baseUrl}/playbook/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
  }));

  const researchSlugs = await getAllResearchSlugs();
  const researchRoutes = researchSlugs.map(slug => ({
      url: `${baseUrl}/research/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
  }));
  
  const countryRoutes = countries.map(country => ({
      url: `${baseUrl}/hire/by-country/${country.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.7
  }));

  const roleRoutes = roleCategories.map(role => ({
      url: `${baseUrl}/hire/by-role/${role.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.7
  }));
  
  const techRoutes = techCategories.flatMap(category => category.tech).map(tech => ({
      url: `${baseUrl}/hire/by-technology/${tech.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.6
  }));

  return [
    ...staticRoutes,
    ...caseStudyRoutes,
    ...playbookRoutes,
    ...researchRoutes,
    ...countryRoutes,
    ...roleRoutes,
    ...techRoutes
  ];
}
