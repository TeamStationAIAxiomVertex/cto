
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        But the platform is still online. Try navigating back to Home.
      </p>
      <a href="/" className="text-primary hover:underline">Go Home</a>
    </main>
  );
}
