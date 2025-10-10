
// src/lib/sitemap-utils.ts
import fs from 'fs';
import path from 'path';

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};


const BASE_URL = "https://cto.teamstation.dev";

// Utility function to recursively find all page.tsx files
export function getPages(dir: string, exclude: string[] = []): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recurse into subdirectories
      results = results.concat(getPages(filePath, exclude));
    } else if (path.basename(filePath) === 'page.tsx') {
      // Check against exclusion list
      const isExcluded = exclude.some(pattern => filePath.includes(pattern));
      if (!isExcluded) {
        results.push(filePath);
      }
    }
  });

  return results;
}

// Helper to transform file paths to URL paths
export function formatPaths(paths: string[]): string[] {
  return paths.map(p => {
    // Remove 'src/app' and 'page.tsx'
    let route = p.replace(/^src\/app/, '').replace(/\/page\.tsx$/, '');
    
    // Handle the root path case
    if (route === '') {
      route = '/';
    }
    
    // Remove trailing slash for non-root paths
    if (route.length > 1 && route.endsWith('/')) {
      route = route.slice(0, -1);
    }

    return `${BASE_URL}${route}`;
  });
}

// Function to generate the sitemap XML from a list of URLs
export function generateSitemapXml(urls: any[]): string {
    const urlset = urls.map(url => {
        let urlContent = `<loc>${url.loc}</loc>`;
        if (url.lastmod) urlContent += `<lastmod>${url.lastmod}</lastmod>`;
        if (url.changefreq) urlContent += `<changefreq>${url.changefreq}</changefreq>`;
        if (url.priority) urlContent += `<priority>${url.priority}</priority>`;
        return `<url>${urlContent}</url>`;
    }).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlset}
</urlset>`;
}
