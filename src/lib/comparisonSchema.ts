
// src/lib/comparisonSchema.ts
export type ComparisonFAQ = {
  question: string;
  answer: string;
};

export function generateComparisonSchema({
  competitorName,
  competitorUrl,
  slug,
  faqs,
}: {
  competitorName: string;
  competitorUrl: string;
  slug: string;
  faqs: ComparisonFAQ[];
}) {
  const baseUrl = "https://cto.teamstation.dev";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Comparisons",
            "item": `${baseUrl}/comparisons`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${competitorName} vs TeamStation AI`,
            "item": `${baseUrl}/comparisons/${slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        "name": "TeamStation AI",
        "description":
          "AI-driven nearshore IT co-pilot with cognitive vetting, compliance, and predictable TCO.",
        "brand": {
          "@type": "Brand",
          "name": "TeamStation AI"
        },
        "url": baseUrl,
      },
      {
        "@type": "Product",
        "name": competitorName,
        "description": `${competitorName} is a traditional nearshore vendor alternative.`,
        "url": competitorUrl,
        "brand": {
          "@type": "Brand",
          "name": competitorName
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      },
    ],
  };
}
