// FILE: src/app/technical-interview-evaluation/client.tsx
'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Minimal safe component to fix the build.
// The original content can be restored from git history if needed.
export default function Client() {
  return (
    <div className="container max-w-5xl py-12">
      <header className="my-12">
        <h1 className="text-5xl font-extrabold tracking-tight">Evidence-Based Technical Interview Evaluation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our scientific, evidence-based process de-risks your hiring for critical roles.
        </p>
      </header>
      <section className="my-16">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>Cognitive AI-powered analysis of candidate's code and problem-solving.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>Semantic RAG to compare against a vast corpus of expert knowledge.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>Expert human review to validate findings and assess nuanced skills.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>Bias-free evaluation focused purely on technical merit and capacity.</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <Link href="/research/axiom-cortex-scientific-report" className="font-semibold text-primary hover:underline">
            Read the Axiom Cortex™ Research Report
          </Link>
        </div>
      </section>
    </div>
  );
}
