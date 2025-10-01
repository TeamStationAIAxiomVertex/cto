
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const pageInfo = {
  slug: "nearsure",
  title: "TeamStation vs Nearsure: Cognitive Vetting vs Resume Matching",
  description:
    "Nearsure provides LATAM engineers through staff augmentation. TeamStation AI delivers integrated pods with scientific vetting, managed devices, and enterprise-ready compliance.",
  canonical: "https://cto.teamstation.dev/comparisons/nearsure",
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
  name: "TeamStation vs Nearsure",
  description: pageInfo.description,
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: pageInfo.canonical,
  review: {
    "@type": "Review",
    reviewBody:
      "Nearsure offers staff augmentation in LATAM. TeamStation AI provides measurable outcomes with Axiom Cortex™ vetting, managed devices, and single-SLA compliance.",
    author: { "@type": "Organization", name: "TeamStation AI" },
  },
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Nearsure</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = integrated pods; Nearsure = staff augmentation vendor.</li>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™; Nearsure = resume/interview.</li>
            <li><strong>Devices:</strong> TeamStation corporate-owned/MDM-managed; Nearsure BYOD or client-supplied.</li>
            <li><strong>Compliance:</strong> TeamStation = audit-ready EOR; Nearsure varies by engagement.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/kms">Compare TeamStation vs KMS Technology</Link></li>
              <li><Link href="/playbook/bias-free-technical-hiring-axiom-cortex">Bias-Free Hiring Playbook</Link></li>
              <li><Link href="/trust">Trust Center</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
