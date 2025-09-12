
import type { Metadata } from 'next';
import EvaluationClient from './client';

export const metadata: Metadata = {
    title: 'Sample Technical Talent Evaluation Report | TeamStation AI',
    description: 'See a real, anonymized Axiom Cortex™ evaluation report. Understand how we use cognitive AI for bias-free technical hiring of LATAM engineers.',
};

export default function EvaluationPage() {
  return <EvaluationClient />;
}
