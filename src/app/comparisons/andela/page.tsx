// Andela Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Andela: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Andela. Evidence-driven analysis across vetting, compliance, managed devices, and TCO.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/andela" },
  openGraph: {
    title: "TeamStation vs Andela: A CTO’s Guide",
    description: "Compare TeamStation AI vs Andela across security, vetting, compliance, and cost models.",
    url: "https://cto.teamstation.dev/comparisons/andela",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Andela: A CTO’s Guide",
    description: "Evidence-based breakdown of TeamStation AI vs Andela for CTOs evaluating secure nearshore IT.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Andela: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Andela. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/andela" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Andela</span>
      </div>
      <h1>TeamStation vs Andela: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Andela</strong> across evidence-based vetting, compliance, security, and TCO.</p>
    </main>
  );
}
