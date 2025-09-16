
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from '@/components/client/tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unosquare Alternative: TeamStation AI vs. Unosquare',
  description: 'Looking for an Unosquare alternative? Compare TeamStation AI\'s integrated nearshore platform with Unosquare\'s traditional staff augmentation and consulting.',
};

const comparisonPoints = {
    "Model": {
        pain: "Do you need a team you manage, or a project they manage?",
        traditional: "Unosquare offers both staff augmentation and project consulting. This hybrid model can create a conflict of interest, where the goal may shift from empowering your team to expanding their own project scope.",
        teamstation: "Our focus is singular: providing a complete platform for you to build and run your own elite nearshore team. We empower your management, we don't replace it. There is no conflict of interest.",
        proof: "100% Client-Managed Teams"
    },
    "Vetting": {
        pain: "Are you hiring from a captive talent pool or the entire market?",
        traditional: "Traditional service providers often pull from their existing bench, which may not be the best fit for your specific need. Their vetting is based on past project experience, not deep cognitive traits.",
        teamstation: "Our Nebula™ search engine scans a graph of over 2.6 million LATAM profiles, and our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> ensures we find the absolute best fit from the entire market, not just our bench.",
        proof: "2.6M+ Talent Graph"
    },
    "Operations": {
        pain: "Is your staff-aug partner also your security and compliance partner?",
        traditional: "Like most traditional firms, their model leaves you to manage the critical and risky operational components: secure devices, <span class='border-b border-dashed'>MDM</span>, compliance, and insurance.",
        teamstation: "Our integrated platform absorbs all of this risk and complexity. We bundle <span class='border-b border-dashed'>EOR</span>, secure devices, and insurance under one accountable SLA.",
        proof: "SOC 2 & ISO Aligned"
    }
}


export default function UnosquareComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Unosquare Alternative</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Unosquare Alternative: TeamStation AI</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated team-building platform and Unosquare’s traditional staff augmentation and consulting services.
        </p>
         <div className="mt-4 text-sm">
            <a href="https://www.unosquare.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                Vendor home: unosquare.com <ExternalLink className="h-4 w-4" />
            </a>
        </div>
      </header>

      <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The Hybrid Service Provider</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Unosquare Model
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
        <h2 className="text-center">Analysis: The Integrated Platform vs. The Service Provider</h2>
        <p>
            <a href="https://www.unosquare.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Unosquare <ExternalLink className="h-4 w-4" /></a> is a well-established provider of both staff augmentation and custom software development services. This hybrid model allows them to either supplement a client's team or take on entire projects as a consulting engagement.
        </p>
        <p>
           This differs significantly from TeamStation AI's singular focus: providing a complete platform for you to build and run your own elite nearshore team. We don't do project-based consulting; instead, we provide the talent and the entire operational infrastructure—<WithTooltip label="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity."><span className="border-b border-dashed">EOR</span></WithTooltip>, devices, security, insurance—for you to manage your team as a direct extension of your own. Our model is about empowerment and integration, not outsourcing.
        </p>
        <h3>Talent Pool, Vetting, and Risk</h3>
        <p>
            While Unosquare offers significant capacity, their vetting process is traditional, leaving the client exposed to mis-hire risk. As a strong Unosquare alternative, TeamStation AI's Nebula™ search taps into a much larger graph of over 2.6 million LATAM profiles, and our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ Cognitive AI</Link>
            {' '}engine provides a deep, scientific analysis of a candidate's cognitive abilities. This, combined with our all-inclusive operational wrapper, significantly reduces your Total Cost of Ownership (TCO) and operational risk.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you are looking to outsource a software project or need to quickly add developers to your team without an integrated operational wrapper, Unosquare is a proven partner. If your goal is to build a long-term, scalable, and secure nearshore engineering team that you directly manage, with all the operational complexities handled for you, TeamStation AI's platform model is the superior Unosquare alternative.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
