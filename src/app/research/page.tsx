
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
    <div className="container mx-auto max-w-6xl">
       <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Research</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Our Research</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        We are a research-driven organization committed to advancing the science of talent evaluation and team performance. Our work is grounded in data, cognitive science, and a deep understanding of the modern software development lifecycle.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper) => (
          <Link key={paper.href} href={paper.href} className="group block rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h2 className="text-xl font-bold transition-colors group-hover:text-primary">{paper.title}</h2>
            <p className="mt-2 text-muted-foreground">{paper.description}</p>
             <div className="mt-6 text-sm font-semibold text-primary">Read Research <span className="inline-block transition-transform group-hover:translate-x-1">→</span></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
