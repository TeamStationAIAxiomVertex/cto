
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Nearsure: Nearshore Vendor Comparison",
  description:
    "CTO-focused comparison: TeamStation AI’s cognitive vetting, device security, and TCO model vs Nearsure’s staff augmentation services.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/nearsure" },
  openGraph: {
    title: "TeamStation vs Nearsure",
    description:
      "Compare TeamStation AI’s integrated nearshore platform against Nearsure’s staff augmentation model. Evidence, compliance, and predictable delivery.",
    url: "https://cto.teamstation.dev/comparisons/nearsure",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation vs Nearsure",
  "description":
    "Detailed CTO comparison of TeamStation AI vs Nearsure. Key differences in vetting, compliance, device security, and delivery SLAs.",
  "brand": { "@type": "Organization", "name": "TeamStation AI" },
  "isSimilarTo": { "@type": "Organization", "name": "Nearsure" },
  "audience": { "@type": "Audience", "audienceType": "CTO, CIO, Engineering Leaders" },
  "url": "https://cto.teamstation.dev/comparisons/nearsure",
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container py-12">
        <h1>TeamStation vs Nearsure: What CTOs Should Know</h1>
        <p>
          <strong>TeamStation AI</strong> vs <strong>Nearsure</strong>: discover
          how evidence-driven vetting, managed devices, and compliance-first
          operations compare to a traditional staff augmentation approach.
        </p>
      </main>
    </>
  );
}
