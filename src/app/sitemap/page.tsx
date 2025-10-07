
import Link from "next/link";
import type { Metadata } from "next";
import {
  collectCoreUrls,
  collectPlaybookUrls,
  collectCaseStudyUrls,
  collectComparisonUrls,
  collectHireByCountryUrls,
  collectHireByRoleUrls,
  collectHireByTechnologyUrls,
} from "@/lib/sitemap-data";
import type { SitemapUrl } from "@/lib/sitemap-utils";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "An overview of all pages on the site.",
  robots: {
    index: false,
    follow: true,
  },
};

async function PageGroup({
  title,
  promise,
}: {
  title: string;
  promise: Promise<SitemapUrl[]>;
}) {
  const items = await promise;
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">{title}</h2>
      <ul className="space-y-2 list-disc pl-5">
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.loc} className="text-primary hover:underline">
              {new URL(item.loc).pathname}
            </Link>
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
      <p>
        This is a human-readable list of all pages on the site, organized by
        section.
      </p>
      <PageGroup title="Core Pages" promise={collectCoreUrls()} />
      <PageGroup title="Playbook Pages" promise={collectPlaybookUrls()} />
      <PageGroup title="Case Studies & Research" promise={collectCaseStudyUrls()} />
      <PageGroup title="Comparisons" promise={collectComparisonUrls()} />
      <PageGroup title="Hire by Country" promise={collectHireByCountryUrls()} />
      <PageGroup title="Hire by Role" promise={collectHireByRoleUrls()} />
      <PageGroup title="Hire by Technology" promise={collectHireByTechnologyUrls()} />
    </main>
  );
}
