
// src/lib/sitemap-data.ts
import { countries } from "./countries";
import { roleCategories } from "./roles";
import { techCategories } from "./tech";
import { getAllCaseStudies } from "./case-studies";
import { comparisonPages } from "./comparisonPages";
import { getAllPlaybookSlugs } from "./playbook";
import { getAllResearchSlugs } from "./research";

export type UrlRec = {
  url: string;
  lastmod: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: string;
};

export const baseUrl = 'https://cto.teamstation.dev';
const now = new Date().toISOString();

// Function to get a consistent last modified date
const getLastMod = (date?: string) => date || now;

// CORE STATIC URLS
export async function collectCoreUrls(): Promise<UrlRec[]> {
  const home: UrlRec[] = [{ url: baseUrl, lastmod: now, changefreq: 'weekly', priority: '1.0' }];
  const hubPages = [
    '/research/hub', '/comparisons', '/case-studies', '/hire', '/hire/by-country',
    '/hire/by-role', '/hire/by-team-topologies', '/hire/by-technology', '/faq',
  ].map(p => ({ url: `${baseUrl}${p}`, lastmod: now, changefreq: 'weekly' as const, priority: '0.9' }));
  const staticPages = [
    '/about', '/platform', '/pricing', '/process', '/services/integrated-services',
    '/services/talent-onboarding', '/technical-interview-evaluation', '/trust',
  ].map(p => ({ url: `${baseUrl}${p}`, lastmod: now, changefreq: 'monthly' as const, priority: '0.8' }));
  const legalPages = ['/privacy-policy', '/terms-of-service', '/sitemap'].map(p => ({
    url: `${baseUrl}${p}`, lastmod: now, changefreq: 'yearly' as const, priority: '0.3',
  }));
  return [...home, ...hubPages, ...staticPages, ...legalPages];
}

// PLAYBOOK URLS
export async function collectPlaybookUrls(): Promise<UrlRec[]> {
  const slugs = await getAllPlaybookSlugs();
  return slugs.map(slug => ({
    url: `${baseUrl}/playbook/${slug}`, lastmod: now, changefreq: 'monthly', priority: '0.7'
  }));
}

// CASE STUDIES & RESEARCH
export async function collectCaseStudyUrls(): Promise<UrlRec[]> {
  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries: UrlRec[] = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`, lastmod: getLastMod(study.lastModified), changefreq: 'monthly', priority: '0.7'
  }));

  const researchSlugs = await getAllResearchSlugs();
  const researchEntries: UrlRec[] = researchSlugs.map((slug) => ({
      url: `${baseUrl}/research/${slug}`, lastmod: now, changefreq: 'monthly', priority: '0.7'
  }));
  
  return [...caseStudyEntries, ...researchEntries];
}

// COMPARISON PAGES
export async function collectComparisonUrls(): Promise<UrlRec[]> {
  return comparisonPages.map((page) => ({
    url: `${baseUrl}/comparisons/${page.slug}`, lastmod: now, changefreq: 'monthly', priority: '0.7'
  }));
}

// HIRE BY COUNTRY
export async function collectHireByCountryUrls(): Promise<UrlRec[]> {
  return countries.flatMap((c) => {
    const base: UrlRec = { url: `${baseUrl}/hire/by-country/${c.slug}`, lastmod: now, changefreq: 'monthly', priority: '0.7' };
    const techPages: UrlRec[] = techCategories.flatMap((cat) => cat.tech).map((t) => ({
      url: `${baseUrl}/hire/by-country/${c.slug}/${t.slug}`, lastmod: now, changefreq: 'monthly', priority: '0.6'
    }));
    return [base, ...techPages];
  });
}

// HIRE BY ROLE
export async function collectHireByRoleUrls(): Promise<UrlRec[]> {
    const roleSlugs = await roleCategories.map(r => r.slug);
    return roleSlugs.map(slug => ({
        url: `${baseUrl}/hire/by-role/${slug}`, lastmod: now, changefreq: 'monthly', priority: '0.7'
    }));
}

// HIRE BY TECHNOLOGY
export async function collectHireByTechnologyUrls(): Promise<UrlRec[]> {
    const techSlugs = techCategories.flatMap(cat => cat.tech.map(t => t.slug));
    return techSlugs.map(slug => ({
        url: `${baseUrl}/hire/by-technology/${slug}`, lastmod: now, changefreq: 'monthly', priority: '0.6'
    }));
}
