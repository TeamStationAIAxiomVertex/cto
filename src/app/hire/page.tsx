
import Link from 'next/link';
import { Building, Code, User, ArrowRight, Shapes } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Vetted Nearshore Engineers | LATAM IT Staff Augmentation',
  description: 'De-risk your roadmap. Hire elite, pre-vetted LATAM engineers by role, technology, or country. Secure, compliant, and ready to ship code from day one.',
};

export default function HirePage() {
  const hireOptions = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: 'Hire by Role',
      pain: "You don't need a 'developer.' You need a specific set of competencies.",
      description: 'Find elite, pre-vetted LATAM engineers matched to the specific, high-stakes competencies your business demands, from SRE to AppSec to AI/ML.',
      href: '/hire/by-role',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Hire by Technology',
      pain: "Your stack is modern and specific. Your team must be too.",
      description: 'Find engineers with proven, deep expertise in the technologies you rely on daily, not just a passing familiarity listed on a resume.',
      href: '/hire/by-technology',
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Hire by Country',
      pain: 'Losing a full day to time zones is killing your velocity.',
      description: 'Leverage the top engineering hubs across Latin America, perfectly aligned with your time zone for the real-time collaboration that agile demands.',
      href: '/hire/by-country',
    },
     {
      icon: <Shapes className="h-8 w-8 text-primary" />,
      title: 'Hire by Team Topologies',
      pain: "Are your teams structured for scale or for silos?",
      description: 'From stream-aligned squads to platform teams, we build the LATAM engineering structures you need to accelerate delivery and reduce cognitive load.',
      href: '/hire/by-team-topologies',
    },
  ];

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Hire</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stop Gambling on Talent. Start De-Risking Your Roadmap.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because a generic "developer" isn't enough. You have a critical, high-stakes role to fill, and a mis-hire could cost you months. Our integrated platform doesn't just find candidates—it provides scientific evidence of their ability to solve your specific problems, so you can build with confidence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {hireOptions.map((option) => (
          <div key={option.href} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg">
            <p className="text-sm font-semibold text-primary">{option.pain}</p>
            <div className='flex items-center gap-3 mt-3'>
              {option.icon}
              <h2 className="text-xl font-bold text-foreground">{option.title}</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground flex-grow">{option.description}</p>
            <Link href={option.href} className="mt-6 flex items-center text-sm font-semibold text-primary stretched-link">
                Explore {option.title} Options <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to build your team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific needs. In a 15-minute call, we can map your roles, security requirements, and a go-live timeline.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
