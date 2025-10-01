
import { ArrowRight, BookOpen, BarChart, FileSearch, ShieldCheck, Zap, BrainCircuit, Users, Layers, GitCompare } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from '@/components/ui/tooltip';
import SafeImage from '@/components/SafeImage';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { HeroKpi } from '@/components/metrics/HeroKpis';
import dynamic from 'next/dynamic';
import { CaseStudy, getAllCaseStudies } from '@/lib/case-studies';

const HeroKpis = dynamic(() => import('@/components/metrics/HeroKpis'), { ssr: false });
const SpotifyIcon = dynamic(() => import('@/components/SpotifyIcon').then(mod => mod.default), { ssr: false });


const kpis: HeroKpi[] = [
  { id: 'compliance', label: 'Audit-Ready Compliance', value: 100, unit: '%', target: 100, desire: 'up' },
  { id: 'readiness', label: 'Day-1 Tool Readiness', value: 97, unit: '%', target: 95, desire: 'up' },
  { id: 'pr-review', label: 'PR Review p50', value: 6.8, unit: 'h', target: 8, desire: 'down', max: 24 },
  { id: 'mttr', label: 'Incident MTTR p50', value: 1.2, unit: 'h', target: 4, desire: 'down', max: 8 },
];

const sandlerCards = [
    {
        title: 'Velocity: 24-Hour Ping-Pong vs Daylight Cadence',
        question: 'How many releases died waiting for “LGTM”?',
        problem: 'PRs sleep overnight; one question = one day lost.',
        solution: 'Daylight overlap + same-day review SLAs with telemetry.',
        proof: 'PR turnaround 36–72h → <8h; cycle time drops in 2 sprints.',
        icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
        title: 'Seniority: Resume Theater vs Cognitive Evidence',
        question: 'Who last vetoed a bad pattern before it shipped?',
        problem: '“Senior” on the slide, junior in the repo.',
        solution: 'Axiom Cortex™ cognitive signals + structured rubrics + recorded panels.',
        proof: 'Mismatch rate ≤10%; rewrite ADRs trend down.',
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    },
    {
        title: 'Governance: Five Invoices vs One Operating Rhythm',
        question: 'How many vendors does it take to ship one roadmap?',
        problem: 'Vendor sprawl; shadow staffing; no single throat to choke.',
        solution: 'One governed system: hiring → devices/MDM → access → payroll/EOR → SLAs.',
        proof: 'Forecast vs actual variance <10%; fewer reopenings.',
        icon: <Users className="h-8 w-8 text-primary" />,
    }
];

const advantageCards = [
    {
        pain: "Wasting months on bad hires?",
        title: "De-Risk Your Hiring with Cognitive AI",
        description: "Stop gambling on resumes. Our Axiom Cortex™ Cognitive AI engine provides auditable, scientific proof of a candidate's problem-solving ability and mental shape, cutting your mis-hire risk by over 90%.",
        kpi: "Mismatch rate ≤ 10%",
        href: "/playbook/bias-free-technical-hiring-axiom-cortex",
        linkLabel: "Learn About Our Vetting"
    },
    {
        pain: "Drowning in vendor management?",
        title: "Eliminate Vendor Chaos with One SLA",
        description: "Stop juggling 5+ vendors. We bundle EOR, payroll, secure devices (MDM), and insurance into one accountable SLA, giving you a single pane of glass for your entire operation.",
        kpi: "1 contract, 1 invoice",
        href: "/services/integrated-services",
        linkLabel: "See Our Integrated Services"
    },
    {
        pain: "Struggling to justify your budget?",
        title: "Get a CFO-Ready TCO Model",
        description: "We provide a predictable, all-inclusive TCO that is often 40-60% lower than the 'hidden cost' of a DIY approach or a US hire. Make a business case your finance team will approve.",
        kpi: "≈$98k revenue pulled forward",
        href: "/playbook/tco-model",
        linkLabel: "View Our TCO Model"
    }
]

