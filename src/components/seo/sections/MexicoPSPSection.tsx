
import Link from "next/link";
import PSPCards from "../PSPCards";
import { PainPoint } from "@/lib/tech";
import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  Code,
  DollarSign,
  FileText,
  GitCompare,
  Globe,
  HardHat,
  Linkedin,
  Scale,
  ShieldCheck,
  Siren,
  Users,
  Webhook,
} from "lucide-react";

export default function MexicoPSPSection() {
  const items: PainPoint[] = [
    {
      icon: DollarSign,
      problem: "Cheap Hourly → Expensive Release",
      pain: "The ‘low hourly’ offshore pitch evaporates once PRs sit overnight, specs drift, and managers babysit time zones.",
      solution: "Buy daylight, not hours. Staff a Mexico pod with guaranteed overlap and a lead who owns the release plan.",
      kpi: "120 PRs/month × (4h offshore wait − 1h nearshore) × $85/hr ≈ $30,600 burned monthly in idle latency.",
    },
    {
      icon: BadgeCheck,
      problem: "Résumé Theater vs. Evidence",
      pain: "CVs look great until the first integration. Then the wheels wobble—tests missing, contracts brittle.",
      solution: "Use evidence, not theater. Mexico candidates run calibrated work-samples; we keep the artifacts (code, ADR notes, test approach).",
      kpi: "Axiom Cortex™ reduces false positives by favoring shipped-signal over keyword-match in screening.",
    },
    {
      icon: Webhook,
      problem: "Sprawl Kills Throughput",
      pain: "One vendor for people, another for EOR, another for devices, plus a payroll agent—four tickets per change.",
      solution: "Consolidate into a Nearshore IT Co-Pilot: talent + EOR + SSO/MDM + devices under one SLA, one backlog.",
      kpi: "Teams in CDMX/MTY run same-day approvals for access and devices; first PR ≤ 10 business days with envs ready.",
    },
    {
      icon: ShieldCheck,
      problem: "Compliance Isn’t Optional",
      pain: "Shadow laptops, ad-hoc VPNs, and shared accounts look ‘agile’—until an auditor asks for proofs.",
      solution: "All Mexico pods use corporate-owned, MDM-managed devices; SSO/SAML/SCIM wired at day-one with role maps.",
      kpi: "SOC-aligned onboarding dossiers (device, identity, access) available for every engineer in the pod.",
    },
    {
      icon: Users,
      problem: "English Fluency ≠ Product Fluency",
      pain: "You can talk, sure. But can you refine tickets, push back on risky scope, and keep ADRs tight?",
      solution: "Hire for product fluency. Mexico leads facilitate refinement, capture decisions in ADRs, and protect contracts with tests.",
      kpi: "ADR adoption correlates with fewer reopenings; contract tests (Pact) cut integration breakage by double-digits.",
    },
    {
      icon: GitCompare,
      problem: "Friction at the Edges",
      pain: "Tooling drift—different CI, different linters—creates micro-friction that slows every PR.",
      solution: "Adopt your standards exactly. Mexico pods clone your CI, lint, testing, and release rituals—no parallel universe.",
      kpi: "Time-to-green PR falls as teams converge on one pipeline; fewer flakes → faster merges.",
    },
    {
      icon: Siren,
      problem: "Siloed QA, Brittle Releases",
      pain: "Throwing code over the wall to QA makes bugs ‘their problem’ and slips the schedule.",
      solution: "QA in the pod. Test design begins at refinement; UI/API/contract suites gate merges and deployments.",
      kpi: "Pods with embedded QA show lower escape rate and faster MTTR on the same scope.",
    },
    {
      icon: Linkedin,
      problem: "Vendor Churn, Context Loss",
      pain: "Rotating cast of ‘resources’ means every sprint starts at zero context.",
      solution: "Stable pods with named owners. We document flows, keep decision logs, and rotate responsibly with shadowing.",
      kpi: "Continuity preserves tacit knowledge; velocity stabilizes beyond sprint 3.",
    },
    {
      icon: FileText,
      problem: "Onboarding: Tickets vs. Evidence",
      pain: "‘Everyone’s onboarded’—but where’s the evidence? Who approved access? What device posture?",
      solution: "Day-0→Day-10 dossier: device baseline, SSO/SCIM mapping, environment checklist, data-handling attestations.",
      kpi: "Dossiers pass legal/security reviews without emergency archaeology.",
    },
    {
      icon: Scale,
      problem: "Scale Without Losing Shape",
      pain: "Adding headcount accelerates chaos if process and ownership don’t scale with it.",
      solution: "Grow by pods, not individuals. Each pod is a fractal unit—leadership, QA, standards—plug in and go.",
      kpi: "Pods added in CDMX/Guadalajara maintain cadence; inter-pod contracts keep boundaries healthy.",
    },
  ];

  return (
    <section className="mt-12">
      <header className="prose dark:prose-invert max-w-none">
        <h2>Why Mexico works for daylight software delivery</h2>
        <p>
          If offshore is a long-distance relationship, Mexico is a next-door neighbor with a spare key. Overlap isn’t
          a perk; it’s the mechanism that collapses feedback loops, keeps PRs moving, and prevents tiny questions from
          snowballing into week-long detours. You get real-time refinement, fewer surprises, and a release plan that
          survives contact with reality.
        </p>
        <p>
          We don’t rent hands. We field <strong>pods</strong>—senior-leaning squads that mirror your rituals, run your
          toolchain, and leave evidence as they go. Every engineer ships on a managed device, behind SSO, with access
          you can prove. That’s how you scale a roadmap without inheriting a compliance hangover.
        </p>
      </header>

      <PSPCards heading="Sandler PSP — Mexico Nearshore Pods" items={items} />

      <footer className="prose dark:prose-invert max-w-none mt-10">
        <h3>Where to start</h3>
        <p>
          Begin with a thin slice. One pod, one user journey, one measurable improvement. Keep the scope reversible:
          feature flags on, contracts guarded, telemetry wired. In two weeks you’ll know if the chemistry works; in six,
          you’ll wonder why you waited. When you’re ready, book a daylight planning call—we’ll show you the math and the
          mechanism, not a talent slideshow.
        </p>
        <p>
          Next reads: <Link href="/playbook/latam-economics">LATAM Economics</Link>,{" "}
          <Link href="/trust">Security & Compliance</Link>,{" "}
          <Link href="/comparisons/bairesdev">TeamStation vs BairesDev</Link>.
        </p>
      </footer>
    </section>
  );
}
