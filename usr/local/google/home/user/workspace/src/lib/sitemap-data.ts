// src/lib/sitemap-data.ts
import { getCountrySlugs } from './programmatic-data';
import { getPlaybookSlugs } from './playbook-data';
import { getComparisonSlugs } from './comparison-data';
import { getAllResearchSlugs } from './research'; 
import { getAllRoleSlugs } from './roles'; 
import { getAllTechSlugs } from './tech'; 
import { countries } from './countries';
import { getAllCaseStudies } from './case-studies';

const BASE_URL = 'https://cto.teamstation.dev';

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority?: number;
};


// 1. Core Pages (Static)
export async function collectCoreUrls() {
    const urls = [
        { loc: `${BASE_URL}/`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
        { loc: `${BASE_URL}/playbook/hub`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
        { loc: `${BASE_URL}/comparisons`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
        { loc: `${BASE_URL}/hire`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
        { loc: `${BASE_URL}/trust`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: 0.5 },
        { loc: `${BASE_URL}/about`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
        { loc: `${BASE_URL}/platform`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
        { loc: `${BASE_URL}/pricing`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
        { loc: `${BASE_URL}/process`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
        { loc: `${BASE_URL}/services/integrated-services`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
        { loc: `${BASE_URL}/services/talent-onboarding`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
        { loc: `${BASE_URL}/technical-interview-evaluation`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    ];
    return urls.map(u => ({...u, priority: u.priority.toFixed(1)}));
}

// 2. Playbook URLs (Dynamic)
export async function collectPlaybookUrls() {
    const playbookSlugs = await getAllPlaybookSlugs();
    return playbookSlugs.map(slug => ({
        loc: `${BASE_URL}/playbook/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
    }));
}

// 2b. Research/Case Study URLs (Dynamic)
export async function collectCaseStudyUrls() {
    const caseStudies = await getAllCaseStudies();
    const researchSlugs = await getAllResearchSlugs();
    
    const caseStudyEntries = caseStudies.map((study) => ({
        loc: `${BASE_URL}/case-studies/${study.slug}`, 
        lastmod: study.lastModified || new Date().toISOString(), 
        changefreq: 'monthly', 
        priority: 0.7
    }));

    const researchEntries = researchSlugs.map((slug) => ({
        loc: `${BASE_URL}/research/${slug}`, 
        lastmod: new Date().toISOString(), 
        changefreq: 'monthly', 
        priority: 0.7
    }));
  
    return [...caseStudyEntries, ...researchEntries];
}

// 3. Comparison URLs (Dynamic)
export async function collectComparisonUrls() {
    const slugs = await getComparisonSlugs();
    return slugs.map(slug => ({
        loc: `${BASE_URL}/comparisons/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'quarterly', 
        priority: 0.8
    }));
}


// 4. Programmatic Hire-By-Country URLs (Dynamic)
export async function collectHireByCountryUrls() {
    return countries.flatMap((country) => {
        const base = { loc: `${BASE_URL}/hire/by-country/${country.slug}`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 };
        const techPages = techCategories.flatMap(cat => cat.tech).map(tech => ({
            loc: `${BASE_URL}/hire/by-country/${country.slug}/${tech.slug}`,
            lastmod: new Date().toISOString(),
            changefreq: 'monthly',
            priority: 0.7
        }));
        return [base, ...techPages];
    });
}


// 5. Programmatic Hire-By-Role URLs (Dynamic)
export async function collectHireByRoleUrls() {
    const slugs = await getAllRoleSlugs(); 
    return slugs.map(slug => ({
        loc: `${BASE_URL}/hire/by-role/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
    }));
}

// 6. Programmatic Hire-By-Technology URLs (Dynamic)
export async function collectHireByTechnologyUrls() {
    const slugs = await getAllTechSlugs(); 
    return slugs.map(slug => ({
        loc: `${BASE_URL}/hire/by-technology/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
    }));
}
