
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
      href: '#', // Placeholder
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="h1">Our Research</h1>
        <p className="lead max-w-3xl mx-auto">
        We are a research-driven organization committed to advancing the science of talent evaluation and team performance. Our work is grounded in data, cognitive science, and a deep understanding of the modern software development lifecycle.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {papers.map((paper) => (
          <a key={paper.href} href={paper.href} className="card block p-6 hover:bg-surface-2 transition-colors">
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="text-mute mt-2 text-sm">{paper.description}</p>
             <div className="mt-4 text-sm font-semibold text-accent-custom">Read Research →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
