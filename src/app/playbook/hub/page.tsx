

import Link from 'next/link';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/research';
import { ArrowRight, Beaker, FileText, BrainCircuit, HelpCircle, BarChart, BookOpen, Star, Trophy } from 'lucide-react';
import type { Metadata } from 'next';
import { SpotifyIcon } from '@/components/SpotifyIcon';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The CTO Playbook for Nearshore Software Development | TeamStation AI',
  description: 'A series of battle-tested, data-driven guides for CTOs to de-risk their roadmap, fix delivery velocity, and gain control over their engineering organization.',
};

export default async function ResearchPage() {
  const researchAssets = [
    {
      slug: 'axiom-cortex-scientific-report',
      title: 'The AxiomCortex™ Scientific Framework',
      description: 'The definitive scientific and mathematical framework for the AxiomCortex™ engine, detailing the proprietary algorithms and psychometric models used for bias-free technical talent evaluation.',
      href: '/research/axiom-cortex-scientific-report',
      pain: "Is your hiring process a high-risk gamble on resumes?",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      solutionTitle: "The Science of De-Risking Talent",
      solutionDescription: "This is the definitive public documentation of the proprietary Cognitive AI engine that powers our talent evaluation. It's the science behind how we provide evidence-based proof of a candidate's problem-solving ability, not just their credentials."
    },
     {
      slug: 'technical-interview-evaluation',
      title: 'Technical Talent Evaluation System (Sample Report)',
      description: 'An interactive example of a real AxiomCortex™ evaluation report, showcasing the Cognitive Fingerprint, Evidence Locker, and Risk Mitigation plan for a candidate.',
      href: '/technical-interview-evaluation',
      pain: "Can you defend your hiring decisions with data?",
      icon: <FileText className="h-8 w-8 text-primary" />,
      solutionTitle: "The Evidence Locker in Action",
      solutionDescription: "This is not a paper, but a real, tangible output of our research. See an anonymized evaluation report and the 'Evidence Locker' that turns hiring from a gut-feel guess into a defensible, data-driven science."
    },
    {
      slug: 'performance-evaluation-framework',
      title: 'The Performance & Growth Framework',
      description: 'Our data-driven model for assessing software engineer performance, moving beyond outdated metrics to focus on impact and growth.',
      href: '/research/performance-evaluation-framework',
      pain: "Are outdated metrics failing to capture true engineering value?",
      icon: <Beaker className="h-8 w-8 text-primary" />,
      solutionTitle: "Measuring What Matters",
      solutionDescription: "In the AI-augmented era, 'lines of code' and 'tickets closed' are meaningless. This research proposes a novel, value-centric framework for measuring engineering performance based on outcomes, not outputs."
    },
    {
      slug: 'performance-evaluation-report-example',
      title: 'Sample Performance Report (Day 30)',
      description: 'A real, anonymized example of our 30-Day Onboarding Check diagnostic, demonstrating how we track performance and establish a growth baseline from the start.',
      href: '/research/performance-evaluation-report-example',
      pain: "Is your onboarding process a black box?",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      solutionTitle: "Proof of Performance",
      solutionDescription: "See how we apply our framework in the real world. This example report shows how we establish a data-driven baseline for a new engineer's performance within the first 30 days, creating an immediate, actionable growth plan."
    },
  ];

 const publications = [
      {
          icon: <BookOpen className="h-8 w-8 text-primary" />,
          title: "Platforming the Nearshore IT Staff Augmentation Industry",
          description: "This Amazon-published book is a strategic guide for executives on how to leverage nearshore teams to accelerate growth, innovate faster, and build a more resilient organization. It provides a practical framework for navigating the challenges and capitalizing on the opportunities of the modern global talent landscape.",
          href: "https://www.amazon.com/dp/B0F4TF6TWD?ref=cm_sw_r_ffobk_cp_ud_dp_ZD22XHJNVBWXRCMY7C3K&ref_=cm_sw_r_ffobk_cp_ud_dp_ZD22XHJNVBWXRCMY7C3K&social_share=cm_sw_r_ffobk_cp_ud_dp_ZD22XHJNVBWXRCMY7C3K&bestFormat=true&previewDoh=1",
          label: "View on Amazon"
      },
      {
          icon: <BrainCircuit className="h-8 w-8 text-primary" />,
          title: "AxiomCortex™: Scientific R&D Report — Bias-Mitigated AI Evaluation for Nearshore Software Engineering Teams",
          description: "Our peer-reviewed paper detailing the proprietary Cognitive AI engine that powers TeamStation AI's talent evaluation, outlining its core scientific pillars and bias mitigation strategies.",
          href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397",
          label: "Read on SSRN"
      },
      {
          icon: <BrainCircuit className="h-8 w-8 text-primary" />,
          title: "Heuristically Trained Neural AI for End-to-End Nearshore IT Staff Augmentation",
          description: "This paper introduces a novel framework for predicting hiring timelines and optimizing the recruitment process, demonstrating a significant reduction in Time-to-Hire.",
          href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433",
          label: "Read on SSRN"
      },
      {
          icon: <FileText className="h-8 w-8 text-primary" />,
          title: "A Scientific Framework for Measuring Human Capacity in Nearshore Software Engineering",
          description: "A comprehensive overview of the TeamStation AI platform architecture, its core AI technologies, integrated services, and responsible AI principles.",
          href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490",
          label: "Read on SSRN"
      },
      {
          icon: <Beaker className="h-8 w-8 text-primary" />,
          title: "Nearshore IT Talent Performance Metrics in the Age of AI",
          description: "This paper proposes a novel, value-centric model for assessing software engineer performance, moving beyond outdated metrics to focus on quantifiable impact.",
          href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470",
          label: "Read on SSRN"
      }
  ]
  
  const faqs = [
    {
      question: "How can I be sure a candidate who interviews well will actually perform?",
      subQuestion: "I've been burned by charisma before.",
      answer: "This is the exact problem our &lt;a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'&gt;Axiom Cortex™&lt;/a&gt; was built to solve. Traditional interviews are flawed because they conflate communication style with technical ability. Our process measures 'Problem-Solving Agility' through structured, bias-aware evaluations. We provide an auditable &lt;a href='/technical-interview-evaluation' class='text-primary hover:underline'&gt;Evidence Locker&lt;/a&gt; so you're judging the logic, not just the presentation. This is how we de-risk the hire."
    },
    {
      question: "How is your 'Cognitive AI' different from a keyword scanner?",
      subQuestion: "Everyone claims to use AI in hiring.",
      answer: "Simple: we use Cognitive AI for psychometric analysis, not just resume parsing. While others use a generic LLM API call to find keywords, we use our proprietary, peer-reviewed models to score a candidate's latent cognitive traits. Our &lt;a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'&gt;research&lt;/a&gt; outlines how we separate the signal (true ability) from the noise (jargon, fluency). It's the difference between finding someone who has 'used' a tool and someone who can 'think' with it."
    },
    {
      question: "How do I measure the real impact of my engineers?",
      subQuestion: "My current performance reviews feel subjective.",
      answer: "Our research into a &lt;a href='/research/performance-evaluation-framework' class='text-primary hover:underline'&gt;Performance Evaluation Framework&lt;/a&gt; directly tackles this. We're building a system that moves beyond 'tickets closed' to measure true value creation. It correlates engineering activity with business outcomes. It's about shifting the conversation from 'How busy are you?' to 'What impact did you have?'"
    }
  ]

  return (
    &lt;main className="container max-w-6xl py-12"&gt;
       &lt;div className="text-sm text-muted-foreground mb-8"&gt;
        &lt;Link href="/" className="hover:text-foreground"&gt;Home&lt;/Link&gt; / &lt;span&gt;Research&lt;/span&gt;
      &lt;/div&gt;
      &lt;header className="text-center my-12"&gt;
        &lt;h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"&gt;Our Research: The Science Behind Predictable Results&lt;/h1&gt;
        &lt;p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground"&gt;
          We don't rely on buzzwords; we rely on evidence. Our platform is built on a foundation of peer-reviewed research to de-risk your most critical decisions around hiring, performance, and security. Here is the proof.
        &lt;/p&gt;
      &lt;/header&gt;
       &lt;div className="my-24"&gt;
        &lt;h2 className="text-center text-4xl font-bold"&gt;Key Publications&lt;/h2&gt;
         &lt;p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground"&gt;Our foundational, peer-reviewed research and strategic guides that underpin our entire methodology.&lt;/p&gt;
        &lt;div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8"&gt;
          {publications.map(pub =&gt; (
            &lt;div key={pub.title} className="rounded-lg border bg-card p-6 flex flex-col md:flex-row gap-6 shadow-lg"&gt;
                &lt;div className="flex-shrink-0"&gt;{pub.icon}&lt;/div&gt;
                &lt;div className="flex-grow"&gt;
                  &lt;h3 className="font-semibold text-foreground"&gt;{pub.title}&lt;/h3&gt;
                  &lt;p className="text-sm text-muted-foreground mt-2"&gt;{pub.description}&lt;/p&gt;
                &lt;/div&gt;
                 &lt;div className="flex-shrink-0 self-center"&gt;
                    &lt;Link href={pub.href} target="_blank" rel="noopener noreferrer" className="cta-button"&gt;
                        {pub.label} &lt;ArrowRight className="ml-2 h-4 w-4" /&gt;
                    &lt;/Link&gt;
                &lt;/div&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;section id="podcast" className="my-24 scroll-mt-20"&gt;
        &lt;h2 className="text-center text-4xl font-bold"&gt;Listen to the Platform Vision&lt;/h2&gt;
        &lt;p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground"&gt;Hear directly from our founders and technical leaders about the science and strategy behind TeamStation AI.&lt;/p&gt;
        &lt;div className="mt-8 max-w-2xl mx-auto"&gt;
          &lt;iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/episode/7EwovXvoVFIGLJDwqTZFUE?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"&gt;&lt;/iframe&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"&gt;
        {researchAssets.map(asset =&gt; {
          return (
            &lt;div key={asset.slug} className="group flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg"&gt;
               &lt;p className="text-sm font-semibold text-primary"&gt;{asset.pain}&lt;/p&gt;
                &lt;div className="flex items-center gap-3 mt-3"&gt;
                    {asset.icon}
                    &lt;h3 className="text-lg font-semibold text-foreground"&gt;{asset.solutionTitle}&lt;/h3&gt;
                &lt;/div&gt;
              &lt;p className="mt-4 text-sm text-muted-foreground flex-grow"&gt;{asset.solutionDescription}&lt;/p&gt;
               &lt;Link href={asset.href} className="stretched-link mt-6 flex items-center text-sm font-semibold text-primary"&gt;
                Read the Proof &lt;ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /&gt;
              &lt;/Link&gt;
            &lt;/div&gt;
          );
        })}
      &lt;/div&gt;
      
       &lt;div className="my-24"&gt;
        &lt;h2 className="text-center text-4xl font-bold"&gt;A CTO's Questions, Answered by Science&lt;/h2&gt;
         &lt;p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground"&gt;The strategic questions our research directly addresses.&lt;/p&gt;
        &lt;div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"&gt;
          {faqs.map(faq =&gt; (
            &lt;div key={faq.question} className="rounded-lg border bg-card p-6 shadow-lg"&gt;
               &lt;div className="flex items-start gap-3"&gt;
                  &lt;HelpCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" /&gt;
                  &lt;div&gt;
                      &lt;h3 className="font-semibold text-foreground"&gt;{faq.question}&lt;/h3&gt;
                      &lt;p className="text-sm text-muted-foreground m-0"&gt;{faq.subQuestion}&lt;/p&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;p className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }}&gt;&lt;/p&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;


       &lt;div className="text-center rounded-lg bg-primary/10 p-8 mt-12 shadow-lg"&gt;
        &lt;h2 className="text-2xl font-bold"&gt;Ready to Apply the Science?&lt;/h2&gt;
        &lt;p className="mt-2 mx-auto max-w-xl text-muted-foreground"&gt;
          Let's move from theory to practice. In a 15-minute call, we can show you how our research-backed platform can solve your specific challenges.
        &lt;/p&gt;
        &lt;Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6"&gt;Book a Strategy Call&lt;/Link&gt;
      &lt;/div&gt;
    &lt;/main&gt;
  );
}

    