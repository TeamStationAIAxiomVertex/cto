// src/app/sitemaps/playbook.xml/route.ts
import { NextResponse } from "next/server";
import { getAllPlaybookSlugs } from "../../../lib/playbook";
import type { MetadataRoute } from 'next';

export async function GET() {
  const base = "https://cto.teamstation.dev";
  const now = new Date().toISOString();
  const slugs = await getAllPlaybookSlugs();

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/playbook/hub`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...slugs.map(slug => ({
      url: `${base}/playbook/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
    <changefreq>${u.changeFrequency}</changefreq>
    <priority>${u.priority?.toFixed(1) ?? '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
