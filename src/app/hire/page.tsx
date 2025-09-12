import Link from 'next/link';
import { Building, Code, User } from 'lucide-react';

export default function HirePage() {
  const hireOptions = [
    {
      icon: <User className="icon" />,
      title: 'Hire by Role',
      description: 'Find elite, pre-vetted LATAM talent for your specific engineering needs, from frontend to AI/ML.',
      href: '/hire/by-role',
    },
    {
      icon: <Code className="icon" />,
      title: 'Hire by Technology',
      description: 'Build your team with engineers who have deep expertise in the technologies you use every day.',
      href: '/hire/by-technology',
    },
    {
      icon: <Building className="icon" />,
      title: 'Hire by Country',
      description: 'Tap into the top engineering talent pools across Latin America, perfectly aligned with your time zone.',
      href: '/hire/by-country',
    },
  ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / Hire
      </div>
      <header className="text-center my-8">
        <h1 className="h1">Hire Elite LATAM Engineers—Fast, Fair, Day-One Ready</h1>
        <p className="lead max-w-3xl mx-auto">
          Access the world's fastest-growing pool of elite engineers, aligned with U.S. time zones and culture. Our integrated platform handles sourcing, vetting, onboarding, and compliance, so you can focus on building.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        {hireOptions.map((option) => (
          <Link key={option.href} href={option.href} className="card block p-6 hover:bg-surface-2 transition-colors">
             <div className="flex items-center gap-4">
                {option.icon}
                <h2 className="h3 m-0 text-xl">{option.title}</h2>
             </div>
            <p className="text-mute mt-2 text-sm">{option.description}</p>
            <div className="mt-4 text-sm font-semibold text-accent-custom">Explore Options →</div>
          </Link>
        ))}
      </div>
      
      <div className="section text-center">
        <h2 className="h2 mt-0">Ready to build your team?</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            Let's discuss your specific needs. In a 15-minute call, we can map your roles, security requirements, and a go-live timeline.
        </p>
        <Link href="/hire" className="cta">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
