// src/lib/sitemap-data.ts
import { getCountrySlugs } from './programmatic-data';
import { getPlaybookSlugs } from './playbook-data';
import { getComparisonSlugs } from './comparison-data';
import { getCaseStudySlugs as getResearchSlugs } from './research'; 
import { getAllRoleSlugs as getRoleSlugs } from './roles'; 
import { getAllTechSlugs as getTechSlugs } from './tech'; 
import { countries } from './countries';

const BASE_URL = 'https://cto.teamstation.dev';

// 1. Core Pages (Static)
export function collectCoreUrls() {
    const urls = [
        { loc: `${BASE_URL}/`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
        { loc: `${BASE_URL}/playbook`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
        { loc: `${BASE_URL}/comparisons`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
        { loc: `${BASE_URL}/hire`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
        { loc: `${BASE_URL}/trust`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: 0.5 },
    ];
    return urls;
}

// 2. Playbook URLs (Dynamic)
export async function collectPlaybookUrls() {
    const playbookSlugs = await getPlaybookSlugs();
    return playbookSlugs.map(slug => ({
        loc: `${BASE_URL}/playbook/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
    }));
}

// 2b. Research/Case Study URLs (Dynamic)
export async function collectCaseStudyUrls() {
    const researchSlugs = await getResearchSlugs(); 
    return researchSlugs.map(slug => ({
        loc: `${BASE_URL}/research/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'yearly', 
        priority: 0.6
    }));
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
    return countries.map(country => ({
        loc: `${BASE_URL}/hire/by-country/${country.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9
    }));
}

// 5. Programmatic Hire-By-Role URLs (Dynamic)
export async function collectHireByRoleUrls() {
    const slugs = await getRoleSlugs(); 
    return slugs.map(slug => ({
        loc: `${BASE_URL}/hire/by-role/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9
    }));
}

// 6. Programmatic Hire-By-Technology URLs (Dynamic)
export async function collectHireByTechnologyUrls() {
    const slugs = await getTechSlugs(); 
    return slugs.map(slug => ({
        loc: `${BASE_URL}/hire/by-technology/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9
    }));
}
