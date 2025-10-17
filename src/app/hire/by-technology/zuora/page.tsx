
import { Metadata } from 'next';
import {furtherReading, sandler} from "@/lib/seo-data";
import { JsonLd } from '@/components/seo/JsonLd';
import { getHirePageContent } from '@/lib/programmatic-data';
import {SandlerPSP} from "@/components/seo/SandlerPSP";
import {FurtherReading} from "@/components/seo/FurtherReading";
import {ProgrammaticContent} from "@/components/ProgrammaticContent";
import {ServiceSchema} from "@/components/ServiceSchema";
import { PlaybookAuthor } from '@/components/PlaybookAuthor';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Hire Elite Zuora Developers | TeamStation",
  description: "Build a scalable subscription platform with top-tier, nearshore Zuora developers. Our One-SLA model de-risks hiring and ensures expert integration.",
};

const ZUORA_PAGE_CONTENT = getHirePageContent('zuora');

const sandlerProps = {
  ...sandler.hire,
  areas: sandler.hire.areas.zuora,
};

const furtherReadingProps = {
  ...furtherReading.hire,
  areas: furtherReading.hire.areas.zuora,
}

export default function HireZuoraPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Hire Elite Zuora Developers | TeamStation',
          'description': 'Build a scalable subscription platform with top-tier, nearshore Zuora developers. Our One-SLA model de-risks hiring and ensures expert integration.',
          'url': 'https://cto.teamstation.dev/hire/by-technology/zuora',
        }}
      />
      <ServiceSchema
        serviceType="Nearshore Zuora Development"
        description="Access elite, nearshore Zuora developers and architects to build, integrate, and manage your subscription and billing infrastructure. Our scientific vetting and One-SLA model guarantee performance and de-risk your investment."
        provider="TeamStation"
      />
      <div className="main-content-container">
          <Breadcrumbs
              items={[
                  { label: 'Hire', href: '/hire' },
                  { label: 'By Technology', href: '/hire/by-technology' },
                  { label: 'Zuora', href: '/hire/by-technology/zuora' },
              ]}
          />
        <ProgrammaticContent content={ZUORA_PAGE_CONTENT} />
        <SandlerPSP {...sandlerProps} />
        <FurtherReading {...furtherReadingProps} />
        <PlaybookAuthor />
      </div>
    </>
  );
}

