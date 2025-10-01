// Nearsure Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Nearsure: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Nearsure. Side-by-side analysis across vetting, compliance, security, and delivery velocity.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/nearsure" },
  openGraph: {
    title: "TeamStation vs Nearsure: A CTO’s Guide",
    description: "Evidence-driven comparison of TeamStation AI vs Nearsure for CTOs evaluating nearshore IT staffing models.",
    url: "https://cto.teamstation.dev/comparisons/nearsure",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Nearsure: A CTO’s Guide",
    description: "CTO-focused comparison of TeamStation AI vs Nearsure across vetting, compliance, devices, SLAs, and TCO.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Nearsure: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Nearsure. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/nearsure" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Nearsure</span>
      </div>
      <h1>TeamStation vs Nearsure: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Nearsure</strong> across evidence-based vetting, compliance, devices, SLAs, and TCO.</p>
    </main>
  );
}
