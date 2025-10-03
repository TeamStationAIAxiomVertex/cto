// src/app/sitemaps/core.xml/route.ts
import { NextResponse } from 'next/server';
import type { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/case-studies';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { comparisonPages } from '@/lib/comparisonPages';

export async function GET() {
  const base = 'https://cto.teamstation.dev';
  const now = new Date().toISOString();

  const staticPaths = [
    '/', '/playbook/hub', '/research/hub', '/comparisons', '/case-studies',
    '/hire', '/hire/by-country', '/hire/by-role', '/hire/by-team-topologies',
    '/hire/by-technology', '/faq', '/about', '/platform', '/pricing', '/process',
    '/services/integrated-services', '/services/talent-onboarding',
    '/technical-interview-evaluation', '/trust', '/privacy-policy', '/terms-of-service'
  ];

  const caseStudies = await getAllCaseStudies();
  const caseStudyPaths = caseStudies.map(cs => `/case-studies/${cs.slug}`);
  const comparisonPaths = comparisonPages.map(p => `/comparisons/${p.slug}`);
  const hireByCountryPaths = countries.map(c => `/hire/by-country/${c.slug}`);
  const hireByRolePaths = roleCategories.map(r => `/hire/by-role/${r.slug}`);
  const hireByTechPaths = techCategories.flatMap(cat => cat.tech.map(t => `/hire/by-technology/${t.slug}`));

  const urls = [
    ...staticPaths,
    ...caseStudyPaths,
    ...comparisonPaths,
    ...hireByCountryPaths,
    ...hireByRolePaths,
    ...hireByTechPaths,
  ];

  const body =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${base}${u}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>`;

  return new NextResponse(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
