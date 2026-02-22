import Link from 'next/link';
import type { Metadata } from 'next';
import { Book, TestTube, Lightbulb, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Research Hub for CTO and CIO Teams | TeamStation AI',
  description:
    'A complete research library for distributed engineering leadership. Use this hub to plan hiring, measure performance, reduce delivery risk, and build a stronger operating model.',
};

type ResearchAsset = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  pain: string;
  proof: string;
  href: string;
};

const researchAssets: ResearchAsset[] = [
  {
    icon: Book,
    title: 'Platforming the Nearshore Industry',
    description: 'The book that explains how to move from vendor chaos to one operating model for delivery.',
    pain: 'Pain: You are managing many vendors and still not getting predictable delivery.',
    proof: 'Proof: The book lays out the economic and operating model in one system.',
    href: '/research/platforming-nearshore-book',
  },
  {
    icon: TestTube,
    title: 'Axiom Cortex Scientific Report',
    description: 'The research foundation behind our cognitive evaluation model for technical talent.',
    pain: 'Pain: Resume screening and interviews miss real problem solving ability.',
    proof: 'Proof: This report shows the cognitive and psychometric method behind the model.',
    href: '/research/axiom-cortex-scientific-report',
  },
  {
    icon: TestTube,
    title: 'Heuristically Trained AI for Technical Evaluation',
    description: 'Research on hybrid evaluation methods that combine model power with domain context.',
    pain: 'Pain: Pure statistical systems miss context and domain nuance.',
    proof: 'Proof: This paper explains why hybrid methods produce stronger decisions.',
    href: '/research/heuristically-trained-ai',
  },
  {
    icon: Lightbulb,
    title: 'Performance Evaluation Framework',
    description: 'A practical model for measuring engineering output quality and reliability over time.',
    pain: 'Pain: Leadership cannot trust output when performance signals are noisy.',
    proof: 'Proof: The framework defines measurable dimensions with direct operating use.',
    href: '/research/performance-evaluation-framework',
  },
  {
    icon: Lightbulb,
    title: 'Performance Metrics in the AI Age',
    description: 'A modern metric model for AI assisted engineering workflows and delivery systems.',
    pain: 'Pain: Old productivity metrics do not describe AI assisted delivery.',
    proof: 'Proof: This paper defines updated metrics aligned to modern engineering work.',
    href: '/research/performance-metrics-in-ai-age',
  },
  {
    icon: Lightbulb,
    title: 'Framework for Measuring Engineering Capacity',
    description: 'Capacity modeling for distributed teams with clearer planning and execution control.',
    pain: 'Pain: Capacity planning breaks when assumptions are not measured.',
    proof: 'Proof: The model maps constraints, effort, and expected throughput in one view.',
    href: '/research/framework-for-measuring-capacity',
  },
  {
    icon: TestTube,
    title: 'Performance Evaluation Report Example',
    description: 'A practical report example that shows how to apply the evaluation framework.',
    pain: 'Pain: Teams struggle to turn framework theory into a live operating report.',
    proof: 'Proof: This example shows real structure and decision output format.',
    href: '/research/performance-evaluation-report-example',
  },
  {
    icon: TestTube,
    title: 'Technical Talent Evaluation System',
    description: 'A deep implementation view of structured technical talent evaluation workflows.',
    pain: 'Pain: Hiring systems are often subjective and inconsistent across interviewers.',
    proof: 'Proof: This page shows a repeatable system with traceable evidence and review flow.',
    href: '/research/technical-talent-evaluation-system',
  },
  {
    icon: TestTube,
    title: 'Axiom Cortex Report Node',
    description: 'Reference node used across the research graph for doctrine and model context.',
    pain: 'Pain: Important model pages get lost without cross linked reference nodes.',
    proof: 'Proof: This node keeps the research graph connected for easier navigation.',
    href: '/research/hub/axiom-cortex-scientific-report',
  },
];

