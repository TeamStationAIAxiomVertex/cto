import type { Metadata } from 'next';
import Link from 'next/link';
import ValuePropositionBlock from '../../components/seo/ValuePropositionBlock';
import FurtherReading from '../../components/seo/FurtherReading';
import CTOFieldManualBlock from '../../components/seo/CTOFieldManualBlock';

export const metadata: Metadata = {
  title: { absolute: 'Engineering OS Playbook for CTOs | TeamStation AI' },
  description:
    'Field manual for CTO and CIO leaders. Reduce delivery risk, improve hiring signal quality, and run distributed engineering with measurable control.',
};

export default function PlaybookPage() {
  return (
    <main className="manual-page reading-shell py-10">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Playbook</span>
      </div>

      <header className="glass-panel rounded-2xl p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Distributed Engineering OS Playbook
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-8">
          This is a field manual for CTO and CIO leaders who need to run distributed engineering in the AI era.
          The goal is practical control. You identify delivery risk, select the right team topology, and apply
          evidence based operating rules that protect velocity, quality, and governance.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
            <p className="text-sm font-semibold text-primary">Operating reality</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Delivery slows down when hiring, architecture, and governance are managed as separate systems.
            </p>
          </div>
          <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
            <p className="text-sm font-semibold text-primary">Operating response</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Use one connected operating model that links role design, evaluation rigor, and execution cadence.
            </p>
          </div>
          <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
            <p className="text-sm font-semibold text-primary">Validation signal</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Teams with consistent topology rules and evaluation standards reduce rework, lower delay, and improve release confidence.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/playbook/hub" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Open Playbook Hub
          </Link>
          <Link href="/research/hub" className="rounded-md border px-4 py-2 text-sm font-semibold hover:border-primary/40 hover:text-primary">
            Review Research Hub
          </Link>
          <a
            href="https://engineering.teamstation.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-semibold hover:border-primary/40 hover:text-primary"
          >
            Engineering Doctrine
          </a>
        </div>
      </header>

      <section className="glass-panel rounded-2xl mt-10 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">How CTO teams should use this playbook</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-7">
          <p>
            Start with the decision model, not the vendor list. Define what is failing first. If cycle time is unstable,
            focus on topology and handoff rules. If quality is unstable, tighten evaluation and role ownership.
            If planning is unstable, align economics with capacity and governance.
          </p>
          <p>
            Then use connected paths across the site. Move from <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics</Link>{' '}
            to <Link href="/playbook/tco-model" className="text-primary hover:underline">TCO model</Link>, then to{' '}
            <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity measurement</Link>.
            For cross domain guidance use{' '}
            <a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">evaluation protocols</a>{' '}
            and <a href="https://research.teamstation.dev/protocols/delivery" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">delivery protocols</a>.
          </p>
          <p>
            This keeps page depth and navigation quality high while also giving leadership teams a practical sequence
            they can use during active execution.
          </p>
        </div>
      </section>

      <ValuePropositionBlock
        pain="CTO teams lose delivery control when hiring quality, execution cadence, and governance are disconnected."
        stakes="When these systems drift, release confidence drops, costs rise, and roadmap execution becomes unpredictable."
        prescription="Use one operating model across role design, technical evaluation, and delivery telemetry."
        proof="Connected playbook and research paths improve decision quality and reduce avoidable delivery variance."
      />

      <CTOFieldManualBlock
        title="CTO Field Manual for Distributed Engineering Execution"
        focus="playbook navigation, delivery control, and operating model alignment"
      />

      <FurtherReading />
    </main>
  );
}
