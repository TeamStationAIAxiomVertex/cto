
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Evidence-Based Technical Interview Evaluation',
    description: 'Our evidence-based technical interview process uses Cognitive AI, semantic RAG, and expert review to de-risk your hiring.',
    keywords: 'technical interview evaluation, evidence-based interview, cognitive ai interview, latam engineer interview, de-risk hiring',
    alternates: {
        canonical: '/technical-interview-evaluation'
    }
};

// This page redirects to the canonical URL for SEO purposes.
export default function RedirectPage() {
  redirect('/technical-interview-evaluation');
}
