
import Link from 'next/link';
import { ArrowRight, BarChart, BookOpen, DollarSign, GitCompare, Globe, Scale, ShieldCheck, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The CTO Playbook for Nearshore Engineering | TeamStation AI',
  description: 'The definitive, research-backed hub for CTOs evaluating nearshore software development, LATAM engineering, AI-driven hiring, and vendor choices like Bairesdev alternatives.',
};

const playbookEntries = [
    {
        href: '/playbook/nearshore-vs-offshore',
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: 'Nearshore vs. Offshore',
        pain: "Is your velocity dying in a 12-hour feedback loop?",
        description: 'A data-driven analysis for CTOs on nearshore vs. offshore software development, diagnosing the true cost and risk of your global talent strategy.'
    },
    {
        href: '/playbook/latam-economics',
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: 'LATAM Economics',
        pain: "Is your budget based on misleading hourly rates?",
        description: 'A CFO-ready framework for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, covering salaries, hidden costs, and risks.'
    },
     {
        href: '/playbook/build-vs-buy',
        icon: <Scale className="h-8 w-8 text-primary" />,
        title: 'Build vs. Buy',
        pain: "Are you prepared to be a global payroll and IT expert?",
        description: 'The data-driven playbook for modeling the trade-offs in TCO, speed, and risk between building a nearshore operation from scratch vs. "buying" into an integrated platform.'
    },
    {
        href: '/playbook/bias-free-technical-hiring-axiom-cortex',
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: 'Bias-Free Technical Hiring',
        pain: "Is your hiring process a high-risk gamble on resumes?",
        description: 'A strategic framework for CTOs to transform hiring from a subjective art into a data-driven science, powered by our Axiom Cortex™ Cognitive AI.'
    },
    {
        href: '/playbook/tco-model',
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: 'TCO Model: The Computational Cards',
        pain: "Can you defend your engineering budget with data?",
        description: 'A strategic tool for CTOs to model the hidden costs of hiring, delays, and quality issues, and build a CFO-ready business case to turn your engineering organization into a value driver.'
    }
];

export default function PlaybookHubPage() {
  return (
    <main className="container max-w-5xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Playbook Hub</span>
      </div>

      <header className="my-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The CTO Playbook for Nearshore Success</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          This is your definitive, research-backed resource for evaluating nearshore software development. Move beyond misleading hourly rates and build a CFO-ready, data-driven case for a faster, safer, and more cost-effective engineering strategy.
        </p>
      </header>
      
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {playbookEntries.map((entry) => (
            <div key={entry.href} className="group relative flex flex-col rounded-lg border bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
               <p className="text-sm font-semibold text-primary">{entry.pain}</p>
                <div className="flex items-center gap-3 mt-3">
                    {entry.icon}
                    <h2 className="text-xl font-bold text-foreground">{entry.title}</h2>
                </div>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">{entry.description}</p>
              <Link href={entry.href} className="stretched-link mt-6 flex items-center text-sm font-semibold text-primary">
                Read the Playbook <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center rounded-lg bg-primary/10 p-8 mt-12 shadow-lg">
            <h2 className="text-2xl font-bold">Ready to Build Your Business Case?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                This isn't a sales pitch. It's a strategic consultation to build your CFO-ready business case for nearshore success.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
        </div>
    </main>
  );
}
