// src/lib/comparison-data.ts
import { VerdictRow } from "../../../../../../../../src/components/VerdictTable";

// --- 1. TYPE DEFINITIONS ---

export interface ComparisonClaim {
  metric: string;
  teamstationValue: string;
  competitorValue: string;
  context: string;
}

export interface ComparisonFaq {
  question: string;
  answer: string;
}

export interface ComparisonFactPack {
  vendorSlug: string;
  competitorName: string;
  title: string;
  meta: string;
  h1: string;
  keywords: string[];
  comparison_claims: ComparisonClaim[];
  verdict: any; // Keep for backward compatibility if needed
  faqs: ComparisonFaq[];
  internal_links: { text: string; url: string }[];
}

// --- 2. DYNAMIC DATA SIMULATION ---

const MOCK_SLUGS = ["bairesdev", "toptal", "globalsquad", "revelo"];

const MOCK_BAIREDEV_DATA: ComparisonFactPack = {
  vendorSlug: "bairesdev",
  competitorName: "BairesDev",
  title: "TeamStation AI vs. BairesDev: The CTO’s Definitive Verdict",
  meta: "A rigorous analysis for CTOs comparing TeamStation AI's Axiom Cortex™ Vetting against BairesDev's staff augmentation model. Optimize for throughput, not headcount.",
  h1: "TeamStation AI vs. BairesDev: Why Cognitive Alignment Beats Staff Augmentation",
  keywords: [
    "BairesDev alternative",
    "TeamStation vs BairesDev",
    "nearshore vs staff aug",
    "Axiom Cortex",
  ],
  verdict: {},
  internal_links: [],
  faqs: [
    {
      question:
        "What is the core difference between TeamStation and BairesDev?",
      answer:
        "TeamStation focuses on cognitive-first vetting to build high-throughput, aligned teams. BairesDev uses a traditional staff augmentation model focused on headcount.",
    },
    {
      question: "How does Axiom Cortex vetting work?",
      answer:
        "Axiom Cortex is a proprietary evaluation platform that measures problem-solving and learning agility, which are leading indicators of on-the-job success.",
    },
  ],
  comparison_claims: [
    {
      metric: "Vetting Methodology",
      teamstationValue: "Cognition-First (Axiom Cortex™)",
      competitorValue: "Traditional Resume/Interview Screen",
      context:
        "Axiom Cortex measures problem-solving and learning agility, reducing mis-hire risk by 6x compared to screens reliant on cultural fit or trivia. BairesDev uses standard, volume-based vetting.",
    },
  ],
};

// --- 3. DATA ACCESS FUNCTIONS ---

export async function getComparisonSlugs(): Promise<string[]> {
  return MOCK_SLUGS;
}

export async function getComparisonData(
  vendorSlug: string
): Promise<ComparisonFactPack | null> {
  if (vendorSlug === "bairesdev") return MOCK_BAIREDEV_DATA;

  const isMocked = MOCK_SLUGS.includes(vendorSlug);
  if (!isMocked) return null;

  return {
    ...MOCK_BAIREDEV_DATA, // Use as a template
    vendorSlug: vendorSlug,
    competitorName: vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1),
    h1: `TeamStation AI vs. ${
      vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1)
    }: Why We Win on Throughput`,
    title: `TeamStation AI vs. ${
      vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1)
    }: An Honest Comparison`,
    meta: `Is ${
      vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1)
    } the right choice? See how TeamStation AI's model compares on vetting, throughput, and security.`,
  };
}

// --- 4. DATA TRANSFORMATION & SCHEMA GENERATION ---

export function generateVerdictRows(verdictData: any): any[] {
  // Basic structural return to prevent build error
  return verdictData?.comparison_claims || [];
}

export function generateFaqSchema(faqs: any) {
  // Basic structural return for JSON-LD schema to prevent build error
  if (!faqs || faqs.length === 0) return {};
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
