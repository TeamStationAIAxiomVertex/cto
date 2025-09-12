
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

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
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Deel
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Deel</h1>
        <p className="lead max-w-3xl mx-auto">
          This isn't a direct comparison, but a clarification of two very different—and potentially complementary—models.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="card border-accent-custom/50 flex-1">
          <h2 className="h2 mt-0 text-center">TeamStation AI</h2>
          <p className="text-center text-sm text-mute mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.teamstation ? <CheckCircle className="text-accent-custom flex-shrink-0" size={20} /> : <XCircle className="text-warn-custom flex-shrink-0" size={20} />}
                <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card border-warn-custom/50 flex-1">
          <h2 className="h2 mt-0 text-center">Deel</h2>
           <p className="text-center text-sm text-mute mb-6">Global HR & Payroll Platform</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.competitor ? <CheckCircle className="text-accent-custom flex-shrink-0" size={20} /> : <XCircle className="text-warn-custom flex-shrink-0" size={20} />}
                 <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Analysis: Talent Platform vs. HR Platform</h2>
        <p>
            Deel is a world-class global payroll and compliance engine. They solve the critical problem of how to legally hire and pay people almost anywhere in the world. However, Deel is not a talent platform. They do not source, vet, or manage talent. You must bring your own candidates to their platform.
        </p>
        <p>
           TeamStation AI, on the other hand, is an end-to-end talent and operations platform. Our primary function is to find, vet, and deliver elite LATAM engineering talent. Our platform then provides the entire operational wrapper—including EOR/payroll (which could even be powered by a platform like Deel), secure devices, and insurance—to run that team effectively.
        </p>
        <h3 className="h3">Two Sides of the Same Coin</h3>
        <p>
            You can think of the two platforms as solving different parts of the same puzzle.
        </p>
        <ul>
            <li><strong>TeamStation AI answers:</strong> "Who should I hire, and how do I run them securely and efficiently?"</li>
            <li><strong>Deel answers:</strong> "Now that I've found someone, how do I pay them and stay compliant?"</li>
        </ul>
        <p>
            For a CTO who needs to build a nearshore team from scratch, TeamStation AI provides the complete, all-in-one solution. Deel is a powerful tool for companies that already have a global sourcing and recruiting function in place.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            Choosing between TeamStation AI and Deel is not an either/or decision. They are different tools for different jobs. If you need to find and run an elite nearshore team with full operational support, TeamStation AI is your solution. If you simply need a way to pay an international team you've already sourced, Deel is the industry leader.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
