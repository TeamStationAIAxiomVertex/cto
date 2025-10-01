
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nearshore Vendor Comparisons | TeamStation AI",
  description:
    "CTO comparison hub: TeamStation AI vs BairesDev, Globant, Toptal, Revelo, Andela, Terminal, ParallelStaff, Nearsure, TECLA, Unosquare, Deel, and New-Gen Nearshore. Evidence-based, research-backed, and CFO-ready.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons" },
  openGraph: {
    title: "Nearshore Vendor Comparisons | TeamStation AI",
    description:
      "Compare TeamStation AI against 12 top vendors (BairesDev, Globant, Toptal, Andela, Revelo, Terminal, Nearsure, ParallelStaff, TECLA, Unosquare, Deel, New-Gen). Evidence-driven CTO resource.",
    url: "https://cto.teamstation.dev/comparisons",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nearshore Vendor Comparisons | TeamStation AI",
    description:
      "CTO hub comparing TeamStation AI to BairesDev, Globant, Toptal, Andela, and more. Secure, evidence-driven, CFO-ready analysis.",
  },
};

const vendors = [
  { name: "BairesDev", slug: "bairesdev" },
  { name: "Globant", slug: "globant" },
  { name: "Toptal", slug: "toptal" },
  { name: "Andela", slug: "andela" },
  { name: "Revelo", slug: "revelo" },
  { name: "Terminal", slug: "terminal" },
  { name: "Nearsure", slug: "nearsure" },
  { name: "ParallelStaff", slug: "parallelstaff" },
  { name: "TECLA", slug: "tecla" },
  { name: "Unosquare", slug: "unosquare" },
  { name: "Deel", slug: "deel" },
  { name: "New-Gen Nearshore", slug: "new-gen-nearshore" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Nearshore Vendor Comparisons",
  "itemListElement": vendors.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `TeamStation vs ${v.name}`,
    url: `https://cto.teamstation.dev/comparisons/${v.slug}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      name: "Why does TeamStation AI publish vendor comparisons?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "CTOs need transparent evidence before choosing a nearshore partner. TeamStation AI provides side-by-side comparisons of major vendors like BairesDev, Globant, Revelo, TECLA, Unosquare, and Toptal so leaders can make decisions based on data, not marketing promises."
      }
    },
    {
      "@type": "Question",
      name: "How is TeamStation AI different from vendors like BairesDev or Globant?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Unlike staff augmentation vendors, TeamStation AI is an integrated platform. It combines Axiom Cortex™ cognitive vetting, MDM-managed devices, EOR compliance across 10+ LATAM countries, and telemetry for real delivery outcomes—so you can validate security, velocity, and cost predictability."
      }
    },
    {
      "@type": "Question",
      name: "Which vendors are compared on this page?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "We cover head-to-head comparisons against BairesDev, Globant, Revelo, TECLA, Unosquare, Toptal, Andela, Nearsure, ParallelStaff, Terminal, CodersLink, and more. Each page provides a detailed verdict table on vetting, time-to-PR, compliance, and pricing posture."
      }
    },
    {
      "@type": "Question",
      name: "What should CTOs look for when choosing a nearshore partner?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Beyond hourly rates, CTOs should demand evidence of delivery velocity, audit-ready compliance, secure device posture, and true daylight overlap. TeamStation AI publishes a Total Cost of Ownership (TCO) model and peer-reviewed research to help quantify these factors."
      }
    },
    {
      "@type": "Question",
      name: "Can I see proof of TeamStation AI’s research?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Yes. Our research is published on SSRN and indexed by Google Scholar. Papers include the Axiom Cortex™ scientific report, frameworks for measuring engineering capacity, and peer-reviewed methods for bias-free hiring. Links are available in the Research Hub."
      }
    }
  ]
};

export default function ComparisonHubPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />

      <h1>Nearshore Vendor Comparisons</h1>
      <p>
        This hub helps CTOs evaluate TeamStation AI against the top nearshore vendors. Every page uses
        the <strong>Sandler PSP</strong> method (Problem, Stakes, Prescription, Proof) so you can see
        evidence, not just marketing claims.
      </p>

      <ul>
        {vendors.map((v) => (
          <li key={v.slug}>
            <Link href={`/comparisons/${v.slug}`} className="text-primary hover:underline">
              TeamStation vs {v.name}
            </Link>
          </li>
        ))}
      </ul>
      <nav className="mt-12 border-t border-border pt-6 text-sm">
        <h3>Related Resources:</h3>
        <ul>
            <li>
              <Link href="/comparisons/faq" className="text-primary hover:underline">
                Comparison FAQ
              </Link>
            </li>
            <li><Link href="/playbook/tco-model">Playbook: TCO Model</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
        </ul>
      </nav>
    </main>
  );
}
