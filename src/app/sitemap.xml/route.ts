
// src/app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { baseUrl } from '@/lib/sitemap-data';

export const revalidate = 60 * 60; // 1h

export async function GET() {
  const now = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/core-sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/playbook-sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
