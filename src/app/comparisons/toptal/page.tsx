import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from "@/components/ui/tooltip";
import type { Metadata } from 'next';
import { JsonLd } from "@/components/seo/JsonLd";
import FurtherReading from "@/components/seo/FurtherReading";
import { DecisionCard } from "@/components/ui/DecisionCard";
import { getComparisonData } from '@/lib/comparison-data';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getComparisonData('toptal');
  return {
    title: data?.title,
    description: data?.meta,
    keywords: data?.keywords,
  };
}

export default async function ToptalComparisonPage() {
  const data = await getComparisonData('toptal');
  if (!data) return null;

  const siteUrl = 'https://cto.teamstation.dev';
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
      { "@type": "ListItem", "position": 3, "name": "Toptal Alternative", "item": `${siteUrl}/comparisons/toptal` }
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
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Toptal Alternative</span>
        </div>
        <header className="text-center my-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{data.h1}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{data.meta}</p>
           <div className="mt-4 text-sm">
              <a href="https://www.toptal.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: toptal.com <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>
        
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The Freelance Marketplace</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {data.comparison_claims.map((claim) => (
              <div key={claim.metric} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                <h3 className="mt-3 text-lg font-semibold text-foreground">{claim.metric}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Toptal Model
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
          <h2 className="text-center">Analysis: Managed Teams vs. a Freelancer Marketplace</h2>
          <p>
              Toptal is a well-respected platform for finding skilled individual freelancers. However, for a CTO tasked with building a high-performing, cohesive engineering organization, a marketplace of individuals presents significant challenges in team integration, management overhead, and long-term alignment. TeamStation AI offers a fundamentally different approach.
          </p>
          <h3>Engagement Model: Cohesive Teams vs. Individual Contractors</h3>
          <p>
              With Toptal, you are hiring individual freelancers. You are responsible for onboarding them, integrating them into your team, and managing the team dynamics. TeamStation provides fully-managed, cohesive teams that operate as a seamless extension of your organization from day one, led by a dedicated Engagement Manager. We handle the operational overhead so you can focus on product.
          </p>
          <h3>Vetting: Cognitive Agility vs. Technical Skills</h3>
          <div>
              While Toptal has a rigorous screening process, it primarily focuses on verifying technical proficiency and experience. This is important, but it is not enough. TeamStation\'s Axiom Cortex™ cognitive AI goes deeper, evaluating problem-solving skills, learning agility, and other critical cognitive indicators that are scientifically proven to predict on-the-job success. We are not just checking if they can code; we are assessing how they think.
          </div>
        </div>

        <DecisionCard
          problem="Hiring individual freelancers creates unpredictable team dynamics, management overhead, and a fragmented engineering culture."
          stakes="This leads to slower velocity, increased friction, and a constant struggle to build the long-term, high-trust environment required for innovation."
          approach="TeamStation AI builds and manages cohesive, high-performing engineering teams that are aligned with your goals from day one, reducing management burden and fostering a culture of performance."
          evidence="Our model, powered by the Axiom Cortex™ vetting platform, delivers teams that consistently outperform traditional hiring models in both velocity and quality, with a 95% success rate in matching talent to the right role."
          related={[
            { label: "The Power of a Managed Team", href: "/playbook/managed-teams" },
            { label: "Axiom Cortex™ Scientific Report", href: "/research/axiom-cortex-scientific-report" },
            { label: "Our Pricing Model", href: "/pricing" }
          ]}
        />
        <FurtherReading comparison="toptal" />
      </main>
    </>
  );
}
