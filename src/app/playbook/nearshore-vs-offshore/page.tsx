
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { Clock, Users2, FileSearch, Briefcase, Zap, Scale, ShieldCheck, ArrowRight, AlertTriangle, CheckCircle, BarChart, BookOpen, Layers, GitCompare, UserCheck, DollarSign, Building } from 'lucide-react';
import { ComparisonWidget } from '@/components/ComparisonWidget';

export const metadata: Metadata = {
  title: 'Nearshore vs. Offshore: The Strategic Choice for CTOs | TeamStation AI',
  description: 'The definitive, data-driven analysis for CTOs on nearshore vs. offshore software development. A playbook for diagnosing the true cost and risk of your global talent strategy.',
};

const options = [
    {
        title: "Build In-House (Core IP)",
        icon: <Building className="h-8 w-8 text-primary" />,
        pain: "Headcount freeze vs critical path.",
        implication: "60-day TTO; vacancy tax compounds.",
        useWhen: "Staff-plus roles, proprietary domains, long horizon.",
        wtfCheck: "Which roadmap item pays for those vacancy days?"
    },
    {
        title: "Onshore (US)",
        icon: <Users2 className="h-8 w-8 text-primary" />,
        pain: "Fully-loaded cost and scarce supply.",
        implication: "Great overlap; brutal budget pressure.",
        useWhen: "High-stakes discovery, exec adjacency, regulated data.",
        wtfCheck: "Are you paying premium for work that could run in daylight elsewhere?"
    },
    {
        title: "Offshore (Legacy)",
        icon: <Clock className="h-8 w-8 text-primary" />,
        pain: "Overnight PRs = one day lost per question.",
        implication: "Latency, rework, hidden EOR/devices/coordination taxes.",
        useWhen: "Backlog is simple, latency is tolerable, price optics matter.",
        wtfCheck: "How many quarters died waiting for “LGTM”?"
    },
    {
        title: "Nearshore (Legacy)",
        icon: <FileSearch className="h-8 w-8 text-primary" />,
        pain: "Better hours, same vendor theater.",
        implication: "Soft SLAs, resume theater, unmanaged devices.",
        useWhen: "You need overlap but can tolerate weak governance.",
        wtfCheck: "Who can read prod today—and how fast can you revoke it?"
    },
    {
        title: "Nearshore IT Co-Pilot (New-Gen)",
        icon: <Zap className="h-8 w-8 text-primary" />,
        painRemoved: "PR latency, vacancy drag, audit friction, vendor sprawl.",
        mechanism: "Daylight review SLAs, Axiom Cortex™ cognitive vetting, MDM-secured devices, SSO/SAML/SCIM, single SLA.",
        outcome: "Observable cadence, defensible TCO, faster time-to-useful PR.",
        wtfCheck: "If you switched tomorrow, would production even notice?"
    }
];

const microPSPs = [
    {
        problem: "Five invoices, zero ownership.",
        solution: "One governed stack (hiring → devices/MDM → access → EOR → SLAs).",
        proof: "Forecast vs actual variance drops under 10%; fewer reopenings."
    },
    {
        problem: "“Senior” on the slide, junior in the repo.",
        solution: "Axiom Cortex™ cognitive evidence + structured rubrics.",
        proof: "Mismatch rate ≤10%; rewrite ADRs trend down."
    },
    {
        problem: "Audit freeze and unmanaged laptops.",
        solution: "SSO/SAML/SCIM + MDM devices + revocation on demand.",
        proof: "Zero criticals in quarterly scans; questionnaires stop blocking deals."
    }
]


