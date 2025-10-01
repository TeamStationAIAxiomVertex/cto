
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "devlane",
  title: "TeamStation vs Devlane: Platform Pods vs Traditional Nearshore Vendor",
  description:
    "Devlane provides staff augmentation in LATAM. TeamStation AI delivers integrated pods with scientific vetting, managed devices, and single-SLA compliance for enterprise CTOs.",
  canonical: "https://cto.teamstation.dev/comparisons/devlane",
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
  name: "TeamStation vs Devlane",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "Devlane is a LATAM staff augmentation vendor. TeamStation AI bundles cognitive vetting, device security, and compliance into one SLA to reduce risk and accelerate delivery.",
    author: { "@type": "Organization", name: "TeamStation AI" },
  },
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Devlane</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = integrated platform pods; Devlane = traditional augmentation.</li>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™; Devlane = resume/interview.</li>
            <li><strong>Devices:</strong> TeamStation = MDM-managed laptops; Devlane = variable.</li>
            <li><strong>Fit:</strong> TeamStation = growth-stage CTOs; Devlane = transactional augmentation.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/nearsure">Compare TeamStation vs Nearsure</Link></li>
              <li><Link href="/playbook/build-vs-buy">Playbook: Build vs Buy</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
