
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Client = dynamic(() => import('./client'), { ssr: false });

export const metadata: Metadata = {
    title: 'Evidence-Based Technical Interview Evaluation',
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
