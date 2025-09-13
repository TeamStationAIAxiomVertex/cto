
import Link from 'next/link';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/research';
import { ArrowRight, Beaker, FileText, BrainCircuit, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';


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
  
  const faqs = [
    {
      question: "How can I be sure a candidate who interviews well will actually perform?",
      subQuestion: "I've been burned by charisma before.",
      answer: "This is the exact problem our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> was built to solve. Traditional interviews are flawed because they conflate communication style with technical ability. Our process measures 'Problem-Solving Agility' through structured, bias-aware evaluations. We provide an auditable <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Evidence Locker</a> so you're judging the logic, not just the presentation. This is how we de-risk the hire."
    },
    {
      question: "How is your 'Cognitive AI' different from a keyword scanner?",
      subQuestion: "Everyone claims to use AI in hiring.",
      answer: "Simple: we use Cognitive AI for psychometric analysis, not just resume parsing. While others use a generic LLM API call to find keywords, we use our proprietary, peer-reviewed models to score a candidate's latent cognitive traits. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>research</a> outlines how we separate the signal (true ability) from the noise (jargon, fluency). It's the difference between finding someone who has 'used' a tool and someone who can 'think' with it."
    },
    {
      question: "How do I measure the real impact of my engineers?",
      subQuestion: "My current performance reviews feel subjective.",
      answer: "Our research into a <a href='/research/performance-evaluation-framework' class='text-primary hover:underline'>Performance Evaluation Framework</a> directly tackles this. We're building a system that moves beyond 'tickets closed' to measure true value creation. It correlates engineering activity with business outcomes. It's about shifting the conversation from 'How busy are you?' to 'What impact did you have?'"
    }
  ]

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
      
       <div className="my-24">
        <h2 className="text-center text-4xl font-bold">A CTO's Questions, Answered by Science</h2>
         <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">The strategic questions our research directly addresses.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map(faq => (
            <div key={faq.question} className="rounded-lg border bg-card p-6">
               <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground m-0">{faq.subQuestion}</p>
                  </div>
               </div>
               <p className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </div>
          ))}
        </div>
      </div>


       <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
        <h2 className="text-2xl font-bold">Ready to Apply the Science?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Let's move from theory to practice. In a 15-minute call, we can show you how our research-backed platform can solve your specific challenges.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
