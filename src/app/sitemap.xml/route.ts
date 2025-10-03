// src/app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

export const revalidate = 60 * 60; // 1h

export async function GET() {
  const base = "https://cto.teamstation.dev";
  const now = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemaps/core.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${base}/sitemaps/playbook.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
