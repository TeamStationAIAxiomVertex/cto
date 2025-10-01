
// Globant Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Globant: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Globant. Evaluating vetting, delivery models, compliance, devices, and TCO.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/globant" },
  openGraph: {
    title: "TeamStation vs Globant: A CTO’s Guide",
    description: "Side-by-side analysis of TeamStation AI vs Globant for CTOs evaluating nearshore partners.",
    url: "https://cto.teamstation.dev/comparisons/globant",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Globant: A CTO’s Guide",
    description: "Evidence-based comparison of TeamStation AI vs Globant for nearshore IT staff augmentation.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Globant: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Globant. Evidence-driven breakdown across vetting, compliance, delivery, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/globant" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Globant</span>
      </div>
      <h1>TeamStation vs Globant: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Globant</strong> across vetting, compliance, delivery, and TCO.</p>
    </main>
  );
}
