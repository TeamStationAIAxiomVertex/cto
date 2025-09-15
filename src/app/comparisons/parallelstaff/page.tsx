
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from '@/components/ui/tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ParallelStaff Alternative: TeamStation AI vs. ParallelStaff',
    description: 'Is ParallelStaff\'s "try-before-you-buy" model right for you? See how TeamStation AI offers a more comprehensive nearshore alternative with integrated operations.'
};

const comparisonPoints = {
    "Vetting": {
        pain: "Is a two-week trial enough to predict long-term success?",
        traditional: "ParallelStaff's 'try-before-you-buy' model is smart, but a short trial can be misleading. It doesn't reveal deep architectural thinking or problem-solving under pressure.",
        teamstation: "We go deeper. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> provides scientific proof of a candidate's cognitive traits before you even interview them, drastically reducing mis-hire risk.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Operations": {
        pain: "Who handles the operational complexity after the trial?",
        traditional: "Their model still leaves the client to manage critical components like compliant hiring (<span class='border-b border-dashed'>EOR</span>), secure device management (<span class='border-b border-dashed'>MDM</span>), and insurance.",
        teamstation: "We provide a complete, end-to-end operating system. Our platform unifies hiring, legal/EOR, compliance, devices, security, and insurance under a single contract and a single SLA.",
        proof: "1 accountable SLA"
    },
    "Model": {
        pain: "Are you buying a feature or a full platform?",
        traditional: "ParallelStaff offers a service with a valuable risk-reduction feature (the trial). It's an improvement on classic staff augmentation.",
        teamstation: "We offer a complete, integrated platform. We don't just reduce risk; we eliminate the operational overhead that slows you down and creates security holes.",
        proof: "SOC 2 & ISO Aligned"
    }
}


export default function ParallelStaffComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>ParallelStaff</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TeamStation AI vs. ParallelStaff</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated platform and ParallelStaff’s Talent-as-a-Service (TaaS) model.
        </p>
      </header>

      <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The TaaS Model</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    ParallelStaff Model
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
        <h2 className="text-center">Analysis: The Integrated Platform vs. TaaS</h2>
        <p>
            <a href="https://www.parallelstaff.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">ParallelStaff's <ExternalLink className="h-4 w-4" /></a> Talent-as-a-Service (TaaS) model, with its "try-before-you-buy" evaluation period, is a smart evolution of traditional staff augmentation. It rightly identifies the need for structured onboarding and aims to reduce mis-hire risk.
        </p>
        <p>
           However, their model still leaves the client to manage critical operational components. <WithTooltip label="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity."><span className="border-b border-dashed">EOR</span></WithTooltip>, secure device provisioning with <WithTooltip label="Mobile Device Management: software that secures, monitors, and manages devices like laptops."><span className="border-b border-dashed">MDM</span></WithTooltip>, and cybersecurity insurance are not bundled into a unified offering. Furthermore, while a two-week trial is better than nothing, it is not a substitute for the deep, scientific validation provided by TeamStation AI's{' '}
           <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>. A trial period can be influenced by project simplicity or short-term charisma, while our engine provides an objective, evidence-based measure of long-term capability.
        </p>
        <h3>The Unification Difference</h3>
        <p>
           TeamStation AI was built on the premise that a fragmented approach is inefficient and risky. Our platform unifies hiring, legal/EOR, compliance, devices, security, and insurance under a single contract and a single SLA. This is the core difference: ParallelStaff offers a valuable service with a risk-reduction feature, while TeamStation AI offers a complete, end-to-end operating system for your nearshore team.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            ParallelStaff's TaaS model is a step in the right direction. However, for CTOs seeking a truly comprehensive, secure, and unified platform that minimizes risk and administrative overhead through scientific vetting and all-inclusive operations, TeamStation AI's integrated model represents the next logical evolution.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
