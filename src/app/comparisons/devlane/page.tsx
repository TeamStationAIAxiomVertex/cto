import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Devlane: Nearshore Staff Aug Comparison",
  description:
    "Compare TeamStation AI’s integrated, compliance-first nearshore platform vs Devlane’s staff augmentation services. CTO guide to outcomes and TCO.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/devlane" },
  openGraph: {
    title: "TeamStation vs Devlane",
    description:
      "CTO comparison of TeamStation AI vs Devlane. Evidence-driven vetting, compliance, and secure devices vs traditional staff augmentation.",
    url: "https://cto.teamstation.dev/comparisons/devlane",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation vs Devlane",
  "description":
    "Detailed CTO comparison of TeamStation AI vs Devlane. Covers compliance, device security, cognitive vetting, and TCO transparency.",
  "brand": { "@type": "Organization", "name": "TeamStation AI" },
  "isSimilarTo": { "@type": "Organization", "name": "Devlane" },
  "audience": { "@type": "Audience", "audienceType": "CTO, CIO, Engineering Leaders" },
  "url": "https://cto.teamstation.dev/comparisons/devlane",
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container py-12">
        <h1>TeamStation vs Devlane</h1>
        <p>
          A CTO’s evaluation of <strong>TeamStation AI</strong> vs{" "}
          <strong>Devlane</strong>. See how cognitive vetting and compliance
          wrappers outperform legacy augmentation models.
        </p>
      </main>
    </>
  );
}
