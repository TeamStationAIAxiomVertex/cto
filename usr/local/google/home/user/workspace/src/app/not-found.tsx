import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
          <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
          <p className="mb-6">The page you’re looking for doesn’t exist. Let’s get you back on track.</p>
          <a href="/" className="text-blue-600 underline">Go Home</a>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Download The Research: Science, Comparison, and Method</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 text-left hover:bg-gray-800">
                <h3 className="text-lg font-bold mb-2"><a href="/research/platforming-nearshore-it-staff-augmentation-book">Published Book: Platforming the Nearshore Industry</a></h3>
                <p>Access our published research on replacing legacy staff augmentation with intelligent service infrastructure (Title: Platforming the Nearshore IT Staff Augmentation Industry).</p>
              </div>
              <div className="border rounded-lg p-6 text-left hover:bg-gray-800">
                <h3 className="text-lg font-bold mb-2"><a href="/research/axiom-cortex-scientific-report">Axiom Cortex Scientific Report</a></h3>
                <p>Explore the research behind our AI-powered talent evaluation system.</p>
              </div>
              <div className="border rounded-lg p-6 text-left hover:bg-gray-800">
                <h3 className="text-lg font-bold mb-2"><a href="/comparisons/all-vendors">Vendor Comparison</a></h3>
                <p>See how Teamstation compares to other solutions in the market.</p>
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
