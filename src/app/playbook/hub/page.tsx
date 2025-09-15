
import Link from 'next/link';
import { ArrowRight, BarChart, DollarSign, Globe, Scale, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'The CTO Playbook for Nearshore Engineering Success | TeamStation AI',
  description:
    'The definitive, research-backed hub for CTOs evaluating nearshore software development, LATAM engineering, AI-driven hiring, and vendor choices like Bairesdev alternatives. A playbook for nearshore success.',
  keywords: 'cto playbook, nearshore software development, latam engineering, staff augmentation, bairesdev alternative, build vs buy, tco model',
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
    title: 'Nearshore vs. Offshore',
    pain: 'Is your velocity dying in a 12-hour feedback loop?',
    solution:
      'Replace 24-hour ping-pong with a daylight-native cadence. Our nearshore model provides 4-8 hours of daily overlap, eliminating the "human latency tax" that kills agile workflows.',
    proof: 'PR turnaround drops from 36-72h to <8h in the first two sprints.',
  },
  {
    href: '/playbook/latam-economics',
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'LATAM Economics',
    pain: 'Is your budget based on misleading hourly rates?',
    solution:
      'Move beyond salary-only math. Our TCO model includes the hidden costs of hiring, management overhead, and productivity loss, giving you a CFO-ready business case.',
    proof: 'Our all-inclusive model is often 40-60% cheaper than a fully-loaded US hire.',
  },
  {
    href: '/playbook/build-vs-buy',
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Build vs. Buy',
    pain: 'Are you prepared to be a global payroll and IT expert?',
    solution:
      'Stop building non-core competencies. Our integrated platform absorbs the immense operational load of legal, HR, and IT, letting you focus on building product, not a foreign subsidiary.',
    proof: 'Eliminate the $97k+ in hidden first-year costs of the "Build" model.',
  },
  {
    href: '/playbook/bias-free-technical-hiring-axiom-cortex',
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Bias-Free Technical Hiring',
    pain: 'Is your hiring process a high-risk gamble on resumes?',
    solution:
      'Replace gut-feel with auditable proof. Our Axiom Cortex™ AI provides a scientific, evidence-based "Cognitive Fingerprint" of a candidate’s problem-solving ability, not just their credentials.',
    proof: 'Reduce mis-hire risk by >90% with a mismatch rate of ≤ 10%.',
  },
  {
    href: '/playbook/tco-model',
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'TCO Model: The Computational Cards',
    pain: 'Can you defend your engineering budget with data?',
    solution:
      'Use our "Computational Cost Cards" to model the hidden financial impact of slow hiring, poor quality, and operational drag. Turn your engineering org into a quantifiable value driver.',
    proof: 'Calculate metrics like "Revenue Recaptured" and "Cost of Vacancy".',
  },
];

export default function PlaybookHubPage() {
  return (
    <main className="container max-w-5xl py-12">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Playbook Hub</span>
      </div>

      <header className="my-12 text-center">
        <h1 className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
          The CTO Playbook for Nearshore Success
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          This is your definitive, research-backed resource for evaluating nearshore software development. Move beyond
          misleading hourly rates and build a CFO-ready, data-driven case for a faster, safer, and more cost-effective
          engineering strategy.
        </p>
      </header>

      <section className="my-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {playbookEntries.map((entry, index) => (
            <div
              key={entry.href}
              className={`group relative flex flex-col rounded-lg border bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${
                playbookEntries.length % 2 !== 0 && index === playbookEntries.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <p className="text-sm font-semibold text-primary">{entry.pain}</p>
              <div className="mt-3 flex items-center gap-3">
                {entry.icon}
                <h2 className="text-xl font-bold text-foreground">{entry.title}</h2>
              </div>
              <div className="mt-4 border-t border-border/50 pt-4">
                <h3 className="text-sm font-semibold text-primary">Solution:</h3>
                <p className="mt-1 text-sm text-muted-foreground">{entry.solution}</p>
              </div>
              <div className="flex-grow" />
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-mono text-primary">Proof: {entry.proof}</p>
                <Link href={entry.href} className="mt-4 flex items-center text-sm font-semibold text-primary">
                  Read the Playbook <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold">Ready to Build Your Business Case?</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          This isn't a sales pitch. It's a strategic consultation to build your CFO-ready business case for nearshore success.
        </p>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mt-6"
        >
          Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </main>
  );
}
