import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "andela",
  title: "TeamStation vs Andela: Nearshore Pods vs Global Talent Marketplace",
  description:
    "Andela connects companies with a global talent pool. TeamStation AI delivers nearshore pods with scientific vetting, managed devices, and enterprise-ready compliance designed for CTOs.",
  canonical: "https://cto.teamstation.dev/comparisons/andela",
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
  name: "TeamStation vs Andela",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "Andela is a global marketplace for engineering talent. TeamStation AI delivers nearshore pods with Axiom Cortex™ vetting, MDM-managed devices, and audit-ready compliance to accelerate secure delivery.",
    author: { "@type": "Organization", name: "TeamStation AI" },
  },
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Andela</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = nearshore integrated pods; Andela = global marketplace vendor.</li>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™ cognitive engine; Andela traditional screening & marketplace matching.</li>
            <li><strong>Devices:</strong> TeamStation = corporate-owned, MDM-managed laptops; Andela = BYOD/client-provided.</li>
            <li><strong>Compliance:</strong> TeamStation = EOR-native LATAM; Andela = country-by-country variable.</li>
            <li><strong>Fit:</strong> TeamStation = CTOs needing daylight pods with audit requirements; Andela = broad global candidate sourcing.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/bairesdev">Compare TeamStation vs BairesDev</Link></li>
              <li><Link href="/playbook/nearshore-vs-offshore">Playbook: Nearshore vs Offshore</Link></li>
              <li><Link href="/trust">Trust Center</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
