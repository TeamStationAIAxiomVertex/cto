
import Link from 'next/link';
import { Building, Code, User, ArrowRight } from 'lucide-react';

export default function HirePage() {
  const hireOptions = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: 'Hire by Role',
      description: 'Find elite, pre-vetted LATAM talent for your specific engineering needs, from frontend to AI/ML.',
      href: '/hire/by-role',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Hire by Technology',
      description: 'Build your team with engineers who have deep expertise in the technologies you use every day.',
      href: '/hire/by-technology',
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Hire by Country',
      description: 'Tap into the top engineering talent pools across Latin America, perfectly aligned with your time zone.',
      href: '/hire/by-country',
    },
  ];

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Hire</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Elite LATAM Engineers</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Access the world's fastest-growing pool of elite engineers, aligned with U.S. time zones and culture. Our integrated platform handles sourcing, vetting, onboarding, and compliance, so you can focus on building.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {hireOptions.map((option) => (
          <Link key={option.href} href={option.href} className="group block rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
             {option.icon}
            <h2 className="mt-4 text-xl font-bold transition-colors group-hover:text-primary">{option.title}</h2>
            <p className="mt-2 text-muted-foreground">{option.description}</p>
            <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                Explore Options <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to build your team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific needs. In a 15-minute call, we can map your roles, security requirements, and a go-live timeline.
        </p>
        <Link href="/pricing" className="cta-button mt-6">See Our Pricing</Link>
      </div>
    </main>
  );
}
