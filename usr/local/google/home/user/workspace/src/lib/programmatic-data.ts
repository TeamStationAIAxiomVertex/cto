// src/lib/programmatic-data.ts

import { VerdictRow } from "../../../../../../../../src/components/VerdictTable";
import { v4 as uuidv4 } from "uuid";

// --- 1. TYPE DEFINITIONS ---

export type FaqItem = {
  q: string;
  a: string;
};

export type CountryFactPack = {
  slug: string;
  country: string;
  title: string;
  meta: string;
  h1: string;
  legal_note: string;
  salary_note: string;
  faqs: FaqItem[];
  internal_links: { url: string; text: string }[];
};

// Import ComparisonFactPack for the new function
import type { ComparisonFactPack } from "./comparison-data";

// --- 2. DYNAMIC DATA SIMULATION ---

const MOCK_SLUGS = ["mexico", "brazil", "colombia", "chile"];

const MOCK_DATA_MEXICO: CountryFactPack = {
  slug: "mexico",
  country: "Mexico",
  title: "Hire Software Developers in Mexico | TeamStation AI",
  meta: "Access top 1% nearshore software developers in Mexico. Use Axiom Cortex™ for unbiased vetting and Daylight PR flow for seamless collaboration.",
  h1: "Hire Elite Software Developers in Mexico (Daylight Overlap)",
  legal_note:
    "Hiring in Mexico requires careful navigation of labor laws and, depending on the service scope, attention to the REPSE registry. Our EOR partners ensure 100% compliance.",
  salary_note:
    "Senior engineering compensation in Mexico City and Guadalajara typically aligns with the top 25% of the US scale, offering exceptional value.",
  faqs: [],
  internal_links: [],
};

export async function getCountrySlugs(): Promise<string[]> {
  return MOCK_SLUGS;
}

export async function getCountryData(
  slug: string
): Promise<CountryFactPack | null> {
  if (slug === "mexico") return MOCK_DATA_MEXICO;
  const isMocked = MOCK_SLUGS.includes(slug);
  if (!isMocked) return null;
  return {
    ...MOCK_DATA_MEXICO,
    slug: slug,
    country: slug.charAt(0).toUpperCase() + slug.slice(1),
  };
}

// --- 3. SCHEMA & ROW GENERATORS ---

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function generateVerdictRows(data: CountryFactPack): VerdictRow[] {
  const countryName = data.country;
  return [
    {
      id: uuidv4(),
      criterion: "Talent Vetting Method",
      teamstationVerdict:
        "Cognitive-first Vetting via Axiom Cortex™ (Bias-Agnostic)",
      competitorVerdict:
        "Resume screening and ad-hoc technical trivia interviews.",
      isWinningRow: true,
    },
    {
      id: uuidv4(),
      criterion: "Time-to-Productivity",
      teamstationVerdict:
        "Typical first PR in <10 business days due to standardized onboarding and Daylight PR flow.",
      competitorVerdict:
        "Weeks 4-6 often focused on environment setup and alignment.",
      isWinningRow: true,
    },
    {
      id: uuidv4(),
      criterion: `Local Talent Sourcing in ${countryName}`,
      teamstationVerdict:
        "Access to 2.6M profiles via the Nebula Talent Graph (Passive and Active Talent)",
      competitorVerdict: "Reliance on public job boards and local recruiters.",
      isWinningRow: true,
    },
    {
      id: uuidv4(),
      criterion: "Security Compliance",
      teamstationVerdict:
        "One-SLA for EOR/Legal, Device MDM, and SSO/SAML integration on Day 1.",
      competitorVerdict:
        "Security is handled by the client; EOR is a separate, third-party vendor.",
    },
  ];
}

/**
 * NEW: Generates VerdictTable rows specifically for comparison pages.
 */
export function generateComparisonVerdictRows(
  data: ComparisonFactPack
): VerdictRow[] {
  return [
    {
      id: uuidv4(),
      criterion: "Talent Vetting Method",
      teamstationVerdict:
        "Cognitive-first Vetting via Axiom Cortex™ (Bias-Agnostic)",
      competitorVerdict:
        "Resume screening and ad-hoc technical trivia interviews.",
      isWinningRow: true,
    },
    {
      id: uuidv4(),
      criterion: "Time-to-Productivity",
      teamstationVerdict:
        "Typical first PR in <10 business days due to standardized onboarding and Daylight PR flow.",
      competitorVerdict:
        "Weeks 4-6 often focused on environment setup and alignment.",
      isWinningRow: true,
    },
    {
      id: uuidv4(),
      criterion: "Core Business Model",
      teamstationVerdict:
        "Cognitive Alignment & Managed Throughput via Axiom Cortex™",
      competitorVerdict: `Staff Augmentation & Headcount Billing`,
      isWinningRow: true,
    },
    {
      id: uuidv4(),
      criterion: "Security Compliance",
      teamstationVerdict:
        "One-SLA for EOR/Legal, Device MDM, and SSO/SAML integration on Day 1.",
      competitorVerdict:
        "Security is handled by the client; EOR is a separate, third-party vendor.",
    },
  ];
}
