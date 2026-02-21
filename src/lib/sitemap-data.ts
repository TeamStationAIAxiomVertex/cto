
import { getPages, formatPaths } from "./sitemap-utils";
import type { SitemapUrl } from "./sitemap-utils";
import fs from "fs";
import path from "path";

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
    const urls = new Set<string>([`${BASE_URL}/case-studies`]);
    const candidateDirs = [
      path.join(process.cwd(), "content", "case-studies"),
      path.join(process.cwd(), "src", "content", "case-studies"),
    ];

    for (const dir of candidateDirs) {
      if (!fs.existsSync(dir)) continue;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isFile()) continue;
        if (!entry.name.match(/\.mdx?$/)) continue;
        const slug = entry.name.replace(/\.mdx?$/, "");
        if (!slug) continue;
        urls.add(`${BASE_URL}/case-studies/${slug}`);
      }
    }

    return Array.from(urls).map((url) => ({
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
    const roleSlugs = [
      "platform-infra-sre",
      "security-grc",
      "backend-services",
      "frontend-web",
      "mobile-cross-platform",
      "data-engineering-analytics",
      "ml-ai-llm-ops",
      "product-design-growth",
      "qa-quality-engineering",
      "it-enterprise-ops",
      "finops-biztech",
    ];
    const urls = roleSlugs.map((slug) => `${BASE_URL}/hire/by-role/${slug}`);
    urls.unshift(`${BASE_URL}/hire/by-role`);
    return urls.map((url) => ({
      loc: url,
      lastmod: today,
      changefreq: "monthly",
      priority: 0.7,
    }));
}

export async function collectHireByTechnologyUrls(): Promise<SitemapUrl[]> {
    const urls = new Set<string>([`${BASE_URL}/hire/by-technology`]);

    const techDir = path.join(process.cwd(), "src", "data", "technologies");
    if (fs.existsSync(techDir)) {
      const techFiles = fs.readdirSync(techDir, { withFileTypes: true });
      for (const entry of techFiles) {
        if (!entry.isFile()) continue;
        if (!entry.name.endsWith(".ts")) continue;
        if (entry.name === "index.ts") continue;
        const slug = entry.name.replace(/\.ts$/, "");
        urls.add(`${BASE_URL}/hire/by-technology/${slug}`);
      }
    }

    const allHirePages = getPages("src/app/hire");
    const staticHirePages = allHirePages.filter((page) => !page.includes("["));
    const nestedCountryTechPages = staticHirePages.filter((page) => {
      const isNestedTechPage = page.includes("/by-country/");
      if (isNestedTechPage) return page.split("/").length > 6;
      return false;
    });
    const nestedUrls = formatPaths(nestedCountryTechPages);
    nestedUrls.forEach((u) => urls.add(u));

    return Array.from(urls).map((url) => ({
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
