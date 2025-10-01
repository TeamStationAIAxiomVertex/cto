
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs Terminal: CTO Nearshore Comparison",
  description:
    "Compare TeamStation AI’s integrated compliance, secure devices, and cognitive vetting with Terminal’s remote hiring model. A CTO’s guide to outcomes.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/terminal" },
  openGraph: {
    title: "TeamStation vs Terminal: CTO Nearshore Comparison",
    description:
      "CTO comparison of TeamStation AI’s integrated platform vs Terminal’s remote hiring services. Focus: vetting, compliance, and TCO.",
    url: "https://cto.teamstation.dev/comparisons/terminal",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation vs Terminal",
  "description":
    "CTO comparison of TeamStation AI vs Terminal, focused on compliance, device security, cognitive vetting, and operational SLAs.",
  "brand": { "@type": "Organization", "name": "TeamStation AI" },
  "isSimilarTo": { "@type": "Organization", "name": "Terminal" },
  "audience": { "@type": "Audience", "audienceType": "CTO, CIO, Engineering Leaders" },
  "url": "https://cto.teamstation.dev/comparisons/terminal",
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container py-12">
        <h1>TeamStation vs Terminal: CTO Guide</h1>
        <p>
          This comparison analyzes <strong>TeamStation AI</strong> vs{" "}
          <strong>Terminal</strong>, showing differences in speed, compliance,
          and evidence-driven hiring so CTOs can choose confidently.
        </p>
      </main>
    </>
  );
}
