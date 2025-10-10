
// src/components/ServiceSchema.tsx
import { WithContext, Service } from 'schema-dts';
import { teamStationAI } from '@/lib/schema';

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  areaServed: string;
  url: string;
  name: string;
}

export default function ServiceSchema({ 
  serviceType,
  description,
  areaServed,
  url,
  name
}: ServiceSchemaProps) {
  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    serviceType: serviceType,
    description: description,
    url: `https://cto.teamstation.dev${url}`,
    provider: {
      '@type': 'Organization',
      name: teamStationAI.name as string,
      url: teamStationAI.url as string
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed
    },
    // A signal that this is a high-quality, professional service
    serviceOutput: {
      '@type': 'CreativeWork',
      description: 'Elite, fully-vetted nearshore software engineering talent provided as a managed service.'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
