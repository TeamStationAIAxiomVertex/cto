import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container" style={{ padding: '40px' }}>
      <h1 className="h1">404 — Lost in space</h1>
      <p className="lead">
        The page drifted off orbit. Head back to <Link href="/">Home</Link>.
      </p>
    </main>
  );
}
