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
              <a href="/playbook/">CTO Playbook</a>
              <a href="/research/">Research</a>
              <a href="/comparisons/">Comparisons</a>
              <a href="/case-studies/">Case Studies</a>
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
          <div className="container footer-grid">
            <div className="footer-brand">
              <h3 className="h3" style={{ marginTop: 0 }}>TeamStation AI</h3>
              <p>The Nearshore IT Co-Pilot™ for CTOs.</p>
              <div className="footer-copyright">
                © {new Date().getFullYear()} TeamStation AI Inc.
              </div>
            </div>
            <div className="footer-links">
              <h4>Playbook</h4>
              <a href="/playbook/nearshore-vs-offshore/">Nearshore vs Offshore</a>
              <a href="/playbook/bias-free-technical-hiring-axiom-cortex/">Bias-Free Hiring</a>
              <a href="/playbook/latam-economics/">LATAM Economics</a>
              <a href="/playbook/security-compliance/">Security & Compliance</a>
            </div>
            <div className="footer-links">
              <h4>Content</h4>
              <a href="/case-studies/">Case Studies</a>
              <a href="/research/">Research</a>
              <a href="/comparisons/">Comparisons</a>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <a href="/about/">About</a>
              <a href="/trust/">Trust</a>
              <a href="/hire/">Hire</a>
              <a href="/pricing/">Pricing</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
