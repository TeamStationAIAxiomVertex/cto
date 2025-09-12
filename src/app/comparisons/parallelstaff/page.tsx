
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Single, Unified Service Contract & SLA', teamstation: true, competitor: false },
    { feature: '"Try-before-you-buy" model', teamstation: false, competitor: true },
    { feature: 'Client handles compliance and hardware', teamstation: false, competitor: true },
];


export default function ParallelStaffComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>ParallelStaff</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. ParallelStaff</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated platform and ParallelStaff’s Talent-as-a-Service (TaaS) model.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="rounded-lg border-2 border-primary/50 flex-1 p-8 bg-card">
          <h2 className="text-2xl font-bold text-center text-foreground">TeamStation AI</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                {item.teamstation ? <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} /> : <XCircle className="text-red-500 flex-shrink-0 mt-1" size={16} />}
                <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card flex-1 p-8">
          <h2 className="text-2xl font-bold text-center text-foreground">ParallelStaff</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Talent-as-a-Service (TaaS)</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                {item.competitor ? <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} /> : <XCircle className="text-red-500 flex-shrink-0 mt-1" size={16} />}
                 <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
        <h2 className="text-center">Analysis: The Integrated Platform vs. TaaS</h2>
        <p>
            ParallelStaff's Talent-as-a-Service (TaaS) model, with its "try-before-you-buy" evaluation period, is a smart evolution of traditional staff augmentation. It rightly identifies the need for structured onboarding and aims to reduce mis-hire risk.
        </p>
        <p>
           However, their model still leaves the client to manage critical operational components. <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>, secure device provisioning with <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>, and cybersecurity insurance are not bundled into a unified offering. Furthermore, while a two-week trial is better than nothing, it is not a substitute for the deep, scientific validation provided by TeamStation AI's{' '}
           <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>. A trial period can be influenced by project simplicity or short-term charisma, while our engine provides an objective, evidence-based measure of long-term capability.
        </p>
        <h3>The Unification Difference</h3>
        <p>
           TeamStation AI was built on the premise that a fragmented approach is inefficient and risky. Our platform unifies hiring, legal/EOR, compliance, devices, security, and insurance under a single contract and a single SLA. This is the core difference: ParallelStaff offers a valuable service with a risk-reduction feature, while TeamStation AI offers a complete, end-to-end operating system for your nearshore team.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            ParallelStaff's TaaS model is a step in the right direction. However, for CTOs seeking a truly comprehensive, secure, and unified platform that minimizes risk and administrative overhead through scientific vetting and all-inclusive operations, TeamStation AI's integrated model represents the next logical evolution.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
