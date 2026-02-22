import { teamStationAI } from "@/lib/schema";

type JsonLdRecord = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  item: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function createWebPageSchema(input: {
  name: string;
  description: string;
  url: string;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: "https://cto.teamstation.dev",
    publisher: {
      "@type": "Organization",
      name: "TeamStation AI",
      url: "https://teamstation.dev",
    },
  };
}

export function createServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.serviceType ?? input.name,
    areaServed: "United States",
    provider: {
      "@type": "Organization",
      name: "TeamStation AI",
      url: "https://teamstation.dev",
    },
  };
}

export function createFaqSchema(
  items: Array<{ q: string; a: string }>
): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function createArticleSchema(input: {
  type?: "Article" | "ScholarlyArticle";
  headline: string;
  description: string;
  url: string;
  dateModified: string;
  authorName: string;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    headline: input.headline,
    description: input.description,
    url: input.url,
    dateModified: input.dateModified,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "TeamStation AI",
      url: "https://teamstation.dev",
    },
  };
}

export function getOrganizationSchema(): JsonLdRecord {
  return teamStationAI as unknown as JsonLdRecord;
}

