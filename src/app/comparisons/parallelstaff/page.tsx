// src/app/comparisons/parallelstaff/page.tsx
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TeamStation vs ParallelStaff: Scientific Vetting vs Traditional Outsourcing",
  description:
    "ParallelStaff provides outsourcing services in LATAM. TeamStation AI provides integrated nearshore pods with cognitive vetting, MDM-managed devices, and verifiable SLAs.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/parallelstaff" },
  openGraph: {
    title: "TeamStation vs ParallelStaff: Nearshore Vendor Guide",
    description:
      "CTO-focused comparison: TeamStation AI’s compliance-native pods and evidence-driven hiring vs ParallelStaff’s staff augmentation services.",
    url: "https://cto.teamstation.dev/comparisons/parallelstaff",
    type: "article",
  },
  twitter: { card: "summary", title: "TeamStation vs ParallelStaff", description: "CTO-focused comparison: TeamStation AI’s compliance-native pods and evidence-driven hiring vs ParallelStaff’s staff augmentation services." },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation vs ParallelStaff",
  "description":
    "Detailed CTO comparison of TeamStation AI vs ParallelStaff, focused on compliance, device security, TCO, and scientific candidate vetting.",
  "brand": { "@type": "Organization", "name": "TeamStation AI" },
  "isSimilarTo": { "@type": "Organization", "name": "ParallelStaff" },
  "audience": { "@type": "Audience", "audienceType": "CTO, CIO, Engineering Leaders" },
  "url": "https://cto.teamstation.dev/comparisons/parallelstaff",
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> /
          <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> /
          <span>ParallelStaff</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{metadata.title as string}</h1>
          <p>{metadata.description}</p>
          <h2>Verdict Snapshot</h2>
          <ul>
            <li><strong>Model:</strong> TeamStation = platform pods; ParallelStaff = outsourcing vendor.</li>
            <li><strong>Vetting:</strong> TeamStation Axiom Cortex™; ParallelStaff = resume & interview.</li>
            <li><strong>Devices:</strong> TeamStation-managed laptops; ParallelStaff = varies.</li>
            <li><strong>Fit:</strong> TeamStation = enterprise CTOs; ParallelStaff = transactional outsourcing.</li>
          </ul>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3>Explore More:</h3>
            <ul>
              <li><Link href="/comparisons/coderslink">Compare TeamStation vs CodersLink</Link></li>
              <li><Link href="/playbook/hub">CTO Playbook Hub</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}