
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
      name: "Why compare TeamStation AI to other nearshore vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because legacy vendors sell hours, not outcomes. CTOs need evidence on vetting, compliance, device security, and predictable TCO. These comparisons expose differences so you can make data-driven decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How is TeamStation AI different from staff augmentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Staff augmentation vendors provide resumes. TeamStation AI delivers an integrated platform with Axiom Cortex™ vetting, corporate-owned MDM devices, EOR compliance, and SLAs. It replaces opacity with measurable proof.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor is the best fit for my company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your needs. If you want pure volume of resumes, large vendors may fit. If you want velocity, audit-ready compliance, and CFO-defensible TCO, TeamStation AI is designed for you.",
      },
    },
  ],
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
