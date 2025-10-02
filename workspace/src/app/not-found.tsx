import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="mb-6">The page you’re looking for doesn’t exist. Let’s get you back on track.</p>
      <a href="/" className="text-blue-600 underline">Go Home</a>
    </div>
  );
}
