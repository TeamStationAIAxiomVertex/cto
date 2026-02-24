
import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
    title: { absolute: 'Technical Interview Evaluation | TeamStation AI' },
    description: 'Our evidence-based technical interview process uses Cognitive AI, semantic RAG, and expert review to de-risk your hiring.',
    keywords: 'technical interview evaluation, evidence-based interview, cognitive ai interview, latam engineer interview, de-risk hiring',
    alternates: {
        canonical: '/technical-interview-evaluation'
    }
};

// This page now correctly renders the client component.
export default function TechnicalInterviewEvaluationPage() {
  return <Client />;
}
