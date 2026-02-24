import Link from 'next/link';
import { ArrowRight, ShieldCheck, Briefcase, ExternalLink, Network, Users, CheckCircle2, AlertTriangle, Wallet, Lock, Gauge, Handshake, FileCheck2, Laptop } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '../../components/ui/button';
import ValuePropositionBlock from '../../components/seo/ValuePropositionBlock';
import FurtherReading from '../../components/seo/FurtherReading';
import { JsonLd } from '../../components/seo/JsonLd';
import SectionNav from '../../components/client/SectionNav';
import { RevealBlock, RevealSection, StaggerGrid, StaggerItem } from '../../components/motion/MotionPrimitives';
import {
  ExecutivePageFrame,
  ExecutivePanel,
  ExecutiveSection,
  SectionHeading,
  ChecklistSteps,
  ProofStrip,
  FAQList,
} from '../../components/ui/executive-primitives';

type VendorLink = {
  name: string;
  href: string;
  website: string;
  positioning: string;
};

type ModelCard = {
  id: string;
  name: string;
  icon: React.ReactNode;
  pain: string;
  whyItFails: string[];
  hiddenRisks: string[];
  whatToValidate: string[];
  vendors: VendorLink[];
  prescription: string;
};

export const metadata: Metadata = {
  title: 'Nearshore Vendor Comparisons | TeamStation AI',
  description:
    'Compare nearshore vendor models by execution, governance, and TCO. Diagnose failure modes and choose the right operating model for your team.',
};

