// src/app/comparisons/coderslink/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "coderslink",
  title: "TeamStation vs CodersLink: Integrated Platform vs Recruitment Marketplace",
  description:
    "CodersLink operates as a recruitment marketplace for LATAM talent. TeamStation AI provides an end-to-end platform with cognitive vetting, managed devices, and compliance.",
  canonical: "https://cto.teamstation.dev/comparisons/coderslink",
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
  name: "TeamStation vs CodersLink",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "CodersLink connects companies with LATAM developers. TeamStation AI delivers managed pods with scientific vetting, security, and EOR compliance for faster delivery and lower risk.",
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
          <span>CodersLink</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = integrated pods; CodersLink = recruiting marketplace.</li>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™ cognitive science; CodersLink = candidate sourcing.</li>
            <li><strong>Devices:</strong> TeamStation provides managed laptops; CodersLink = none.</li>
            <li><strong>Compliance:</strong> TeamStation = EOR-native LATAM; CodersLink leaves compliance to client.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/terminal">Compare TeamStation vs Terminal</Link></li>
              <li><Link href="/research/framework-for-measuring-capacity">Research: Measuring Capacity</Link></li>
              <li><Link href="/trust">Trust Center</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}