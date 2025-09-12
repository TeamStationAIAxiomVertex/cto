import Tooltip from '@/components/Tooltip';
import {
  AlertTriangle,
  Clock,
  Languages,
  Plane,
  ShieldCheck,
  Shuffle,
  Users,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';

export default function NearshoreVsOffshorePage() {
  const failureModes = [
    {
      icon: <Shuffle size={24} className="text-amber-400" />,
      title: 'The Pain of Vendor Churn',
      description:
        'Does your offshore partner rotate engineers, causing constant knowledge loss and forcing your team to re-train them? This churn is a hidden tax on your budget and timeline.',
    },
    {
      icon: <AlertTriangle size={24} className="text-red-400" />,
      title: 'The Pain of "Vendor Fog"',
      description:
        'Can you get a straight answer on project status, or is it lost in a fog of vague updates and delayed reports? A lack of direct access to source control, CI/CD, and telemetry is a red flag.',
    },
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: 'The Pain of Productivity Mismatch',
      description:
        "Do lower hourly rates actually translate to lower costs per feature, or is velocity half of what you expect? Ineffective collaboration can burn through your budget with nothing to show for it.",
    },
  ];

  const faqs = [
    {
      title: 'Is nearshore always more expensive on paper?',
      description:
        'It can appear that way if you only look at the hourly rate. But what\'s the cost of a delayed launch or a critical bug that slips through because of a 12-hour communication lag? Total Cost of Ownership—including management overhead and rework—is often lower with a nearshore team.',
    },
    {
      title: 'How do you tell a good partner from a bad one?',
      description: (
        <>
          Ask for proof, not promises. Can they provide evidence of their security posture (MDM, SSO)? Do they have a repeatable, science-based hiring process (like our{' '}
          <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex research</Link>)? Will you be working with a dedicated, long-term team? The answers reveal their true capability.
        </>
      ),
    },
  ];

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>Nearshore vs. Offshore</span>
      </div>
      
      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Is Your Offshore Team a Strategic Asset or a Hidden Drain?</h1>
        <p className="mt-4 text-lg text-muted-foreground">
           As a CTO, you're judged on outcomes, not hours billed. Let's move beyond "cost per hour" and use a framework to diagnose the true cost—and risk—of your global talent strategy.
        </p>
      </header>

      <article className="prose dark:prose-invert max-w-none">
        <h2>The Core Diagnosis: Latency, Fidelity, and Control</h2>
        <p>
          The choice between a nearshore or offshore model isn't just about budget; it's a strategic bet on how you plan to build, innovate, and compete. While offshore teams in distant time zones might seem cheaper on a spreadsheet, the{' '}
          <Tooltip text="Total Cost of Ownership: The sum of all direct and indirect costs, including rework, management overhead, and communication friction.">
            TCO
          </Tooltip>{' '}
          often skyrockets due to hidden friction. See our deep-dive on <Link href="/playbook/latam-economics">LATAM Economics</Link> for a full model.
        </p>
        <p>
          The core issue is latency. Not network latency, but human latency. Waiting 12 hours for a simple answer to unblock your team is a silent killer of velocity. Nearshore teams, typically in{' '}
          <Tooltip text="Latin America: A region with significant time-zone overlap with the U.S., enabling real-time collaboration.">
            LATAM
          </Tooltip>
          , eliminate this bottleneck. That real-time overlap is the single biggest lever you have to reclaim lost productivity.
        </p>
        
        <h2>Decision Framework: A Tool for Diagnosing Your Risk</h2>
      </article>
      
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Factor</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Nearshore (e.g., TeamStation AI)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Offshore (e.g., Southeast Asia)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-4 flex items-center gap-2 font-medium text-foreground"><Clock size={16} /> Time-Zone Overlap</td>
              <td className='px-4 py-4 text-primary font-semibold'>High (4-8 hours). Enables real-time pairing and problem-solving.</td>
              <td className="px-4 py-4 text-muted-foreground">Low (0-2 hours). Forces asynchronous handoffs and late-night calls.</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 flex items-center gap-2 font-medium text-foreground"><Users size={16} /> Collaboration Fidelity</td>
              <td className='px-4 py-4 text-primary font-semibold'>High. Ad-hoc conversations are possible, leading to faster feedback.</td>
              <td className="px-4 py-4 text-muted-foreground">Low. Communication is formal, ticket-based, and prone to misunderstanding.</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 flex items-center gap-2 font-medium text-foreground"><Languages size={16} /> Cultural & Language Alignment</td>
              <td className='px-4 py-4 text-primary font-semibold'>High. Strong affinity with U.S. work culture reduces friction.</td>
              <td className="px-4 py-4 text-muted-foreground">Varies. Can introduce communication barriers that slow down projects.</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 flex items-center gap-2 font-medium text-foreground"><Plane size={16} /> On-Site Escalation Path</td>
              <td className='px-4 py-4 text-primary font-semibold'>Simple. Faster, cheaper travel for critical workshops or crisis resolution.</td>
              <td className="px-4 py-4 text-muted-foreground">Complex. Expensive, multi-day travel, making it impractical for urgent needs.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 flex items-center gap-2 font-medium text-foreground"><ShieldCheck size={16} /> Compliance & Legal Risk</td>
              <td className='px-4 py-4 text-muted-foreground'>
                Lower. Our integrated <Link href="/playbook/security-compliance">security and compliance</Link> framework handles EOR, data privacy, and IP laws.
              </td>
              <td className="px-4 py-4 text-muted-foreground">Higher. Navigating different legal frameworks can be complex and risky, as detailed in our <Link href="/comparisons">vendor comparisons</Link>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center">Common Pains of Outsourcing & How to Cure Them</h2>
        <p className="mt-2 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          If you're feeling these pains, your current model may be the cause, not the cure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          {failureModes.map((item) => (
             <div className="rounded-lg border bg-card p-6" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center">Answering the Hard Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq) => (
             <div className="flex items-start gap-4" key={faq.title}>
                <HelpCircle className="h-6 w-6 shrink-0 mt-1 text-primary" />
                <div>
                    <h3 className="font-semibold text-foreground">{faq.title}</h3>
                    <div className="text-sm mt-1 text-muted-foreground">{faq.description}</div>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold">Ready to Upgrade Your Strategy?</h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">Stop letting operational friction drain your budget and velocity.</p>
          <Link href="/hire" className="cta-button mt-6">
            Book a Strategy Call
          </Link>
      </div>
    </main>
  );
}
