
import { CheckCircle, XCircle, BrainCircuit, FileText, ShieldCheck, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { WithTooltip } from '../../../components/ui/tooltip';
import { JsonLd } from '../../../components/seo/JsonLd';
import FurtherReading from '../../../components/seo/FurtherReading';
import { DecisionCard } from '../../../components/ui/DecisionCard';

export const metadata: Metadata = {
    title: 'Revelo Alternative: TeamStation AI vs. Revelo',
    description: 'A detailed comparison of TeamStation AI\'s managed LATAM teams and Revelo\'s marketplace for hiring individual developers.',
};

const comparisonPoints = {
    "Vetting": {
        pain: "Are you hiring for surface-level skills, or for the deep cognitive abilities that drive innovation?",
        traditional: "Revelo does a good job of pre-vetting for technical skills and English proficiency. But this is table stakes. It tells you what a developer knows, but not how they think or solve problems.",
        teamstation: "We select for cognitive horsepower. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> goes beyond the resume to measure a candidate's innate problem-solving and learning abilities, which are the true predictors of long-term success.",
        proof: "95% Predictive Accuracy of On-the-Job Performance"
    },
    "Core Offering": {
        pain: "Are you looking to fill a seat, or build a high-performing, cohesive team?",
        traditional: "Revelo provides a marketplace to hire individual LATAM developers. You get access to talent, but the responsibility of forging them into a productive, unified team is all on you.",
        teamstation: "We build and manage end-to-end, high-throughput teams. We deliver a fully-formed, synergistic unit that is optimized for performance from day one, led by a dedicated Engagement Manager. We don't just fill seats; we build teams.",
        proof: "+40% Feature Delivery Rate vs. Marketplace Hires"
    },
    "Model": {
        pain: "Do you want to be a manager of individuals, or a leader of innovation?",
        traditional: "A marketplace of individuals means you are the manager. You are responsible for the day-to-day overhead of team dynamics, communication, and performance management. It's a constant tax on your time.",
        teamstation: "Our managed team model frees you to focus on your product. We handle the operational overhead, from payroll and compliance to performance management. You get the output of a high-performing team without the managerial burden.",
        proof: "-20 Hours/Week in Management Overhead"
    }
}

export default function ReveloComparisonPage() {
  const siteUrl = 'https://cto.teamstation.dev';
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
      { "@type": "ListItem", "position": 3, "name": "Revelo", "item": `${siteUrl}/comparisons/revelo` }
    ]
  };
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="container py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Revelo</span>
        </div>
        <header className="text-center my-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TeamStation AI vs. Revelo</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A comparison between TeamStation AI’s managed team model and Revelo’s marketplace for LATAM talent.
          </p>
           <div className="mt-4 text-sm">
              <a href="https://www.revelo.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: revelo.com <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>

         <div className="my-12">
          <h2 className="text-3xl font-bold text-center">Managed Teams vs. a Marketplace of Individuals</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {Object.entries(comparisonPoints).map(([key, value]) => (
              <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{value.pain}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Revelo Model
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

        <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
          <h2 className="text-center">Analysis: Building Teams, Not Just Filling Seats</h2>
          <div>
              <a href="https://www.revelo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Revelo<ExternalLink className="h-4 w-4" /></a> has built a strong reputation as a go-to marketplace for sourcing pre-vetted LATAM developers. It's a valuable resource for companies looking to hire individuals. However, the model is fundamentally about filling seats, not building teams.
          </div>
          <div>
             TeamStation AI operates on a different philosophy. We believe that exceptional engineering is a team sport. That's why we don't just provide you with a list of candidates; we build and manage a cohesive, high-performing team that is tailored to your specific needs and goals.
          </div>
          <h3>The Power of a Managed Team</h3>
          <p>
             The difference between a collection of individuals and a true team is synergy. A managed team, led by a dedicated Engagement Manager, has a shared context, a unified purpose, and a level of trust that can only be built over time. This is what drives the outsized results we see with our clients. We take on the operational burden of building that team, so you can focus on what you do best: building your product.
          </p>
        </div>

        <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
              If you're looking to hire a specific developer to augment your existing team, Revelo is a great option. If you're looking to build a scalable, high-performing engineering capability without the overhead of building and managing a team yourself, TeamStation AI is the clear choice.
          </p>
          <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
        </div>
        
        <DecisionCard
          problem="You're spending more time managing contractors than you are building your product. The dream of a high-performing LATAM team is being crushed by the reality of day-to-day management overhead."
          stakes="This leads to a reactive, firefighting culture, a constant struggle to maintain momentum, and a feeling that you're running a dev shop, not a high-growth tech company."
          approach="TeamStation AI provides fully-managed LATAM teams that are built for performance. We handle the hiring, management, and operational complexity, so you can get back to being a strategic leader."
          evidence="Our clients, like [Parsable](/case-studies/parsable), have seen a 2x increase in engineering velocity and a significant reduction in management overhead, all while building a more cohesive and effective engineering culture."
          related={[
            { label: "The ROI of a Managed Team", href: "/playbook/managed-teams-roi" },
            { label: "Hire LATAM Developers vs. The World", href: "/hire/by-country/latam" },
            { label: "Our Security and Compliance", href: "/trust" }
          ]}
        />
        <FurtherReading comparison="revelo" />
      </main>
    </>
  );
}
