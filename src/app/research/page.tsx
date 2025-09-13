
import Link from 'next/link';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/research';
import { ArrowRight, Beaker, FileText, BrainCircuit } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Research: The Science Behind Predictable Nearshore Results | TeamStation AI',
  description: 'Explore our peer-reviewed research on AI technical interviews, software engineering performance telemetry, and bias-free hiring for LATAM engineering teams.',
};

export default async function ResearchPage() {
  const slugs = await getAllResearchSlugs();
  const papers = await Promise.all(slugs.map(slug => getResearchBySlug(slug)));

  const researchAssets = [
    {
      slug: 'axiom-cortex-scientific-report',
      pain: "Is your hiring process a high-risk gamble on resumes?",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      solutionTitle: "The Science of De-Risking Talent",
      solutionDescription: "This peer-reviewed paper details the proprietary Cognitive AI engine that powers our talent evaluation. It's the science behind how we provide evidence-based proof of a candidate's problem-solving ability, not just their credentials."
    },
     {
      slug: 'technical-talent-evaluation-system',
      pain: "Can you defend your hiring decisions with data?",
      icon: <FileText className="h-8 w-8 text-primary" />,
      solutionTitle: "The Evidence Locker in Action",
      solutionDescription: "This is not a paper, but a real, tangible output of our research. See an anonymized evaluation report and the 'Evidence Locker' that turns hiring from a gut-feel guess into a defensible, data-driven science."
    },
    {
      slug: 'performance-evaluation-framework',
      pain: "Are outdated metrics failing to capture true engineering value?",
      icon: <Beaker className="h-8 w-8 text-primary" />,
      solutionTitle: "Measuring What Matters",
      solutionDescription: "In the AI-augmented era, 'lines of code' and 'tickets closed' are meaningless. This research proposes a novel, value-centric framework for measuring engineering performance based on outcomes, not outputs."
    }
  ];

  return (
    <main className="container max-w-6xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Research</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Our Research: The Science Behind Predictable Results</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We don't rely on buzzwords; we rely on evidence. Our platform is built on a foundation of peer-reviewed research to de-risk your most critical decisions around hiring, performance, and security. Here is the proof.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchAssets.map(asset => {
          const paper = papers.find(p => p?.slug === asset.slug);
          if (!paper) return null;
          return (
            <div key={paper.slug} className="group flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
               <p className="text-sm font-semibold text-primary">{asset.pain}</p>
                <div className="flex items-center gap-3 mt-3">
                    {asset.icon}
                    <h3 className="text-lg font-semibold text-foreground">{asset.solutionTitle}</h3>
                </div>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">{asset.solutionDescription}</p>
               <Link href={paper.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                Read the Proof <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8 mt-24">
        <h2 className="text-2xl font-bold">Ready to Apply the Science?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Let's move from theory to practice. In a 15-minute call, we can show you how our research-backed platform can solve your specific challenges.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
