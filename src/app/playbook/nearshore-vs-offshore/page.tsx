import Tooltip from '@/components/Tooltip';

export default function NearshoreVsOffshorePage() {
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
      p>

      <div className="prose">
        <h2 className="h2">1. The Core Trade-Off: Cost, Collaboration, and Control</h2>
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

        <h2 className="h2">2. Decision Framework: Key Variables</h2>
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
              <td>Time-Zone Overlap</td>
              <td>High (4-8 hours with U.S. teams)</td>
              <td>Low (0-2 hours, often requiring late-night calls)</td>
            </tr>
            <tr>
              <td>Collaboration Fidelity</td>
              <td>Real-time pairing, ad-hoc meetings, faster feedback loops.</td>
              <td>Asynchronous, ticket-based, potential for misunderstandings.</td>
            </tr>
            <tr>
              <td>Cultural & Language Alignment</td>
              <td>High affinity with U.S. work culture; strong English proficiency.</td>
              <td>Varies widely; can introduce communication barriers.</td>
            </tr>
            <tr>
              <td>Travel & On-Site Escalation</td>
              <td>Faster, cheaper travel for critical workshops or issue resolution.</td>
              <td>Expensive, multi-day travel required.</td>
            </tr>
            <tr>
              <td>Compliance & Legal Framework</td>
              <td>Stronger alignment with U.S. data privacy and IP laws. See our{' '}
                  <a href="/comparisons">vendor comparisons</a> for details.
              </td>
              <td>Can be complex and vary significantly by country.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="h2">3. Failure Modes & How to Mitigate Them</h2>
        <p>
          Many outsourcing initiatives fail not because of technical incompetence,
          but due to predictable operational friction.
        </p>
        <ul>
          <li>
            <strong>Staff-Augmentation Churn:</strong> Legacy vendors often rotate
            engineers, leading to constant knowledge loss. Mitigation:{' '}
            <strong>Dedicated Pods</strong> where the team remains consistent.
          </li>
          <li>
            <strong>"Vendor Fog":</strong> A lack of transparency into performance
            and progress. Mitigation: Demand access to source control, CI/CD
            pipelines, and performance telemetry.
          </li>
          <li>
            <strong>Productivity Mismatch:</strong> Lower hourly rates don't matter
            if velocity is half that of an in-house team. Mitigation: Focus on{' '}
            <a href="/playbook/latam-economics">output-based metrics</a>, not
            just hours billed.
          </li>
        </ul>

        <h2 className="h2">FAQ: Nearshore vs. Offshore</h2>
        <div className="section">
          <h3 className="h2" style={{margin: '0 0 0.5rem'}}>Is nearshore always more expensive?</h3>
          <p className="lead" style={{fontSize: '1rem', margin: 0}}>
            Not when measured by Total Cost of Ownership. Higher real-time
            collaboration reduces rework, management overhead, and delays, often
            making nearshore more cost-effective per feature shipped.
          </p>
        </div>
         <div className="section">
          <h3 className="h2" style={{margin: '0 0 0.5rem'}}>How do I evaluate a nearshore partner?</h3>
          <p className="lead" style={{fontSize: '1rem', margin: 0}}>
            Look beyond resumes. Ask for evidence of their security practices
            (MDM, SSO), their hiring science (see our{' '}
            <a href="/research">Axiom Cortex research</a>), and their ability to
            provide dedicated, long-term teams.
          </p>
        </div>

        <div style={{marginTop: '2rem'}}>
            <a href="/contact" className="cta">Book a Demo to Discuss Your Needs</a>
        </div>
      </div>
    </main>
  );
}