const models: ModelCard[] = [
  {
    id: 'body-shop',
    name: 'Body Shop Model',
    icon: <Users className="h-6 w-6 text-primary" />,
    pain: 'You get seat fill quickly, but delivery confidence gets worse after onboarding.',
    whyItFails: [
      'Volume placement incentives often outrun technical signal quality.',
      'Engineering accountability stays fragmented across multiple parties.',
      'Low hourly rate looks good early but rework and management drag compound later.',
    ],
    hiddenRisks: ['Quality', 'Continuity', 'Governance', 'Cost of delay'],
    whatToValidate: [
      'Execution control: who sets and enforces code review and architecture standards.',
      'Operational coverage: how onboarding, device control, and access governance are handled.',
      'Economic reality: how rework, delays, and management overhead are reflected in TCO.',
    ],
    vendors: [
      { name: 'BairesDev', href: '/comparisons/bairesdev', website: 'https://www.bairesdev.com/', positioning: 'High-volume nearshore staffing and managed pods' },
      { name: 'Nearsure', href: '/comparisons/nearsure', website: 'https://nearsure.com/', positioning: 'Nearshore staffing and team augmentation' },
      { name: 'Unosquare', href: '/comparisons/unosquare', website: 'https://www.unosquare.com/', positioning: 'Delivery teams and engineering services' },
      { name: 'KMS', href: '/comparisons/kms', website: 'https://kms-technology.com/', positioning: 'Engineering outsourcing and software delivery' },
      { name: 'Devlane', href: '/comparisons/devlane', website: 'https://devlane.com/', positioning: 'Nearshore talent and embedded engineering teams' },
    ],
    prescription:
      "Use a governed operating model with <a href='/technical-interview-evaluation' class='text-primary hover:underline'>cognitive technical evaluation</a>, explicit execution standards, and a measurable <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO decision model</a> before scaling headcount.",
  },
  {
    id: 'freelance-network',
    name: 'Freelance Network Model',
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    pain: 'You can find strong individuals, but system reliability and continuity are hard to govern.',
    whyItFails: [
      'Individual excellence does not automatically create team operating rhythm.',
      'Continuity risk increases when key contributors roll off midstream.',
      'Security and governance burden usually stays with your internal leadership team.',
    ],
    hiddenRisks: ['Continuity', 'Security', 'Governance', 'Coordination'],
    whatToValidate: [
      'Execution control: how decisions and standards persist across contractor changes.',
      'Operational coverage: who owns access revocation, device policy, and compliance evidence.',
      'Economic reality: total leadership overhead to coordinate independent contributors.',
    ],
    vendors: [
      { name: 'Toptal', href: '/comparisons/toptal', website: 'https://www.toptal.com/', positioning: 'Premium freelance and independent contractor network' },
      { name: 'Andela', href: '/comparisons/andela', website: 'https://www.andela.com/', positioning: 'Global technical talent marketplace and matching' },
    ],
    prescription:
      'Use dedicated teams with stable ownership, documented operating rules, and integrated governance so delivery quality does not depend on individual heroics.',
  },
  {
    id: 'systems-integrator',
    name: 'Systems Integrator Model',
    icon: <Network className="h-6 w-6 text-primary" />,
    pain: 'You need embedded engineering capacity, but the model is built for outsourced project control.',
    whyItFails: [
      'SI delivery models can reduce direct control over architecture and team culture.',
      'Longer governance chains slow decision cycles for product teams.',
      'Scope expansion and dependency complexity can increase planning variance.',
    ],
    hiddenRisks: ['Governance', 'Control drift', 'Cost', 'Speed'],
    whatToValidate: [
      'Execution control: whether your team still owns architecture and release decisions.',
      'Operational coverage: where accountability sits for incidents and security controls.',
      'Economic reality: how scope growth and coordination load affect total cost.',
    ],
    vendors: [
      { name: 'Globant', href: '/comparisons/globant', website: 'https://www.globant.com/', positioning: 'Large scale SI and digital transformation services' },
    ],
    prescription:
      'Use an embedded model designed for CTO control, where your roadmap, rituals, and engineering standards remain the governing system.',
  },
  {
    id: 'eor-plus',
    name: 'EOR Plus Model',
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    pain: 'Payroll gets solved, but your team still carries hidden IT, security, and operational burden.',
    whyItFails: [
      'Payroll and hiring support often stop short of operational controls that executives need.',
      'Device management, insurance, and compliance execution can remain fragmented.',
      'Your internal leaders inherit risk management work they thought they outsourced.',
    ],
    hiddenRisks: ['Security', 'Compliance', 'Governance', 'Cost of delay'],
    whatToValidate: [
      'Execution control: who governs onboarding readiness and access controls in practice.',
      'Operational coverage: whether devices, MDM, and compliance workflows are bundled and accountable.',
      'Economic reality: hidden internal effort required to close operational gaps.',
    ],
    vendors: [
      { name: 'Terminal', href: '/comparisons/terminal', website: 'https://terminal.io/', positioning: 'Nearshore hiring plus employer infrastructure' },
      { name: 'Deel', href: '/comparisons/deel', website: 'https://www.deel.com/', positioning: 'Global payroll, EOR, and workforce ops platform' },
      { name: 'Revelo', href: '/comparisons/revelo', website: 'https://www.revelo.com/', positioning: 'LATAM hiring and employer of record services' },
      { name: 'ParallelStaff', href: '/comparisons/parallelstaff', website: 'https://www.parallelstaff.com/', positioning: 'Nearshore staff augmentation services' },
      { name: 'TECLA', href: '/comparisons/tecla', website: 'https://www.tecla.io/', positioning: 'LATAM talent recruiting and staff augmentation' },
      { name: 'Howdy', href: '/comparisons/howdy', website: 'https://www.howdy.com/', positioning: 'Nearshore hiring with managed people ops support' },
      { name: 'CodersLink', href: '/comparisons/coderslink', website: 'https://coderslink.com/', positioning: 'Nearshore recruiting and embedded talent matching' },
    ],
    prescription:
      "Use one accountable operating layer that bundles run state services, onboarding controls, and delivery governance with a clear SLA and escalation path.",
  },
];

const checklistSteps = [
  {
    title: 'Identify the failure pattern',
    body: 'Name the real executive problem first such as review latency, vendor sprawl, compliance exposure, or budget uncertainty.',
  },
  {
    title: 'Evaluate the operating model',
    body: 'Compare execution control, operational coverage, and economic reality before comparing recruiting claims or rate cards.',
  },
  {
    title: 'Validate with evidence',
    body: 'Use quantified outcomes, TCO logic, and case proof before commitment. Then align next steps in a strategy discussion.',
  },
];

