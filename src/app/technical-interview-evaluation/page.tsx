
import type { Metadata } from 'next';
import TalentEvaluationClient from './client';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Evidence-Based Technical Interview Evaluation | TeamStation AI',
    description: 'Our evidence-based technical interview process for LATAM engineers uses Cognitive AI, semantic RAG, and expert review to de-risk your hiring. Learn more.',
    keywords: 'technical interview evaluation, evidence-based interview, cognitive ai interview, latam engineer interview, de-risk hiring',
};

// This page now correctly renders the client component.
export default function TechnicalInterviewEvaluationPage() {
  return <TalentEvaluationClient />;
}

    