const operatingTracks = [
  {
    title: 'Track 1 Hiring Confidence',
    pain: 'Pain: You do not know if hiring decisions are sound until too late.',
    solution: 'Solution: Start with cognitive model research, then move to implementation detail.',
    links: [
      { href: '/research/axiom-cortex-scientific-report', label: 'Axiom Cortex Scientific Report' },
      { href: '/research/heuristically-trained-ai', label: 'Heuristic AI Evaluation' },
      { href: '/research/technical-talent-evaluation-system', label: 'Talent Evaluation System' },
    ],
  },
  {
    title: 'Track 2 Delivery Performance',
    pain: 'Pain: Delivery performance is discussed but not measured in a reliable way.',
    solution: 'Solution: Use framework first, then metrics model, then report structure.',
    links: [
      { href: '/research/performance-evaluation-framework', label: 'Performance Framework' },
      { href: '/research/performance-metrics-in-ai-age', label: 'AI Age Metrics' },
      { href: '/research/performance-evaluation-report-example', label: 'Report Example' },
    ],
  },
  {
    title: 'Track 3 Operating Model',
    pain: 'Pain: Strategy pages do not always translate into one operating model.',
    solution: 'Solution: Use the book and doctrine to define how teams should run and scale.',
    links: [
      { href: '/research/platforming-nearshore-book', label: 'Platforming Book' },
      { href: '/engineering-doctrine', label: 'Engineering Doctrine' },
      { href: '/playbook/hub', label: 'CTO Playbook Hub' },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who should use this research hub?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This hub is for CTO and CIO teams that need stronger hiring, better delivery measurement, and a more predictable operating model.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best reading order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the operating track that matches your current pain. Use Hiring Confidence for hiring risk, Delivery Performance for execution metrics, or Operating Model for leadership system design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this only theory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The hub includes practical framework pages and a full report example so teams can apply the research in real delivery environments.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cto.teamstation.dev' },
    { '@type': 'ListItem', position: 2, name: 'Research Hub', item: 'https://cto.teamstation.dev/research/hub' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'TeamStation AI Research Hub',
  description:
    'Research library for distributed engineering leadership including hiring, performance measurement, and operating model design.',
  url: 'https://cto.teamstation.dev/research/hub',
};

export default function ResearchHubPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, collectionSchema, faqSchema]} />

      <main className="manual-page container max-w-6xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <span>Research Hub</span>
        </div>

        <header className="glass-panel gradient-ring hero-depth system-grid my-8 rounded-2xl border border-border/70 p-6 md:p-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-foreground">
            Research Hub for Distributed Engineering Leadership
          </h1>
          <p className="mt-5 max-w-4xl text-muted-foreground leading-7">
            This page is the full research index for leadership teams that need stronger hiring decisions,
            better delivery measurement, and a clear operating model. Every section maps pain to method and method to proof.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-background/70 p-4">
              <p className="text-sm font-semibold text-primary">Decision reality</p>
              <p className="mt-1 text-sm text-muted-foreground">Nearshore decisions often rely on opinion instead of evidence.</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/70 p-4">
              <p className="text-sm font-semibold text-primary">Operating response</p>
              <p className="mt-1 text-sm text-muted-foreground">Use this research graph to choose method and action by scenario.</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/70 p-4">
              <p className="text-sm font-semibold text-primary">Validation path</p>
              <p className="mt-1 text-sm text-muted-foreground">Nine connected research assets plus direct playbook and doctrine links.</p>
            </div>
          </div>
        </header>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-foreground">Research Library Index</h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Use this index when you need to inspect the full body of work. Each item includes the core pain and the proof you can use in leadership decisions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {researchAssets.map((asset) => {
              const Icon = asset.icon;
              return (
                <article key={asset.title} className="glass-panel gradient-ring rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full border bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{asset.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{asset.description}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground"><strong className="text-foreground">What this clarifies:</strong> {asset.pain.replace('Pain: ', '')}</p>
                  <p className="mt-1 text-sm text-muted-foreground"><strong className="text-foreground">How to validate:</strong> {asset.proof.replace('Proof: ', '')}</p>

                  <Link href={asset.href} className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    Open research page <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="glass-panel gradient-ring my-16 rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-foreground">Reading Paths by Decision Type</h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Start from the track that matches your current leadership problem. Each track gives a short path from diagnosis to implementation.
          </p>

          <div className="mt-8 space-y-4">
            {operatingTracks.map((track) => (
              <article key={track.title} className="rounded-xl border border-border/70 bg-background/70 p-5">
                <h3 className="text-xl font-semibold text-foreground">{track.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{track.pain.replace('Pain: ', '')}</p>
                <p className="mt-1 text-sm text-muted-foreground">{track.solution.replace('Solution: ', '')}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {track.links.map((l) => (
                    <Link key={l.href} href={l.href} className="rounded-md border px-3 py-2 text-sm text-foreground hover:text-primary hover:border-primary/40">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-panel gradient-ring my-16 rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-foreground">FAQ</h2>
          <div className="mt-6 space-y-4">
            <article className="rounded-xl border border-border/70 bg-background/70 p-4">
              <h3 className="font-semibold text-foreground">What should we read first if hiring is our current risk?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Start with Axiom Cortex Scientific Report, then Heuristic AI Evaluation, then Technical Talent Evaluation System.</p>
            </article>
            <article className="rounded-xl border border-border/70 bg-background/70 p-4">
              <h3 className="font-semibold text-foreground">What should we read first if execution performance is our current risk?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Start with Performance Evaluation Framework, then AI Age Metrics, then the Report Example page.</p>
            </article>
            <article className="rounded-xl border border-border/70 bg-background/70 p-4">
              <h3 className="font-semibold text-foreground">How does this connect to action pages?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Use the links to Engineering Doctrine, CTO Playbook Hub, and Hire routes to move from research to implementation.</p>
            </article>
          </div>
        </section>

        <section className="glass-panel gradient-ring my-16 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Next Step</h2>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground leading-7">
            If you want this turned into a live operating program, start with Team Topologies and the CTO Playbook. The research gives the method. The playbook gives execution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/engineering-doctrine" className="cta-button">Open Engineering Doctrine</Link>
            <Link href="/playbook/hub" className="rounded-md border px-4 py-2 text-sm font-semibold hover:text-primary">Open CTO Playbook Hub</Link>
            <Link href="/hire/by-role" className="rounded-md border px-4 py-2 text-sm font-semibold hover:text-primary">Open Hire by Role</Link>
          </div>
        </section>
      </main>
    </>
  );
}
