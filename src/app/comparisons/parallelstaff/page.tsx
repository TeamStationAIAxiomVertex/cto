// src/app/comparisons/parallelstaff/page.tsx
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "TeamStation vs ParallelStaff: Nearshore Vendor Guide",
  description:
    "Compare TeamStation AI’s integrated platform—cognitive vetting, secure MDM devices, and compliance—with ParallelStaff’s staff augmentation model.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/parallelstaff" },
  openGraph: {
    title: "TeamStation vs ParallelStaff: Nearshore Vendor Guide",
    description:
      "CTO-focused comparison: TeamStation AI’s compliance-native pods and evidence-driven hiring vs ParallelStaff’s staff augmentation services.",
    url: "https://cto.teamstation.dev/comparisons/parallelstaff",
    type: "article",
  },
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

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container py-12">
        <h1>TeamStation vs ParallelStaff</h1>
        <p>
          A CTO’s guide comparing <strong>TeamStation AI</strong> and{" "}
          <strong>ParallelStaff</strong>. See how cognitive AI vetting,
          integrated compliance, and secure devices compare to traditional
          staff augmentation.
        </p>
      </main>
    </>
  );
}
