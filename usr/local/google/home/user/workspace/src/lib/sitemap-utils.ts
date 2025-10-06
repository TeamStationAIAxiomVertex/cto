// src/lib/sitemap-utils.ts

// Define the structure for a single URL entry
export type SitemapUrl = {
  loc: string;
  lastmod?: string; // e.g., '2025-10-05T12:00:00+00:00'
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number; // 0.0 to 1.0
};

/**
 * Generates the full XML content for a single sitemap file.
 * @param urls An array of SitemapUrl objects.
 * @returns The XML string content.
 */
export function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlset = urls.map(url => {
    // Escape HTML entities in the URL (optional but good practice)
    const loc = url.loc.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Construct the <url> block
    let urlEntry = `<url><loc>${loc}</loc>`;

    if (url.lastmod) {
      urlEntry += `<lastmod>${url.lastmod}</lastmod>`;
    }
    if (url.changefreq) {
      urlEntry += `<changefreq>${url.changefreq}</changefreq>`;
    }
    if (url.priority !== undefined) {
      urlEntry += `<priority>${url.priority.toFixed(1)}</priority>`;
    }
    
    urlEntry += `</url>`;
    return urlEntry;
  }).join('');

  // Combine into the final XML structure
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}

/**
 * Helper function to ensure all lastmod dates are in the required ISO 8601 format.
 * @param date A Date object or string.
 * @returns An ISO 8601 formatted string or undefined.
 */
export function formatLastMod(date: Date | string | undefined): string | undefined {
  if (!date) return undefined;
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    // Format: YYYY-MM-DDThh:mm:ss+zz:zz
    return d.toISOString();
  } catch (e) {
    console.error("Invalid date format for sitemap lastmod:", date, e);
    return undefined;
  }
}
