import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request CTO Playbook PDF | TeamStation AI",
  description:
    "Request the PDF version of the TeamStation AI CTO Playbook and get a finance-ready nearshore economics brief.",
};

export default function RequestPlaybookPdfPage() {
  const subject = encodeURIComponent("Request: CTO Playbook PDF");
  const body = encodeURIComponent(
    [
      "Hi TeamStation AI,",
      "",
      "Please send me the CTO Playbook PDF package.",
      "",
      "Name:",
      "Work Email:",
      "Company:",
      "Role:",
      "Current Team Size:",
      "Main topic I need:",
      "",
      "Thanks.",
    ].join("\n")
  );

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
        <h2 className="text-2xl font-bold">Choose How You Want It Delivered</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:hello@teamstation.ai?subject=${subject}&body=${body}`}
            className="cta-button"
          >
            Request by Email
          </a>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border text-sm font-semibold hover:bg-muted"
          >
            Book 20-min Strategy Call
          </a>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          We usually respond same business day with the PDF package and a short recommendation
          path based on your team size and delivery goals.
        </p>
      </section>
    </main>
  );
}
