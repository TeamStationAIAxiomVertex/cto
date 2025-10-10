import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from "@/components/ui/tooltip";
import type { Metadata } from 'next';
import { JsonLd } from "@/components/seo/JsonLd";
import FurtherReading from "@/components/seo/FurtherReading";
import { DecisionCard } from "@/components/ui/DecisionCard";
import { getComparisonData } from '@/lib/comparison-data';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getComparisonData('globalsquad');
  return {
    title: data?.title,
    description: data?.meta,
    keywords: data?.keywords,
  };
}

export default async function GlobalsquadComparisonPage() {
  const data = await getComparisonData('globalsquad');
  if (!data) return null;

  const siteUrl = 'https://cto.teamstation.dev';
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
      { "@type": "ListItem", "position": 3, "name": "Globalsquad Alternative", "item": `${siteUrl}/comparisons/globalsquad` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <main className="container py-12">
         <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Globalsquad Alternative</span>
        </div>
        <header className="text-center my-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{data.h1}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{data.meta}</p>
           <div className="mt-4 text-sm">
              <a href="https://www.globalsquad.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: globalsquad.com <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>
        
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center">Integrated Pods vs. Black Box Outsourcing</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {data.comparison_claims.map((claim) => (
              <div key={claim.metric} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                <h3 className="mt-3 text-lg font-semibold text-foreground">{claim.metric}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Globalsquad Model
                    </h4>
                    <p className="text-sm text-muted-foreground m-0">{claim.competitorValue}</p>
                  </div>
                  <div className="mt-4 border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      TeamStation AI Solution
                    </h4>
                     <p className="text-sm text-foreground m-0">{claim.teamstationValue}</p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Context: {claim.context}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
          <h2 className="text-center">Analysis: Throughput and Quality vs. Hours and Headcount</h2>
          <p>
            GlobalSquad represents the traditional outsourcing model, where work is often treated as a commodity and success is measured in hours billed. TeamStation AI offers a modern alternative, focused on delivering business value through high-performing, integrated teams. We measure our success by your success.
          </p>
          <h3>Team Structure: Integrated Pods vs. Black Box Outsourcing</h3>
          <p>
            A common frustration with traditional outsourcing is the lack of transparency and control—the “black box” model. TeamStation’s teams are designed to be an integrated part of your organization, working within your systems, and fully aligned with your goals and culture. We provide real-time visibility into team operations, so you are always in control.
          </p>
          <h3>Performance Metrics: Throughput & Business Value vs. Hours & Headcount</h3>
          <div>
             The traditional outsourcing model is incentivized to bill for more hours and more people. At TeamStation, our success is tied to the value we deliver—the features we ship, the bugs we fix, and the performance improvements we achieve. This fundamental alignment of interests is the cornerstone of our partnership model.
          </div>
        </div>

        <DecisionCard
          problem="Traditional outsourcing models create a black box, leaving you with little visibility or control, and a focus on hours billed rather than value delivered."
          stakes="This leads to misaligned priorities, quality issues, and a constant struggle to demonstrate ROI, ultimately hindering your ability to innovate."
          approach="TeamStation AI provides fully-integrated teams that operate as a transparent extension of your organization, with a focus on delivering measurable business value and throughput."
          evidence="Our clients typically see a 30-50% increase in feature velocity within the first six months, a direct result of our integrated team model and the high cognitive ability of our Axiom Cortex™-vetted talent."
          related={[
            { label: "The Problem with Traditional Outsourcing", href: "/playbook/black-box-outsourcing" },
            { label: "Measuring Engineering ROI", href: "/playbook/measuring-roi" },
            { label: "Axiom Cortex™ Vetting", href: "/research/axiom-cortex-scientific-report" }
          ]}
        />
        <FurtherReading comparison="globalsquad" />
      </main>
    </>
  );
}
