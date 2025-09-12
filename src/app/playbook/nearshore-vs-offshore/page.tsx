import Tooltip from '@/components/Tooltip';
import {
  AlertTriangle,
  Book,
  HelpCircle,
  ShieldCheck,
  Shuffle,
  Clock,
  Users,
  Languages,
  Plane,
} from 'lucide-react';

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
          <a href="/research">Axiom Cortex research</a>)? Will you be working with a dedicated, long-term team? The answers reveal their true capability.
        </>
      ),
    },
  ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/playbook">CTO Playbook</a> / Nearshore
        vs. Offshore
      </div>
      <h1 className="h1">Is Your Offshore Team a Strategic Asset or a Hidden Drain?</h1>
      <p className="lead">
        As a CTO, you're judged on outcomes, not hours billed. Let's move beyond "cost per hour" and use a framework to diagnose the true cost—and risk—of your global talent strategy.
      </p>

      <div className="prose my-8">
        <h2 className="h2">The Core Diagnosis: Latency, Fidelity, and Control</h2>
        <p>
          The choice between a nearshore or offshore model isn't just about budget; it's a strategic bet on how you plan to build, innovate, and compete. While offshore teams in distant time zones might seem cheaper on a spreadsheet, the{' '}
          <Tooltip text="Total Cost of Ownership: The sum of all direct and indirect costs, including rework, management overhead, and communication friction.">
            TCO
          </Tooltip>{' '}
          often skyrockets due to hidden friction.
        </p>
        <p>
          The core issue is latency. Not network latency, but human latency. Waiting 12 hours for a simple answer to unblock your team is a silent killer of velocity. Nearshore teams, typically in{' '}
          <Tooltip text="Latin America: A region with significant time-zone overlap with the U.S., enabling real-time collaboration.">
            LATAM
          </Tooltip>
          , eliminate this bottleneck. That real-time overlap is the single biggest lever you have to reclaim lost productivity.
        </p>
      </div>

      <div className="section">
        <h2 className="h2 mt-0">Decision Framework: A Tool for Diagnosing Your Risk</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Nearshore (e.g., LATAM)</th>
                <th>Offshore (e.g., Southeast Asia)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-2"><Clock size={16} /> Time-Zone Overlap</td>
                <td>High (4-8 hours). Enables real-time pairing and problem-solving.</td>
                <td>Low (0-2 hours). Forces asynchronous handoffs and late-night calls.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><Users size={16} /> Collaboration Fidelity</td>
                <td>High. Ad-hoc conversations are possible, leading to faster feedback.</td>
                <td>Low. Communication is formal, ticket-based, and prone to misunderstanding.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><Languages size={16} /> Cultural & Language Alignment</td>
                <td>High. Strong affinity with U.S. work culture reduces friction.</td>
                <td>Varies. Can introduce communication barriers that slow down projects.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><Plane size={16} /> On-Site Escalation Path</td>
                <td>Simple. Faster, cheaper travel for critical workshops or crisis resolution.</td>
                <td>Complex. Expensive, multi-day travel, making it impractical for urgent needs.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><ShieldCheck size={16} /> Compliance & Legal Risk</td>
                <td>Lower. Stronger alignment with U.S. data privacy and IP laws. (See our{' '}
                    <a href="/comparisons">vendor comparisons</a>).
                </td>
                <td>Higher. Navigating different legal frameworks can be complex and risky.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      

      <div className="my-8">
        <h2 className="h2">Common Pains of Outsourcing & How to Cure Them</h2>
        <p className="lead">
          If you're feeling these pains, your current model may be the cause, not the cure.
        </p>
        <div className="grid grid-3 mt-4">
          {failureModes.map((item) => (
             <div className="card" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0">{item.title}</h3>
                </div>
                <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="h2">Answering the Hard Questions</h2>
        <div className="grid grid-2 mt-4">
          {faqs.map((faq) => (
             <div className="icon-card" key={faq.title}>
                <HelpCircle className="icon" />
                <div>
                    <h3 className="h3 mt-0">{faq.title}</h3>
                    <p className="text-sm mt-1">{faq.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
          <a href="/hire" className="cta">Upgrade Your Nearshore Strategy</a>
      </div>
    </main>
  );
}
