import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs KMS Technology: CTO Comparison",
  description:
    "CTO comparison of TeamStation AI’s nearshore AI-driven platform vs KMS Technology’s outsourcing model. Focus on evidence, compliance, and TCO.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/kms" },
  openGraph: {
    title: "TeamStation vs KMS Technology: CTO Comparison",
    description:
      "Evidence-driven CTO guide: TeamStation AI’s integrated pods and compliance vs KMS Technology outsourcing. Learn differences in control and outcomes.",
    url: "https://cto.teamstation.dev/comparisons/kms",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation vs KMS Technology",
  "description":
    "CTO comparison of TeamStation AI’s integrated nearshore platform vs KMS Technology outsourcing. Includes compliance, evidence-based hiring, and delivery SLAs.",
  "brand": { "@type": "Organization", "name": "TeamStation AI" },
  "isSimilarTo": { "@type": "Organization", "name": "KMS Technology" },
  "audience": { "@type": "Audience", "audienceType": "CTO, CIO, Engineering Leaders" },
  "url": "https://cto.teamstation.dev/comparisons/kms",
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container py-12">
        <h1>TeamStation vs KMS Technology</h1>
        <p>
          <strong>TeamStation AI</strong> vs <strong>KMS Technology</strong>: a
          side-by-side analysis for CTOs. Compare security, vetting rigor, and
          TCO transparency.
        </p>
      </main>
    </>
  );
}
