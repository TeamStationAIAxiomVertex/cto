
import { Target, Telescope, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const pillars = [
        {
            icon: <Target className="h-8 w-8 text-primary" />,
            title: 'Our Mission',
            description: 'To provide CTOs with the world\'s most efficient, secure, and scientifically-grounded platform for building and scaling elite nearshore engineering teams.',
        },
        {
            icon: <Telescope className="h-8 w-8 text-primary" />,
            title: 'Our Vision',
            description: 'To replace the fragmented and opaque traditional staffing model with a single, transparent, and accountable platform that aligns talent, technology, and governance.',
        },
         {
            icon: <Shield className="h-8 w-8 text-primary" />,
            title: 'Our Commitment',
            description: 'To operate with radical transparency, grounding our processes in scientific rigor, and providing an unparalleled level of security and compliance for our partners.',
        },
    ];
  return (
    <main className="container max-w-5xl">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>About</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">We're Engineering a Better Way to Build Teams</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          TeamStation AI was founded by engineers and operators who experienced the friction and risk of traditional outsourcing firsthand. We knew there had to be a better way—a way to combine the talent of nearshore with the security and efficiency of a modern technology platform.
        </p>
      </header>

      <div className="grid md:grid-cols-3 my-16 gap-8">
        {pillars.map((pillar) => (
          <div className="flex flex-col items-center text-center p-6" key={pillar.title}>
            {pillar.icon}
            <h2 className="mt-4 text-xl font-bold">{pillar.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>

       <div className="prose prose-lg dark:prose-invert mx-auto my-16">
        <h2 className="text-center">The TeamStation AI Difference</h2>
        <p>
            We are not a staffing agency. We are not a consulting firm. We are a technology company. Our product is a fully integrated platform—the Nearshore IT Co-Pilot™—that solves the hardest parts of building a remote team.
        </p>
        <p>
            Our innovation lies in unifying every part of the process under a single SLA. We use cognitive science and AI for vetting (<Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>). We provide an end-to-end operational wrapper that includes EOR, payroll, secure devices, and insurance. We give you the tools and the data to run your nearshore team with the same confidence and control as your team down the hall.
        </p>
        <p>
            This is the future of team building. We invite you to be a part of it.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Experience the Difference?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
           Let's talk about how our platform can help you achieve your product goals faster and more securely.
        </p>
        <Link href="/hire" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
