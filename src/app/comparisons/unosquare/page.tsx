
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "unosquare",
  title: "TeamStation vs Unosquare: Compliance & Velocity Compared",
  description:
    "Compare TeamStation AI’s cognitive-science vetting and EOR-native compliance with Unosquare’s traditional nearshore staff augmentation model. A CTO’s guide to risk and velocity.",
  canonical: "https://cto.teamstation.dev/comparisons/unosquare",
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
  name: "TeamStation vs Unosquare",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "TeamStation AI provides cognitive-science vetting, corporate-owned devices, and audit-ready EOR compliance across LATAM. Unosquare offers traditional nearshore augmentation, requiring clients to manage more compliance and security risk.",
    author: { "@type": "Organization", name: "TeamStation AI" },
  },
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / 
          <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / 
          <span>Unosquare</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Vetting:</strong> TeamStation uses Axiom Cortex™ psychometric vetting; Unosquare uses traditional interviews.</li>
            <li><strong>Compliance:</strong> TeamStation is EOR-native across LATAM; Unosquare compliance depends on local engagement.</li>
            <li><strong>Devices:</strong> TeamStation provides corporate-owned MDM laptops; Unosquare often BYOD/client devices.</li>
            <li><strong>Velocity:</strong> TeamStation targets PRs in ≤10 days; Unosquare depends on client onboarding.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/revelo">Compare TeamStation vs Revelo</Link></li>
              <li><Link href="/playbook/tco-model">Playbook: TCO Model</Link></li>
              <li><Link href="/research/hub">Research Hub</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
