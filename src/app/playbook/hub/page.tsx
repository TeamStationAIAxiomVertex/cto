import Link from 'next/link';
import { ArrowRight, BarChart3, DollarSign, Globe, Scale, ShieldCheck, Zap, BrainCircuit, Users } from 'lucide-react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CTOFieldManualBlock from '../../../components/seo/CTOFieldManualBlock';
import FurtherReading from '../../../components/seo/FurtherReading';

export const metadata: Metadata = {
  title: 'Distributed Engineering OS Playbook Hub for CTO Teams',
  description:
    'Playbook hub for CTO and CIO teams that need stronger delivery control, better hiring signal quality, and clear operating decisions in 2026 and beyond.',
  keywords:
    'cto playbook hub, distributed engineering os, latam economics, tco model, delivery risk mitigation, technical hiring framework',
};

type Entry = {
  href: string;
  icon: ReactNode;
  title: string;
  pain: string;
  solution: string;
  proof: string;
};

const playbookEntries: Entry[] = [
  {
    href: '/playbook/nearshore-vs-offshore',
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Nearshore vs Offshore',
    pain: 'Release loops break when teams wait overnight for every decision.',
    solution:
      'Use daylight overlap and same day decision cadence so architecture and code review cycles stay in motion.',
    proof: 'Review latency falls and cycle time stabilizes in early sprints with clear overlap rules.',
  },
  {
    href: '/playbook/latam-economics',
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'LATAM Economics',
    pain: 'Rate card math hides the real cost of delivery delays and rework.',
    solution:
      'Use full cost modeling that includes management overhead, vacancy cost, and quality variance.',
    proof: 'Leadership can defend the plan with measurable delivery economics instead of hourly rate narratives.',
  },
  {
    href: '/playbook/build-vs-buy',
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Build vs Buy',
    pain: 'Internal hiring operations consume leadership bandwidth that should stay on product execution.',
    solution:
      'Compare operating burden directly so teams can choose the model that protects focus and control.',
    proof: 'Clear comparison framework reduces executive uncertainty and speeds final decision cycles.',
  },
  {
    href: '/playbook/bias-free-technical-hiring-axiom-cortex',
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Technical Hiring System',
    pain: 'Resume driven hiring misses true execution signal and creates mismatch risk.',
    solution:
      'Use structured technical evidence and cognitive signal review before final role assignment.',
    proof: 'Teams reduce avoidable hiring drift when role criteria and evaluation protocol are explicit.',
  },
  {
    href: '/playbook/tco-model',
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'TCO Decision Model',
    pain: 'Budget conversations collapse when engineering outcomes are not tied to financial impact.',
    solution:
      'Map delivery behavior to cost outcomes with one model used by engineering and finance leadership.',
    proof: 'Planning becomes clearer when cost of delay and quality risk are modeled together.',
  },
];

const doctrineCards = [
  {
    title: 'Velocity Control',
    problem: 'Teams lose days in approval loops and unresolved handoffs.',
    solution: 'Use daylight operating rhythm, same day review rules, and explicit ownership boundaries.',
    proof: 'Cycle time and queue depth become predictable when handoff friction is removed.',
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Signal Quality',
    problem: 'Role selection decisions rely on title language more than execution evidence.',
    solution: 'Use technical signal protocol with role specific acceptance thresholds.',
    proof: 'Mismatch risk drops when hiring standards are tied to production behavior.',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Governance Stability',
    problem: 'Multi vendor operations blur accountability and slow incident response.',
    solution: 'Use one governed operating model across hiring, access control, and delivery telemetry.',
    proof: 'Forecast variance and reopen rate improve when governance and execution are connected.',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

export default function PlaybookHubPage() {
  return (
    <main className="reading-shell py-12">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Playbook Hub</span>
      </div>

      <header className="surface-card p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Distributed Engineering OS Playbook Hub
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-8">
          This hub is your executive decision layer for distributed engineering in 2026 and beyond.
          Use it to identify delivery pain, choose the correct operating response, and validate outcomes with measurable proof.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href="/research/hub" className="text-primary hover:underline">Research Hub</Link>
          <Link href="/comparisons" className="text-primary hover:underline">Comparison Pages</Link>
          <Link href="/hire" className="text-primary hover:underline">Hire Routes</Link>
          <a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Engineering Doctrine</a>
        </div>
      </header>

      <section className="surface-card mt-10 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">How to use this hub</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-7">
          <p>
            Start by naming the failure mode. If decision speed is low, use velocity and topology pages first.
            If hiring quality is unstable, use evaluation pages first. If budget approval is blocked, use economics and total cost pages first.
          </p>
          <p>
            Then move through linked pathways. Begin in <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics</Link>,
            continue to <Link href="/playbook/tco-model" className="text-primary hover:underline">TCO model</Link>, then verify execution readiness in
            <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline"> capacity measurement</Link>.
            For subdomain depth, use <a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">evaluation protocols</a>
            {' '}and <a href="https://research.teamstation.dev/protocols/delivery" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">delivery protocols</a>.
          </p>
        </div>
      </section>

      <section className="my-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {playbookEntries.map((entry, index) => (
            <article
              key={entry.href}
              className={`group relative flex flex-col rounded-lg border bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${
                playbookEntries.length % 2 !== 0 && index === playbookEntries.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <p className="text-sm font-semibold text-primary">Pain</p>
              <p className="mt-1 text-sm text-muted-foreground">{entry.pain}</p>
              <div className="mt-3 flex items-center gap-3">
                {entry.icon}
                <h2 className="text-xl font-bold text-foreground">{entry.title}</h2>
              </div>
              <div className="mt-4 border-t border-border/50 pt-4">
                <h3 className="text-sm font-semibold text-primary">Solution</h3>
                <p className="mt-1 text-sm text-muted-foreground">{entry.solution}</p>
              </div>
              <div className="flex-grow" />
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-mono text-primary">Proof: {entry.proof}</p>
                <Link href={entry.href} className="stretched-link mt-4 flex items-center text-sm font-semibold text-primary">
                  Open playbook page <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-card my-16 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Core doctrine for CTO operations</h2>
        <p className="mt-4 text-muted-foreground leading-7">
          These cards summarize recurring leadership constraints and the operating response that prevents delivery drift.
          Use them as review criteria in planning and steering meetings.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {doctrineCards.map((card) => (
            <article key={card.title} className="rounded-lg border bg-background p-6 shadow-lg">
              <div className="flex items-start gap-3">
                {card.icon}
                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
              </div>
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="text-sm font-semibold text-primary">Pain</p>
                <p className="mt-1 text-sm text-muted-foreground">{card.problem}</p>
              </div>
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="text-sm font-semibold text-primary">Solution</p>
                <p className="mt-1 text-sm text-muted-foreground">{card.solution}</p>
              </div>
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-mono text-primary">Proof: {card.proof}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTOFieldManualBlock
        title="CTO Field Manual for Playbook Orchestration"
        focus="delivery risk diagnosis, hiring signal quality, and governance alignment"
      />

      <section className="surface-card my-12 p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Diagnose delivery risk before you hire</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-7">
          Use a short discovery session to identify constraints, choose the right team design, and align operating goals
          before committing budget.
        </p>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
          className="cta-button mt-6"
        >
          Book discovery session <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </section>

      <FurtherReading />
    </main>
  );
}
