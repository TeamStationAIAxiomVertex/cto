
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Purpose-built for Staff Augmentation', teamstation: true, competitor: false },
    { feature: 'Cognitive Trait Measurement (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Transparent, Candidate-Level Vetting', teamstation: true, competitor: false },
    { feature: 'Integrated EOR, Devices, & Insurance', teamstation: true, competitor: false },
    { feature: 'Focus on Large-Scale Project Outsourcing', teamstation: false, competitor: true },
    { feature: 'Opaque, Project-Based Fees', teamstation: false, competitor: true },
];


export default function GlobantComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Globant
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Globant</h1>
        <p className="lead max-w-3xl mx-auto">
          A strategic breakdown for CTOs: TeamStation AI’s precision staff augmentation platform vs. Globant’s large-scale project delivery model.
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
          <h2 className="h2 mt-0 text-center">Globant</h2>
           <p className="text-center text-sm text-mute mb-6">Global Systems Integrator</p>
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
        <h2 className="h2 text-center">Analysis: The Co-Pilot vs. The Systems Integrator</h2>
        <p>
            Choosing between TeamStation AI and Globant is about selecting the right operational model. Globant is a massive, global systems integrator, a powerhouse for large-scale digital transformation projects. You hand them a problem, and their teams deliver a solution. It is not a staff augmentation platform.
        </p>
        <p>
            TeamStation AI operates on a fundamentally different premise. We are your{' '}
            <Tooltip text="An integrated platform for CTOs who need to ship faster without sacrificing security or quality. We provide the talent, governance, and infrastructure.">
                Nearshore IT Co-Pilot™
            </Tooltip>. Our entire platform is purpose-built for staff augmentation, providing you with elite, mission-fit LATAM engineering talent that integrates directly into your existing teams.
        </p>
        <h3 className="h3">Talent vs. Projects: Where Do You Need Control?</h3>
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

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion: Choose the Right Tool for the Job</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you need to outsource an entire digital transformation initiative, Globant is a world-class choice. If your goal is to strategically build and scale your own high-performing nearshore engineering team via staff augmentation, TeamStation AI provides the more targeted, controllable, and precise platform.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
