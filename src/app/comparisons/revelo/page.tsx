
// Revelo Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Revelo: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Revelo. Assessing vetting, devices, compliance, SLAs, and total cost of ownership.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/revelo" },
  openGraph: {
    title: "TeamStation vs Revelo: A CTO’s Guide",
    description: "Evidence-driven breakdown of TeamStation AI vs Revelo for CTOs choosing nearshore IT staff augmentation.",
    url: "https://cto.teamstation.dev/comparisons/revelo",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Revelo: A CTO’s Guide",
    description: "Side-by-side analysis of TeamStation AI vs Revelo for secure, compliant nearshore engineering.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Revelo: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Revelo. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/revelo" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Revelo</span>
      </div>
      <h1>TeamStation vs Revelo: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Revelo</strong> across vetting, compliance, devices, SLAs, and TCO.</p>
    </main>
  );
}
