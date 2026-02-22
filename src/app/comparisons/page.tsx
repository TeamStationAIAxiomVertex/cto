
import Link from 'next/link';
import { ArrowRight, Users, Scale, ShieldCheck, Briefcase, ExternalLink, Network } from 'lucide-react';
import type { Metadata } from 'next';
import ValuePropositionBlock from "../../components/seo/ValuePropositionBlock";
import CTOFieldManualBlock from "../../components/seo/CTOFieldManualBlock";
import FurtherReading from "../../components/seo/FurtherReading";

export const metadata: Metadata = {
  title: 'Nearshore Vendor Comparisons | TeamStation AI',
  description: 'Objective analysis of nearshore IT vendors. We compare against Body Shops, Freelance Networks, SIs, and EOR-only models.',
};

const models = [
    {
        name: 'The "Body Shop" Model',
        icon: <Users className="h-8 w-8 text-primary" />,
        pain: "Is your vendor just filling seats with unvetted talent?",
        problem: "These vendors focus on volume, placing bodies in seats with minimal vetting. You get a low hourly rate but inherit massive risk in quality, security, and retention.",
        vendors: [
            { name: "BairesDev", href: "/comparisons/bairesdev", website: "https://www.bairesdev.com/" },
            { name: "Nearsure", href: "/comparisons/nearsure", website: "https://nearsure.com/" },
            { name: "Unosquare", href: "/comparisons/unosquare", website: "https://www.unosquare.com/" },
            { name: "KMS", href: "/comparisons/kms", website: "https://kms-technology.com/" },
            { name: "Devlane", href: "/comparisons/devlane", website: "https://devlane.com/" },
        ],
        solution: "Our <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Axiom Cortex™</a> vetting provides scientific proof of skill, and our integrated platform handles all operations, creating a lower, predictable <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO</a>."
    },
    {
        name: 'The Freelance Network Model',
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        pain: "Are you building a team or just renting a temporary coder?",
        problem: "Elite talent, but at a premium price. The freelance model creates continuity risk and leaves you with the entire burden of security, compliance, and management.",
        vendors: [
            { name: "Toptal", href: "/comparisons/toptal", website: "https://www.toptal.com/" },
            { name: "Andela", href: "/comparisons/andela", website: "https://www.andela.com/" },
        ],
        solution: "We build dedicated, long-term teams of full-time employees, ensuring knowledge retention and deep integration, all at a sustainable cost."
    },
    {
        name: 'The Systems Integrator (SI) Model',
        icon: <Network className="h-8 w-8 text-primary" />,
        pain: "Do you need to augment your team or outsource your brain?",
        problem: "SIs are for large-scale project outsourcing, not staff augmentation. You lose control over architecture and team culture, creating long-term dependency.",
        vendors: [
            { name: "Globant", href: "/comparisons/globant", website: "https://www.globant.com/" }
        ],
        solution: "Our model is built for control. We provide elite engineers who integrate into your teams, your rituals, and your roadmap. You own the technical direction."
    },
    {
        name: 'The "EOR-Plus" Model',
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        pain: "Is your vendor solving payroll or the entire operational stack?",
        problem: "These vendors handle hiring and payroll but leave critical gaps. They don't provide secure devices, MDM, or insurance, forcing you to become a global IT and risk manager.",
        vendors: [
            { name: "Terminal", href: "/comparisons/terminal", website: "https://terminal.io/" },
            { name: "Deel", href: "/comparisons/deel", website: "https://www.deel.com/" },
            { name: "Revelo", href: "/comparisons/revelo", website: "https://www.revelo.com/" },
            { name: "ParallelStaff", href: "/comparisons/parallelstaff", website: "https://www.parallelstaff.com/" },
            { name: "TECLA", href: "/comparisons/tecla", website: "https://www.tecla.io/" },
            { name: "Howdy", href: "/comparisons/howdy", website: "https://www.howdy.com/" },
            { name: "CodersLink", href: "/comparisons/coderslink", website: "https://coderslink.com/" },
        ],
        solution: "We are a complete operational platform. We bundle all 'run-state' services EOR, devices, MDM, security, insurance into a single, accountable SLA."
    }
];

