
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TeamStation vs Andela: Nearshore IT Co-Pilot vs Global Talent Network",
  description:
    "Compare TeamStation AI’s cognitive vetting, secure MDM devices, and CFO-ready TCO against Andela’s global talent marketplace. Evidence-driven results for CTOs.",
  alternates: {
    canonical: "https://cto.teamstation.dev/comparisons/andela",
  },
  openGraph: {
    title: "TeamStation vs Andela | Evidence-Driven Nearshore IT Co-Pilot",
    description:
      "Which delivers faster, more secure engineering outcomes? TeamStation AI integrates Axiom Cortex™ vetting, EOR compliance, and MDM security vs Andela’s marketplace model.",
    url: "https://cto.teamstation.dev/comparisons/andela",
    siteName: "TeamStation AI",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "TeamStation vs Andela: What Ships Faster?",
    description:
      "A CTO’s guide to choosing between an integrated platform vs a global talent network. Evidence, not marketing claims.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TeamStation vs Andela Comparison",
  description:
    "An evidence-driven comparison of TeamStation AI and Andela for CTOs evaluating nearshore IT staff augmentation vs global talent networks.",
  brand: {
    "@type": "Organization",
    name: "TeamStation AI",
    url: "https://cto.teamstation.dev",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "TeamStation AI Research",
    },
  },
  url: "https://cto.teamstation.dev/comparisons/andela",
  isSimilarTo: {
    "@type": "Organization",
    name: "Andela",
    url: "https://andela.com",
  },
};

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-6">
          TeamStation vs Andela: What Ships Faster?
        </h1>
        <p className="mb-6 text-muted-foreground">
          CTOs often weigh Andela’s global talent marketplace against
          TeamStation AI’s integrated nearshore platform. This page provides
          evidence, not marketing claims—so you can decide with data.
        </p>
        <nav className="mt-12 border-t border-border pt-6 text-sm">
          <h3 className="font-semibold text-foreground">Explore More:</h3>
          <ul className="list-none p-0 space-y-2">
            <li>
              <Link
                href="/playbook/nearshore-vs-offshore"
                className="text-primary hover:underline"
              >
                Playbook: Nearshore vs Offshore
              </Link>
            </li>
            <li>
              <Link
                href="/research/hub"
                className="text-primary hover:underline"
              >
                Research Hub
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-primary hover:underline"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
