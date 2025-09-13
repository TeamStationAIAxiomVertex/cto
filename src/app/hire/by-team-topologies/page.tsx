
import Link from 'next/link';
import { ArrowRight, Zap, Users, Shield, Layers, BrainCircuit } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Nearshore IT Teams by Topology | TeamStation AI',
  description: 'We build scalable nearshore IT team topologies from LATAM talent. Hire stream-aligned, platform, or enabling teams to accelerate your US company\'s roadmap.',
};

const topologies = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        name: "Stream-Aligned Teams",
        description: "End-to-end squads owning business capabilities across front-end, back-end, data, QA, and UX.",
        benefits: ["Faster delivery cycles", "Full outcome ownership", "US time zone alignment"],
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        name: "Platform Teams",
        description: "Infrastructure and DevOps teams that reduce cognitive load and enable other teams to ship faster and more safely.",
        benefits: ["Cloud, CI/CD, observability", "Shared tooling & automation", "Secure by design"],
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        name: "Enabling Teams",
        description: "Experts who unblock others—mentors, architects, and quality champions who embed across the organization.",
        benefits: ["Proactive knowledge transfer", "Best-practice accelerators", "Uplift team-wide standards"],
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        name: "Complicated-Subsystem Teams",
        description: "Specialized squads for frontier tech and critical domains requiring deep, focused expertise.",
        benefits: ["AI/ML, advanced data science", "Complex systems expertise", "Dedicated innovation task forces"],
    },
]

export default function TeamTopologiesPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Team Topologies</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Nearshore IT Team Topologies, Built for Scale</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
         From stream-aligned feature squads to advanced platform and enabling teams, TeamStation AI builds the LATAM engineering structures you need to accelerate delivery.
        </p>
         <div className="mt-4 font-semibold text-primary">
            50–70% cost savings • Faster time-to-market • Scalable with your roadmap
        </div>
      </header>

      <div className="my-16 text-center">
        <div className="flex justify-center items-center gap-2 md:gap-4 font-mono text-xs md:text-sm text-muted-foreground">
            <span>Cognitive AI-matched shortlists</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-primary"/>
            <span>Day-1 onboarding</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-primary"/>
            <span>KPI tracking</span>
        </div>
      </div>

       <div className="my-16">
        <h2 className="text-center text-3xl font-bold mb-8">Proven Structures for High-Performing Teams</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topologies.map((topo) => (
                <div key={topo.name} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="flex items-center gap-4">
                        {topo.icon}
                        <h3 className="text-xl font-bold text-foreground">{topo.name}</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground flex-grow">{topo.description}</p>
                    <div className="mt-6 border-t border-border pt-4">
                        <ul className="space-y-2">
                        {topo.benefits.map(benefit => (
                            <li key={benefit} className="flex items-center gap-2 text-sm">
                                <Shield className="h-4 w-4 text-green-500" />
                                <span className="text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-center mt-8 text-muted-foreground">
            We apply proven Team Topologies to build scalable nearshore IT teams from LATAM talent, optimized for US companies.
        </p>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to build the right team structure?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss which team topology best fits your roadmap and organizational goals.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Topology Strategy Call</Link>
      </div>
    </main>
  );
}
