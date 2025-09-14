
import type { Metadata } from 'next';
import TalentEvaluationClient from '@/app/technical-interview-evaluation/client';

export const metadata: Metadata = {
    title: 'Evidence-Based Technical Interview Process | TeamStation AI',
    description: 'Our evidence-based technical interview process for LATAM engineers uses Cognitive AI, semantic RAG, and expert review to de-risk your hiring. Learn more.',
};

// This page now correctly renders the client component from its new location.
export default function TechnicalInterviewEvaluationPage() {
  return <TalentEvaluationClient />;
}

    