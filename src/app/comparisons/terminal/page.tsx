// src/app/comparisons/terminal/page.tsx
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TeamStation vs Terminal: Nearshore Pods vs Remote HR Infrastructure",
  description:
    "Terminal provides HR and infrastructure for distributed teams. TeamStation AI delivers integrated nearshore pods with scientific vetting, MDM devices, and enterprise-grade compliance.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/terminal" },
  openGraph: {
    title: "TeamStation vs Terminal: Nearshore Pods vs Remote HR Infrastructure",
    description:
      "Terminal provides HR and infrastructure for distributed teams. TeamStation AI delivers integrated nearshore pods with scientific vetting, MDM devices, and enterprise-grade compliance.",
    url: "https://cto.teamstation.dev/comparisons/terminal",
    type: "article",
  },
  twitter: { card: "summary", title: "TeamStation vs Terminal", description: "Terminal provides HR and infrastructure for distributed teams. TeamStation AI delivers integrated nearshore pods with scientific vetting, MDM devices, and enterprise-grade compliance." },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TeamStation vs Terminal",
  description: "Terminal provides HR and infrastructure for distributed teams. TeamStation AI delivers integrated nearshore pods with scientific vetting, MDM devices, and enterprise-grade compliance.",
  brand: { "@type": "Organization", name: "TeamStation AI" },
  url: "https://cto.teamstation.dev/comparisons/terminal",
  review: {
    "@type": "Review",
    reviewBody:
      "Terminal offers HR and workspace infrastructure for distributed teams. TeamStation AI instead provides audit-ready LATAM pods with cognitive vetting, managed devices, and single-SLA compliance.",
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
          <span>Terminal</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{metadata.title as string}</h1>
          <p>{metadata.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = pods + ops wrapper; Terminal = HR + office infra.</li>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™; Terminal leaves vetting to clients.</li>
            <li><strong>Devices:</strong> TeamStation-managed laptops; Terminal = client responsibility.</li>
            <li><strong>Compliance:</strong> TeamStation = REPSE/EOR native; Terminal = HR frameworks.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/parallelstaff">Compare TeamStation vs ParallelStaff</Link></li>
              <li><Link href="/playbook/tco-model">Playbook: TCO Model</Link></li>
              <li><Link href="/trust">Trust Center</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}