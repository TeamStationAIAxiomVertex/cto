import { Target, Telescope, Shield } from 'lucide-react';

export default function AboutPage() {
    const pillars = [
        {
            icon: <Target className="icon" />,
            title: 'Our Mission',
            description: 'To provide CTOs with the world\'s most efficient, secure, and scientifically-grounded platform for building and scaling elite nearshore engineering teams.',
        },
        {
            icon: <Telescope className="icon" />,
            title: 'Our Vision',
            description: 'To replace the fragmented and opaque traditional staffing model with a single, transparent, and accountable platform that aligns talent, technology, and governance.',
        },
         {
            icon: <Shield className="icon" />,
            title: 'Our Commitment',
            description: 'To operate with radical transparency, grounding our processes in scientific rigor, and providing an unparalleled level of security and compliance for our partners.',
        },
    ];
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / About
      </div>
      <header className="text-center my-8">
        <h1 className="h1">We're Engineering a Better Way to Build Teams</h1>
        <p className="lead max-w-3xl mx-auto">
          TeamStation AI was founded by engineers and operators who experienced the friction and risk of traditional outsourcing firsthand. We knew there had to be a better way—a way to combine the talent of nearshore with the security and efficiency of a modern technology platform.
        </p>
      </header>

      <div className="grid grid-3 my-12 gap-8">
        {pillars.map((pillar) => (
          <div className="icon-card" key={pillar.title}>
            {pillar.icon}
            <div>
              <h3 className="h3 mt-0">{pillar.title}</h3>
              <p className="text-sm text-mute m-0">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">The TeamStation AI Difference</h2>
        <p>
            We are not a staffing agency. We are not a consulting firm. We are a technology company. Our product is a fully integrated platform—the Nearshore IT Co-Pilot™—that solves the hardest parts of building a remote team.
        </p>
        <p>
            Our innovation lies in unifying every part of the process under a single SLA. We use cognitive science and AI for vetting (<a href="/research/axiom-cortex-scientific-report">Axiom Cortex™</a>). We provide an end-to-end operational wrapper that includes EOR, payroll, secure devices, and insurance. We give you the tools and the data to run your nearshore team with the same confidence and control as your team down the hall.
        </p>
        <p>
            This is the future of team building. We invite you to be a part of it.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Ready to Experience the Difference?</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
           Let's talk about how our platform can help you achieve your product goals faster and more securely.
        </p>
        <a href="/hire" className="cta">Book a Strategy Call</a>
      </div>
    </main>
  );
}
