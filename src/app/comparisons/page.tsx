
import Link from 'next/link';
import { ArrowRight, Users, Scale, ShieldCheck, Briefcase, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'Nearshore Vendor Comparisons: BairesDev, Globant, Toptal Alternatives | TeamStation AI',
  description: 'An objective analysis of nearshore IT vendors. We compare TeamStation AI’s integrated platform against Body Shops, Freelance Networks, SIs, and EOR-only models.',
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
        ],
        solution: "We build dedicated, long-term teams of full-time employees, ensuring knowledge retention and deep integration, all at a sustainable cost."
    },
    {
        name: 'The Systems Integrator (SI) Model',
        icon: <Scale className="h-8 w-8 text-primary" />,
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
            { name: "TECLA", href: "/comparisons/tecla", website: "https://www.tecla.io/" }
        ],
        solution: "We are a complete operational platform. We bundle all 'run-state' services—EOR, devices, MDM, security, insurance—into a single, accountable SLA."
    }
];

export default function ComparisonsPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Comparisons</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Market Is Wrong About Nearshore Value</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Most nearshore vendors sell a single, flawed metric: a low hourly rate. This is a trap that leads to higher costs, slower delivery, and massive risk. We don't sell hours; we provide a complete, integrated platform that delivers predictable outcomes. Here's how we compare to the broken models.
        </p>
      </header>

      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map(model => (
                <div key={model.name} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                    <p className="text-sm font-semibold text-primary">{model.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {model.icon}
                        <h2 className="text-xl font-bold text-foreground">{model.name}</h2>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{model.problem}</p>
                    <div className="my-4">
                        <h4 className="font-semibold text-sm text-muted-foreground">Key Offenders:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {model.vendors.map(vendor => (
                                <div key={vendor.href} className="flex gap-2 items-center bg-primary/10 px-2 py-1 rounded">
                                    <Link href={vendor.href} className="text-sm font-medium text-primary hover:underline">
                                        {vendor.name}
                                    </Link>
                                    <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary">
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 border-t border-border pt-4 flex-grow">
                        <h4 className="font-semibold text-primary">The TeamStation AI Solution</h4>
                        <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: model.solution }}></p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <section className="my-16">
        <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
          <h2 className="text-3xl font-bold">Ready to Move Beyond a Broken Model?</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            Let's have a real conversation about Total Cost of Ownership, velocity, and risk. In 15 minutes, we can build a CFO-ready business case for a truly integrated nearshore platform.
          </p>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
              Book a No-Obligation Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
