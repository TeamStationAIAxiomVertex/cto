
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "tecla",
  title: "TeamStation vs TECLA: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs TECLA. See how integrated platform control stacks up against TECLA’s talent marketplace.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/tecla" },
  openGraph: {
    title: "TeamStation vs TECLA: A CTO’s Guide",
    description: "Side-by-side analysis of TeamStation AI vs TECLA across vetting, compliance, devices, and TCO.",
    url: "https://cto.teamstation.dev/comparisons/tecla",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs TECLA: A CTO’s Guide",
    description: "Evidence-driven comparison of TeamStation AI vs TECLA for CTOs evaluating nearshore IT options.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs TECLA: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs TECLA. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/tecla" },
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={schema} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>TECLA</span>
      </div>
      <h1>TeamStation vs TECLA: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>TECLA</strong> across vetting, compliance, security, and TCO.</p>
    </main>
  );
}
