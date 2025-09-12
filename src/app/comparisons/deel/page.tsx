
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Deel Alternative for Talent Sourcing: TeamStation AI vs. Deel',
    description: 'Looking for a Deel alternative for sourcing talent? See how TeamStation AI provides an end-to-end nearshore talent platform, while Deel focuses on HR and payroll.'
};

const comparisonData = [
    { feature: 'Talent Sourcing & AI-Vetting', teamstation: true, competitor: false },
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'End-to-End Operational Management', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Global HRIS & Payroll Platform', teamstation: false, competitor: true },
    { feature: 'Focus on Nearshore Engineering Teams', teamstation: true, competitor: false },
];


export default function DeelComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Deel</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. Deel</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          This isn't a direct comparison, but a clarification of two very different—and potentially complementary—models.
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
          <h2 className="text-2xl font-bold text-center text-foreground">Deel</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Global HR & Payroll Platform</p>
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
        <h2 className="text-center">Analysis: Talent Platform vs. HR Platform</h2>
        <p>
            Deel is a world-class global payroll and compliance engine. They solve the critical problem of how to legally hire and pay people almost anywhere in the world. However, Deel is not a talent platform. They do not source, vet, or manage talent. You must bring your own candidates to their platform.
        </p>
        <p>
           TeamStation AI, on the other hand, is an end-to-end talent and operations platform. Our primary function is to find, vet, and deliver elite LATAM engineering talent. Our platform then provides the entire operational wrapper—including <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>/payroll (which could even be powered by a platform like Deel), secure devices, and insurance—to run that team effectively.
        </p>
        <h3>Two Sides of the Same Coin</h3>
        <ul>
            <li><strong>TeamStation AI answers:</strong> "Who should I hire, and how do I run them securely and efficiently?"</li>
            <li><strong>Deel answers:</strong> "Now that I've found someone, how do I pay them and stay compliant?"</li>
        </ul>
        <p>
            For a CTO who needs to build a nearshore team from scratch, TeamStation AI provides the complete, all-in-one solution. Deel is a powerful tool for companies that already have a global sourcing and recruiting function in place.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            Choosing between TeamStation AI and Deel is not an either/or decision. They are different tools for different jobs. If you need to find and run an elite nearshore team with full operational support, TeamStation AI is your solution. If you simply need a way to pay an international team you've already sourced, Deel is the industry leader.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
