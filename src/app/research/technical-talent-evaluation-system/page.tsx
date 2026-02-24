
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Evidence-Based Technical Interview Evaluation',
    description: 'Our evidence-based technical interview process uses Cognitive AI, semantic RAG, and expert review to de-risk your hiring.',
    keywords: 'technical interview evaluation, evidence-based interview, cognitive ai interview, latam engineer interview, de-risk hiring',
    alternates: {
        canonical: '/technical-interview-evaluation'
    }
};

// Static-export compatible redirect: server redirect() is not supported in output: 'export'.
// This page immediately redirects to the canonical URL via JS and meta refresh fallback.
export default function RedirectPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/technical-interview-evaluation');`,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-head-element */}
        <meta httpEquiv="refresh" content="0;url=/technical-interview-evaluation" />
        <a href="/technical-interview-evaluation">
          Click here if you are not redirected automatically.
        </a>
      </noscript>
    </>
  );
}
