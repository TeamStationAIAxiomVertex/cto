import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request CTO Playbook PDF | TeamStation AI",
  description:
    "Request the PDF version of the TeamStation AI CTO Playbook and get a finance-ready nearshore economics brief.",
};

export default function RequestPlaybookPdfPage() {
  return (
    <main className="container max-w-3xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/playbook/hub" className="hover:text-foreground">
          Playbook
        </Link>{" "}
        / <span>Request PDF</span>
      </div>

      <header className="rounded-xl border bg-card p-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Request the CTO Playbook PDF</h1>
        <p className="mt-4 text-muted-foreground">
          Get the PDF version of our nearshore economics and CTO strategy playbooks, including
          a CFO-friendly framework for total cost, velocity risk, and delivery governance.
        </p>
      </header>

      <section className="mt-8 rounded-xl border bg-card p-8">
        <h2 className="text-2xl font-bold">Request Through TeamStation Channels</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" className="cta-button">
            Request PDF via Hire Portal
          </a>
          <a
            href="https://research.teamstation.dev/research"
            className="px-4 py-2 rounded border text-sm font-semibold hover:bg-muted"
          >
            Open Research Library
          </a>
          <Link href="/playbook/hub" className="px-4 py-2 rounded border text-sm font-semibold hover:bg-muted">
            Return to Playbook Hub
          </Link>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          This page now routes only through TeamStation internal paths and subdomains.
          Use the Hire contact channel to request the CTO Playbook PDF package.
        </p>
      </section>
    </main>
  );
}
