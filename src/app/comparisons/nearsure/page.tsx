
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from "../../../components/ui/tooltip";
import type { Metadata } from 'next';
import { DecisionCard } from "../../../components/ui/DecisionCard";
import FurtherReading from "../../../components/seo/FurtherReading";

export const metadata: Metadata = {
  title: 'Nearsure Alternative: TeamStation AI vs. Nearsure',
  description: 'Compare our integrated nearshore platform with Nearsure\'s traditional staff augmentation for LATAM developers.',
};

const comparisonPoints = {
    "Operations": {
        pain: "Are you prepared to manage compliance, IT, and security?",
        traditional: "Nearsure is a recruiting partner. They find talent, but the client is left to manage compliant hiring (<span class='border-b border-dashed'>EOR</span>), payroll, secure devices, and insurance.",
        teamstation: "We provide the complete, managed operating system. Our platform includes EOR, <span class='border-b border-dashed'>MDM</span>-secured devices, and insurance under a single, predictable SLA.",
        proof: "1 accountable SLA"
    },
    "Cost": {
        pain: "Is a low hourly rate hiding your true Total Cost of Ownership (TCO)?",
        traditional: "The quoted rate from traditional vendors excludes the significant 'hidden costs' of EOR, IT, legal, and management overhead, which can inflate your <a href='/playbook/latam-economics' class='text-primary hover:underline'><span class='border-b border-dashed'>TCO</span></a>.",
        teamstation: "Our <a href='/pricing' class='text-primary hover:underline'>all-inclusive pricing</a> is transparent and predictable. It bundles all operational costs, leading to a lower, CFO-ready TCO.",
        proof: "40-60% Lower TCO"
    },
    "Vetting": {
        pain: "Is your vetting process based on science or just a conversation?",
        traditional: "Nearsure's 'AI recruiter' speeds up sourcing, but the final evaluation is still based on traditional interviews, which are prone to bias and failure.",
        teamstation: "Our vetting is powered by the <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a>, a peer-reviewed scientific model that provides evidence-based proof of a candidate's problem-solving ability.",
        proof: "Mismatch Rate ≤ 10%"
    }
}


export default function NearsureComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Nearsure</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TeamStation AI vs. Nearsure</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated platform and Nearsure’s traditional staff augmentation model.
        </p>
         <div className="mt-4 text-sm">
            <a href="https://nearsure.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                Vendor home: nearsure.com <ExternalLink className="h-4 w-4" />
            </a>
        </div>
      </header>

       <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The Recruiting Partner</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Nearsure Model
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
        <h2 className="text-center">Analysis: The Integrated Platform vs. Traditional Staff Aug</h2>
        <p>
            <a href="https://nearsure.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Nearsure <ExternalLink className="h-4 w-4" /></a> operates on a classic staff augmentation model. They are experts at sourcing and placing nearshore talent, and their AI recruiter has improved their hiring time. However, their model leaves significant operational, legal, and security burdens on the client.
        </p>
        <p>
           Issues like compliant hiring (<WithTooltip label="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity."><span className="border-b border-dashed">EOR</span></WithTooltip>), payroll, secure device management, and insurance are outside their scope. TeamStation AI was created to solve this exact problem. We provide an integrated platform that handles not only sourcing (powered by our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>
            ) but also the entire operational infrastructure, all under a single, predictable SLA.
        </p>
        <h3>Beyond Placement: The TCO and Risk Equation</h3>
        <p>
           The key difference is what happens after placement. With Nearsure, their primary job is done. With TeamStation AI, that's just the beginning. Our transparent <Link href="/pricing">pricing</Link> includes all the "hidden" costs—EOR, devices, insurance—that inflate the Total Cost of Ownership (TCO) with traditional vendors. We don't just fill seats; we provide a complete, managed operating system for your nearshore team, reducing both cost and risk.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you have a robust internal HR, legal, and IT infrastructure to handle the complexities of international employment and security, Nearsure is a capable recruiting partner. If you want a single partner to handle all of those complexities for you, allowing you to focus purely on your product, TeamStation AI's integrated platform is the more modern and comprehensive solution.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
      <DecisionCard
        problem="CTOs face hidden risks in cost, compliance, and velocity when using legacy staffing models."
        stakes="Without addressing these fundamental issues, budgets spiral, projects miss critical deadlines, and security incidents become inevitable."
        approach="TeamStation AI's integrated platform delivers pre-vetted LATAM talent, audit-ready compliance with secure devices, and a predictable Total Cost of Ownership."
        evidence="On average, clients see a 40–60% lower TCO versus traditional models and US hiring. Case studies like [Currance](/case-studies) and [Parsable](/case-studies/parsable) demonstrate measurable improvements in velocity and security posture."
        related={[
          { label: "CTO Playbook", href: "/playbook/hub" },
          { label: "Our Vetting Process", href: "/technical-interview-evaluation" },
          { label: "Hire in Mexico", href: "/hire/by-country/mexico" }
        ]}
      />
      <FurtherReading comparison="nearsure" />
    </main>
  );
}
