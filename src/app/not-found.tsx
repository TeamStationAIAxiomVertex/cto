import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container text-center py-20">
      <h1 className="h1">404 — Page Not Found</h1>
      <p className="lead mt-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
       <div className="mt-8">
          <Link href="/" className="cta">
            Return to Homepage
          </Link>
      </div>
    </main>
  );
}
