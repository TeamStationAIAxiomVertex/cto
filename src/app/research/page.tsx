import Link from 'next/link';

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
      title: 'Technical Talent Evaluation System (Sample Report)',
      description: 'An interactive example of a real AxiomCortex™ evaluation report, showcasing the Cognitive Fingerprint, Evidence Locker, and Risk Mitigation plan for a candidate.',
      href: '/research/technical-talent-evaluation-system',
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / Research
      </div>
      <header className="text-center mb-12">
        <h1 className="h1">Our Research</h1>
        <p className="lead max-w-3xl mx-auto">
        We are a research-driven organization committed to advancing the science of talent evaluation and team performance. Our work is grounded in data, cognitive science, and a deep understanding of the modern software development lifecycle.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {papers.map((paper) => (
          <Link key={paper.href} href={paper.href} className="card block p-6 hover:bg-surface-2 transition-colors">
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="text-mute mt-2 text-sm">{paper.description}</p>
             <div className="mt-4 text-sm font-semibold text-accent-custom">Read Research →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