export default async function HomePage() {
  const caseStudies = (await getAllCaseStudies()).slice(0, 6);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-background text-foreground py-20 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Nearshore Software Development: The CTO Playbook
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Legacy vendors sell hours. The CTO Playbook delivers science, daylight overlap, and outcomes you can measure.
              </p>
               <p className="text-lg md:text-xl text-foreground max-w-2xl font-semibold">
                Certainty in cost, continuity in delivery, predictability in outcomes — so CTOs ship faster and keep CFOs confident.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-xl border bg-card p-6 shadow-lg">
                <HeroKpis items={kpis} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y">
          <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary">≈9 <span className="text-lg">days</span></p>
                    <p className="text-sm text-muted-foreground">Time-to-Offer</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary">2.6M+</p>
                    <p className="text-sm text-muted-foreground">Talent Graph Profiles</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary">≥95%</p>
                    <p className="text-sm text-muted-foreground">Day-1 Tool Readiness</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Audit-Ready Compliance</p>
                </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Unfair Advantage</h2>
                     <p className="mt-4 text-muted-foreground">
                        We're not another vendor. We are a force multiplier for your engineering organization, giving you the leverage to succeed.
                    </p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {advantageCards.map((card, i) => (
                        <div key={i} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                            <p className="text-sm font-semibold text-primary">{card.pain}</p>
                            <h3 className="text-xl font-bold mt-2 text-foreground">{card.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2 flex-grow">{card.description}</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {card.kpi}</p>
                                <Link href={card.href} className="mt-4 flex items-center text-sm font-semibold text-primary">
                                    {card.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 bg-card border-y">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sound Familiar? It's the Cost of Doing Nothing.</h2>
                    <p className="mt-4 text-muted-foreground">
                        These aren't just headaches. They are symptoms of a broken IT staff augmentation model.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <p className="bg-background border rounded-lg p-4 font-semibold">Is your best engineer babysitting a failing offshore team?</p>
                    <p className="bg-background border rounded-lg p-4 font-semibold">Did you spend 60 days hiring a 'senior' dev who can't ship code?</p>
                    <p className="bg-background border rounded-lg p-4 font-semibold">Are you one insecure laptop away from a major compliance breach?</p>
                    <p className="bg-background border rounded-lg p-4 font-semibold">Is 'vendor management' your secret second job?</p>
                </div>
            </div>
        </section>


        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">There Is a Better Way</h2>
                  <p className="mt-4 text-muted-foreground">
                      Legacy vendors promise, overcharge, and under-deliver. This Field Manual names the failure modes and instruments the fixes—cognitive hiring signals, daylight SLAs for PRs/incidents, device/MDM control, EOR & compliance, and TCO you can defend in front of Finance.
                  </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {sandlerCards.map((card) => (
                  <div key={card.title} className="rounded-lg border bg-card p-6 flex flex-col text-center shadow-lg">
                      <div className="flex justify-center">{card.icon}</div>
                      <h3 className="text-lg font-bold text-foreground mt-4">
                        {card.title}
                      </h3>
                      <div className="mt-4 pt-4 border-t border-border/50">
                          <h4 className="font-semibold text-destructive text-sm">Problem (Legacy)</h4>
                          <p className="text-sm text-muted-foreground m-0">{card.problem}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border/50 flex-grow">
                          <h4 className="font-semibold text-primary text-sm">Solution (Next-Gen)</h4>
                          <p className="text-sm text-foreground m-0">
                            {card.solution}
                          </p>
                      </div>
                       <div className="mt-4 pt-4 border-t border-border/50">
                         <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {card.proof}</p>
                      </div>
                      <div className="mt-6 text-sm font-semibold text-primary/90 border-t border-border/50 pt-4">
                          <span className="italic">{card.question}</span>
                      </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                  <Link href="/comparisons" className="font-semibold text-primary hover:underline">
                      See All Vendor Comparisons <ArrowRight className="inline h-4 w-4" />
                  </Link>
              </div>
          </div>
        </section>

         <section className="py-24 bg-card border-y">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Go Deeper: Our Research & Vision</h2>
                    <p className="mt-4 text-muted-foreground">
                        We don't just follow best practices; we author them. Explore our peer-reviewed research and listen to our leadership discuss the future of engineering.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                    <div className="rounded-lg border bg-background p-6 flex flex-col items-center text-center shadow-lg">
                        <SpotifyIcon className="h-12 w-12 text-[#1DB954]" />
                        <h3 className="text-xl font-bold mt-4 text-foreground">Listen to the Platform Vision</h3>
                        <p className="mt-2 text-sm text-muted-foreground flex-grow">Hear directly from our founders about the science and strategy behind the TeamStation AI platform.</p>
                        <a href="https://open.spotify.com/episode/7EwovXvoVFIGLJDwqTZFUE?utm_source=generator" target="_blank" rel="noopener noreferrer" className="cta-button mt-6 w-full">
                            Listen Now
                        </a>
                    </div>
                     <div className="rounded-lg border bg-background p-6 flex flex-col items-center text-center shadow-lg">
                        <BookOpen className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-bold mt-4 text-foreground">Explore Our Research</h3>
                        <p className="mt-2 text-sm text-muted-foreground flex-grow">From our Amazon book to peer-reviewed papers on AI in hiring, see the evidence that powers our platform.</p>
                        <Link href="/research/hub" className="cta-button mt-6 w-full">
                            Visit Research Hub
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Evidence of Impact</h2>
                     <p className="mt-4 text-muted-foreground">
                        See how CTOs like you have used our platform to solve critical problems and deliver results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                   {caseStudies.map((study: CaseStudy) => (
                      <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block">
                        <div className="rounded-lg border bg-card p-6 flex flex-col h-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="relative h-40 w-full rounded-md overflow-hidden mb-4">
                                <SafeImage 
                                    src={study.ogImage?.src?.url}
                                    alt={`Hero image for ${study.clientName} case study`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={study.ogImage?.aiHint}
                                />
                            </div>
                            <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
                            <p className="text-xs text-muted-foreground">{study.industry}</p>
                            <p className="text-sm text-muted-foreground mt-2 flex-grow">{study.summary}</p>
                             <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                                Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                      </Link>
                   ))}
                </div>
                 <div className="text-center mt-12">
                    <Link href="/case-studies" className="cta-button">View All Case Studies</Link>
                </div>
            </div>
        </section>

        <section className="py-24 bg-card border-t">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground">Stop Patching a Broken System. Build a Better One.</h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">In a 15-minute call, we won't give you a sales pitch. We'll give you a concrete plan to fix your hiring process, consolidate your vendors, and get a predictable, CFO-ready budget for your nearshore team. You will walk away with actionable advice, whether you work with us or not.</p>
             <div className="mt-8">
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">
                  Book a No-Obligation Strategy Call
                </Link>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}
