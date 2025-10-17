
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
  title: "Hire Elite Penetration Testers | TeamStation",
  description: "Strengthen your security posture with elite, nearshore penetration testers. Our One-SLA model delivers scientifically vetted experts to uncover vulnerabilities before they become a crisis.",
};

const PENTESTING_PAGE_CONTENT = getHirePageContent('penetration-testing');

const sandlerProps = {
  ...sandler.hire,
  areas: sandler.hire.areas.penetrationTesting,
};

const furtherReadingProps = {
  ...furtherReading.hire,
  areas: furtherReading.hire.areas.penetrationTesting,
}

export default function HirePenetrationTestingPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Hire Elite Penetration Testers | TeamStation',
          'description': 'Strengthen your security posture with elite, nearshore penetration testers. Our One-SLA model delivers scientifically vetted experts to uncover vulnerabilities before they become a crisis.',
          'url': 'https://cto.teamstation.dev/hire/by-technology/penetration-testing',
        }}
      />
      <ServiceSchema
        serviceType="Nearshore Penetration Testing"
        description="Access elite, nearshore penetration testing experts to identify and mitigate critical security vulnerabilities. Our scientific vetting and One-SLA model guarantee an adversarial mindset and a proactive security posture."
        provider="TeamStation"
      />
      <div className="main-content-container">
        <Breadcrumbs
            items={[
                { label: 'Hire', href: '/hire' },
                { label: 'By Technology', href: '/hire/by-technology' },
                { label: 'Penetration Testing', href: '/hire/by-technology/penetration-testing' },
            ]}
        />
        <ProgrammaticContent content={PENTESTING_PAGE_CONTENT} />
        <SandlerPSP {...sandlerProps} />
        <FurtherReading {...furtherReadingProps} />
        <PlaybookAuthor />
      </div>
    </>
  );
}

