
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from "../../../components/seo/JsonLd";
import { generateComparisonSchema } from "../../../lib/comparisonSchema";
import { defaultComparisonFaqs } from "../../../lib/comparisonFaqs";
import { DecisionCard } from "../../../components/ui/DecisionCard";
import FurtherReading from "../../../components/seo/FurtherReading";

const competitor = {
  name: "Devlane",
  url: "https://devlane.com/",
  slug: "devlane"
};

export const metadata: Metadata = {
  title: `Devlane Alternative: TeamStation AI vs. ${competitor.name}`,
  description: `Compare our integrated platform with EOR, device management, and AI-vetting against ${competitor.name}'s traditional staff augmentation model for hiring LATAM developers.`,
  alternates: {
    canonical: `https://cto.teamstation.dev/comparisons/${competitor.slug}`,
  },
};

const comparisonPoints = {
    "Vetting": {
        pain: "Is your vetting just a skills test?",
        traditional: `${competitor.name} focuses on traditional staff augmentation, which is effective for adding headcount but often relies on standard technical interviews that miss deeper cognitive traits.`,
        teamstation: "Our Axiom Cortex™ provides scientific proof of a candidate\'s problem-solving ability and architectural instinct, ensuring you hire for long-term impact, not just short-term skills.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Operations": {
        pain: "Who handles the operational risk?",
        traditional: `Traditional staff augmentation leaves you to manage device security, compliance, and insurance. This creates hidden operational drag and security gaps.`,
        teamstation: "Our platform is a complete operational shield. We bundle all services EOR, MDM-managed devices, and insurance under a single, accountable SLA.",
        proof: "SOC 2 & ISO Aligned"
    },
    "Cost": {
        pain: "Is a low hourly rate hiding your true cost?",
        traditional: "The rate card doesn\'t include the hidden TCO of management overhead, slow ramp-up times, and the potential cost of a security incident or mis-hire.",
        teamstation: "Our all-inclusive pricing model provides a predictable, CFO-ready TCO that is often 40-60% lower than the fully-loaded cost of traditional models.",
        proof: "40-60% Lower TCO"
    }
};

const faqs = defaultComparisonFaqs(competitor.name);
const schema = generateComparisonSchema({ 
  competitorName: competitor.name, 
  competitorUrl: competitor.url, 
  slug: competitor.slug, 
  faqs 
});

export default function DevlaneComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="manual-page container py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>{competitor.name}</span>
        </div>
        <header className="glass-panel hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-foreground">TeamStation AI vs. {competitor.name}</h1>
          <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
            A comparison between TeamStation AI’s integrated platform and {competitor.name}’s traditional nearshore staff augmentation model.
          </p>
          <div className="mt-4 text-sm">
              <a href={competitor.url} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: {new URL(competitor.url).hostname} <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>

        <div className="my-12">
          <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. Traditional Augmentation</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {Object.entries(comparisonPoints).map(([key, value]) => (
              <div key={key} className="glass-panel rounded-2xl p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{value.pain}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      {competitor.name} Model
                    </h4>
                    <p className="text-sm text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: value.traditional }} />
                  </div>
                  <div className="mt-4 border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      TeamStation AI Solution
                    </h4>
                     <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: value.teamstation }}></p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {value.proof}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel prose dark:prose-invert mx-auto my-10 max-w-4xl rounded-2xl p-6 md:p-8">
          <h2 className="text-center">Analysis: Platform vs. Placement</h2>
          <p>
            {competitor.name} is a nearshore staff augmentation vendor that sources and places talent in LATAM. This model can be effective for companies that have the internal capacity to manage the operational, legal, and security aspects of a distributed team.
          </p>
          <p>
             TeamStation AI provides a more comprehensive solution. We don't just place talent; we provide an integrated platform that handles the entire operational lifecycle, from scientific vetting and compliant hiring to secure device management and ongoing performance analytics. This reduces risk and lowers the total cost of ownership.
          </p>
        </div>

        <div className="glass-panel text-center rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            For companies that need to quickly add headcount and have robust internal operations, {competitor.name} is a viable option. For CTOs who want a strategic partner to handle the entire operational stack and provide deeply vetted talent, TeamStation AI's integrated platform is the more modern and secure choice.
          </p>
          <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
        </div>
        <DecisionCard
          problem="CTOs face hidden risks in cost, compliance, and velocity when using legacy staffing models."
          stakes="Without addressing these fundamental issues, budgets spiral, projects miss critical deadlines, and security incidents become inevitable."
          approach="TeamStation AI's integrated platform delivers pre-vetted LATAM talent, audit-ready compliance with secure devices, and a predictable Total Cost of Ownership."
          evidence="On average, clients see a 40 60% lower TCO versus traditional models and US hiring. Case studies like [Currance](/case-studies) and [Parsable](/case-studies/parsable) demonstrate measurable improvements in velocity and security posture."
          related={[
            { label: "CTO Playbook", href: "/playbook/hub" },
            { label: "Our Vetting Process", href: "/technical-interview-evaluation" },
            { label: "Hire in Mexico", href: "/hire/by-country/mexico" }
          ]}
        />
        <FurtherReading comparison="devlane" />
      </main>
    </>
  );
}
