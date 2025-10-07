
// src/lib/sitemap-data.ts
import { getAllPlaybookSlugs } from "./playbook";
import { getAllResearchSlugs } from "./research";
import { getAllRoleSlugs } from "./roles";
import { getAllTechSlugs } from "./tech";
import { getAllCaseStudies } from "./case-studies";
import { countries } from "./countries";
import { comparisonPages } from "./comparisonPages";
import type { SitemapUrl } from "./sitemap-utils";
export type { SitemapUrl } from "./sitemap-utils";

const BASE_URL = "https://cto.teamstation.dev";

// 1. Core Pages (Static) - Now includes all essential static pages as per the plan.
export async function collectCoreUrls(): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [
    { loc: `${BASE_URL}/`, lastmod: new Date().toISOString(), changefreq: "weekly", priority: 1.0 },
    { loc: `${BASE_URL}/playbook/hub`, lastmod: new Date().toISOString(), changefreq: "weekly", priority: 0.9 },
    { loc: `${BASE_URL}/comparisons`, lastmod: new Date().toISOString(), changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/hire`, lastmod: new Date().toISOString(), changefreq: "weekly", priority: 0.9 },
    { loc: `${BASE_URL}/trust`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/about`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/platform`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/pricing`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/process`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/services/integrated-services`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.6 },
    { loc: `${BASE_URL}/services/talent-onboarding`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.6 },
    { loc: `${BASE_URL}/technical-interview-evaluation`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.8 },
    { loc: `${BASE_URL}/research/hub`, lastmod: new Date().toISOString(), changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/case-studies`, lastmod: new Date().toISOString(), changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/hire/by-role`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.8 },
    { loc: `${BASE_URL}/hire/by-technology`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.8 },
    { loc: `${BASE_URL}/hire/by-country`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.8 },
    { loc: `${BASE_URL}/hire/by-team-topologies`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.8 },
  ];
  return urls;
}

// 2. Playbook URLs (Dynamic)
export async function collectPlaybookUrls(): Promise<SitemapUrl[]> {
  const playbookSlugs = await getAllPlaybookSlugs();
  return playbookSlugs.map((slug) => ({
    loc: `${BASE_URL}/playbook/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));
}

// 2b. Research/Case Study URLs (Dynamic)
export async function collectCaseStudyUrls(): Promise<SitemapUrl[]> {
  const caseStudies = await getAllCaseStudies();
  const researchSlugs = await getAllResearchSlugs();

  const caseStudyEntries = caseStudies.map(
    (study): SitemapUrl => ({
      loc: `${BASE_URL}/case-studies/${study.slug}`,
      lastmod: study.lastModified || new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    })
  );

  const researchEntries = researchSlugs.map(
    (slug): SitemapUrl => ({
      loc: `${BASE_URL}/research/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    })
  );

  return [...caseStudyEntries, ...researchEntries];
}

// 3. Comparison URLs (Dynamic)
export async function collectComparisonUrls(): Promise<SitemapUrl[]> {
  const slugs = comparisonPages.map(p => p.slug);
  return slugs.map(
    (slug): SitemapUrl => ({
      loc: `${BASE_URL}/comparisons/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "quarterly",
      priority: 0.8,
    })
  );
}

// 4. Programmatic Hire-By-Country URLs (Dynamic) - CORRECTED
export async function collectHireByCountryUrls(): Promise<SitemapUrl[]> {
  const allTechSlugs = await getTechSlugs();
  return countries.flatMap((country) => {
    const base: SitemapUrl = {
      loc: `${BASE_URL}/hire/by-country/${country.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8
    };
    // This was the missing piece: generating nested tech pages for each country.
    const techPages: SitemapUrl[] = allTechSlugs.map(techSlug => ({
        loc: `${BASE_URL}/hire/by-country/${country.slug}/${techSlug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
    }));
    return [base, ...techPages];
  });
}

// 5. Programmatic Hire-By-Role URLs (Dynamic) - CORRECTED
export async function collectHireByRoleUrls(): Promise<SitemapUrl[]> {
  const slugs = getAllRoleSlugs(); // Uses the correct function from roles.ts
  return slugs.map(
    (slug): SitemapUrl => ({
      loc: `${BASE_URL}/hire/by-role/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    })
  );
}

// 6. Programmatic Hire-By-Technology URLs (Dynamic) - CORRECTED
export async function collectHireByTechnologyUrls(): Promise<SitemapUrl[]> {
  const slugs = await getTechSlugs(); // Uses the correct function from tech.ts
  return slugs.map((slug) => ({
    loc: `${BASE_URL}/hire/by-technology/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.8,
  }));
}
