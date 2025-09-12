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
    <html lang="en" data-theme="dark">
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
              <a href="/research/technical-talent-evaluation-system/">Research</a>
              <a href="/playbook/nearshore-vs-offshore/">Comparisons</a>
              <a href="/case-studies/">Case Studies</a>
              <a href="/hire/">Hire</a>
              <a href="/pricing/">Pricing</a>
              <a href="/trust/">Trust</a>
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
              <h4>Services</h4>
              <a href="/nearshore-integrated-services/">Integrated Services</a>
              <a href="/nearshore-it-talent-onboarding/">Onboarding</a>
              <a href="/technical-interview-evaluation/">Talent Evaluations</a>
            </div>
            <div className="footer-links">
              <h4>Resources</h4>
              <a href="/case-studies/">Case Studies</a>
              <a href="/playbook/nearshore-vs-offshore/">Nearshore vs Offshore</a>
              <a href="/research/technical-talent-evaluation-system/">Research</a>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <a href="/about/">About</a>
              <a href="/process/">Process</a>
              <a href="/pricing/">Pricing</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
