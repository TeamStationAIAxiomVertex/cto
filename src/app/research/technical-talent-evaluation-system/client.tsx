
'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { ShieldCheck, BrainCircuit, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const cognitiveData = [
    { name: 'Architectural Instinct', candidate: 4.3, ideal: 4.5 },
    { name: 'Problem-Solving Agility', candidate: 4.6, ideal: 4.0 },
    { name: 'Learning Orientation', candidate: 5.0, ideal: 5.0 },
    { name: 'Collaborative Mindset', candidate: 4.4, ideal: 4.0 },
];

const mciScore = 3.5;

const risks = [
    {
        pain: "Is there a risk of system failure?",
        title: 'Gaps in Advanced Resiliency Patterns',
        description: 'Erick admitted weakness in designing complex error handling and resiliency systems (e.g., circuit breakers, advanced retry logic). In a high-throughput ad-tech environment, this is a critical skill.',
        mitigation: 'During onboarding, pair him with a senior backend engineer for architectural reviews specifically focused on fault tolerance. Assign him a small, well-defined task to implement a circuit breaker pattern for a non-critical service to build practical experience.',
        kpi: "Actionable onboarding task"
    },
    {
        pain: "Will there be communication gaps?",
        title: 'Unfamiliarity with Standard Prompt Engineering Terminology',
        description: 'While demonstrating strong conceptual reasoning about prompt architecture (Q4), he is not familiar with the industry-standard lexicon (e.g., Chain-of-Thought, Few-Shot). This could create a minor communication gap initially.',
        mitigation: 'This is a low-risk factor given his strong underlying reasoning. Provide him with internal best-practice documents and playbooks on advanced prompt engineering patterns. His high LO and demonstrated ability to grasp analogies suggest he will map his innate understanding to the standard terminology very quickly.',
        kpi: "Low risk, fast ramp-up"
    },
    {
        pain: "Is there a gap in infrastructure skills?",
        title: 'Lack of Infrastructure as Code (IaC) Experience',
        description: 'He explicitly stated he has not had much exposure to IaC (e.g., Terraform, CloudFormation).',
        mitigation: 'This is a lower-priority risk for a full-stack role but should be addressed for senior-level growth. Enroll him in a self-paced online course for AWS CDK or Terraform. Involve him in peer reviews of IaC changes to build familiarity.',
        kpi: "Defined growth path"
    }
]