export default async function NearshoreVsOffshorePage() {
  return (
    <main className="container max-w-7xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>Nearshore vs. Offshore</span>
      </div>

       <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Fire offshore & legacy nearshore—run an IT Co-Pilot in daylight.</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Evidence, not theater. Day-one security, daylight shipping.
          </p>
      </header>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Compare the Five Paths to Scaling Your Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 items-stretch">
            {options.map((option, index) => (
                <div key={option.title} className={`rounded-lg border p-4 flex flex-col shadow-lg ${index === 4 ? 'bg-primary/10 border-primary' : 'bg-card'}`}>
                    <div className="flex items-start gap-3">
                        {option.icon}
                        <h3 className={`font-bold ${index === 4 ? 'text-primary' : 'text-foreground'}`}>{option.title}</h3>
                    </div>
                    {option.pain && <p className="text-xs mt-2"><strong className="text-destructive">Pain:</strong> <span className="text-muted-foreground">{option.pain}</span></p>}
                    {option.implication && <p className="text-xs mt-1"><strong className="text-foreground">Implication:</strong> <span className="text-muted-foreground">{option.implication.replace('TTO', '').replace('EOR', '')}
                     {option.implication.includes("TTO") && <Tooltip text="Time to Offer">TTO</Tooltip>}
                     {option.implication.includes("EOR") && <Tooltip text="Employer of Record">EOR</Tooltip>}
                    </span></p>}
                    {option.useWhen && <p className="text-xs mt-1"><strong className="text-foreground">Use when:</strong> <span className="text-muted-foreground">{option.useWhen}</span></p>}

                    {option.painRemoved && <p className="text-xs mt-2"><strong className="text-green-500">Pain removed:</strong> <span className="text-muted-foreground">{option.painRemoved}</span></p>}
                    {option.mechanism && <p className="text-xs mt-1"><strong className="text-foreground">Mechanism:</strong> <span className="text-muted-foreground">{option.mechanism.replace('Axiom Cortex™', '').replace('MDM', '').replace('TCO', '')}
                        <Link href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline"><Tooltip text="Our proprietary Cognitive AI engine for talent evaluation.">Axiom Cortex™</Tooltip></Link>
                        &nbsp;cognitive vetting,&nbsp;
                        <Tooltip text="Mobile Device Management">MDM</Tooltip>-secured devices, SSO/SAML/SCIM, single SLA.
                    </span></p>}
                    {option.outcome && <p className="text-xs mt-1"><strong className="text-foreground">Outcome:</strong> <span className="text-muted-foreground">{option.outcome.replace('TCO', '')}
                         <Link href="/playbook/latam-economics" className="text-primary hover:underline"><Tooltip text="Total Cost of Ownership">TCO</Tooltip></Link>
                         , faster time-to-useful PR.
                    </span></p>}
                    
                    <div className="flex-grow"></div>
                    <p className="text-xs mt-4 pt-2 border-t border-border italic text-primary/80">"{option.wtfCheck}"</p>
                </div>
            ))}
        </div>
      </section>

      <ComparisonWidget />
      
      <section className="my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microPSPs.map((psp) => (
                <div key={psp.problem} className="rounded-lg border bg-card p-6 flex flex-col text-center shadow-lg">
                    <p className="font-semibold text-destructive">Problem: {psp.problem}</p>
                    <p className="mt-2 text-sm text-foreground flex-grow"><strong className="text-primary">Solution:</strong> {psp.solution.replace('Axiom Cortex™', '').replace('MDM', '').replace('EOR', '')}
                        {psp.solution.includes('Axiom Cortex') && <Link href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline"><Tooltip text="Our proprietary Cognitive AI engine for talent evaluation.">Axiom Cortex™</Tooltip></Link>}
                        {psp.solution.includes('MDM') && <Tooltip text="Mobile Device Management">MDM</Tooltip>}
                        {psp.solution.includes('EOR') && <Tooltip text="Employer of Record">EOR</Tooltip>}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {psp.proof}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

       <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
            <h2 className="text-2xl font-bold">Ready to Run the Deltas?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                This isn't a sales pitch. It's a strategic consultation to build your CFO-ready business case. Let's discuss how our nearshore talent and integrated platform can accelerate your roadmap.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Compare the Five Paths (Numbers, Not Fluff) <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
        </div>
    </main>
  );
}
