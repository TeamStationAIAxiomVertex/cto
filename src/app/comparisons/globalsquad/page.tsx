
import { CheckCircle, XCircle, BrainCircuit, FileText, ShieldCheck, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { WithTooltip } from '../../../components/ui/tooltip';
import { JsonLd } from '../../../components/seo/JsonLd';
import FurtherReading from '../../../components/seo/FurtherReading';
import { DecisionCard } from '../../../components/ui/DecisionCard';

export const metadata: Metadata = {
    title: 'Globalsquad Alternative: TeamStation AI vs. Globalsquad',
    description: 'A comparison of TeamStation AI\'s high-throughput, managed LATAM teams and Globalsquad\'s traditional outsourcing model.',
};

const comparisonPoints = {
    "Vetting": {
        pain: "Are you willing to bet your product\'s success on a model that prioritizes volume over verifiable cognitive ability?",
        traditional: "Traditional outsourcers like Globalsquad are built on a foundation of volume. Their vetting is designed to staff projects quickly, often relying on resume keywords and basic technical screens. It\'s a numbers game.",
        teamstation: "We play a different game. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> provides a scientific, evidence-based measure of a candidate's problem-solving skills. We don't just find people who can code; we find people who can think.",
        proof: "Top 1% Cognitive Agility Ranking"
    },
    "Team Structure": {
        pain: "Do you want a true, integrated partner, or a black box that you throw requirements over the wall to?",
        traditional: "The classic outsourcing model often operates as a black box. You have limited visibility into the team's day-to-day operations, and they operate as a separate entity. This creates communication gaps and misalignment.",
        teamstation: "We provide fully-integrated, managed teams that become a seamless extension of your organization. They work in your systems, attend your meetings, and are fully aligned with your goals. We provide radical transparency, not a black box.",
        proof: "Real-time Performance Dashboards"
    },
    "Performance Metrics": {
        pain: "Are you measuring what matters business value or what doesn't hours and headcount?",
        traditional: "The outsourcing model is built on billing for hours and the number of resources deployed. Their incentive is to maximize billable time, not to deliver value as efficiently as possible.",
        teamstation: "Our success is measured by your success. We focus on throughput and business value features shipped, bugs fixed, performance improvements. This fundamental alignment of incentives is the cornerstone of our partnership model.",
        proof: "30-50% Increase in Feature Velocity"
    }
}

export default function GlobalsquadComparisonPage() {
  const siteUrl = 'https://cto.teamstation.dev';
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
      { "@type": "ListItem", "position": 3, "name": "Globalsquad", "item": `${siteUrl}/comparisons/globalsquad` }
    ]
  };
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="manual-page container py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Globalsquad</span>
        </div>
        <header className="glass-panel hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-foreground">TeamStation AI vs. Globalsquad</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A comparison between TeamStation AI’s managed team model and Globalsquad’s traditional outsourcing approach.
          </p>
           <div className="mt-4 text-sm">
              <a href="https://www.globalsquad.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: globalsquad.com <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>

         <div className="my-12">
          <h2 className="text-3xl font-bold text-center">Integrated Pods vs. Black Box Outsourcing</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {Object.entries(comparisonPoints).map(([key, value]) => (
              <div key={key} className="glass-panel rounded-2xl p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{value.pain}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Globalsquad Model
                    </h4>
                    <p className="text-sm text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: value.traditional }} />
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      TeamStation AI Solution
                    </h4>
                     <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: value.teamstation }} />
                  </div>
                </div>
                <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {value.proof}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel prose dark:prose-invert mx-auto my-10 max-w-4xl rounded-2xl p-6 md:p-8">
          <h2 className="text-center">Analysis: Throughput and Quality vs. Hours and Headcount</h2>
          <div>
              <a href="https://www.globalsquad.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Globalsquad<ExternalLink className="h-4 w-4" /></a> is a classic example of the traditional outsourcing model. They provide a large pool of resources and a focus on executing tasks. However, this model is often characterized by a lack of transparency, a focus on billing hours rather than delivering value, and a fundamental misalignment of incentives.
          </div>
          <div>
             TeamStation AI was founded to be the antidote to the black box outsourcing model. We believe in radical transparency, deep integration, and a relentless focus on business outcomes. We are not just a vendor; we are a partner in your success.
          </div>
          <h3>The Problem with the Black Box</h3>
          <p>
             The “black box” model of outsourcing is fundamentally broken. It creates a transactional relationship, not a partnership. It incentivizes the wrong behaviors. And it leaves you, the CTO, with all of the risk and very little of the reward. Our integrated team model is designed to solve these problems, creating a true partnership that is built on trust, transparency, and a shared definition of success.
          </p>
        </div>

        <div className="glass-panel text-center rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
              If you are looking for a low-cost provider to execute a well-defined, non-critical task, traditional outsourcing may be a viable option. If you are looking to build a high-performing, scalable engineering capability that can drive innovation and create a sustainable competitive advantage, TeamStation AI is the only logical choice.
          </p>
          <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
        </div>
        
        <DecisionCard
          problem="You're tired of the outsourcing black box. You have no visibility, no control, and a constant nagging feeling that you're not getting what you're paying for."
          stakes="This leads to a culture of mediocrity, a constant drain on your budget, and an inability to attract and retain top talent. You're not building a team; you're just renting bodies."
          approach="TeamStation AI provides a radically transparent, managed team model that is built on a foundation of trust and alignment. We give you full visibility into our operations and a dedicated Engagement Manager who is accountable for your success."
          evidence="Our clients, like [Currance](/case-studies), have replaced their entire outsourced team with a single TeamStation AI pod and seen a 3x increase in throughput and a 50% reduction in cost."
          related={[
            { label: "Our Vetting Process", href: "/technical-interview-evaluation" }
          ]}
        />
        <FurtherReading comparison="globalsquad" />
      </main>
    </>
  );
}
