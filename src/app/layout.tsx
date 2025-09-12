import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "The CTO Playbook for Nearshore Engineering | TeamStation AI",
  description: "Integrated nearshore platform: hiring, EOR, compliance, devices/MDM, offices, insurance, onboarding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body className={poppins.className}>
        <header className="header">
          <div className="container header-inner">
            <a href="/" style={{ fontWeight: 700 }}>
              TeamStation AI
            </a>
            <nav className="nav">
              <a href="/playbook/">Playbook</a>
              <a href="/research/">Research</a>
              <a href="/comparisons/">Comparisons</a>
              <a href="/case-studies/">Case Studies</a>
              <a href="/seo-battle-map">SEO Map</a>
              <a href="/hire/">Hire</a>
              <a href="/pricing/">Pricing</a>
              <a href="/trust/">Trust</a>
              <a href="/about/">About</a>
            </nav>
            <button className="btn" data-theme-toggle>
              Theme
            </button>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} TeamStation AI — cto.teamstation.dev
          </div>
        </footer>
      </body>
    </html>
  );
}