const evidenceLocker = [
    {
        title: 'Q1: High-Throughput Service Architecture (Python)',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p>The core challenge is managing I/O-bound concurrency. The system must not block on slow network calls or database queries. The principles of asynchronous processing and decoupling are paramount.</p>
                <ul>
                    <li><strong>Concurrency Model:</strong> Explicitly mention Python's `asyncio` library.</li>
                    <li><strong>Scalability:</strong> Discuss horizontal scaling and microservices.</li>
                    <li><strong>Decoupling/Buffering:</strong> Introduce a message queue (e.g., Kafka, SQS).</li>
                    <li><strong>Caching:</strong> Use an in-memory cache like Redis.</li>
                    <li><strong>Resiliency:</strong> Discuss patterns like retries, timeouts, and circuit breakers.</li>
                </ul>
                <h4>Candidate Evidence</h4>
                <blockquote>
                "Well, this is pretty, well, this is a little bit hard to just to talk... something that I have in my mind right now, maybe I think using Redis, Redis to have something to read, to cache... With concurrency. Yeah, I think that, well, I have in my head right now the approach with asynchronous thing. I'm working more with Node.js about this topic more than Python, but I think that to serve asynchronously... with an even loop with async IO... I prefer to use monolithic... But in case, if we combine AWS stuff, I think the microservices will be a great idea... I think that is a better idea to use. I think that if I don't get wrong, AWS has SQS... Well, in that specific, I'm not the best with error handling, but I think that if we have a good log error handling... maybe it's a good idea to ensure the retries or reconnections."
                </blockquote>
            </div>
        )
    },
    {
        title: 'Q2: API Evolvability and Security',
        content: (
             <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p>API design is about creating a stable, secure, and understandable contract. Evolvability requires planning for change without breaking existing clients. Security requires a defense-in-depth approach.</p>
                <ul>
                    <li><strong>Evolvability:</strong> Versioning (URL or headers), Contract-First Design (OpenAPI), Additive Changes.</li>
                    <li><strong>Security:</strong> AuthN (OAuth2/OIDC) vs. AuthZ (RBAC/ABAC), Rate Limiting.</li>
                    <li><strong>Enforcement:</strong> Documentation, CI/CD linting, mandatory code reviews.</li>
                </ul>
                <h4>Candidate Evidence</h4>
                <blockquote>
                "I will say that I have two strategies. There is contract first in backend. I mean, with compatible versioning... maybe if I'm using an LLM... I will design or add every change in open AI spec first before of all. Also, like I mentioned before, version through media types... About security. There is a lot of stuff, but maybe I think that is called zero trust. Zero trust about, for example, out hand or out C or out zero... [Interviewer: I think you're talking about authorization versus authentication, right?] Yeah. Okay. Yeah, that's good... I did not have the opportunity to create something from scratch."
                </blockquote>
            </div>
        )
    },
    {
        title: 'Q3: High-Performance React State Management',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p>Frontend performance for large data sets hinges on rendering only what's necessary and minimizing state management overhead.</p>
                <ul>
                    <li><strong>Rendering Optimization:</strong> Virtualization/Windowing, Memoization (`React.memo`, `useMemo`), Code Splitting (`React.lazy`).</li>
                    <li><strong>State Management:</strong> Server state caching with React Query or SWR; avoiding large global stores for server data.</li>
                    <li><strong>Data Flow:</strong> WebSockets for real-time, debouncing/throttling user inputs.</li>
                </ul>
                <h4>Candidate Evidence</h4>
                <blockquote>
                "I think I have maybe an answer for that. The virtualization could be the key here. We could also connect to a web socket... I will virtualize that information. I mean, I will just show to the user the information that he just want to see... I think that I will combine very good the react.memo, use memo hooks, use callback hooks... For example, in this specific case, I told you Redux for that. Redux is not a good tool for performance. I think that I could change for React Query or Sustan RTK or KTR. I don't remember, but it's Sustan."
                </blockquote>
            </div>
        )
    },
        {
        title: 'Q4: Advanced Prompt Engineering Strategies',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p>Prompt engineering is about constraining the LLM to produce a reliable, repeatable, and specific output. It's about breaking a complex request into simpler, logical steps.</p>
                <ul>
                    <li><strong>Strategies:</strong> Few-Shot (examples), Chain-of-Thought (step-by-step), Role-Playing, Structured Output (JSON).</li>
                    <li><strong>Architecture:</strong> Breaking down a single massive prompt into smaller, chained "micro prompts".</li>
                    <li><strong>Measurement:</strong> Moving beyond accuracy to business metrics, human review (HITL).</li>
                </ul>
                <h4>Candidate Evidence</h4>
                <blockquote>
                "Yeah. Well, in that case, as every LLMs, you need to train it very, very good... [Interviewer guides towards prompt structure]... Well, I'm supposing that we will have a thousands of information... We could split that big data in different information, bunches of information and give to the LLM... [Interviewer introduces analogy]... Well, like I told you before... it's a better idea to split into microservices and maybe that microservices see like a small part of a brain of this AI... If we have micro front ends... if we have microservices, why why we call why not to have micro prompts? I think that is."
                </blockquote>
            </div>
        )
    },
    {
        title: 'Q7: Proactive Leadership & Influence',
        content: (
             <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p>This question measures leadership and influence. A great answer connects a technical problem to a business problem and demonstrates solving it through social and technical means (STAR Method).</p>
                <ul>
                    <li><strong>Situation:</strong> A specific project with a clear problem.</li>
                    <li><strong>Task:</strong> The goal to be achieved.</li>
                    <li><strong>Action:</strong> The specific steps the candidate took, showing leadership.</li>
                    <li><strong>Result:</strong> The measurable impact on the business or team.</li>
                </ul>
                <h4>Candidate Evidence</h4>
                <blockquote>
                "Yeah, I have a specific break for that. It was with Coca-Cola... all my coworkers, including me, had afraid to talk with someone from Coca-Cola. So that result in the tickets, we had a lot of tickets delayed. We have an enormous technical debt... So my radical strategy to avoid that was to raise my hand and transform myself in a tech leader... I was the bridge between the stakeholders and the developments... I received all the yells... I translate the non-technical requirements to technical requirements... the technical depth decreases a lot... because the afraid was not part of the development anymore."
                </blockquote>
            </div>
        )
    },
]


