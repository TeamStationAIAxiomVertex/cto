
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "revelo",
  title: "TeamStation vs Revelo: Evidence vs Marketplace",
  description:
    "Revelo offers a marketplace of LATAM talent, but does it deliver audit-ready teams? Compare with TeamStation AI’s integrated platform that blends scientific vetting and operational control.",
  canonical: "https://cto.teamstation.dev/comparisons/revelo",
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
  name: "TeamStation vs Revelo",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "Revelo provides a large talent marketplace but leaves compliance, devices, and integration to the client. TeamStation bundles vetting, EOR compliance, and device security for faster, safer ramps.",
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
          <span>Revelo</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Vetting:</strong> TeamStation: cognitive science & Axiom Cortex™; Revelo: candidate marketplace profiles.</li>
            <li><strong>Compliance:</strong> TeamStation: built-in EOR in 10 LATAM countries; Revelo: client-managed compliance.</li>
            <li><strong>Devices:</strong> TeamStation: corporate-owned laptops; Revelo: varies by candidate/client setup.</li>
            <li><strong>Time-to-first-PR:</strong> TeamStation: ≤10 days; Revelo: depends on client onboarding pipeline.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/tecla">Compare TeamStation vs TECLA</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/research/hub">Research Hub</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
