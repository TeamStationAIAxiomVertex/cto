
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Focus on Mission-Fit LATAM Talent', teamstation: true, competitor: false },
    { feature: 'Cognitive Trait Measurement (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Platform Telemetry for Onboarding & Performance', teamstation: true, competitor: false },
    { feature: 'Integrated EOR, Devices, & Insurance', teamstation: true, competitor: false },
    { feature: 'Transparent, Candidate-Level Vetting', teamstation: true, competitor: false },
    { feature: 'Scalable Squads for Mid-Sized Companies', teamstation: true, competitor: false },
];


export default function GlobantComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/comparisons">Comparisons</a> / Globant
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Globant</h1>
        <p className="lead max-w-3xl mx-auto">
          A strategic breakdown for CTOs: TeamStation AI’s precision talent platform vs. Globant’s large-scale project delivery model.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="card border-green-500/50 flex-1">
          <h2 className="h2 mt-0 text-center">TeamStation AI</h2>
          <p className="text-center text-sm text-slate-400 mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.teamstation ? <CheckCircle className="text-green-500 flex-shrink-0" size={20} /> : <XCircle className="text-red-500 flex-shrink-0" size={20} />}
                <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card border-red-500/50 flex-1">
          <h2 className="h2 mt-0 text-center">Globant</h2>
           <p className="text-center text-sm text-slate-400 mb-6">Global Systems Integrator</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.competitor ? <CheckCircle className="text-green-500 flex-shrink-0" size={20} /> : <XCircle className="text-red-500 flex-shrink-0" size={20} />}
                <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Analysis: The Co-Pilot vs. The Systems Integrator</h2>
        <p>
            Choosing between TeamStation AI and Globant isn't about picking a better vendor; it's about selecting the right operational model for your needs. Globant is a massive, global systems integrator, a powerhouse for large-scale digital transformation projects. Their strength lies in taking on entire, end-to-end projects, often leveraging their proprietary AI-infused "CODA agents" to automate aspects of the software development lifecycle. You hand them a problem, and their teams deliver a solution.
        </p>
        <p>
            TeamStation AI operates on a fundamentally different, more targeted premise. We are not a systems integrator; we are your{' '}
            <Tooltip text="An integrated platform for CTOs who need to ship faster without sacrificing security or quality. We provide the talent, governance, and infrastructure.">
                Nearshore IT Co-Pilot™
            </Tooltip>. Our focus is providing you with elite, mission-fit LATAM engineering talent that integrates directly into your existing teams. We give you the platform and telemetry to manage and scale your nearshore capacity with precision and predictability.
        </p>
        <h3 className="h3">Talent vs. Projects: Where Do You Need Control?</h3>
        <p>
            Globant sells project delivery. They don't offer candidate-level cognitive vetting or granular onboarding telemetry to their clients. Their value is in the final product, not in the transparency of the team building it. This model works well for enterprise-level outsourcing of entire functions.
        </p>
        <p>
            TeamStation AI, in contrast, focuses on talent quality and integration. Our{' '}
            <a href="/research/axiom-cortex-scientific-report">Axiom Cortex™</a>
            {' '}engine measures cognitive traits, ensuring you're hiring engineers who are not just skilled, but are also agile problem-solvers and strong collaborators. Our platform provides you with the data to monitor onboarding and performance, giving you the control and visibility you need to manage your team effectively. For mid-sized companies, or any organization that wants to retain direct control over their engineering culture and technical direction, the TeamStation model is far more aligned.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion: Choose the Right Tool for the Job</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you need to outsource an entire digital transformation initiative to a large, capable firm, Globant is a world-class choice. If your goal is to strategically build and scale your own high-performing nearshore engineering team with scientifically vetted talent and full operational transparency, TeamStation AI provides the more targeted, controllable, and precise platform.
        </p>
        <a href="/comparisons" className="cta">Back to Main Comparison</a>
      </div>
    </main>
  );
}
