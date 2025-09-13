
import { Target, Telescope, Shield, Star, Award, BookOpen, Beaker, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TeamStation AI | Nearshore Software Development with LATAM Teams',
  description: 'Learn about TeamStation AI\'s mission to provide an integrated platform for building elite nearshore software development teams in Latin America. We are the top Bairesdev alternative.',
};

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

    const timeline = [
        { year: 2017, event: "Kicked off the Self-funded Nearshore Staffing Services with legal entities in the United States and Mexico." },
        { year: 2019, event: "Amassed a sizeable client listing that started funding the Research and Development of our Artificial Intelligence-driven SaaS Service Platform." },
        { year: 2021, event: "Services expanded to South America with locations in Colombia and Brazil." },
        { year: 2023, event: "Won TechBehemoths first place award for Artificial Intelligence and ranked as a TOP IT STAFF AUGMENTATION provider in Mexico by CLUTCH." },
        { year: 2024, event: "Launched the AI-Driven SaaS platform with select clients and welcomed Dan Diachenko as Co-Founder to CEO Lonnie McRorey." },
        { year: 2025, event: "Became the first company to publish two peer-reviewed scientific papers on Nearshore IT Staff Augmentation, validating our methodology." }
    ];

  return (
    <main className="container max-w-6xl py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>About</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Engineering a Better Way to Build Teams</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          TeamStation AI was founded on a simple premise: the traditional outsourcing model is broken. We knew there had to be a better way—a way to combine the talent of nearshore with the security and efficiency of a modern technology platform.
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
            We are not a staffing agency. We are not a consulting firm. We are a technology company. Our product is a fully integrated platform—the <Link href="/process">Nearshore IT Co-Pilot™</Link>—that solves the hardest parts of building a remote team.
        </p>
        <p>
            Our innovation lies in unifying every part of the process under a single SLA. We use cognitive science and AI for vetting (<Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>). We provide an end-to-end operational wrapper that includes EOR, payroll, secure devices, and insurance. We give you the tools and the data to run your nearshore team with the same confidence and control as your team down the hall.
        </p>
        <p>
           At the core of every technological advance lies a team of brilliant minds. The NASA Space Program exemplifies this ethos, showcasing how the paramount challenge of sending humans to space can be overcome through a united mission. This inspires us to push boundaries and explore new frontiers. This is the future of team building. We invite you to be a part of it.
        </p>
      </div>

      <section className="my-24 rounded-lg border bg-card p-8">
        <h2 className="text-center text-4xl font-bold text-foreground">Led by Experts</h2>
        <div className="mt-8 flex flex-col items-center text-center max-w-4xl mx-auto">
            <Users className="h-12 w-12 text-primary" />
            <p className="mt-4 text-muted-foreground">
                TeamStation AI is guided by a multi-disciplinary executive team with decades of experience across technology, science, and operations. Our leadership includes Co-Founders Lonnie McRorey, a Cognitive Science graduate from Temple University with 25 years in technology, and Dan Diachenko, an MBA graduate from Universidad Torcuato Di Tella focused on AI-driven process optimization. They are supported by a robust LATAM leadership team with deep expertise in regional law, AI research, SaaS platform technology, people operations, and finance. This blend of strategic vision and on-the-ground operational excellence ensures our platform is not only innovative but also secure, compliant, and scalable.
            </p>
        </div>
      </section>
      
      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Our Journey</h2>
        <div className="mt-12 flow-root">
          <div className="max-w-3xl mx-auto">
            <ul className="-mb-8">
              {timeline.map((item, itemIdx) => (
                <li key={item.year}>
                  <div className="relative pb-8">
                    {itemIdx !== timeline.length - 1 ? (
                      <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background flex-shrink-0">
                          <span className="text-primary font-bold">{item.year}</span>
                        </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Experience the Difference?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
           Let's talk about how our platform can help you achieve your product goals faster and more securely.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
