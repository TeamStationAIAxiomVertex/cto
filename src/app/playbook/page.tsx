
import Link from 'next/link';
import { ArrowRight, BookOpen, GitCompare, Scale, ShieldCheck, UserCheck, Zap, Layers, TestTube2, Server, Database, BrainCircuit, GanttChartSquare, DollarSign, Users, Clock, AlertTriangle, MessageSquare, Briefcase, GitBranch, Tv, BarChart, FileLock, Users2 } from 'lucide-react';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'The CTO Playbook for Nearshore Software Development | TeamStation AI',
  description: 'A series of battle-tested, data-driven guides for CTOs to de-risk their roadmap, fix delivery velocity, and gain control over their engineering organization.',
};

const crisisScenarios = [
  // Velocity & Delivery
  {
    category: 'Velocity & Delivery',
    pain: 'How many releases did you delay this quarter because someone was asleep?',
    problem: 'Deadlines slip because decisions wait 12–24 hours for replies across time zones.',
    solutionHref: '/playbook/nearshore-vs-offshore',
    solutionLabel: 'Align time zones to accelerate delivery.',
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    category: 'Velocity & Delivery',
    pain: 'How many days did you burn waiting for a ‘LGTM’?',
    problem: 'One question → one day lost. PR reviews stretch for a week, blocking progress.',
    solutionHref: '/process',
    solutionLabel: 'Implement same-day PR review SLAs.',
    icon: <GitCompare className="h-6 w-6 text-primary" />
  },
  {
    category: 'Velocity & Delivery',
    pain: 'How often does a one-line clarification cost you a sprint point?',
    problem: 'Product, Design, and Eng can’t iterate because they don’t have real-time overlap.',
    solutionHref: '/hire/by-team-topologies',
    solutionLabel: 'Build product-aligned squads.',
    icon: <Users className="h-6 w-6 text-primary" />
  },
  // Quality & Architecture
  {
    category: 'Quality & Architecture',
    pain: 'What’s your defect escape rate, and who owns it week to week?',
    problem: 'Defects escape to prod because QA is an afterthought; your team is firefighting instead of building.',
    solutionHref: '/hire/by-role/qa-quality-engineering',
    solutionLabel: 'Embed nearshore SDETs to shift-left.',
    icon: <TestTube2 className="h-6 w-6 text-primary" />
  },
  {
    category: 'Quality & Architecture',
    pain: 'When did a real architect last veto a bad pattern before it shipped?',
    problem: 'Your vendor supplies ‘senior’ engineers who copy-paste code but can’t design scalable systems.',
    solutionHref: '/playbook/bias-free-technical-hiring-axiom-cortex',
    solutionLabel: 'Hire for architectural instinct, not just keywords.',
    icon: <BrainCircuit className="h-6 w-6 text-primary" />
  },
  {
    category: 'Quality & Architecture',
    pain: 'Can you prove your top 5 endpoints meet their SLOs today?',
    problem: 'You have monolith fatigue; no one can safely carve out new domains or standardize APIs without breaking something.',
    solutionHref: '/hire/by-role/platform-infra-sre',
    solutionLabel: 'Deploy a platform team to enforce contracts.',
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  // Security & Compliance
  {
    category: 'Security & Compliance',
    pain: 'Which security control is blocking your biggest sales deal right now?',
    problem: 'Enterprise security questionnaires are stalling revenue because your team can\'t prove compliance.',
    solutionHref: '/trust',
    solutionLabel: 'Get audit-ready with nearshore AppSec.',
    icon: <ShieldCheck className="h-6 w-6 text-primary" />
  },
  {
    category: 'Security & Compliance',
    pain: 'Who can read production data today, and how fast can you revoke it?',
    problem: 'You have secrets in repos, unauditable endpoints, and over-privileged access—a breach waiting to happen.',
    solutionHref: '/trust',
    solutionLabel: 'Enforce least-privilege with vaulted secrets.',
    icon: <FileLock className="h-6 w-6 text-primary" />
  },
  // Communication & Culture
  {
    category: 'Communication & Culture',
    pain: 'How many meetings are damage control for yesterday’s misread Slack thread?',
    problem: 'Night calls, low engagement, and thin notes lead to evaporating decisions and constant rework.',
    solutionHref: '/playbook/nearshore-vs-offshore',
    solutionLabel: 'Replace night calls with daytime collaboration.',
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    category: 'Communication & Culture',
    pain: 'When did a dev last say “this won’t work” early enough to fix it?',
    problem: 'Language nuances and a cultural "yes" create silent failures that surface too late.',
    solutionHref: '/hire/by-country/argentina',
    solutionLabel: 'Hire bilingual leads trained to surface risk.',
    icon: <Users2 className="h-6 w-6 text-primary" />
  },
  // Cost & Transparency
  {
    category: 'Cost & Transparency',
    pain: 'Can you predict next month’s engineering spend within 10%?',
    problem: 'Your invoices are a surprise every month due to spiked hours, shadow staffing, and unclear roles.',
    solutionHref: '/playbook/latam-economics',
    solutionLabel: 'Get cost-predictability with transparent TCO.',
    icon: <Scale className="h-6 w-6 text-primary" />
  },
  {
    category: 'Cost & Transparency',
    pain: 'What’s your vendor’s staffed-as-sold percentage?',
    problem: 'You were promised senior engineers in the sales pitch, but juniors showed up to do the work.',
    solutionHref: '/playbook/bias-free-technical-hiring-axiom-cortex',
    solutionLabel: 'End bait-and-switch with evidence-based vetting.',
    icon: <UserCheck className="h-6 w-6 text-primary" />
  },
  // People & Retention
  {
    category: 'People & Retention',
    pain: 'How many ‘new intros’ did your squad do this month?',
    problem: 'Constant team churn from your vendor resets context and creates velocity whiplash.',
    solutionHref: '/process',
    solutionLabel: 'Improve retention with nearshore career ladders.',
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    category: 'People & Retention',
    pain: 'Are your best engineers one more midnight deploy away from quitting?',
    problem: 'Offshore devs are burning out on night shifts; quality is dropping and attrition is rising.',
    solutionHref: '/playbook/nearshore-vs-offshore',
    solutionLabel: 'Create sustainable on-call rotations.',
    icon: <AlertTriangle className="h-6 w-6 text-primary" />
  },
  // Process & Tooling
  {
    category: 'Process & Tooling',
    pain: 'When did you last ship on a Friday—on purpose?',
    problem: 'Your team relies on manual deploys, and every release is filled with fear and uncertainty.',
    solutionHref: '/hire/by-role/platform-infra-sre',
    solutionLabel: 'Build a CI/CD spine with a nearshore platform team.',
    icon: <GitBranch className="h-6 w-6 text-primary" />
  },
  {
    category: 'Process & Tooling',
    pain: 'How many bugs could have been caught if tests ran before merge?',
    problem: 'Testing happens at the end of the cycle, meaning bugs are already baked into the product.',
    solutionHref: '/hire/by-role/qa-quality-engineering',
    solutionLabel: 'Shift-left with contract tests and smoke suites.',
    icon: <TestTube2 className="h-6 w-6 text-primary" />
  },
  // Data & ML
  {
    category: 'Data & ML',
    pain: 'Which KPI would you bet your bonus on today?',
    problem: 'You can’t trust your analytics. Dashboards are broken, metrics are undefined, and events are stale.',
    solutionHref: '/hire/by-role/data-engineering-analytics',
    solutionLabel: 'Build data trust with analytics engineers.',
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data & ML',
    pain: 'What’s your measured answer quality, not just a demo?',
    problem: 'Your LLM is hallucinating because your RAG system is grafted onto bad data and slow infrastructure.',
    solutionHref: '/hire/by-role/ml-ai-llm-ops',
    solutionLabel: 'Curb hallucinations with nearshore LLMOps.',
    icon: <BrainCircuit className="h-6 w-6 text-primary" />
  },
  // Executive Pressure
  {
    category: 'Executive Pressure',
    pain: 'Do you have a board slide that explains speed without excuses?',
    problem: 'The board is asking "Why is engineering so slow?" and your velocity narrative is mush.',
    solutionHref: '/research/performance-evaluation-framework',
    solutionLabel: 'Report on DORA metrics, not just story points.',
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    category: 'Executive Pressure',
    pain: 'Who’s keyboard-ready when your largest customer calls at 10am ET?',
    problem: 'A critical incident hits during U.S. business hours, and there\'s no one awake to fix it.',
    solutionHref: '/hire/by-role/platform-infra-sre',
    solutionLabel: 'Establish nearshore incident response.',
    icon: <Server className="h-6 w-6 text-primary" />
  },
  // Switching Vendors
  {
    category: 'Switching Vendors',
    pain: 'How long would it take to fire your vendor without breaking prod?',
    problem: 'You\'re trapped by rigid SOWs and vendor lock-in, unable to right-size your team.',
    solutionHref: '/process',
    solutionLabel: 'Switch vendors smoothly with transfer SLAs.',
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    category: 'Switching Vendors',
    pain: 'Can you audit how each engineer was vetted?',
    problem: 'Your vendor’s hiring process is a black box that results in surprise junior talent.',
    solutionHref: '/playbook/bias-free-technical-hiring-axiom-cortex',
    solutionLabel: 'Demand a transparent hiring pipeline.',
    icon: <FileSearch className="h-6 w-6 text-primary" />
  },
  {
    category: 'Switching Vendors',
    pain: 'How fast can a new team land a non-trivial PR?',
    problem: 'Your current vendor can’t adopt your tooling, rituals, and release cadence.',
    solutionHref: '/process',
    solutionLabel: 'Integrate new teams into your SDLC in days.',
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    category: 'Switching Vendors',
    pain: 'When did your team last whiteboard together without jet lag?',
    problem: 'Coaching, discovery, and strategic alignment are suffering over endless Zoom calls.',
    solutionHref: '/hire/by-country',
    solutionLabel: 'Enable same-week onsite travel.',
    icon: <Tv className="h-6 w-6 text-primary" />
  }
];

// Get unique categories for grouping
const categories = [...new Set(crisisScenarios.map(s => s.category))];

export default async function PlaybookHub() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>CTO Playbook</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The CTO Crisis Playbook</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because something isn't working. The 12-hour lag with your offshore team is a daily tax on velocity. Your current nearshore vendor delivers junior-level quality at senior-level rates. Your CFO is asking why engineering—the most expensive part of the budget—is also the most unpredictable. You're not just looking for another vendor; you're looking for a new, more controllable operating model. This is the data-driven guide to help you build it.
        </p>
      </header>

      {categories.map(category => (
        <section key={category} className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crisisScenarios.filter(s => s.category === category).map(scenario => (
              <div key={scenario.pain} className="group flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex items-start gap-3">
                  {scenario.icon}
                  <div>
                    <p className="text-sm font-semibold text-primary">{scenario.pain}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground flex-grow">{scenario.problem}</p>
                <div className="mt-4">
                  <Link href={scenario.solutionHref} className="flex items-center text-sm font-semibold text-primary stretched-link">
                    Solution: {scenario.solutionLabel} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

    </main>
  );
}
