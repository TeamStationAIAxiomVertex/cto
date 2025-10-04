
import Link from 'next/link';
import type { Metadata } from 'next';
import { collectCoreUrls, collectPlaybookUrls, type UrlRec } from '../lib/sitemap-data';

export const metadata: Metadata = {
  title: 'HTML Sitemap | TeamStation AI',
  description: 'A complete HTML sitemap of the TeamStation AI CTO Playbook, including all playbooks, research, comparisons, and hiring pages.',
  robots: {
    index: false, // This page is for users, not for crawlers who should use sitemap.xml
    follow: true,
  },
};

function SitemapSection({ title, urls }: { title: string; urls: UrlRec[] }) {
    return (
        <section>
            <h2 className="text-2xl font-bold my-4 text-primary">{title}</h2>
            <ul className="list-disc list-inside space-y-2">
                {urls.map(url => (
                    <li key={url.url}>
                        <Link href={url.url} className="text-muted-foreground hover:text-foreground hover:underline">
                            {url.url.replace('https://cto.teamstation.dev', '')}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default async function SitemapPage() {
  const coreUrls = await collectCoreUrls();
  const playbookUrls = await collectPlaybookUrls();

  return (
    <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Sitemap</span>
        </div>
        <header className="text-center my-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">HTML Sitemap</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A complete list of all pages on the TeamStation AI CTO Playbook website.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <SitemapSection title="Core Pages" urls={coreUrls.filter(u => !u.url.includes('/playbook/'))} />
            <SitemapSection title="CTO Playbook" urls={playbookUrls} />
        </div>
    </main>
  );
}
