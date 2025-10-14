import Link from 'next/link';
import type { Metadata } from 'next';
import { Book, AlertTriangle, ArrowRight, DollarSign, Users, BrainCircuit, ShieldCheck } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Platforming the Nearshore Industry: The Book That Defined the Science',
  description: 'Read the summary of the foundational book that provides the scientific and economic blueprint for replacing legacy staff augmentation with a predictable, high-performance operational model.',
  alternates: {
    canonical: '/research/platforming-nearshore-book',
  },
};

const painCards = [
  {
    title: "The Vetting Gamble",
    pain: "You're forced to bet your roadmap on vendors who use resume keywords and 'gut feel.' This is not a system; it's a coin flip.",
    solution: "The book provides the scientific methodology to replace subjective interviews with a predictable, data-driven system for measuring cognitive ability.",
    href: "/research/axiom-cortex-scientific-report"
  },
  {
    title: "The Black Box of Performance",
    pain: "You are paying for headcount, not output. You have no verifiable data to prove your remote team is effective, and no way to diagnose why they are not.",
    solution: "The book provides the blueprint for an evidence-based system that measures engineering throughput, turning your team from a black box into a predictable asset.",
    href: "/research/performance-evaluation-framework"
  },
  {
    title: "Vendor Sprawl & Hidden Costs",
    pain: "Your 'low-cost' vendor is a trojan horse for chaos. You are now drowning in the hidden costs and vendor sprawl of managing separate contracts for talent, EOR, and device security.",
    solution: "The book provides the economic model for replacing this chaos with a complete operational wrapper that provides a single, predictable TCO.",
    href: "/services/integrated-services"
  }
];

const bookPillars = [
  {
    icon: BrainCircuit,
    title: "The Science of Talent Evaluation",
    description: "Go beyond resumes and traditional interviews with a proprietary framework for identifying top-tier LATAM engineers. The book details the proprietary psychometric and neurocognitive models that form the foundation of our Axiom Cortex™ engine, providing a repeatable, scientific method for predicting a candidate's on-the-job success. It is the source code for de-risking your most critical hires."
  },
  {
    icon: Users,
    title: "Building a High-Trust Culture",
    description: "Learn the keys to integrating nearshore teams for maximum collaboration and psychological safety. The book provides a detailed framework for turning outsourced groups into true, cohesive product teams that are fully aligned with your company's culture and goals. It's the blueprint for solving the 'us vs. them' problem that plagues legacy outsourcing."
  },
  {
    icon: ShieldCheck,
    title: "Data-Driven Performance Management",
    description: "Implement a system for measuring and improving the performance of your nearshore engineers. The book moves beyond the flawed model of billing for hours to a new paradigm of delivering value. It provides a quantitative framework for measuring engineering throughput, allowing you to manage your nearshore team with the same data-driven rigor you apply to your own product."
  },
  {
    icon: DollarSign,
    title: "Long-Term Retention & TCO",
    description: "Discover the secrets to retaining top LATAM talent for the long haul. The book outlines a comprehensive strategy for creating a career path and a sense of belonging for your nearshore engineers, dramatically reducing the high cost of churn. It also provides the model for building a predictable Total Cost of Ownership (TCO) that your CFO will approve."
  }
];

export default function PlatformingNearshoreBookPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cto.teamstation.dev" },
      { "@type": "ListItem", "position": 2, "name": "Research Hub", "item": "https://cto.teamstation.dev/research/hub" },
      { "@type": "ListItem", "position": 3, "name": "Platforming the Nearshore Industry", "item": "https://cto.teamstation.dev/research/platforming-nearshore-book" }
    ]
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Platforming the Nearshore IT Staff Augmentation Industry",
    "author": {
      "@type": "Organization",
      "name": "TeamStation AI"
    },
    "url": "https://cto.teamstation.dev/research/platforming-nearshore-book",
    "workExample": [
      {
        "@type": "Book",
        "isbn": "B0F66KWTWK",
        "bookEdition": "First Edition",
        "bookFormat": "https://schema.org/Paperback",
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, bookSchema]} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/research/hub" className="hover:text-foreground">Research Hub</Link> / <span>Platforming the Nearshore Industry</span>
        </div>

        <header className="my-8">
          <div className="rounded-lg border bg-card p-8 md:p-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Book That Is Defining the Future of Nearshore</h1>
            <div className="mt-8 max-w-4xl space-y-6">
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h2 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>The CTO's Dilemma: An Industry Without a Blueprint</h2>
                <p className="mt-2 text-muted-foreground">For decades, building remote engineering teams has been a high-risk gamble. CTOs have been forced to make multi-million dollar decisions based on vendor sales pitches and anecdotal evidence. The legacy staff augmentation model offers no blueprint for success, no scientific framework for hiring, and no predictable model for performance. This creates a cascade of hidden costs, from the 'Mis-Hire Tax' of a bad hire to the 'Vacancy Tax' of a slow hiring process. The result is a constant state of vendor chaos, a drain on your budget, and a drag on your team's velocity. This is an unacceptable level of risk for a mission-critical function.</p>
                <p className="mt-4 text-muted-foreground"><strong>"Platforming the Nearshore IT Staff Augmentation Industry"</strong> was written to solve this problem. It is the industry's first definitive guide to provide a rigorous, data-driven framework for building and scaling elite engineering teams in Latin America. It is the blueprint that replaces guesswork with science, providing a repeatable, engineered system for success.</p>
              </div>
            </div>
          </div>
        </header>
        
        <section className="my-24">
          <h2 className="text-center text-4xl font-bold text-foreground">Diagnosing the Expensive Problem</h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">This book provides the scientific solution to the systemic flaws of the legacy nearshore model.</p>
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
          <h2 className="text-center text-4xl font-bold text-foreground">The Core Theses: An Engineered Approach to Building Teams</h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">This book provides the foundational pillars for transforming your nearshore operation from a source of chaos into a predictable, high-performance asset.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg border bg-card p-6 flex flex-col">
                <div className="flex items-center gap-3">
                    <pillar.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-grow">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24 rounded-lg border bg-card p-8 md:p-12 text-center">
            <h2 className="text-center text-3xl font-bold text-foreground">Get the Blueprint</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">This book is the foundational text for our entire methodology and the source of truth for the new, scientific approach to nearshore development. Move beyond the legacy model and start building a predictable, high-performance engineering organization.</p>
            <div className="mt-8">
                <a href="https://www.amazon.com/Platforming-Nearshore-Staff-Augmentation-Industry/dp/B0F66KWTWK" target="_blank" rel="noopener noreferrer" className="cta-button">
                    Buy on Amazon <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </div>
        </section>

      </main>
    </>
  );
}
