export default function PlaybookPage() {
  const chapters = [
    {
      title: 'Nearshore vs. Offshore',
      description: 'A CTO’s decision framework for talent, time-zones, and total cost of ownership.',
      href: '/playbook/nearshore-vs-offshore',
    },
    {
      title: 'Bias-Free Technical Hiring',
      description: 'Using Axiom Cortex™ to move beyond resumes and reduce hiring bias with cognitive science.',
      href: '/playbook/bias-free-technical-hiring-axiom-cortex',
    },
    {
      title: 'LATAM Economics for CTOs',
      description: 'Salary bands, productivity metrics, and the true cost of scaling an engineering team in Latin America.',
      href: '/playbook/latam-economics',
    },
    {
      title: 'Security & Compliance',
      description: 'The playbook for audit-ready nearshore operations, from SOC 2 to device management.',
      href: '/playbook/security-compliance',
    },
    {
      title: 'Build vs. Buy Framework',
      description: 'Modeling the trade-offs between hiring in-house and partnering with a nearshore co-pilot.',
      href: '/playbook/build-vs-buy',
    },
  ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / CTO Playbook
      </div>
      <h1 className="h1">The CTO Playbook</h1>
      <p className="lead">
        A series of research-backed guides for high-performance engineering leadership.
      </p>

      <div className="grid grid-2" style={{marginTop: '24px'}}>
        {chapters.map((chapter) => (
          <div key={chapter.href} className="card">
            <h2 className="h2">{chapter.title}</h2>
            <p className="lead" style={{fontSize: '1rem'}}>
              {chapter.description}
            </p>
            <a href={chapter.href}>Read Chapter →</a>
          </div>
        ))}
      </div>
    </main>
  );
}
