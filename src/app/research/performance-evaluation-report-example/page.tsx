import Link from 'next/link';
import type { Metadata } from 'next';
import { FileText, AlertTriangle, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Example Engineering Performance Report | TeamStation AI Research',
  description: 'See a tangible example of how to measure engineering velocity and team performance with our data-driven evaluation framework. Turn your team\'s output into a CFO-ready report.',
  alternates: {
    canonical: '/research/performance-evaluation-report-example',
  },
};

export default function PerformanceEvaluationReportExamplePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cto.teamstation.dev" },
      { "@type": "ListItem", "position": 2, "name": "Research Hub", "item": "https://cto.teamstation.dev/research/hub" },
      { "@type": "ListItem", "position": 3, "name": "Performance Evaluation Report Example", "item": "https://cto.teamstation.dev/research/performance-evaluation-report-example" }
    ]
  };
  const articleSchema = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": "Example Engineering Performance Report",
      "author": {
        "@type": "Organization",
        "name": "TeamStation AI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TeamStation AI"
      },
      "datePublished": "2024-01-01",
      "mainEntityOfPage": "https://cto.teamstation.dev/research/performance-evaluation-report-example"
  }

  return (
    <>
      <JsonLd data={[breadcrumbSchema, articleSchema]} />
      <main className="manual-page container max-w-5xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/research/hub" className="hover:text-foreground">Research Hub</Link> / <span>Performance Report Example</span>
        </div>

        <header className="my-8">
          <div className="glass-panel rounded-2xl p-6 md:p-10">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Example Engineering Performance Report</h1>
            <div className="mt-8 max-w-4xl space-y-6">
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h2 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>Operational cost of intangible value</h2>
                <p className="mt-2 text-muted-foreground">As a CTO, you know your team is creating value, but you struggle to prove it. You're stuck in budget meetings with the CFO, trying to justify headcount with metrics like 'story points' and 'commit frequency' that don't translate to business impact. You can't definitively answer the question: 'Are we getting a return on our engineering investment?' This inability to connect engineering activity to business value is a critical strategic failure.</p>
                <p className="mt-4 text-muted-foreground">This page provides a tangible example of how to solve that problem. It is a concrete demonstration of how to apply our **Performance Evaluation Framework** to turn your team's performance data into a powerful, CFO-ready narrative of progress and value.</p>
              </div>
            </div>
          </div>
        </header>

        <section className="my-24 prose dark:prose-invert max-w-none">
          <h2>From Black Box to Business Case</h2>
          <p>The purpose of a performance report is not to track activity; it's to build a business case. A proper report should allow you to walk into any executive meeting and confidently answer the toughest questions about your team's effectiveness. This example report is structured to do exactly that, turning abstract engineering metrics into a clear story of value creation.</p>
          
          <h3>Section 1: The Executive Summary (The 'So What?')</h3>
          <p>This is the most critical part of the report. It summarizes the key findings in business terms, not technical jargon. For example:</p>
          <blockquote>"In Q3, the engineering team increased feature velocity by 30%, resulting in the early delivery of Project Phoenix, which is projected to generate an additional $500k in ARR this fiscal year. This was achieved while simultaneously reducing the production bug rate by 15%, indicating a significant improvement in code quality."</blockquote>

          <h3>Section 2: Velocity & Throughput Metrics</h3>
          <p>This section provides the data to back up the executive summary. It moves beyond story points to focus on metrics that matter, such as:</p>
          <ul>
            <li><strong>Cycle Time:</strong> The time from 'first commit' to 'production deploy'. The single most important measure of team velocity.</li>
            <li><strong>Deployment Frequency:</strong> How often you ship to production. A key indicator of team agility.</li>
            <li><strong>Change Failure Rate:</strong> The percentage of deployments that result in a production failure. A critical measure of quality.</li>
          </ul>

          <h3>Section 3: Quality & Rework Analysis</h3>
          <p>This is where you quantify the 'hidden tax' of poor quality. This section visualizes metrics like:</p>
          <ul>
            <li><strong>Rework Ratio:</strong> The percentage of an engineer's time that is spent fixing bugs or redoing flawed work. A high rework ratio is a clear sign of a bottleneck in your design or QA process.</li>
            <li><strong>Escaped Defect Rate:</strong> The number of bugs that are found in production, rather than in testing. A direct measure of the effectiveness of your QA process.</li>
          </ul>
          
          <div className="my-12 text-center rounded-lg bg-primary/10 p-8 shadow-lg">
                <h3 className="text-2xl font-bold">Build Your Own Business Case</h3>
                <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
                    This example is a tangible output of our foundational research on performance measurement. By applying the principles in our peer-reviewed paper, you can create a similar report for your own team, turning your engineering organization from an unpredictable cost center into a predictable, high-performance asset.
                </p>
                <Link href="/research/performance-evaluation-framework" className="cta-button mt-6">Read the Full Framework <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
        </section>
      </main>
    </>
  );
}
