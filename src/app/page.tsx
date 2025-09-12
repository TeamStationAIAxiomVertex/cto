import Link from 'next/link';
import { caseStudies } from '@/lib/data';
import { CheckCircle2, BrainCircuit, ShieldCheck, Scale } from 'lucide-react';

function ServicePill({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
    return (
        <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Icon className="h-4 w-4 text-primary" />
            <span>{text}</span>
        </div>
    );
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
          The CTO Playbook
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.
        </p>
        <div className="mt-8">
            <Link href="/#contact" className="cta-button">Book a Strategy Call</Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ServicePill icon={BrainCircuit} text="AI-Powered Vetting" />
            <ServicePill icon={ShieldCheck} text="Secure Onboarding" />
            <ServicePill icon={Scale} text="EOR & Compliance" />
        </div>
      </section>
      
      <section id="case-studies" className="mt-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
            Evidence of Impact
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(study => (
            <Link key={study.slug} href={`/case-studies/${study.slug}/`} className="group block rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{study.subtitle}</p>
                 <div className="mt-4 text-sm font-semibold text-primary">Read Case Study →</div>
            </Link>
            ))}
        </div>
      </section>

      <section id="contact" className="mt-24">
         <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Schedule a Consultation</h2>
            <p className="mt-3 text-muted-foreground">Ready to accelerate your roadmap? Let's discuss how our elite LATAM talent and integrated platform can help you achieve your goals.</p>
            <div className="mt-6">
                <Link href="#" className="cta-button">Find a Time</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
