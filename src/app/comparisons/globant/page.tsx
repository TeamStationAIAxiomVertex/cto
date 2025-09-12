
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Purpose-built for Staff Augmentation', teamstation: true },
    { feature: 'Cognitive Trait Measurement (Axiom Cortex™)', teamstation: true },
    { feature: 'Transparent, Candidate-Level Vetting', teamstation: true },
    { feature: 'Integrated EOR, Devices, & Insurance', teamstation: true },
    { feature: 'Focus on Large-Scale Project Outsourcing', competitor: true },
    { feature: 'Opaque, Project-Based Fees', competitor: true },
];


export default function GlobantComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Globant</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. Globant</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A strategic breakdown for CTOs: TeamStation AI’s precision staff augmentation platform vs. Globant’s large-scale project delivery model.
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
          <h2 className="text-2xl font-bold text-center text-foreground">Globant</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Global Systems Integrator</p>
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
        <h2 className="text-center">Analysis: The Co-Pilot vs. The Systems Integrator</h2>
        <p>
            Choosing between TeamStation AI and Globant is about selecting the right operational model. Globant is a massive, global systems integrator, a powerhouse for large-scale digital transformation projects. You hand them a problem, and their teams deliver a solution. It is not a staff augmentation platform.
        </p>
        <p>
            TeamStation AI operates on a fundamentally different premise. We are your{' '}
            <Tooltip text="An integrated platform for CTOs who need to ship faster without sacrificing security or quality. We provide the talent, governance, and infrastructure.">
                Nearshore IT Co-Pilot™
            </Tooltip>. Our entire platform is purpose-built for staff augmentation, providing you with elite, mission-fit LATAM engineering talent that integrates directly into your existing teams.
        </p>
        <h3>Talent vs. Projects: Where Do You Need Control?</h3>
        <p>
            Globant sells project delivery. Their value is in the final product, not in the transparency of the team building it. This model works well for enterprise-level outsourcing of entire functions.
        </p>
        <p>
            TeamStation AI, in contrast, focuses on talent quality and integration. Our{' '}
            <Link href="/research/axiom-cortex-scientific-report">
                Axiom Cortex™
            </Link>
            {' '}engine measures cognitive traits, ensuring you're hiring engineers who are not just skilled, but are also agile problem-solvers. Our platform provides you with the data and control to manage your team effectively. For any organization that wants to retain direct control over their engineering culture and technical direction, the TeamStation model is far more aligned.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion: Choose the Right Tool for the Job</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you need to outsource an entire digital transformation initiative, Globant is a world-class choice. If your goal is to strategically build and scale your own high-performing nearshore engineering team via staff augmentation, TeamStation AI provides the more targeted, controllable, and precise platform.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
