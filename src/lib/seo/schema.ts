import { teamStationAI } from "@/lib/schema";

type JsonLdRecord = Record<string, unknown>;

const SITE_URL = "https://cto.teamstation.dev";
const ORG_URL = "https://teamstation.dev";
const LOGO_URL = `${ORG_URL}/logo.svg`;

const publisherRef = {
  "@type": "Organization",
  name: "TeamStation AI",
  url: ORG_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};

const audienceCtoRef = {
  "@type": "Audience",
  audienceType: "Chief Technology Officer, Chief Information Officer, VP of Engineering",
};

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
  speakable?: boolean;
  dateModified?: string;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "TeamStation AI CTO Playbook" },
    publisher: publisherRef,
    audience: audienceCtoRef,
    ...(input.dateModified && { dateModified: input.dateModified }),
    ...(input.speakable && {
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
    }),
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
    "@type": "ProfessionalService",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.serviceType ?? input.name,
    inLanguage: "en-US",
    areaServed: { "@type": "Country", name: "United States" },
    audience: audienceCtoRef,
    provider: publisherRef,
  };
}

export function createFaqSchema(
  items: Array<{ q: string; a: string }>
): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en-US",
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
  datePublished?: string;
  authorName?: string;
  image?: string;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    headline: input.headline,
    description: input.description,
    url: input.url,
    inLanguage: "en-US",
    dateModified: input.dateModified,
    datePublished: input.datePublished ?? input.dateModified,
    author: {
      "@type": "Organization",
      name: input.authorName ?? "TeamStation AI Research and Editorial Team",
      url: ORG_URL,
    },
    publisher: publisherRef,
    audience: audienceCtoRef,
    ...(input.image && {
      image: { "@type": "ImageObject", url: input.image },
    }),
  };
}

export function getOrganizationSchema(): JsonLdRecord {
  return teamStationAI as unknown as JsonLdRecord;
}
