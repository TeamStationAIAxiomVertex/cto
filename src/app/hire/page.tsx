import Link from "next/link";
import { Building, Code, User, ArrowRight, Shapes } from "lucide-react";
import type { Metadata } from "next";
import FurtherReading from "../../components/seo/FurtherReading";
import CardGuidanceTooltip from "../../components/ui/card-guidance-tooltip";
import { InfoDropdown } from "../../components/client/info-dropdown";

export const metadata: Metadata = {
  title: "Hire Vetted Nearshore Engineers & LATAM IT Teams",
  description:
    "De-risk your roadmap. Hire elite, pre-vetted LATAM engineers by role, tech, or country. Secure and compliant staff augmentation.",
  keywords:
    "hire nearshore engineers, latam it staff augmentation, hire vetted latam engineers, hire by role, hire by technology, hire by country",
};

export default function HirePage() {
  const hireOptions = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Hire by Role",
      pain: "You don't need a 'developer.' You need a specific set of competencies.",
      solution: "We map business bottlenecks to role competency and deliver vetted specialists.",
      description:
        "Find elite, pre-vetted LATAM engineers matched to the specific, high-stakes competencies your business demands, from SRE to AppSec to AI/ML.",
      href: "/hire/by-role",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Hire by Technology",
      pain: "Your stack is modern and specific. Your team must be too.",
      solution: "We validate deep stack mastery using practical delivery scenarios.",
      description:
        "Find engineers with proven, deep expertise in the technologies you rely on daily, not just a passing familiarity listed on a resume.",
      href: "/hire/by-technology",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Hire by Country",
      pain: "Losing a full day to time zones is killing your velocity.",
      solution: "We align teams in LATAM with real time collaboration and low handoff delay.",
      description:
        "Leverage the top engineering hubs across Latin America, perfectly aligned with your time zone for the real-time collaboration that agile demands.",
      href: "/hire/by-country",
    },
    {
      icon: <Shapes className="h-8 w-8 text-primary" />,
      title: "Hire by Team Topologies",
      pain: "Are your teams structured for scale or for silos?",
      solution: "We structure stream aligned, platform, and enabling teams for faster flow.",
      description:
        "From stream-aligned squads to platform teams, we build the LATAM engineering structures you need to accelerate delivery and reduce cognitive load.",
      href: "/hire/by-team-topologies",
    },
  ];

  return (
    <main className="content-shell py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / <span>Hire</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Stop Gambling on Talent. Start De-Risking Your Roadmap.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because a generic "developer" isn't enough. You have a
          critical, high-stakes role to fill, and a mis-hire could cost you
          months. Our integrated platform doesn't just find candidates it
          provides scientific evidence of their ability to solve your specific
          problems, so you can build with confidence.
        </p>
        <div className="mt-4 flex justify-center">
          <InfoDropdown label="How this page helps">
            <p>This hub routes you by role, stack, country, and team topology so you can fix the exact delivery constraint first.</p>
          </InfoDropdown>
        </div>
        <nav className="mt-6 flex justify-center gap-4 text-sm">
          <Link href="/engineering-doctrine" className="text-primary hover:underline">
            Engineering Doctrine
          </Link>
          <Link href="/playbook/hub" className="text-primary hover:underline">
            CTO Playbook
          </Link>
          <Link href="/comparisons" className="text-primary hover:underline">
            Vendor Comparisons
          </Link>
          <Link href="/research/hub" className="text-primary hover:underline">
            Our Research
          </Link>
        </nav>
      </header>

      <section className="surface-card my-10 p-6 md:p-8">
        <h2 className="text-2xl font-bold">Hiring Decision Snapshot</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Start from the bottleneck. If delivery is slow use role and topology paths. If execution quality is unstable use stack and country paths with overlap and governance controls.
        </p>
        <div className="mt-5 card-grid-tight-3">
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Issue</p>
            <p className="mt-1 text-sm text-muted-foreground">Legacy vendor models hide risk until after onboarding.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">How we solve it</p>
            <p className="mt-1 text-sm text-muted-foreground">Evidence driven vetting plus structured operating model setup.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Proof signal</p>
            <p className="mt-1 text-sm text-muted-foreground">Faster delivery ramp with less coordination drag.</p>
          </div>
        </div>
      </section>

      <div className="card-grid-tight-2 my-12">
        {hireOptions.map((option) => (
          <div
            key={option.href}
            className="surface-card group relative mx-auto w-full max-w-md flex flex-col p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-primary">{option.pain}</p>
              <CardGuidanceTooltip issue={option.pain} solution={option.solution} />
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                {option.icon}
              </span>
              <h2 className="text-xl font-bold text-foreground">
                {option.title}
              </h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground flex-grow">
              {option.description}
            </p>
            <Link
              href={option.href}
              className="mt-6 flex items-center text-sm font-semibold text-primary stretched-link"
            >
              Explore {option.title} Options{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

      <section className="surface-card my-12 p-6 md:p-8">
        <h2 className="text-2xl font-bold">How CTO teams should use this hub</h2>
        <div className="mt-4 space-y-5 text-muted-foreground leading-7">
          <h3 className="text-lg font-semibold text-foreground">Start with the business risk not the role name</h3>
          <p>
            If release confidence is falling, route first to role and topology pages. If architecture quality
            is uneven, route first to technology pages. If collaboration speed is the blocker, route first to
            country overlap pages. This keeps the hiring conversation tied to delivery outcomes instead of title
            inflation or tool checklists.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use role paths for ownership clarity and operating accountability.</li>
            <li>Use technology paths for practical execution depth validation.</li>
            <li>Use country paths for overlap, communication fit, and delivery cadence.</li>
            <li>Use topology paths for system level team design.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Contextual interlinking mesh for decision continuity</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/hire/by-role" className="text-primary hover:underline">hire by role path for capability based staffing</Link></li>
            <li><Link href="/hire/by-technology" className="text-primary hover:underline">hire by technology path for stack level fit</Link></li>
            <li><Link href="/hire/by-country" className="text-primary hover:underline">hire by country path for collaboration overlap</Link></li>
            <li><Link href="/playbook/hub" className="text-primary hover:underline">CTO playbook hub for operating decisions</Link></li>
            <li><Link href="/research/hub" className="text-primary hover:underline">research hub for evidence based governance</Link></li>
            <li><a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine for systems execution</a></li>
            <li><a href="https://research.teamstation.dev/protocols/economics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">economics protocols for leadership tradeoffs</a></li>
            <li><a href="https://hire.teamstation.dev/nearshore-software-development" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nearshore operating overview for buyer alignment</a></li>
          </ul>
        </div>
      </section>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to build your team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Let's discuss your specific needs. In 15 minutes, we can map your
          roles, security requirements, and a go-live timeline.
        </p>
        <Link
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mt-6"
        >
          Book a Strategy Call
        </Link>
      </div>
    </main>
  );
}
