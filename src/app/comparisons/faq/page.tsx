
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "CTO Comparison FAQ | TeamStation AI",
  description:
    "Answers to CTO questions about comparing TeamStation AI with BairesDev, Globant, Toptal, Revelo, Andela, and more. Evidence, compliance, and TCO clarity.",
  alternates: { canonical: "https://cto.teamstation.dev/comparisons/faq" },
  openGraph: {
    title: "CTO Comparison FAQ | TeamStation AI",
    description:
      "High-intent FAQ for CTOs evaluating TeamStation AI vs. top nearshore vendors. Covering vetting, compliance, SLAs, and TCO.",
    url: "https://cto.teamstation.dev/comparisons/faq",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CTO Comparison FAQ | TeamStation AI",
    description:
      "Get answers to CTOs’ most common questions when comparing TeamStation AI to nearshore vendors like BairesDev, Globant, and Toptal.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      name: "Why should CTOs compare TeamStation AI to vendors like BairesDev or Globant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because legacy vendors sell resumes, while TeamStation AI delivers a fully integrated platform. CTOs need visibility into cognitive vetting, device security, and compliance — not just hourly rates.",
      },
    },
    {
      "@type": "Question",
      name: "How does Axiom Cortex™ reduce mis-hire risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our cognitive AI evaluates how engineers think, not just what they claim. It reduces false positives by over 90%, providing an auditable 'Cognitive Fingerprint' instead of relying on resume theater.",
      },
    },
    {
      "@type": "Question",
      name: "What compliance advantages does TeamStation AI offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide corporate-owned, MDM-managed devices, SSO/SCIM from day one, and REPSE-aware Employer of Record services across LATAM. This ensures enterprise audit readiness out of the box.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference in TCO compared to traditional staff augmentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional vendors hide costs in vendor management, compliance gaps, and rework. TeamStation AI provides a predictable, all-inclusive TCO that’s often 40–60% lower when factoring in velocity and compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can we trial a pod before committing long-term?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many clients start with a 3–6 month engagement focused on a specific outcome. This lets you validate cadence, security posture, and cost efficiency before scaling further.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor model is better for large-scale hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you need massive resume funnels and already have HR, IT, and compliance handled in-house, large vendors may work. If you need velocity, security, and CFO-ready reporting, TeamStation AI is designed for you.",
      },
    },
  ],
};

export default function ComparisonFAQPage() {
  return (
    <main className="container max-w-4xl py-12 prose dark:prose-invert">
      <JsonLd data={faqSchema} />

      <h1>CTO Comparison FAQ</h1>
      <p>
        Common questions CTOs ask when evaluating TeamStation AI against nearshore vendors like{" "}
        <strong>BairesDev</strong>, <strong>Globant</strong>, <strong>Toptal</strong>, and others.
        These FAQs focus on vetting, compliance, SLAs, and total cost of ownership.
      </p>

      <h2>Frequently Asked Questions</h2>
      <dl>
        {faqSchema.mainEntity.map((q, i) => (
          <div key={i} className="mb-6">
            <dt className="font-semibold">{q.name}</dt>
            <dd className="mt-2 text-muted-foreground">{q.acceptedAnswer.text}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
