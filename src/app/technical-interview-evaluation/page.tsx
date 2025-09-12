
import type { Metadata } from 'next';
import TalentEvaluationClient from './client';

export const metadata: Metadata = {
    title: 'Evidence-Based Technical Interview Process | TeamStation AI',
    description: 'Our evidence-based technical interview process for LATAM engineers uses Cognitive AI, semantic RAG, and expert review to de-risk your hiring. Learn more.',
};

export default function TalentEvaluationPage() {
  return <TalentEvaluationClient />;
}
