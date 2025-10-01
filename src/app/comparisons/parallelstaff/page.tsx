// ParallelStaff Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs ParallelStaff: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs ParallelStaff. Evidence-based review of vetting, compliance, devices, and delivery velocity.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/parallelstaff" },
  openGraph: {
    title: "TeamStation vs ParallelStaff: A CTO’s Guide",
    description: "CTO-focused analysis of TeamStation AI vs ParallelStaff across evidence-driven vetting, devices, and TCO.",
    url: "https://cto.teamstation.dev/comparisons/parallelstaff",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs ParallelStaff: A CTO’s Guide",
    description: "Evidence-based breakdown of TeamStation AI vs ParallelStaff for CTOs evaluating secure nearshore IT.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs ParallelStaff: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs ParallelStaff. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/parallelstaff" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>ParallelStaff</span>
      </div>
      <h1>TeamStation vs ParallelStaff: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>ParallelStaff</strong> across vetting, compliance, devices, SLAs, and TCO.</p>
    </main>
  );
}
