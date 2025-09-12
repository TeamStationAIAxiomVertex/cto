
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true },
    { feature: 'Transparent, All-Inclusive Pricing', teamstation: true },
    { feature: 'Faster Time-to-Offer (~9 days)', teamstation: true },
    { feature: 'Traditional Staff Augmentation Model', competitor: true },
    { feature: 'Client handles devices, compliance, security', competitor: true },
];


export default function NearsureComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Nearsure</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. Nearsure</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated platform and Nearsure’s traditional staff augmentation model.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="rounded-lg border-2 border-primary/50 flex-1 p-8 bg-card">
          <h2 className="text-2xl font-bold text-center text-foreground">TeamStation AI</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.filter(i => i.teamstation).map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card flex-1 p-8">
          <h2 className="text-2xl font-bold text-center text-foreground">Nearsure</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Traditional Staff Augmentation</p>
           <div className="space-y-3">
            {comparisonData.filter(i => i.competitor).map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                 <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
        <h2 className="text-center">Analysis: The Integrated Platform vs. Traditional Staff Aug</h2>
        <p>
            Nearsure operates on a classic staff augmentation model. They are experts at sourcing and placing nearshore talent, and their AI recruiter has improved their hiring time. However, their model leaves significant operational, legal, and security burdens on the client.
        </p>
        <p>
           Issues like compliant hiring (<Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>), payroll, secure device management, and insurance are outside their scope. TeamStation AI was created to solve this exact problem. We provide an integrated platform that handles not only sourcing (powered by our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>
            ) but also the entire operational infrastructure, all under a single, predictable SLA.
        </p>
        <h3>Beyond Placement: The TCO and Risk Equation</h3>
        <p>
           The key difference is what happens after placement. With Nearsure, their primary job is done. With TeamStation AI, that's just the beginning. Our transparent <Link href="/pricing">pricing</Link> includes all the "hidden" costs—EOR, devices, insurance—that inflate the Total Cost of Ownership (TCO) with traditional vendors. We don't just fill seats; we provide a complete, managed operating system for your nearshore team, reducing both cost and risk.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you have a robust internal HR, legal, and IT infrastructure to handle the complexities of international employment and security, Nearsure is a capable recruiting partner. If you want a single partner to handle all of those complexities for you, allowing you to focus purely on your product, TeamStation AI's integrated platform is the more modern and comprehensive solution.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