export default function ComparisonsPage() {
  return (
    <main className="reading-shell py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Comparisons</span>
      </div>
      <header className="surface-card p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">CTO Comparison Hub for Nearshore Vendor Models</h1>
        <p className="mt-5 max-w-4xl text-lg text-muted-foreground leading-8">
          This page is a decision map for CTO and CIO teams comparing operating models, not just vendor names.
          Most vendors optimize for seat fill or rate card optics. That creates hidden delivery risk, weak governance,
          and slow execution loops. Use this hub to identify the model failure first, then evaluate the right comparison path.
        </p>
         <nav className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/research/hub" className="text-primary hover:underline">Our Research</Link>
            <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
            <a href="https://research.teamstation.dev/protocols/economics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Economics Protocols</a>
        </nav>
      </header>

      <section className="surface-card mt-10 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">How to use this comparison page</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-7">
          <p>
            Start with the symptom your team is experiencing. If velocity is unstable, compare models that affect review cadence and ownership boundaries.
            If compliance and device control are the issue, compare operational coverage instead of recruiting promises.
            If cost approval is blocked, use the TCO and economics pages before deciding on vendor type.
          </p>
          <p>
            Use these supporting paths while comparing vendors: <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics</Link>,{' '}
            <Link href="/playbook/tco-model" className="text-primary hover:underline">TCO model</Link>,{' '}
            <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity framework</Link>, and{' '}
            <a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine</a>.
          </p>
        </div>
      </section>

      <section className="my-16">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            {models.map(model => (
                <article key={model.name} className="surface-card mx-auto w-full max-w-2xl p-6 flex flex-col shadow-lg">
                    <p className="text-sm font-semibold text-primary">Pain</p>
                    <p className="mt-1 text-sm text-muted-foreground">{model.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {model.icon}
                        <h2 className="text-xl font-bold text-foreground">{model.name}</h2>
                    </div>
                    <div className="mt-4 border-t border-border/50 pt-4">
                        <h3 className="text-sm font-semibold text-primary">Problem</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-6">{model.problem}</p>
                    </div>
                    <div className="my-4 border-t border-border/50 pt-4">
                        <h3 className="font-semibold text-sm text-primary">Comparison routes</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {model.vendors.map(vendor => (
                                <div key={vendor.href} className="flex gap-2 items-center bg-primary/10 px-2 py-1 rounded">
                                    <Link href={vendor.href} className="text-sm font-medium text-primary hover:underline">
                                        {vendor.name}
                                    </Link>
                                    <a href={vendor.website} target="_blank" rel="nofollow noopener noreferrer" className="text-primary/70 hover:text-primary">
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 border-t border-border pt-4 flex-grow">
                        <h3 className="font-semibold text-primary">Solution</h3>
                        <p className="text-sm text-foreground m-0 leading-6" dangerouslySetInnerHTML={{ __html: model.solution }}></p>
                    </div>
                    <div className="mt-5 border-t border-border/50 pt-4">
                      <Link href={model.vendors[0]?.href ?? '/comparisons'} className="inline-flex items-center text-sm font-semibold text-primary">
                        Open comparison path <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                </article>
            ))}
        </div>
      </section>

      <section className="surface-card my-16 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">What CTO teams should validate before choosing any vendor</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-background p-5">
            <p className="text-sm font-semibold text-primary">Execution Control</p>
            <p className="mt-2 text-sm text-muted-foreground">Who owns architecture decisions, review standards, and escalation during delivery failure.</p>
          </div>
          <div className="rounded-lg border bg-background p-5">
            <p className="text-sm font-semibold text-primary">Operational Coverage</p>
            <p className="mt-2 text-sm text-muted-foreground">Whether devices, access, compliance, and risk controls are integrated or pushed back to your internal team.</p>
          </div>
          <div className="rounded-lg border bg-background p-5">
            <p className="text-sm font-semibold text-primary">Economic Reality</p>
            <p className="mt-2 text-sm text-muted-foreground">Total cost of delivery including delays, management overhead, rework, and vacancy time.</p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <ValuePropositionBlock
            pain="CTOs face hidden risks in cost, compliance, and velocity."
            stakes="Without addressing these, budgets spiral and projects miss critical deadlines."
            prescription="TeamStation AI delivers audit-ready compliance, Axiom Cortex™ cognitive vetting, and predictable TCO."
            proof="40 60% lower TCO vs legacy models. Case studies: [Currance](/case-studies), [Parsable](/case-studies/parsable)."
            ctaHref="/comparisons"
            ctaText="See All Vendor Comparisons"
        />
      </section>

      <CTOFieldManualBlock
        title="CTO Field Manual for Vendor Comparison Decisions"
        focus="vendor model diagnosis, execution control, and cost of delivery validation"
      />

      <FurtherReading comparison="bairesdev" />
    </main>
  );
}
