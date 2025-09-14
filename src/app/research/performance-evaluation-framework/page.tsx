
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Redefining Software Engineer Performance | TeamStation AI',
    description: 'A novel, value-centric, and quality-driven model for assessing software engineer performance in the AI-augmented era, moving beyond outdated metrics.',
};

export default function PerformanceEvaluationFrameworkPage() {
    // Redirect to the main technical interview evaluation page
    // This is a temporary solution until the content for this page is fully developed.
    // A more permanent solution would be to create the content for this page.
    return (
        <main className="container max-w-4xl py-12">
             <div className="text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground">Home</Link> / 
                <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
                <span>Performance Evaluation Framework</span>
            </div>
            <div className="prose dark:prose-invert mx-auto my-16 text-center">
                <h1 className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Content Coming Soon</h1>
                <p className="text-lg">This research paper is being prepared for publication. In the meantime, please see our live evaluation system in action.</p>
                <Link href="/technical-interview-evaluation" className="cta-button">View Sample Evaluation</Link>
            </div>
        </main>
    );
}
