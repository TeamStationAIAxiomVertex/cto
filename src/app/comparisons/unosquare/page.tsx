
// Unosquare Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Unosquare: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Unosquare. Evaluating vetting methods, security, compliance, and delivery velocity.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/unosquare" },
  openGraph: {
    title: "TeamStation vs Unosquare: A CTO’s Guide",
    description: "Evidence-driven breakdown of TeamStation AI vs Unosquare across vetting, compliance, and SLAs.",
    url: "https://cto.teamstation.dev/comparisons/unosquare",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Unosquare: A CTO’s Guide",
    description: "CTO-focused comparison of TeamStation AI vs Unosquare with evidence on security, devices, and TCO.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Unosquare: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Unosquare. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/unosquare" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Unosquare</span>
      </div>
      <h1>TeamStation vs Unosquare: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Unosquare</strong> across vetting, compliance, delivery, and TCO.</p>
    </main>
  );
}
