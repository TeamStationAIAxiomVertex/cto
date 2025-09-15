
import Link from 'next/link';
import { ArrowRight, Zap, Users, Shield, Layers, BrainCircuit, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { WithTooltip } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Hire Nearshore IT Teams by Topology | TeamStation AI',
  description: 'We build scalable nearshore IT team topologies from LATAM talent. Hire stream-aligned, platform, or enabling teams to accelerate your US company\'s roadmap with absolute control.',
  keywords: 'team topologies, nearshore it teams, stream-aligned teams, platform teams, enabling teams, latam engineering teams',
};

const topologies = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        pain: "Are your teams stuck in handoff hell?",
        name: "Stream-Aligned Teams",
        description: "End-to-end squads owning business capabilities across front-end, back-end, data, QA, and UX. Optimized for rapid, high-quality delivery of customer value.",
        benefits: ["Eliminate cross-team dependencies", "Accelerate feature delivery cycles", "Instill full outcome ownership"],
        proof: {
            href: "/case-studies/atticus",
            label: "See how we built a full-stack MVP team"
        }
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        pain: "Is developer cognitive load slowing you down?",
        name: "Platform Teams",
        description: "A centralized team building the internal developer platform (IDP), tools, and infrastructure that enable other teams to ship faster and more safely.",
        benefits: ["Reduce cognitive load on feature teams", "Enforce best practices for security & reliability", "Standardize CI/CD, observability & cloud resources"],
         proof: {
            href: "/case-studies/rmj-technologies",
            label: "See how we rescued a failing monolith"
        }
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        pain: "Are best practices trapped in silos?",
        name: "Enabling Teams",
        description: "A team of elite specialists (e.g., security, QA automation, architecture) who embed across the organization to uplift skills and accelerate adoption of complex practices.",
        benefits: ["Proactively transfer knowledge & mentor staff", "Drive adoption of new standards & tools", "Solve the trickiest technical challenges"],
         proof: {
            href: "/case-studies/global-entertainment-platform",
            label: "See how our QA squad stabilized releases"
        }
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        pain: "Struggling with a highly complex domain?",
        name: "Complicated-Subsystem Teams",
        description: "A dedicated squad of deep specialists focused on a part of the system that is too complex for a generalist team (e.g., AI/ML models, video processing pipeline).",
        benefits: ["Focus deep expertise on critical components", "Isolate complexity to prevent system-wide drag", "Build a dedicated innovation task force for frontier tech"],
         proof: {
            href: "/case-studies/global-ooh-advertising-platform",
            label: "See how we accelerated AI feature velocity"
        }
    },
]

export default function TeamTopologiesPage() {
  return (
    <main className="container max-w-6xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Team Topologies</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stop Organizing by Org Chart. Start Building for Flow.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
         Your organizational structure is either an accelerator or an anchor. For CTOs of scaling companies, random staff augmentation creates chaos. We provide what others can't: strategically designed LATAM engineering teams, built with scientific precision and managed with absolute control through our platform.
        </p>
      </header>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Build the Right Team for the Right Job</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">We apply proven Team Topologies to build scalable nearshore IT teams from LATAM talent, matching the team structure to your specific business challenge.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {topologies.map((topo) => (
                <div key={topo.name} className="group rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                    <p className="text-sm font-semibold text-primary">{topo.pain}</p>
                    <div className="flex items-center gap-4 mt-3">
                        {topo.icon}
                        <h3 className="text-xl font-bold text-foreground">{topo.name}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{topo.description}</p>
                    <div className="mt-6 border-t border-border pt-4">
                        <ul className="space-y-2">
                        {topo.benefits.map(benefit => (
                            <li key={benefit} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                     <Link href={topo.proof.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                        {topo.proof.label} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            ))}
        </div>
      </section>

      <section className="my-24 rounded-lg border bg-card p-8 shadow-lg">
        <h2 className="text-center text-4xl font-bold text-foreground">The Science of Team Assembly</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">Building elite teams isn't guesswork. It's a science. Our platform provides the control and data you need to construct high-performing topologies with confidence.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-background rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-primary">1. Cognitive Mapping</h3>
                <p className="text-sm text-muted-foreground">We use our <WithTooltip label="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/axiom-cortex-scientific-report" className="text-primary hover:underline border-b border-dashed">Axiom Cortex™</Link></WithTooltip> engine to map candidates' cognitive traits. A Platform Engineer needs high Architectural Instinct; a Stream-Aligned engineer needs high Collaborative Mindset. We find the right mental shape for the role.</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-primary">2. Role Blueprinting</h3>
                <p className="text-sm text-muted-foreground">We work with you to define the precise skillsets, communication patterns, and experience levels required for each role within a topology, creating a data-driven blueprint for success.</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-primary">3. Platform Control</h3>
                <p className="text-sm text-muted-foreground">Our <WithTooltip label="Our integrated platform for hiring, managing, and securing nearshore teams."><Link href="/platform" className="text-primary hover:underline border-b border-dashed">Nearshore IT Co-Pilot™ platform</Link></WithTooltip> gives you a single pane of glass to manage it all—from vetting and secure onboarding to performance KPIs, ensuring your team structure performs as designed.</p>
            </div>
        </div>
      </section>


       <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to design your high-velocity organization?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            This isn't a hiring conversation; it's an architectural one. Let's discuss which team topologies will unlock your roadmap and how our platform can build them for you with precision and control.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Topology Strategy Call</Link>
      </div>
    </main>
  );
}