export default function TalentEvaluationClient() {
  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/process" className="hover:text-foreground">Process</Link> / <span>Talent Evaluations</span>
      </div>
      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Evidence-Based Technical Evaluation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a real (anonymized) evaluation report generated by our <Link href="/research/hub/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™ Cognitive AI</Link> engine. It's how we move beyond resumes to provide auditable proof of a candidate's ability to solve your problems.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-8">
        <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">Executive Summary</h2>
            <div className="flex items-center gap-4 my-4">
                <div className="text-center">
                    <div className="text-4xl font-bold text-primary">4.6<span className="text-2xl text-muted-foreground">/5.0</span></div>
                    <div className="text-sm text-muted-foreground">Final Score</div>
                </div>
                <div className="w-px self-stretch bg-border"></div>
                <div>
                     <div className="text-lg font-semibold text-primary">Strong Hire</div>
                     <p className="text-sm text-muted-foreground m-0">High-potential senior engineer with a robust technical foundation and exceptional cognitive traits.</p>
                </div>
            </div>
             <p className="text-sm text-muted-foreground">He demonstrates deep, modern expertise in frontend performance engineering and a solid grasp of backend architectural principles. His ability to reason from first principles is a powerful indicator of a superior mental model.</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">Metacognitive Conviction Index (MCI)</h2>
            <p className="text-sm text-muted-foreground">Assesses how well a candidate's confidence is calibrated with their knowledge.</p>
            <div className="w-full bg-background rounded-full h-2.5 my-4 relative border">
                 <div className="h-2.5 rounded-full" style={{ 
                     width: `${(mciScore / 4) * 100}%`,
                     background: 'linear-gradient(to right, #f97316, #3b82f6, #4A69FF)' 
                }}></div>
                 <div className="absolute top-0 h-full flex items-center" style={{left: `calc(${(mciScore / 4) * 100}% - 8px)`}}>
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-primary"></div>
                 </div>
            </div>
             <div className="flex justify-between text-xs text-muted-foreground">
                <span>Dunning-Kruger</span>
                <span>Expert</span>
                <span className='font-bold text-primary'>Honest Self-Assessment</span>
            </div>
        </div>
      </div>

      <div className="my-12 rounded-lg border bg-card p-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-primary" /> Cognitive Fingerprint 4.0</h2>
        <p className="text-sm text-muted-foreground">
            Maps the candidate's four latent traits against the ideal profile for the role. See our research paper on <Link href="/playbook/hub/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">bias-free hiring</Link> to learn more.
        </p>
        <div style={{ height: 300 }} className='mt-4'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cognitiveData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" domain={[0, 5]} hide />
                <YAxis type="category" dataKey="name" width={150} tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                <RechartsTooltip 
                    cursor={{ fill: 'hsl(var(--accent))'}}
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                />
                <Bar dataKey="candidate" name="Candidate" barSize={20} radius={[0, 8, 8, 0]}>
                    {cognitiveData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.candidate >= entry.ideal ? 'hsl(var(--primary))' : '#f59e0b'} />
                    ))}
                </Bar>
                 <Bar dataKey="ideal" name="Ideal Profile" barSize={20} fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </div>
      </div>

        <div className='my-12'>
            <h2 className="text-3xl font-bold text-center text-foreground">Risk Factors & Mitigation Plan</h2>
             <p className='text-muted-foreground mt-2 text-center'>
                Every hire has risks. Our process identifies them and provides a concrete, actionable plan to mitigate them from Day 1, turning potential weaknesses into strengths.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                {risks.map((risk) => (
                    <div key={risk.title} className="rounded-lg border bg-card p-6 flex flex-col">
                        <p className="text-sm font-semibold text-primary">{risk.pain}</p>
                        <div className="flex items-center gap-3 mt-3">
                           <ShieldCheck className="text-yellow-400 h-6 w-6 shrink-0" />
                            <h3 className="font-semibold text-foreground">{risk.title}</h3>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-4">{risk.description}</p>
                        <div className='flex-grow'></div>
                        <h4 className='text-sm font-bold mt-4 text-primary'>Mitigation Plan (Solution)</h4>
                        <p className="text-sm text-muted-foreground m-0 flex-grow">{risk.mitigation}</p>
                        <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {risk.kpi}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='my-12'>
            <h2 className="text-3xl font-bold text-center text-foreground">Evidence Locker (Proof)</h2>
            <p className='text-muted-foreground mt-2 text-center'>
                This is the raw data—the proof behind our analysis. A human expert interviews the candidate, and our Cognitive AI synthesizes the conversation, comparing responses against ideal answer blueprints to provide an objective score.
            </p>
            <div className="mt-4 space-y-2">
                {evidenceLocker.map(item => (
                     <AccordionItem title={item.title} key={item.title}>
                        {item.content}
                    </AccordionItem>
                ))}
            </div>
             <div className="text-center mt-8">
                <Link href="/process" className="font-semibold text-primary hover:underline">
                    See Our Full Evaluation Process <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
        </div>

    </main>
  );
}
