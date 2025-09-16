
import Link from 'next/link';
import { BrainCircuit, ShieldCheck, Scale, ArrowRight, BookOpen, GitCompare, FileText, AlertTriangle, CheckCircle, XCircle, Users, Zap, Layers, Component } from 'lucide-react';
import { getAllCaseStudies } from '@/lib/case-studies';
import { WithTooltip } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';
import type { KpiItem } from '@/components/charts/HeroKpiBoard';

const SpotifyIcon = dynamic(() => import('@/components/SpotifyIcon').then(mod => mod.SpotifyIcon), { ssr: false });
const HeroKpiBoard = dynamic(
  () => import('@/components/charts/HeroKpiBoard').then(m => m.HeroKpiBoard),
  { ssr: false }
);

const kpis: KpiItem[] = [
  { id: 'compliance', label: 'Audit-Ready Compliance', value: 100, unit: '%', colorVar: '--primary', trend: [99,100,100,100], desire: 'up' },
  { id: 'readiness', label: 'Day-1 Tool Readiness', value: 97, unit: '%', colorVar: '--chart-2', trend: [95,96,97,97], desire: 'up' },
  { id: 'prp50', label: 'PR Review p50 (≤8h)', value: 6.8, unit: 'h', max: 8, colorVar: '--foreground', trend: [7.5,7.1,6.9,6.8], desire: 'down', target: 8 },
  { id: 'mttr', label: 'Incident MTTR p50 (≤4h)', value: 1.2, unit: 'h', max: 4, colorVar: '--primary', trend: [2.1,1.6,1.3,1.2], desire: 'down', target: 4 },
  { id: 'escape', label: 'Defect Escape Rate (≤1.0%)', value: 0.6, unit: '%', max: 1, colorVar: '--chart-2', trend: [0.9,0.8,0.7,0.6], desire: 'down', target: 1 },
  { id: 'tto', label: 'Time-to-Offer (≤10d)', value: 8, unit: 'd', max: 10, colorVar: '--foreground', trend: [12,10,9,8], desire: 'down', target: 10 },
  { id: 'uptime', label: 'Uptime', value: 99.95, unit: '%', colorVar: '--primary', trend: [99.9,99.92,99.94,99.95], desire: 'up' },
  { id: 'cycle', label: 'Cycle Time p50 (≤3d)', value: 2.2, unit: 'd', max: 3, colorVar: '--chart-2', trend: [3.1,2.8,2.5,2.2], desire: 'down', target: 3 },
];

function ServicePill({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
    return (
        <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground shadow-lg">
            <Icon className="h-5 w-5 text-primary" />
            <span>{text}</span>
        </div>
    );
}

const trustNumbers = [
    { value: '≈9 days', label: 'Time-to-Offer' },
    { value: '2.6M+', label: 'Talent Graph Profiles' },
    { value: '≥95%', label: 'Day-1 Tool Readiness' },
    { value: '100%', label: 'Audit-Ready Compliance' }
]

const corePillars = [
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary"/>,
        pain: "Wasting months on bad hires?",
        title: "De-Risk Your Hiring with Cognitive AI",
        description: "Stop gambling on resumes. Our Axiom Cortex™ Cognitive AI engine provides auditable, scientific proof of a candidate's problem-solving ability and mental shape, cutting your mis-hire risk by over 90%.",
        href: "/playbook/bias-free-technical-hiring-axiom-cortex",
        linkLabel: "Learn About Our Vetting",
        kpi: "Mismatch rate ≤10%"
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
        pain: "Drowning in vendor management?",
        title: "Eliminate Vendor Chaos with One SLA",
        description: "Stop juggling 5+ vendors. We bundle EOR, payroll, secure devices (MDM), and insurance into one accountable SLA, giving you a single pane of glass for your entire operation.",
        href: "/services/integrated-services",
        linkLabel: "See Our Integrated Services",
        kpi: "1 contract, 1 invoice"
    },
    {
        icon: <Scale className="h-8 w-8 text-primary"/>,
        pain: "Struggling to justify your budget?",
        title: "Get a CFO-Ready TCO Model",
        description: "We provide a predictable, all-inclusive Total Cost of Ownership (TCO) that is often 40-60% lower than the 'hidden cost' of a DIY approach or a US hire. Make a business case your finance team will approve.",
        href: "/playbook/latam-economics",
        linkLabel: "View Our TCO Model",
        kpi: "≈$98k revenue pulled forward"
    }
]

