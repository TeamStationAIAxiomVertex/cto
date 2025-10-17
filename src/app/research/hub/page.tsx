import Link from 'next/link';
import type { Metadata } from 'next';
import { Book, TestTube, Lightbulb, AlertTriangle, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "The Science of Nearshore Development: A Research Hub for CTOs | TeamStation AI",
  description: "Access the foundational research that is transforming the nearshore industry. Read the peer-reviewed papers and the book that provide the scientific blueprint for de-risking your engineering and hiring strategy.",
};

const researchAssets = [
  {
    icon: Book,
    title: 'The Book: Platforming the Nearshore Industry',
    description: 'The foundational text for the new discipline of scientific nearshore management. This book provides the complete economic and operational blueprint for replacing vendor chaos with a predictable, high-throughput platform.',
    href: '/research/platforming-nearshore-book',
  },
  {
    icon: TestTube,
    title: 'Axiom Cortex™ Scientific Report',
    description: 'The peer-reviewed science behind our predictive hiring model. This paper details the neurocognitive and psychometric principles that allow us to measure a candidate\'s true problem-solving ability, de-risking your most critical hires.',
    href: '/research/axiom-cortex-scientific-report',
  },
  {
    icon: TestTube,
    title: 'Heuristically Trained AI Models for Technical Evaluation',
    description: 'Explores heuristic-guided model training for evaluating software engineers. Balances statistical robustness with domain-specific interpretability.',
    href: '/research/heuristically-trained-ai',
  },
  {
    icon: Lightbulb,
    title: 'Framework for Measuring Engineering Capacity',
    description: 'Proposes a quantitative model for capacity planning in distributed engineering teams. Incorporates psychometric and economic factors for predictable delivery.',
    href: '/research/performance-evaluation-framework',
  },
  {
    icon: Lightbulb,
    title: 'Performance Metrics in the AI Age',
    description: 'Redefines productivity and performance metrics for engineering teams using AI-assisted workflows. Proposes new measurement models aligned with modern delivery.',
    href: '/research/performance-metrics-in-ai-age',
  },
];

const painCards = [
  {
    title: "The Vetting Gamble",
    pain: "You're forced to bet your roadmap on vendors who use resume keywords and 'gut feel.' This is not a system; it's a coin flip.",
    solution: "Our research on Axiom Cortex™ provides the scientific methodology to replace subjective interviews with a predictable, data-driven system for measuring cognitive ability.",
    href: "/research/axiom-cortex-scientific-report"
  },
  {
    title: "The Black Box of Performance",
    pain: "You are paying for headcount, not output. You have no verifiable data to prove your remote team is effective, and no way to diagnose why they are not.",
    solution: "Our Performance Evaluation Framework is the blueprint for an evidence-based system that measures engineering throughput, turning your team from a black box into a predictable asset.",
    href: "/research/performance-evaluation-framework"
  },
  {
    title: "Vendor Sprawl & Hidden Costs",
    pain: "Your 'low-cost' vendor is a trojan horse for chaos. You are now drowning in the hidden costs and vendor sprawl of managing separate contracts for talent, EOR, and device security.",
    solution: "Our book, 'Platforming the Nearshore Industry,' provides the scientific and economic model for replacing this chaos with a complete operational wrapper that provides a single, predictable TCO.",
    href: "/research/platforming-nearshore-book"
  }
]

export default function ResearchHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cto.teamstation.dev" },
      { "@type": "ListItem", "position": 2, "name": "Research Hub", "item": "https://cto.teamstation.dev/research/hub" }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <span>Research Hub</span>
        </div>

        <header className="my-8">
          <div className="rounded-lg border bg-card p-8 md:p-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Science of Predictable Nearshore Results</h1>
            <div className="mt-8 max-w-4xl space-y-6">
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h2 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>The Crisis of Authority in Nearshore Outsourcing</h2>
                <p className="mt-2 text-muted-foreground">For twenty years, you've been told to trust the nearshore model. You've been sold on time zones and cost savings, yet you're still fighting the same fires: the mis-hire that looked great on paper, the 'low-cost' team that bleeds your budget through low velocity, the vendor chaos that has become your second job. The problem isn't just a bad vendor. The problem is an entire industry built on anecdote instead of evidence. This is an unacceptable business risk.</p>
                <p className="mt-4 text-muted-foreground">Our research exists to close this gap. We are committed to the science of transforming nearshore development from a high-risk gamble into a predictable engineering discipline.</p>
              </div>
            </div>
          </div>
        </header>

        <section className="my-24">
          <h2 className="text-center text-4xl font-bold text-foreground">The End of Guesswork: An Engineered Approach to Building Teams</h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">The legacy staff augmentation model is broken. We are the first to replace it with a new, data-driven scientific discipline. Our research is the proof.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {painCards.map((card) => (
              <div key={card.title} className="rounded-lg border bg-card p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-destructive">{card.pain}</p>
                  <div className="mt-4 border-t border-border pt-4 flex-grow">
                    <p className="text-sm text-foreground m-0">{card.solution}</p>
                  </div>
                  <Link href={card.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                      Read the Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24">
            <h2 className="text-center text-4xl font-bold text-foreground">Your Research Arsenal</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">This is the arsenal of evidence a CTO needs to de-risk decisions and win budget battles with the CFO.</p>
            <div className="mt-12 space-y-8">
                {researchAssets.map((asset) => {
                const Icon = asset.icon;
                return (
                    <Link key={asset.title} href={asset.href} className="group block rounded-lg border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3 border">
                        <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{asset.title}</h3>
                        <p className="mt-1 text-muted-foreground">{asset.description}</p>
                        </div>
                    </div>
                    </Link>
                );
                })}
            </div>
        </section>

        <section className="my-24 rounded-lg border bg-card p-8 md:p-12 text-center">
            <h2 className="text-center text-3xl font-bold text-foreground">Our Scientific Commitment</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">The chaos and risk of the legacy model are no longer acceptable. Our research is the foundation of a new discipline, and our company is the vehicle for its implementation.</p>
            <p className="mt-4 text-lg font-semibold text-primary">We are committed to the science of transforming this industry because, in a world run by software, building a team should not be an act of faith. It should be an act of engineering.</p>
        </section>

      </main>
    </>
  );
}