const proofStrip = [
  { label: 'Compliance', value: 'Audit ready compliance', note: 'Governance and operational controls built into the delivery system' },
  { label: 'Vetting', value: 'Cognitive vetting with Axiom Cortex', note: 'Signal quality before headcount expansion' },
  { label: 'Economics', value: 'Predictable TCO model', note: 'Delivery cost logic that executives can validate' },
];

const timelineSteps = [
  { title: 'Discovery', body: 'Diagnose failure mode, delivery constraints, and executive decision criteria.' },
  { title: 'Fit', body: 'Match operating model to execution needs, governance requirements, and budget reality.' },
  { title: 'Commitment', body: 'Define ownership, controls, onboarding readiness, and measurable success criteria.' },
  { title: 'Validation', body: 'Review proof signals: cycle time, control coverage, and economic performance vs plan.' },
];

const riskControls = [
  {
    title: 'Failure pattern to corrective action',
    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
    items: [
      ['Slow review loops', 'Enforce same day review cadence and explicit ownership'],
      ['Vendor sprawl', 'Consolidate accountability with one governed operating model'],
      ['Rate driven decisions', 'Use TCO and cost of delay modeling before approval'],
    ],
  },
  {
    title: 'Risk and controls',
    icon: <Lock className="h-5 w-5 text-primary" />,
    items: [
      ['Access risk', 'Device policy, MDM, and access revocation workflow'],
      ['Continuity risk', 'Stable team ownership and documented handoff rules'],
      ['Governance drift', 'Escalation path plus decision records and review rhythm'],
    ],
  },
  {
    title: 'Validation artifacts',
    icon: <FileCheck2 className="h-5 w-5 text-primary" />,
    items: [
      ['Execution control', 'Decision record and escalation path'],
      ['Operational coverage', 'Onboarding checklist and control ownership map'],
      ['Economic reality', 'TCO worksheet with vacancy and rework assumptions'],
    ],
  },
];

const comparisonFaq = [
  {
    q: 'How should a CTO compare vendors when everyone claims senior engineers?',
    a: 'Compare the operating model before the talent claim. Ask who owns technical standards, how delivery is governed, which controls are included, and how outcomes are measured after onboarding.',
  },
  {
    q: 'Why is hourly rate not enough for executive decision making?',
    a: 'Hourly rate hides the cost of delays, rework, leadership coordination, vacancies, and control gaps. Total delivery cost is what affects roadmap confidence and budget performance.',
  },
  {
    q: 'What should we do if we are not sure which vendor model fits?',
    a: 'Start with a short strategy discussion to diagnose the failure mode first. Once the failure pattern is clear, the right comparison path becomes much easier to validate.',
  },
];

const sectionItems = [
  { id: 'models', label: 'Models' },
  { id: 'validation-matrix', label: 'Validation Matrix' },
  { id: 'proof', label: 'Evidence' },
  { id: 'related-paths', label: 'Related Playbooks' },
  { id: 'faq', label: 'FAQ' },
];

const comparisonSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cto.teamstation.dev' },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://cto.teamstation.dev/comparisons' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comparisonFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Nearshore Engineering Vendor Comparison and Delivery Risk Assessment',
    provider: { '@type': 'Organization', name: 'TeamStation AI', url: 'https://cto.teamstation.dev' },
    areaServed: 'United States',
    serviceType: 'CTO decision support and distributed engineering operating model advisory',
    url: 'https://cto.teamstation.dev/comparisons',
  },
];

function VendorChip({ vendor }: { vendor: VendorLink }) {
  const initials = vendor.name
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-lg border border-primary/15 bg-primary/5 p-3">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Link href={vendor.href} className="truncate text-sm font-semibold text-primary hover:underline">
              {vendor.name}
            </Link>
            <a
              href={vendor.website}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="shrink-0 text-primary/70 hover:text-primary"
              aria-label={`Open ${vendor.name} website`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{vendor.positioning}</p>
        </div>
      </div>
    </div>
  );
}

