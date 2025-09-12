export default function ResearchPage() {
  const papers = [
    {
      title: 'AxiomCortex™ Scientific R&D Report',
      description: 'A deep dive into the proprietary Cognitive AI engine that powers TeamStation AI\'s talent evaluation, outlining its core scientific pillars and bias mitigation strategies.',
      href: '/research/axiom-cortex-scientific-report',
    },
    {
      title: 'Redefining Software Engineer Performance in the AI-Augmented Era',
      description: 'Proposing a novel, value-centric, and quality-driven model for assessing software engineer performance, moving beyond outdated metrics.',
      href: '/research/performance-evaluation-framework',
    },
    {
      title: 'Technical Talent Evaluation System',
      description: 'A real-world example of the Axiom Cortex™ evaluation process, showcasing how we identify elite engineering talent beyond the resume with a real candidate report.',
      href: '/research/technical-talent-evaluation-system',
    },
  ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Research
      </div>
      <h1 className="h1">Our Research: The Science of High-Performance Teams</h1>
      <p className="lead">
        We are not just a service provider; we are a research-driven organization committed to advancing the science of talent evaluation and team performance. Our work is grounded in data, cognitive science, and a deep understanding of the modern software development lifecycle.
      </p>

      <div className="grid grid-2" style={{marginTop: '24px'}}>
        {papers.map((paper) => (
          <div key={paper.href} className="card">
            <h2 className="h2" style={{marginTop: 0}}>{paper.title}</h2>
            <p className="lead" style={{fontSize: '1rem'}}>
              {paper.description}
            </p>
            <a href={paper.href}>Read the Research →</a>
          </div>
        ))}
      </div>
    </main>
  );
}
