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
      title: 'Staff-Augmentation Churn',
      description:
        'Legacy vendors often rotate engineers, leading to constant knowledge loss. Mitigation: Dedicated Pods where the team remains consistent.',
    },
    {
      icon: <AlertTriangle size={24} className="text-red-400" />,
      title: '"Vendor Fog"',
      description:
        'A lack of transparency into performance and progress. Mitigation: Demand access to source control, CI/CD pipelines, and performance telemetry.',
    },
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: 'Productivity Mismatch',
      description:
        "Lower hourly rates don't matter if velocity is half that of an in-house team. Mitigation: Focus on output-based metrics, not just hours billed.",
    },
  ];

  const faqs = [
    {
      title: 'Is nearshore always more expensive?',
      description:
        'Not when measured by Total Cost of Ownership. Higher real-time collaboration reduces rework, management overhead, and delays, often making nearshore more cost-effective per feature shipped.',
    },
    {
      title: 'How do I evaluate a nearshore partner?',
      description: (
        <>
          Look beyond resumes. Ask for evidence of their security practices
          (MDM, SSO), their hiring science (see our{' '}
          <a href="/research">Axiom Cortex research</a>), and their ability to
          provide dedicated, long-term teams.
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
      <h1 className="h1">Nearshore vs. Offshore: The CTO's Decision Framework</h1>
      <p className="lead">
        Move beyond "cost per hour" and start measuring "cost per successful
        release." This guide provides a clear framework for choosing the right
        global talent strategy.
      </p>

      <div className="prose my-8">
        <h2 className="h2">The Core Trade-Off: Cost, Collaboration, and Control</h2>
        <p>
          The debate between nearshore and offshore development models isn't just
          about saving money—it's a strategic decision that impacts your
          product's velocity, quality, and your team's sanity. While offshore
          teams in distant time zones might offer a lower hourly rate,{' '}
          <Tooltip text="Total Cost of Ownership: Includes direct and indirect costs like management overhead, rework, and communication friction.">
            TCO
          </Tooltip>{' '}
          is often far higher due to communication friction and reduced
          collaboration.
        </p>
        <p>
          Nearshore teams, typically in{' '}
          <Tooltip text="Latin America: A region of the Americas where Romance languages (especially Spanish and Portuguese) are primarily spoken.">
            LATAM
          </Tooltip>
          , operate in the same time zones as U.S. companies. This overlap is the
          single biggest factor in reducing the "cost of delay" caused by
          waiting 12 hours for a simple answer.
        </p>
      </div>

      <div className="section">
        <h2 className="h2 mt-0">Decision Framework: Key Variables</h2>
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
                <td>High (4-8 hours with U.S. teams)</td>
                <td>Low (0-2 hours, requiring late-night calls)</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><Users size={16} /> Collaboration Fidelity</td>
                <td>Real-time pairing, ad-hoc meetings, faster feedback loops.</td>
                <td>Asynchronous, ticket-based, potential for misunderstandings.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><Languages size={16} /> Cultural & Language Alignment</td>
                <td>High affinity with U.S. work culture; strong English proficiency.</td>
                <td>Varies widely; can introduce communication barriers.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><Plane size={16} /> Travel & On-Site Escalation</td>
                <td>Faster, cheaper travel for critical workshops or issue resolution.</td>
                <td>Expensive, multi-day travel required.</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2"><ShieldCheck size={16} /> Compliance & Legal</td>
                <td>Stronger alignment with U.S. data privacy and IP laws. See our{' '}
                    <a href="/comparisons">vendor comparisons</a> for details.
                </td>
                <td>Can be complex and vary significantly by country.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      

      <div className="my-8">
        <h2 className="h2">Failure Modes & How to Mitigate Them</h2>
        <p className="lead">
          Many outsourcing initiatives fail not because of technical incompetence,
          but due to predictable operational friction.
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
        <h2 className="h2">Frequently Asked Questions</h2>
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
          <a href="/contact" className="cta">Book a Demo to Discuss Your Needs</a>
      </div>
    </main>
  );
}
