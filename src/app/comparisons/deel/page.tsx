
import { CheckCircle, XCircle, BrainCircuit, FileText, ShieldCheck, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Deel Alternative for Talent Sourcing: TeamStation AI vs. Deel',
    description: 'Looking for a Deel alternative for sourcing talent? See how TeamStation AI provides an end-to-end nearshore talent platform, while Deel focuses on HR and payroll.'
};

const comparisonPoints = {
    "Talent": {
        pain: "Where do you find elite talent?",
        traditional: "Deel is an HR platform, not a talent marketplace. They do not source, vet, or validate candidates. You must bring your own talent to their system.",
        teamstation: "We are a talent-first platform. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> and expert recruiters find and scientifically validate elite LATAM talent for you.",
        proof: "Time-to-Offer ≈ 9 days"
    },
    "Operations": {
        pain: "Who manages the hardware and security?",
        traditional: "Deel handles payroll and compliance. They do not provide or manage secure laptops, <a href='/trust' class='text-primary hover:underline'><Tooltip text='Mobile Device Management: software that secures, monitors, and manages devices like laptops.'>MDM</Tooltip></a>, or insurance. This is a major operational and security gap you must fill.",
        teamstation: "Our platform is a complete operational wrapper. We bundle <a href='/services/integrated-services' class='text-primary hover:underline'><Tooltip text='Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.'>EOR</Tooltip></a>, MDM-secured devices, and insurance under one accountable SLA.",
        proof: "SOC 2 & ISO Aligned"
    },
    "Model": {
        pain: "Are you buying a tool or a complete solution?",
        traditional: "Deel provides a world-class tool for a specific problem: global payroll. It is a piece of the puzzle, not the whole solution for building a remote team.",
        teamstation: "We provide the end-to-end solution. From sourcing and vetting to hiring, compliance, and ongoing operations, we are the single partner you need to build and run your team.",
        proof: "1 accountable SLA"
    }
}


export default function DeelComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Deel</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TeamStation AI vs. Deel</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          This isn't a direct comparison, but a clarification of two very different—and potentially complementary—models.
        </p>
      </header>

       <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Talent Platform vs. The HR Platform</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Deel Model
                  </h4>
                  <p className="text-sm text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: value.traditional }} />
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    TeamStation AI Solution
                  </h4>
                   <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: value.teamstation }} />
                </div>
              </div>
              <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {value.proof}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
        <h2 className="text-center">Analysis: Talent Platform vs. HR Platform</h2>
        <p>
            <a href="https://www.deel.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Deel <ExternalLink className="h-4 w-4" /></a> is a world-class global payroll and compliance engine. They solve the critical problem of how to legally hire and pay people almost anywhere in the world. However, Deel is not a talent platform. They do not source, vet, or manage talent. You must bring your own candidates to their platform.
        </p>
        <p>
           TeamStation AI, on the other hand, is an end-to-end talent and operations platform. Our primary function is to find, vet, and deliver elite LATAM engineering talent. Our platform then provides the entire operational wrapper—including <Tooltip text='Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.'>EOR</Tooltip>/payroll (which could even be powered by a platform like Deel), secure devices, and insurance—to run that team effectively.
        </p>
        <h3>Two Sides of the Same Coin</h3>
        <ul>
            <li><strong>TeamStation AI answers:</strong> "Who should I hire, and how do I run them securely and efficiently?"</li>
            <li><strong>Deel answers:</strong> "Now that I've found someone, how do I pay them and stay compliant?"</li>
        </ul>
        <p>
            For a CTO who needs to build a nearshore team from scratch, TeamStation AI provides the complete, all-in-one solution. Deel is a powerful tool for companies that already have a global sourcing and recruiting function in place.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            Choosing between TeamStation AI and Deel is not an either/or decision. They are different tools for different jobs. If you need to find and run an elite nearshore team with full operational support, TeamStation AI is your solution. If you simply need a way to pay an international team you've already sourced, Deel is the industry leader.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
