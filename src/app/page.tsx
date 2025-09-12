
import Link from 'next/link';
import { BrainCircuit, ShieldCheck, Scale, ArrowRight } from 'lucide-react';
import { getAllCaseStudies } from '@/lib/case-studies';

function ServicePill({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
    return (
        <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Icon className="h-5 w-5 text-primary" />
            <span>{text}</span>
        </div>
    );
}

export default async function HomePage() {
  const caseStudies = (await getAllCaseStudies()).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          The CTO Playbook
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.
        </p>
        <div className="mt-10">
            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Book a Strategy Call</Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ServicePill icon={BrainCircuit} text="AI-Powered Vetting" />
            <ServicePill icon={ShieldCheck} text="Secure Onboarding" />
            <ServicePill icon={Scale} text="EOR & Compliance" />
        </div>
      </section>
      
      <section id="case-studies" className="py-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
            Evidence of Impact
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">See how our integrated platform and elite talent have delivered tangible results for companies like yours.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(study => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary my-3">{study.industry}</span>
                <p className="text-sm text-muted-foreground flex-grow">{study.summary}</p>
                 <div className="mt-6 flex items-center text-sm font-semibold text-primary">Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
            </Link>
            ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/case-studies" className="font-semibold text-primary hover:underline">
                View All Case Studies
            </Link>
        </div>
      </section>

      <section id="contact" className="py-24">
         <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Schedule a Consultation</h2>
            <p className="mt-3 text-muted-foreground">Ready to accelerate your roadmap? Let's discuss how our elite LATAM talent and integrated platform can help you achieve your goals.</p>
            <div className="mt-6">
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Find a Time</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
