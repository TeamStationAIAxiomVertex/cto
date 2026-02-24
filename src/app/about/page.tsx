import { Target, Telescope, Shield, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SpotifyIcon from "../../components/SpotifyIcon";
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'About TeamStation AI | LATAM Dev Teams' },
  description: 'Learn about our mission to provide the world\'s most efficient and secure platform for building elite nearshore LATAM teams.',
  keywords: 'about teamstation ai, nearshore software development, latam teams, bairesdev alternative, cognitive science hiring',
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About TeamStation AI",
  description: "Our mission, vision, and commitment to elite nearshore engineering.",
  url: "https://cto.teamstation.dev/about",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: "https://cto.teamstation.dev" },
  about: { "@type": "Organization", name: "TeamStation AI", url: "https://teamstation.dev" },
  sameAs: ["https://teamstation.dev", "https://www.linkedin.com/company/teamstation"],
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
    <main className="manual-page container max-w-6xl py-10">
      <JsonLd data={aboutSchema} />
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>About</span>
      </div>
      <header className="glass-panel gradient-ring hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">We Dare to Go Beyond</h1>
        <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
          TeamStation AI was founded not just to improve the traditional outsourcing model, but to completely replace it. We are engineering a better way to build teams by combining elite nearshore talent with the security and efficiency of a modern technology platform.
        </p>
      </header>

      <div className="grid md:grid-cols-3 my-16 gap-8">
        {pillars.map((pillar) => (
          <div className="glass-card-interactive gradient-ring flex flex-col items-center text-center p-6 rounded-lg border border-border/70 bg-background/70 shadow-lg" key={pillar.title}>
            {pillar.icon}
            <h2 className="mt-4 text-xl font-bold text-foreground">{pillar.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>

       <div className="prose prose-lg dark:prose-invert mx-auto my-16">
        <h2 className="text-center text-4xl font-bold text-foreground">The TeamStation AI Difference</h2>
        <p>
            We are not a staffing agency. We are not a consulting firm. We are a technology company. Our product is a fully integrated platform the <Link href="/platform">Nearshore IT Co-Pilot™</Link> that solves the hardest parts of building a remote team.
        </p>
        <p>
            We are inspired by the ethos of the space program a belief in doing what is hard to push humanity forward. To avert crisis, the Apollo missions required absolute certainty, continuity, and predictability. Without them, we would never have set foot on the moon. Our mission is to provide that same level of mission certainty in a highly intelligent service infrastructure that takes anomalies out of the hiring and team management equation.
        </p>
        <p>
           Our innovation lies in unifying every part of the process under a single SLA. We use cognitive science and AI for vetting (<Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>). We provide an end-to-end operational wrapper that includes EOR, payroll, secure devices, and insurance. We give you the tools and the data to run your nearshore team with the same confidence and control as your team down the hall. This is the future of team building. We invite you to be a part of it.
        </p>
        <div className="not-prose glass-panel gradient-ring rounded-lg border border-border/70 p-6 my-8 flex items-center gap-4">
            <SpotifyIcon className="h-12 w-12 text-[#1DB954] flex-shrink-0" />
            <div>
                <h4 className="font-bold text-foreground">Listen to the Founders</h4>
                <p className="text-sm text-muted-foreground m-0">Hear directly from our leadership about the vision and science behind TeamStation AI on our podcast.</p>
                <Link href="https://open.spotify.com/episode/7EwovXvoVFIGLJDwqTZFUE" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline mt-2 inline-block">Listen Now &rarr;</Link>
            </div>
        </div>
      </div>

      <section className="my-24 glass-panel gradient-ring rounded-2xl p-6 md:p-8 shadow-lg">
         <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary">Decades of combined experience</p>
            <div className="flex items-center gap-3 mt-3">
                <Users className="h-8 w-8 text-primary"/>
                <h2 className="text-3xl font-bold text-foreground">Guided by a Multi-Disciplinary Team</h2>
            </div>
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

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">Ready to Experience the Difference?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
           Let's talk about how our platform can help you achieve your product goals faster and more securely.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
