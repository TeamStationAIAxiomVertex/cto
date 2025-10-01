// Terminal Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Terminal: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Terminal. Evaluating secure onboarding, compliance, vetting, and total cost of ownership.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/terminal" },
  openGraph: {
    title: "TeamStation vs Terminal: A CTO’s Guide",
    description: "Evidence-based comparison of TeamStation AI vs Terminal across vetting, compliance, devices, and SLAs.",
    url: "https://cto.teamstation.dev/comparisons/terminal",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Terminal: A CTO’s Guide",
    description: "CTO-focused comparison of TeamStation AI vs Terminal, highlighting evidence-based security and compliance.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Terminal: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Terminal. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/terminal" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Terminal</span>
      </div>
      <h1>TeamStation vs Terminal: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Terminal</strong> across secure onboarding, evidence-based vetting, compliance, and cost models.</p>
    </main>
  );
}