const painPoints = [
    "Is your best engineer babysitting a failing offshore team?",
    "Did you spend 60 days hiring a 'senior' dev who can't ship code?",
    "Are you one insecure laptop away from a major compliance breach?",
    "Is 'vendor management' your secret second job?"
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
        problem: '“Senior” in the deck, junior in the repo.',
        solution: 'Axiom Cortex™ cognitive signals + structured rubrics + recorded panels.',
        proof: 'Mismatch rate ≤10%; rewrite ADRs down.',
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


export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();

  const siteUrl = 'https://cto.teamstation.dev';

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": "TeamStation AI",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TeamStation AI",
    "url": siteUrl,
    "logo": `${siteUrl}/apple-touch-icon.png`,
    "sameAs": [
        "https://www.linkedin.com/company/teamstation"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="container mx-auto px-4">
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Nearshore Software Development: The CTO Co-Pilot Field Manual
              </h1>
              <p className="mx-auto md:mx-0 mt-6 max-w-3xl text-lg text-muted-foreground">
                The vendor era is over. Command an evidence-driven, daylight, secure stack you control—without the lag, fog, or hidden taxes.
              </p>
              <div className="mt-10">
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
            <div className="flex justify-center items-center h-full w-full">
               <HeroKpiBoard items={kpis} />
            </div>
          </div>
        </section>

        <section id="trust-by-numbers" className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {trustNumbers.map(item => (
                  <div key={item.label} className="text-center">
                      <p className="text-4xl font-bold text-primary">{item.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                  </div>
              ))}
          </div>
        </section>
        
        <section id="core-pillars" className="py-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
              Your Unfair Advantage
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">We're not another vendor. We are a force multiplier for your engineering organization, giving you the leverage to succeed.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
              {corePillars.map(pillar => (
                  <div key={pillar.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                      <p className="text-sm font-semibold text-primary">{pillar.pain}</p>
                      <div className="flex items-center gap-3 mt-3">
                          {pillar.icon}
                          <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground flex-grow">
                          {pillar.description.includes("Axiom Cortex™") ?
                              (<>
                                  Stop gambling on resumes. Our <WithTooltip content="Our proprietary Cognitive AI engine for talent evaluation."><span className="text-primary border-b border-dashed">Axiom Cortex™</span></WithTooltip> Cognitive AI engine provides auditable, scientific proof of a candidate's problem-solving ability and mental shape, cutting your mis-hire risk by over 90%.
                              </>) :
                           pillar.description.includes("EOR") ?
                            (<>
                                Stop juggling 5+ vendors. We bundle <WithTooltip content="Employer of Record"><span className="border-b border-dashed">EOR</span></WithTooltip>, payroll, secure devices (<WithTooltip content="Mobile Device Management"><span className="border-b border-dashed">MDM</span></WithTooltip>), and insurance into one accountable <WithTooltip content="Service Level Agreement"><span className="border-b border-dashed">SLA</span></WithTooltip>, giving you a single pane of glass for your entire operation.
                            </>) :
                           pillar.description.includes("TCO") ?
                            (<>
                                We provide a predictable, all-inclusive <WithTooltip content="Total Cost of Ownership"><span className="border-b border-dashed">TCO</span></WithTooltip> that is often 40-60% lower than the 'hidden cost' of a DIY approach or a US hire. Make a business case your finance team will approve.
                            </>) : pillar.description
                          }
                      </div>
                      <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{pillar.kpi}</p>
                      <Link href={pillar.href} className="mt-6 flex items-center text-sm font-semibold text-primary" target={pillar.href.startsWith('http') ? '_blank' : '_self'} rel={pillar.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                          {pillar.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </div>
              ))}
          </div>
        </section>

        <section id="pain-points" className="py-24 bg-card rounded-lg shadow-lg">
          <h2 className="text-center text-4xl font-bold text-foreground">Sound Familiar? It's the Cost of Doing Nothing.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">These aren't just headaches. They are symptoms of a broken IT staff augmentation model.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {painPoints.map((pain, index) => (
                  <div key={index} className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-lg">
                      <AlertTriangle className="h-6 w-6 text-primary shrink-0"/>
                      <p className="m-0 font-medium text-muted-foreground">{pain}</p>
                  </div>
              ))}
          </div>
        </section>

        <section id="comparison" className="py-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
              There Is a Better Way
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">Legacy vendors promise, overcharge, and under-deliver. This Field Manual names the failure modes and instruments the fixes—cognitive hiring signals, daylight SLAs for PRs/incidents, device/MDM control, EOR & compliance, and TCO you can defend in front of Finance.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sandlerCards.map((card) => (
              <div key={card.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                  <div className="flex items-start gap-4">
                      {card.icon}
                      <div>
                          <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                      </div>
                  </div>
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
                  <div className="mt-6 text-sm text-center font-semibold text-primary/90 border-t border-border/50 pt-4">
                      <span className="italic">{card.question}</span>
                  </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
                <Link href="/comparisons" className="font-semibold text-primary hover:underline">
                  See All Vendor Comparisons <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
        </section>

        <section id="thought-leadership" className="py-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
              Go Deeper: Our Research & Vision
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">We don't just follow best practices; we author them. Explore our peer-reviewed research and listen to our leadership discuss the future of engineering.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg border bg-card p-8 flex flex-col items-center text-center shadow-lg">
                  <SpotifyIcon className="h-12 w-12 text-[#1DB954]" />
                  <h3 className="text-2xl font-bold mt-4">Listen to the Platform Vision</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">Hear directly from our founders about the science and strategy behind the TeamStation AI platform.</p>
                  <Link href="/research/hub#podcast" className="cta-button mt-6">
                      Listen Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </div>
              <div className="rounded-lg border bg-card p-8 flex flex-col items-center text-center shadow-lg">
                  <BookOpen className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold mt-4">Explore Our Research</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">From our Amazon book to peer-reviewed papers on AI in hiring, see the evidence that powers our platform.</p>
                  <Link href="/research/hub" className="cta-button mt-6">
                      Visit Research Hub <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </div>
          </div>
        </section>

        <section id="case-studies" className="py-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
              Evidence of Impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">See how CTOs like you have used our platform to solve critical problems and deliver results.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map(study => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg">
                  <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden border">
                       <Image 
                          src={study.ogImage.src.url}
                          alt={`Hero image for ${study.clientName} case study`}
                          fill
                          className="object-cover"
                          data-ai-hint={study.ogImage.aiHint}
                      />
                  </div>
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary my-3">{study.industry}</span>
                  <p className="text-sm text-muted-foreground flex-grow">{study.summary}</p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-primary">Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
              </Link>
              ))}
          </div>
          <div className="text-center mt-12">
              <Link href="/case-studies" className="font-semibold text-primary hover:underline">
                  View All Case Studies <ArrowRight className="inline h-4 w-4" />
              </Link>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-foreground">Stop Patching a Broken System. Build a Better One.</h2>
              <p className="mt-3 text-muted-foreground">In a 15-minute call, we won't give you a sales pitch. We'll give you a concrete plan to fix your hiring process, consolidate your vendors, and get a predictable, CFO-ready budget for your nearshore team. You will walk away with actionable advice, whether you work with us or not.</p>
              <div className="mt-6">
                  <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Book a No-Obligation Strategy Call</Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}
