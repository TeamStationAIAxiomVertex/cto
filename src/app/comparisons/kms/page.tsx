
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "kms",
  title: "TeamStation vs KMS Technology: Integrated Pods vs Offshore Outsourcing",
  description:
    "KMS Technology operates offshore development centers. TeamStation AI provides nearshore pods with daylight overlap, scientific vetting, and enterprise-ready compliance.",
  canonical: "https://cto.teamstation.dev/comparisons/kms",
};

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.description,
  alternates: { canonical: pageInfo.canonical },
  openGraph: {
    title: pageInfo.title,
    description: pageInfo.description,
    url: pageInfo.canonical,
    type: "article",
  },
  twitter: { card: "summary", title: pageInfo.title, description: pageInfo.description },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TeamStation vs KMS Technology",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "KMS Technology is an offshore outsourcing vendor. TeamStation AI provides measurable outcomes via nearshore pods, cognitive vetting, and single-SLA operational control.",
    author: { "@type": "Organization", name: "TeamStation AI" },
  },
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>KMS Technology</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = nearshore pods; KMS = offshore outsourcing.</li>
            <li><strong>Latency:</strong> TeamStation = daylight overlap; KMS = timezone lag.</li>
            <li><strong>Vetting:</strong> TeamStation cognitive science; KMS traditional processes.</li>
            <li><strong>Compliance:</strong> TeamStation = EOR-native LATAM; KMS offshore labor frameworks.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/devlane">Compare TeamStation vs Devlane</Link></li>
              <li><Link href="/playbook/nearshore-vs-offshore">Playbook: Nearshore vs Offshore</Link></li>
              <li><Link href="/research/hub">Research Hub</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
