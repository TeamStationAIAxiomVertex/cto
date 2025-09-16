
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from '@/components/client/tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Globant Alternative: TeamStation AI vs. Globant for Staff Augmentation',
  description: 'Looking for a Globant alternative for nearshore staff augmentation? Compare TeamStation AI\'s focused team-building platform with Globant\'s project outsourcing model.',
};

const comparisonPoints = {
    "Model": {
        pain: "Do you need to augment your team or outsource a project?",
        traditional: "Globant is a massive systems integrator. They sell project delivery, which works for large-scale outsourcing but is misaligned for CTOs who need to embed talent into their own teams.",
        teamstation: "We are purpose-built for staff augmentation. We provide elite, mission-fit LATAM engineers who integrate directly into your existing teams, culture, and workflows.",
        proof: "Time-to-First-PR in 7–14 days"
    },
    "Vetting": {
        pain: "Are you hiring an individual or a black box team?",
        traditional: "Globant sells project outcomes, not talent transparency. Their use of 'AI' is a marketing label for a process, not a scientifically-validated tool for assessing individual engineers.",
        teamstation: "Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> provides peer-reviewed, scientific proof of an individual's cognitive ability, ensuring you know exactly who you're hiring.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Control": {
        pain: "Do you want to retain control over your engineering culture?",
        traditional: "With a large SI, you lose direct control over technical direction, architecture, and team culture. This can lead to long-term dependency and integration challenges.",
        teamstation: "Our model is built for control. You manage the team, own the roadmap, and shape the culture. We provide the talent and the operational platform to make it happen.",
        proof: "100% Client-Managed Teams"
    }
}

export default function GlobantComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Globant Alternative</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Globant Alternative: TeamStation AI</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A strategic breakdown for CTOs: TeamStation AI’s precision staff augmentation platform vs. Globant’s large-scale project delivery model.
        </p>
         <div className="mt-4 text-sm">
            <a href="https://www.globant.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                Vendor home: globant.com <ExternalLink className="h-4 w-4" />
            </a>
        </div>
      </header>

      <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Co-Pilot vs. The Systems Integrator</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Globant Model
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
        <h2 className="text-center">Analysis: The Co-Pilot vs. The Systems Integrator</h2>
        <p>
            Choosing between TeamStation AI and Globant is about selecting the right operational model. <a href="https://www.globant.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Globant <ExternalLink className="h-4 w-4" /></a> is a massive, global systems integrator, a powerhouse for large-scale digital transformation projects. You hand them a problem, and their teams deliver a solution. It is not a staff augmentation platform.
        </p>
        <p>
            As a Globant alternative, TeamStation AI operates on a fundamentally different premise. We are your{' '}
            <WithTooltip label="An integrated platform for CTOs who need to ship faster without sacrificing security or quality. We provide the talent, governance, and infrastructure.">
                <span className="border-b border-dashed">Nearshore IT Co-Pilot™</span>
            </WithTooltip>. Our entire platform is purpose-built for staff augmentation, providing you with elite, mission-fit LATAM engineering talent that integrates directly into your existing teams.
        </p>
        <h3>Talent vs. Projects: Where Do You Need Control?</h3>
        <p>
            Globant sells project delivery. Their value is in the final product, not in the transparency of the team building it. Their use of "AI" is a marketing label for a process, not a scientifically-validated tool for assessing individual talent. This model works well for enterprise-level outsourcing of entire functions.
        </p>
        <p>
            TeamStation AI, in contrast, focuses on talent quality and integration. Our{' '}
            <Link href="/research/axiom-cortex-scientific-report">
                Axiom Cortex™ Cognitive AI
            </Link>
            {' '} engine measures cognitive traits, ensuring you're hiring engineers who are not just skilled, but are also agile problem-solvers. Our platform provides you with the data and control to manage your team effectively. For any organization that wants to retain direct control over their engineering culture and technical direction, the TeamStation model is far more aligned.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion: Choose the Right Tool for the Job</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you need to outsource an entire digital transformation initiative, Globant is a world-class choice. If your goal is to strategically build and scale your own high-performing nearshore engineering team via staff augmentation, TeamStation AI is the superior Globant alternative.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
