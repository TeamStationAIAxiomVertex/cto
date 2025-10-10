
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
    '[slug]', '[vendor]'     // Exclude all dynamic route templates
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
  const playbookFiles = getPages('src/app/playbook', ['[slug]']);
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
      '[slug]', '[vendor]' 
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
    const pageFiles = getPages("src/app/case-studies", ['[slug]']);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectComparisonUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/comparisons", ['[vendor]']);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByCountryUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/hire/by-country", ['[slug]']);
    const urls = formatPaths(pageFiles);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByRoleUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/hire/by-role", ['[slug]']);
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
    const staticHirePages = allHirePages.filter(page => !page.includes('['));

    const techPages = staticHirePages.filter(page => {
        const isDirectTechPage = page.includes('/by-technology/');
        const isNestedTechPage = page.includes('/by-country/');

        if (isDirectTechPage) {
            return !page.endsWith('/by-technology/page.tsx');
        }
        if (isNestedTechPage) {
            return page.split('/').length > 6;
        }
        return false;
    });

    const urls = formatPaths(techPages);
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.6,
    }));
}

export async function collectResearchUrls(): Promise<SitemapUrl[]> {
  const researchFiles = getPages("src/app/research", ['[slug]']);
  const urls = formatPaths(researchFiles);
  return urls.map((url) => ({
    loc: url,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.7,
  }));
}
