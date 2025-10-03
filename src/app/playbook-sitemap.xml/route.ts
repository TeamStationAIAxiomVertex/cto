
// src/app/playbook-sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { collectPlaybookUrls } from "../../lib/sitemap-data";

export const revalidate = 60 * 60; // 1h

export async function GET() {
  const urls = await collectPlaybookUrls();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        (u) =>
          `<url><loc>${u.url}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
      )
      .join('') +
    `</urlset>`;

  return new NextResponse(body, { headers: { 'Content-Type': 'application/xml' } });
}