export default function ComparisonsPage() {
  return (
    <main className="py-12">
      <JsonLd data={comparisonSchemas} />
      <ExecutivePageFrame>
        <div className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link> / <span>Comparisons</span>
        </div>

        <RevealBlock>
          <ExecutivePanel as="header" className="hero-depth system-grid">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Decision Interface for CTO and CIO Buyers</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Choose the right nearshore operating model by diagnosing failure modes first
              </h1>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
                Most vendor comparisons focus on rate cards and headcount. Executive teams need a stronger filter.
                This hub helps you evaluate the model underneath the pitch so you can protect delivery speed,
                governance, and budget performance before committing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq">
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#models">See vendor comparisons</a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/playbook/tco-model">View TCO model</Link>
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {proofStrip.map((item) => (
                  <div key={item.label} className="rounded-lg border border-primary/15 bg-primary/5 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground leading-5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass-panel gradient-ring rounded-xl p-5">
              <p className="text-sm font-semibold text-primary">Trust surface for US executive teams</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />High level compliance and governance posture built into the operating model</li>
                <li className="flex items-start gap-2"><Laptop className="mt-0.5 h-4 w-4 text-primary" />Device control, onboarding readiness, and operational accountability are part of the system</li>
                <li className="flex items-start gap-2"><Gauge className="mt-0.5 h-4 w-4 text-primary" />Delivery speed and cost discussions are tied to measurable outcomes</li>
                <li className="flex items-start gap-2"><Handshake className="mt-0.5 h-4 w-4 text-primary" />Strategy discussion is fit first. If there is no measurable fit, we say so</li>
              </ul>
              <div className="mt-5 border-t border-white/10 pt-4 text-sm">
                <p className="font-semibold text-foreground">Decision object</p>
                <p className="mt-1 text-muted-foreground">Select the vendor model that improves execution control without adding hidden operational burden.</p>
              </div>
            </aside>
          </div>
          </ExecutivePanel>
        </RevealBlock>

        <div className="mt-6">
          <SectionNav
            items={sectionItems}
            cta={
              <Button asChild>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq">
                  Book a Call
                </a>
              </Button>
            }
          />
        </div>

        <RevealSection>
        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="How to use this comparison page"
              description="Use this hub as a decision interface, not a document. Move from failure pattern to model fit to validation proof."
            />
            <ChecklistSteps items={checklistSteps} className="mt-6" />
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection id="proof" className="scroll-mt-28">
          <ExecutivePanel>
            <SectionHeading
              title="Evidence and quantified outcomes"
              description="Quantified claims should always include what is in scope, where to validate, and what executive teams should request in review."
            />
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
              <div className="glass-card-interactive gradient-ring rounded-xl border border-border/70 bg-background/70 p-5">
                <div className="flex items-start gap-3">
                  <Wallet className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">40 to 60 percent lower TCO in many legacy replacement scenarios</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Includes delivery overhead factors that executives actually manage, such as vacancy time, coordination drag,
                      rework exposure, and governance burden. This is not a rate card comparison only.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link href="/playbook/tco-model" className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4 transition-ui hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <p className="text-sm font-semibold text-foreground">Open TCO model</p>
                    <p className="mt-1 text-xs text-muted-foreground">Inspect cost logic and scenario assumptions</p>
                  </Link>
                  <Link href="/case-studies" className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4 transition-ui hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <p className="text-sm font-semibold text-foreground">Review case studies</p>
                    <p className="mt-1 text-xs text-muted-foreground">See operational outcomes and implementation context</p>
                  </Link>
                </div>
              </div>
              <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/70 p-5">
                <p className="text-sm font-semibold text-primary">How to validate the claim</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />Ask what cost categories are included beyond hourly rate</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />Review vacancy assumptions and onboarding lag</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />Validate rework and coordination cost assumptions</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />Compare against internal management burden and control gaps</li>
                </ul>
              </div>
            </div>
            <ProofStrip items={proofStrip} className="mt-6" />
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection id="models" className="scroll-mt-28">
          <SectionHeading
            title="Vendor model comparison cards"
            description="Each card follows the same structure so you can compare operating models quickly without losing technical depth."
          />
          <StaggerGrid className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {models.map((model) => (
              <StaggerItem key={model.id}>
              <article className="surface-card glass-panel gradient-ring card-hover-lift flex h-full flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Operating risk</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{model.pain}</p>
                  </div>
                  <div className="shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-2">
                    {model.icon}
                  </div>
                </div>

                <h2 className="mt-4 text-xl font-bold text-foreground">{model.name}</h2>

                <div className="mt-4 rounded-lg border border-border/70 bg-background/70 p-4">
                  <h3 className="text-sm font-semibold text-primary">Why it fails</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
                    {model.whyItFails.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border border-border/70 bg-background/70 p-4">
                  <h3 className="text-sm font-semibold text-primary">Hidden risks</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {model.hiddenRisks.map((risk) => (
                      <span key={risk} className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {risk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-border/70 bg-background/70 p-4">
                  <h3 className="text-sm font-semibold text-primary">What to validate</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
                    {model.whatToValidate.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border border-border/70 bg-background/70 p-4">
                  <h3 className="text-sm font-semibold text-primary">Comparison routes</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {model.vendors.map((vendor) => (
                      <VendorChip key={vendor.href} vendor={vendor} />
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-border/70 bg-background/70 p-4">
                  <h3 className="text-sm font-semibold text-primary">TeamStation prescription</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground" dangerouslySetInnerHTML={{ __html: model.prescription }} />
                </div>

                <div className="mt-5 border-t border-border/50 pt-4">
                  <Link href={model.vendors[0]?.href ?? '/comparisons'} className="inline-flex items-center text-sm font-semibold text-primary">
                    Open comparison path <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection id="validation-matrix" className="scroll-mt-28">
          <ExecutivePanel>
            <SectionHeading
              title="Validation matrix for CTO and CIO vendor review"
              description="This matrix is the spine of the page. Each row is a testable question and a concrete artifact you can request before commitment."
            />
            <div className="mt-6 overflow-x-auto rounded-lg border border-border/70 bg-background/60">
              <table className="w-full min-w-[920px] border-collapse text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">Decision Dimension</th>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">Testable Question</th>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">Example Metric or Artifact</th>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      d: 'Execution Control',
                      q: 'Who owns architecture decisions and how are escalations handled during delivery failure?',
                      a: 'Decision record and escalation path with named owner',
                      m: 'Protects delivery speed and accountability when pressure increases',
                    },
                    {
                      d: 'Operational Coverage',
                      q: 'Do they provide devices, MDM, and onboarding governance as part of the model?',
                      a: 'Device policy and onboarding checklist with control ownership',
                      m: 'Prevents hidden IT burden and security risk from shifting to your internal team',
                    },
                    {
                      d: 'Economic Reality',
                      q: 'What is the real TCO once vacancy, rework, and coordination cost are included?',
                      a: 'TCO worksheet including vacancy time, rework, and coordination assumptions',
                      m: 'Aligns finance approval with real delivery outcomes instead of rate optics',
                    },
                  ].map((row) => (
                    <tr key={row.d} className="align-top">
                      <td className="border-b px-4 py-3 font-semibold text-primary">{row.d}</td>
                      <td className="border-b px-4 py-3 leading-6 text-muted-foreground">{row.q}</td>
                      <td className="border-b px-4 py-3 leading-6 text-muted-foreground">{row.a}</td>
                      <td className="border-b px-4 py-3 leading-6 text-muted-foreground">{row.m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="Decision sequence and risk controls"
              description="Replace long explanatory prose with a clear sequence and concrete controls your team can apply in procurement and technical review." 
            />
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
              <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/70 p-5">
                <h3 className="text-sm font-semibold text-primary">Decision sequence timeline</h3>
                <ol className="mt-4 space-y-4">
                  {timelineSteps.map((step, idx) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex w-8 shrink-0 flex-col items-center">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
                          {idx + 1}
                        </div>
                        {idx < timelineSteps.length - 1 ? <div className="mt-2 h-full w-px bg-border" /> : null}
                      </div>
                      <div className="pb-2">
                        <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-4">
                {riskControls.map((block) => (
                  <section key={block.title} className="glass-card-interactive rounded-xl border border-border/70 bg-background/70 p-5">
                    <div className="flex items-center gap-2">
                      {block.icon}
                      <h3 className="text-sm font-semibold text-foreground">{block.title}</h3>
                    </div>
                    <div className="mt-3 space-y-2">
                      {block.items.map(([left, right]) => (
                        <div key={left} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-3 rounded-lg border border-border/70 bg-background/60 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{left}</p>
                          <p className="text-xs leading-5 text-muted-foreground">{right}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <ExecutiveSection>
          <ValuePropositionBlock
            pain="CTOs face hidden risks in cost, compliance, and velocity."
            stakes="Without addressing these, budgets spiral and projects miss critical deadlines."
            prescription="TeamStation AI delivers audit-ready compliance, Axiom Cortex cognitive vetting, and a predictable TCO decision model."
            proof="40 to 60 percent lower TCO vs legacy models. Case studies: [Currance](/case-studies), [Parsable](/case-studies/parsable)."
            ctaHref="/comparisons"
            ctaText="See All Vendor Comparisons"
          />
        </ExecutiveSection>

        <RevealSection>
        <ExecutiveSection id="related-paths" className="scroll-mt-28">
          <ExecutivePanel>
            <SectionHeading
              title="Related playbooks and validation paths"
              description="Use these pages to move from comparison to budget approval, technical validation, and operating model design."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { href: '/playbook/hub', title: 'CTO Playbook Hub', body: 'Decision frameworks for distributed engineering operating models.' },
                { href: '/playbook/latam-economics', title: 'LATAM Economics', body: 'Economic structure for nearshore planning and executive reviews.' },
                { href: '/playbook/tco-model', title: 'TCO Model', body: 'Quantified cost logic for approval and vendor comparison.' },
                { href: '/research/hub', title: 'Research Hub', body: 'Evidence and methodology paths for validation and governance.' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4 transition-ui hover:border-primary/40 hover:text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                    Open path <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection>
          <ExecutivePanel>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Strategy discussion</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">Diagnose delivery risk before you choose a vendor</h2>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                  If the core issue is unclear, comparisons become noisy. A short strategy discussion helps identify the real constraint first,
                  align the decision object, and define what evidence should be reviewed before commitment.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {['Delivery constraint review', 'Risk and controls gap check', 'Economic model alignment', 'Decision path for next steps'].map((item) => (
                    <div key={item} className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-3 text-sm text-muted-foreground">{item}</div>
                  ))}
                </div>
              </div>
              <div className="glass-panel gradient-ring rounded-xl p-5">
                <p className="text-sm font-semibold text-primary">Fit over selling</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We only engage when there is a measurable delivery fit. If your current operating model is already working, we will tell you directly.
                </p>
                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <p>Includes: failure pattern diagnosis, control review, economic alignment check</p>
                  <p>Outcome: decision clarity on whether to compare, pilot, or stay with current model</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq">
                      Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/playbook/tco-model">View TCO model</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection id="faq" className="scroll-mt-28">
          <ExecutivePanel>
            <SectionHeading
              title="FAQ for executive objections"
              description="Short answers for common comparison objections during leadership, procurement, and technical review conversations."
            />
            <FAQList items={comparisonFaq} className="mt-6" />
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <RevealSection>
        <ExecutiveSection>
          <ExecutivePanel className="p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">Who we are</p>
                <p className="mt-2 text-sm text-muted-foreground">Integrated operating model for distributed engineering teams with accountable SLA ownership.</p>
              </div>
              <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">Control posture</p>
                <p className="mt-2 text-sm text-muted-foreground">Governance, onboarding readiness, and operational controls treated as core delivery inputs.</p>
              </div>
              <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">Evidence paths</p>
                <p className="mt-2 text-sm text-muted-foreground">Playbook, research, TCO model, and case studies connected for executive validation.</p>
              </div>
              <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">Next step</p>
                <p className="mt-2 text-sm text-muted-foreground">Book a strategy call and align the comparison to your actual failure mode.</p>
              </div>
            </div>
          </ExecutivePanel>
        </ExecutiveSection>
        </RevealSection>

        <FurtherReading comparison="bairesdev" />
      </ExecutivePageFrame>
    </main>
  );
}
