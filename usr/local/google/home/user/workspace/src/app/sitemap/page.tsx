import Link from 'next/link';
import type { Metadata } from 'next';
import { collectCoreUrls, collectPlaybookUrls } from '@/lib/sitemap-data';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'An overview of all pages on the site.',
  robots: {
    index: false,
    follow: true,
  }
};

async function PageGroup({ title, promise }: { title: string; promise: Promise<any[]> }) {
  const items = await promise;
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.url} className="text-primary hover:underline">{item.url}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function SitemapPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <h1>Sitemap</h1>
      <p>This is a human-readable list of all pages on the site, organized by section.</p>
      <PageGroup title="Core Pages" promise={collectCoreUrls()} />
      <PageGroup title="Playbook Pages" promise={collectPlaybookUrls()} />
    </main>
  );
}
