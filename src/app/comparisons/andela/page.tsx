import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Andela: Nearshore IT Comparison | CTO Playbook",
  description:
    "Compare TeamStation AI’s cognitive vetting, compliance-first model, and device management against Andela’s global marketplace. Built for CTOs demanding outcomes.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/andela" },
  openGraph: {
    title: "TeamStation vs Andela: Nearshore IT Comparison",
    description:
      "CTO-focused comparison: evidence-driven hiring, security, and SLAs vs Andela’s global talent marketplace.",
    url: "https://cto.teamstation.dev/comparisons/andela",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation vs Andela",
  "description":
    "CTO comparison of TeamStation AI vs Andela. Key differences in vetting, compliance, devices, and total cost of ownership.",
  "brand": { "@type": "Organization", "name": "TeamStation AI" },
  "isSimilarTo": { "@type": "Organization", "name": "Andela" },
  "audience": { "@type": "Audience", "audienceType": "CTO, CIO, Engineering Leaders" },
  "url": "https://cto.teamstation.dev/comparisons/andela",
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container py-12">
        <h1>TeamStation vs Andela: Which Model Delivers Faster?</h1>
        <p>
          This page compares <strong>TeamStation AI</strong> and <strong>Andela</strong>, analyzing
          evidence, compliance, and operational outcomes so CTOs can decide with confidence.
        </p>
      </main>
    </>
  );
}