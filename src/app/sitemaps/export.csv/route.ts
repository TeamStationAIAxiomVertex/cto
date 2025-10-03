
// src/app/sitemaps/export.csv/route.ts
import { NextResponse } from 'next/server';
import { collectCoreUrls, collectPlaybookUrls } from "../../../lib/sitemap-data";

export const revalidate = 60 * 60; // 1h

function toCsv(rows: Array<string[]>) {
  return rows
    .map((cols) =>
      cols
        .map((c) => {
          // basic CSV escaping
          const needsQuote = /[",\n]/.test(c);
          return needsQuote ? `"${c.replace(/"/g, '""')}"` : c;
        })
        .join(',')
    )
    .join('\n');
}

export async function GET() {
  const [core, playbook] = await Promise.all([collectCoreUrls(), collectPlaybookUrls()]);
  const all = [...core, ...playbook];

  const rows = [
    ['loc', 'lastmod', 'changefreq', 'priority'],
    ...all.map((u) => [u.url, u.lastmod, u.changefreq, u.priority]),
  ];

  const csv = toCsv(rows);
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
