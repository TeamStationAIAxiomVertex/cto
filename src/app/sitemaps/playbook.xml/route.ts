// src/app/sitemaps/playbook.xml/route.ts
import { NextResponse } from "next/server";
import { getAllPlaybookSlugs } from "@/lib/playbook";

export async function GET() {
  const base = "https://cto.teamstation.dev";
  const now = new Date().toISOString();
  const slugs = await getAllPlaybookSlugs(); // returns ["bias-free-technical-hiring-axiom-cortex", ...]
  const urls = ["/playbook/hub", ...slugs.map(s => `/playbook/${s}`)];

  const body =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${base}${u}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>`;

  return new NextResponse(body, { headers: { "Content-Type": "application/xml" } });
}
