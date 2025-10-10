
// src/components/ScholarlyArticleSchema.tsx
import { WithContext, ScholarlyArticle } from 'schema-dts';
import { teamStationAI } from '@/lib/schema';

interface ScholarlyArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  authorName: string;
  authorUrl?: string;
  datePublished: string;
}

export default function ScholarlyArticleSchema({ 
  title,
  description,
  url,
  authorName,
  authorUrl,
  datePublished 
}: ScholarlyArticleSchemaProps) {
  const schema: WithContext<ScholarlyArticle> = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: title,
    description: description,
    url: `https://cto.teamstation.dev${url}`,
    author: {
      '@type': 'Person',
      name: authorName,
      ...(authorUrl && { url: authorUrl })
    },
    publisher: {
        '@type': 'Organization',
        name: teamStationAI.name as string,
        logo: {
            '@type': 'ImageObject',
            url: teamStationAI.logo as string
        }
    },
    datePublished: datePublished,
    // We are linking this scholarly work directly to the main Organization.
    // This builds the interconnected graph.
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cto.teamstation.dev${url}`,
    },
    // And we state who funded this important research.
    funder: {
      '@type': 'Organization',
      name: teamStationAI.name as string
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
