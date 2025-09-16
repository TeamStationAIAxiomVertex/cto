import fs from 'node:fs/promises';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
const SITE = 'https://cto.teamstation.dev';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'A complete sitemap of the TeamStation AI CTO Playbook, including all playbooks, services, comparisons, and hiring options.',
};

function toPath(url: string): string | null {
  const u = new URL(url, SITE);
  if (u.origin !== SITE) return null;
  let path = u.pathname || '/';
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  if (path === '/sitemap.xml') return null;
  return path;
}

export default async function HtmlSitemap() {
  const raw = await fs.readFile(
    `${process.cwd()}/src/data/sitemap-urls.txt`,
    'utf8'
  ).catch(() => '');
  const paths = Array.from(
    new Set(
      raw
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) => toPath(l))
        .filter(Boolean) as string[]
    )
  ).sort((a, b) => a.localeCompare(b));

  return (
    <main className="container max-w-4xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Sitemap</span>
        </div>
      <h1 className="text-3xl font-bold mb-6">HTML Sitemap</h1>
      <p className="text-muted-foreground mb-4">
        {paths.length} URLs
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        {paths.map((p) => (
          <li key={p}>
            <Link className="text-primary hover:underline break-words" href={p || '/'}>
              {p || '/ (Home)'}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
