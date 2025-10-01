
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "tecla",
  title: "TeamStation vs TECLA: Platform vs Network",
  description:
    "TECLA provides a curated LATAM network. TeamStation AI offers a scientific, audit-ready platform for CTOs demanding velocity, compliance, and data-driven vetting.",
  canonical: "https://cto.teamstation.dev/comparisons/tecla",
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
  name: "TeamStation vs TECLA",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "TECLA connects clients with a curated network of LATAM engineers. TeamStation AI provides integrated scientific vetting, managed devices, and EOR compliance, delivering lower TCO and faster ramp.",
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
          <span>TECLA</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™ vs TECLA curated profiles.</li>
            <li><strong>Compliance:</strong> TeamStation EOR-native compliance; TECLA depends on client setup.</li>
            <li><strong>Devices:</strong> TeamStation managed devices; TECLA leaves hardware to client.</li>
            <li><strong>Velocity:</strong> TeamStation ≤10 days to first PR; TECLA depends on client processes.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/unosquare">Compare TeamStation vs Unosquare</Link></li>
              <li><Link href="/comparisons/bairesdev">Compare TeamStation vs BairesDev</Link></li>
              <li><Link href="/playbook/hub">Playbook Hub</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
