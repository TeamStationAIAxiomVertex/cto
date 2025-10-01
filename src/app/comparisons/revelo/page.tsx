// Revelo Comparison Page
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Revelo: A CTO’s Guide | TeamStation AI",
  description:
    "CTO comparison: TeamStation AI vs Revelo. Assessing vetting, devices, compliance, SLAs, and total cost of ownership.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/revelo" },
  openGraph: {
    title: "TeamStation vs Revelo: A CTO’s Guide",
    description: "Evidence-driven breakdown of TeamStation AI vs Revelo for CTOs choosing nearshore IT staff augmentation.",
    url: "https://cto.teamstation.dev/comparisons/revelo",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Revelo: A CTO’s Guide",
    description: "Side-by-side analysis of TeamStation AI vs Revelo for secure, compliant nearshore engineering.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs Revelo: A CTO’s Guide",
  "description":
    "CTO comparison of TeamStation AI vs Revelo. Evidence-driven breakdown across vetting, compliance, devices, SLAs, and TCO.",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cto.teamstation.dev/comparisons/revelo" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does TeamStation AI compare to Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo operates as a talent marketplace connecting U.S. companies to Latin American developers. TeamStation AI goes further by combining cognitive-science vetting, corporate-owned secure devices, and audit-ready compliance into an integrated platform. That means less manual overhead and more predictable outcomes for CTOs."
      }
    },
    {
      "@type": "Question",
      "name": "Does TeamStation AI offer faster onboarding than Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. With environments ready, TeamStation AI targets a first PR within 10 business days. Revelo provides access to candidates but onboarding speed depends on client processes and the absence of a managed operations layer."
      }
    },
    {
      "@type": "Question",
      "name": "Which is more cost-effective: TeamStation AI or Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo charges marketplace fees per engineer and leaves compliance/device overhead to clients. TeamStation AI bundles talent, compliance, and device security into a single rate, often delivering a 40–60% lower true TCO after factoring hidden costs."
      }
    },
    {
      "@type": "Question",
      "name": "What about compliance and devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation AI provides REPSE-aware EOR coverage in Mexico, handles payroll and HR compliance across 10+ LATAM countries, and equips every engineer with an MDM-managed device. Revelo typically leaves devices and compliance up to the client."
      }
    },
    {
      "@type": "Question",
      "name": "When is Revelo a better fit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo is suitable for companies that want to self-manage onboarding, compliance, and IT security but need access to a wide funnel of LATAM talent. TeamStation AI is best when CTOs want speed, control, and enterprise readiness built in."
      }
    }
  ]
};

export default function ComparisonPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={[schema, faqSchema]} />
      <div className="text-sm mb-8">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / <span>Revelo</span>
      </div>
      <h1>TeamStation vs Revelo: A CTO’s Guide</h1>
      <p>Compare <strong>TeamStation AI</strong> vs <strong>Revelo</strong> across vetting, compliance, devices, SLAs, and TCO.</p>
    </main>
  );
}
