import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4">
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-12 w-12 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">404 - Not Found</h1>
              <p className="text-muted-foreground">The page you are looking for does not exist.</p>
            </div>
          </div>
          <Link href="/" className="mt-8 cta-button">
            Return to Home
          </Link>
        </main>
      </body>
    </html>
  );
}
