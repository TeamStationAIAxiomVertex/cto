// src/components/ScholarlyArticleSchema.tsx
import { teamStationAI } from "@/lib/schema";

type JsonLdRecord = Record<string, unknown>;

interface ScholarlyArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  authorName: string;
  authorUrl?: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  about?: string[];
  citations?: string[];
}

export default function ScholarlyArticleSchema({
  title,
  description,
  url,
  authorName,
  authorUrl,
  datePublished,
  dateModified,
  keywords,
  about,
  citations,
}: ScholarlyArticleSchemaProps) {
  const absoluteUrl = `https://cto.teamstation.dev${url}`;
  const topicKeywords =
    keywords && keywords.length > 0
      ? keywords
      : [title, "nearshore software engineering", "CTO research", "technical evaluation"];

  const schema: JsonLdRecord = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: title,
    description: description,
    url: absoluteUrl,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl && { url: authorUrl }),
    },
    publisher: {
      "@type": "Organization",
      name: teamStationAI.name as string,
      logo: {
        "@type": "ImageObject",
        url: "https://teamstation.dev/logo.svg",
      },
    },
    datePublished: datePublished,
    dateModified: dateModified ?? datePublished,
    keywords: topicKeywords,
    // We are linking this scholarly work directly to the main Organization.
    // This builds the interconnected graph.
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl,
    },
    isPartOf: {
      "@type": "CollectionPage",
      "@id": "https://cto.teamstation.dev/research/hub",
      name: "TeamStation AI Research Hub",
      url: "https://cto.teamstation.dev/research/hub",
    },
    about: (about && about.length > 0 ? about : topicKeywords.slice(0, 4)).map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
    ...(citations && citations.length > 0
      ? {
          citation: citations.map((citation) => ({
            "@type": "CreativeWork",
            name: citation,
          })),
        }
      : {}),
    // And we state who funded this important research.
    funder: {
      "@type": "Organization",
      name: teamStationAI.name as string,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
