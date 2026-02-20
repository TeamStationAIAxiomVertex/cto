
import { allComparisonData } from '@/data/comparisons';

export const comparisonPages = [
  { name: "BairesDev", slug: "bairesdev", url: "https://www.bairesdev.com" },
  { name: "Globant", slug: "globant", url: "https://www.globant.com" },
  { name: "Revelo", slug: "revelo", url: "https://www.revelo.com" },
  { name: "TECLA", slug: "tecla", url: "https://www.tecla.io" },
  { name: "Toptal", slug: "toptal", url: "https://www.toptal.com" },
  { name: "Unosquare", slug: "unosquare", url: "https://www.unosquare.com" },
  { name: "Andela", slug: "andela", url: "https://www.andela.com" },
  { name: "Terminal", slug: "terminal", url: "https://terminal.io" },
  { name: "Nearsure", slug: "nearsure", url: "https://nearsure.com" },
  { name: "ParallelStaff", slug: "parallelstaff", url: "https://parallelstaff.com" },
  { name: "CodersLink", slug: "coderslink", url: "https://coderslink.com" },
  { name: "KMS", slug: "kms", url: "https://kms-technology.com" },
  { name: "Devlane", slug: "devlane", url: "https://devlane.com" },
  { name: "New-Gen Nearshore", slug: "new-gen-nearshore", url: "https://teamstation.dev" },
];

type ComparisonPageData = {
  vendorName: string;
  h1: string;
  intro: string;
  pageSEO: {
    title: string;
    description: string;
    canonical: string;
  };
  verdict: {
    title: string;
    competitorName: string;
    rows: Array<{
      id: string;
      criterion: string;
      teamstationVerdict: string;
      competitorVerdict: string;
      isWinningRow: boolean;
    }>;
  };
};

function buildFallbackComparisonPage(slug: string): ComparisonPageData | undefined {
  const meta = comparisonPages.find((page) => page.slug === slug);
  if (!meta) return undefined;

  const vendorName = meta.name;
  const canonical = `https://cto.teamstation.dev/comparisons/${slug}`;

  return {
    vendorName,
    h1: `TeamStation vs. ${vendorName}: A CTO-Level Comparison`,
    intro:
      `A strategic comparison of TeamStation AI and ${vendorName} across vetting, security, delivery velocity, and total cost of ownership.`,
    pageSEO: {
      title: `TeamStation vs ${vendorName} | Comparison`,
      description: `See how TeamStation AI compares to ${vendorName} on vetting, security, and engineering throughput.`,
      canonical,
    },
    verdict: {
      title: `Verdict: TeamStation vs. ${vendorName}`,
      competitorName: vendorName,
      rows: [
        {
          id: "vetting",
          criterion: "Vetting & Expertise",
          teamstationVerdict:
            "Axiom Cortex™ platform for deep architectural and problem-solving skills.",
          competitorVerdict: `${vendorName} screening based on resumes and standard interviews.`,
          isWinningRow: true,
        },
        {
          id: "security",
          criterion: "Security & Compliance",
          teamstationVerdict:
            "Integrated security, compliance, and device management in a single SLA.",
          competitorVerdict: "Security controls depend on client-side implementation.",
          isWinningRow: true,
        },
        {
          id: "throughput",
          criterion: "Delivery Throughput",
          teamstationVerdict: "Engineered pods optimized for Daylight PR Flow.",
          competitorVerdict: "Time-zone overlap varies by staffing model.",
          isWinningRow: true,
        },
        {
          id: "tco",
          criterion: "Total Cost of Ownership",
          teamstationVerdict:
            "Lower hidden costs through better vetting, retention, and security posture.",
          competitorVerdict: "Competitive rates, but higher risk of hidden costs.",
          isWinningRow: false,
        },
      ],
    },
  };
}

export function getComparisonPage(slug: string) {
  return allComparisonData[slug] ?? buildFallbackComparisonPage(slug);
}
