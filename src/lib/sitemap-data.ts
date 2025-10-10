
import { getPages, formatPaths } from "./sitemap-utils";
import type { SitemapUrl } from "./sitemap-utils";

const BASE_URL = "https://cto.teamstation.dev";
const today = new Date().toISOString();

// 1. All Static Pages (Dynamic)
export async function collectAllStaticUrls(): Promise<SitemapUrl[]> {
  // Define a list of patterns to exclude
  const excludePatterns = [
    '/api/',                // Exclude all API routes
    '/sitemaps/',           // Exclude the sitemap generation routes
    'sitemap.xml',          // Exclude the main sitemap file
    '/comparisons/[vendor]',// Exclude dynamic comparison pages
    '/case-studies/[slug]', // Exclude dynamic case study pages
    '/playbook/[slug]',     // Exclude dynamic playbook pages
    '/hire/by-country/[slug]', // Exclude dynamic hire by country pages
    '/hire/by-role/[slug]', // Exclude dynamic hire by role pages
    '/hire/by-technology/[slug]', // Exclude dynamic hire by technology pages
  ];

  // Get all page.tsx files from the app directory, applying the exclusion list
  const pageFiles = getPages('src/app', excludePatterns);
  
  // Format the file paths into full URLs
  const urls = formatPaths(pageFiles);

  return urls.map(url => ({
    loc: url,
    lastmod: today,
    changefreq: "weekly",
    priority: 0.8, // Default priority for static pages
  }));
}

// 2. Playbook URLs (Dynamic)
export async function collectPlaybookUrls(): Promise<SitemapUrl[]> {
  const playbookFiles = getPages('src/app/playbook', ['/playbook/[slug]']);
  const urls = formatPaths(playbookFiles);
  return urls.map(url => ({
    loc: url,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.7,
  }));
}

export async function collectCoreUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app", [
      "/app/case-studies",
      "/app/comparisons",
      "/app/hire",
      "/app/playbook",
      "/app/research",
    ]);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
      loc: url,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8,
    }));
}
 
export async function collectCaseStudyUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/case-studies", ["/case-studies/[slug]"]);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectComparisonUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/comparisons", ["/comparisons/[vendor]"]);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByCountryUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/hire/by-country", ["/hire/by-country/[slug]"]);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByRoleUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/hire/by-role", ["/hire/by-role/[slug]"]);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByTechnologyUrls(): Promise<SitemapUrl[]> {
    const allHirePages = getPages("src/app/hire");
    const techPages = allHirePages.filter(page => 
        page.includes('by-technology') || page.split('/').length > 5
    );
    const urls = formatPaths(techPages);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.6,
    }));
}

export async function collectResearchUrls(): Promise<SitemapUrl[]> {
  const researchFiles = getPages("src/app/research", ["/research/[slug]"]);
  const urls = formatPaths(researchFiles);
  return urls.map((url) => ({
    loc: url,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.7,
  }));
}
