export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10 text-mute text-sm">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <p>© {year} TeamStation AI — All rights reserved.</p>
      </div>
    </footer>
  );
}
