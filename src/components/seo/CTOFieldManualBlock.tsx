import Link from "next/link";

type CTOFieldManualBlockProps = {
  title: string;
  focus: string;
};

export default function CTOFieldManualBlock({ title, focus }: CTOFieldManualBlockProps) {
  const ctoPainMap = [
    {
      pain: "Release predictability is unstable across distributed teams.",
      solution:
        "Use role based ownership boundaries, same day review cadence, and explicit quality gates.",
      proof: (
        <>
          Validate with the{" "}
          <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">
            capacity framework
          </Link>{" "}
          and compare outcomes in{" "}
          <Link href="/case-studies" className="text-primary hover:underline">
            case study evidence
          </Link>
          .
        </>
      ),
    },
    {
      pain: "AI initiatives are shipping pilots but not durable production outcomes.",
      solution:
        "Run agentic workflow governance with decision checkpoints, telemetry controls, and escalation paths.",
      proof: (
        <>
          Apply the{" "}
          <Link href="/engineering-doctrine" className="text-primary hover:underline">
            engineering doctrine
          </Link>{" "}
          with the{" "}
          <Link href="/research/technical-talent-evaluation-system" className="text-primary hover:underline">
            technical evaluation system
          </Link>
          .
        </>
      ),
    },
    {
      pain: "Hiring velocity is high but quality variance creates rework and management drag.",
      solution:
        "Calibrate interview loops to scenario evidence and map role fit to first 90 day outcomes.",
      proof: (
        <>
          Use the{" "}
          <Link href="/technical-interview-evaluation" className="text-primary hover:underline">
            technical interview evaluation model
          </Link>{" "}
          plus{" "}
          <Link href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">
            bias aware hiring playbook
          </Link>
          .
        </>
      ),
    },
    {
      pain: "Cost discussions focus on hourly rate while total delivery cost keeps climbing.",
      solution:
        "Shift evaluation to coordination cost, delay cost, and quality related rework cost.",
      proof: (
        <>
          Ground decisions in the{" "}
          <Link href="/playbook/tco-model" className="text-primary hover:underline">
            total cost model
          </Link>{" "}
          and the{" "}
          <Link href="/playbook/latam-economics" className="text-primary hover:underline">
            LATAM economics guide
          </Link>
          .
        </>
      ),
    },
    {
      pain: "Security, compliance, and delivery are managed in separate workflows.",
      solution:
        "Integrate trust controls into onboarding, access management, and delivery telemetry from day one.",
      proof: (
        <>
          Reference the{" "}
          <Link href="/trust" className="text-primary hover:underline">
            trust center
          </Link>{" "}
          and{" "}
          <a href="https://research.teamstation.dev/protocols/security" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            security protocols
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <section className="surface-card glass-panel gradient-ring my-12 p-6 md:p-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-5 space-y-6 text-muted-foreground leading-7">
        <h3 className="text-lg font-semibold text-foreground">Operational Context</h3>
        <p>
          The main reason engineering organizations underperform is not lack of effort. It is a system mismatch
          between decision speed, ownership clarity, and execution discipline. In real operating environments,
          teams lose momentum when hiring decisions are made without a clear map of the constraint that must be
          removed first. That is why this section uses a field manual format instead of a marketing format. It is
          built for leaders who need practical guidance under delivery pressure. For {focus}, the goal is to
          convert ambiguous staffing requests into measurable operational improvements that can be defended in
          executive review, translated into team behavior, and maintained over multiple planning cycles.
        </p>
        <p>
          Start by naming the exact failure pattern that costs the most time or trust in your delivery system.
          Common examples include slow review loops, frequent rollback events, unresolved handoff friction, and
          unclear role boundaries in cross functional squads. Once the failure pattern is explicit, map it to the
          role, technology, and geographic decisions that directly influence that failure. This simple change in
          framing keeps hiring strategy tied to business outcomes and prevents drift toward generic title based
          sourcing that looks fast at first but often creates hidden coordination debt later.
        </p>

        <h3 className="text-lg font-semibold text-foreground">CTO Pain Map for 2026 and Beyond</h3>
        <p>
          The operating environment for CTO and CIO leaders is now defined by system level constraints, not isolated
          staffing challenges. Use this map to align each recurring pain with a practical operating response and a
          proof path you can validate inside your planning cycle.
        </p>
        <div className="card-grid-tight-2">
          {ctoPainMap.map((item) => (
            <article key={item.pain} className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
              <h4 className="text-base font-semibold text-foreground">Operating reality</h4>
              <p className="mt-2 text-sm text-muted-foreground">{item.pain}</p>
              <h4 className="mt-4 text-base font-semibold text-foreground">Operating response</h4>
              <p className="mt-2 text-sm text-muted-foreground">{item.solution}</p>
              <h4 className="mt-4 text-base font-semibold text-foreground">Evidence path</h4>
              <p className="mt-2 text-sm text-muted-foreground">{item.proof}</p>
            </article>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground">Decision Sequence for CTO and CIO Teams</h3>
        <p>
          The first decision is discovery. Discovery means clarifying where execution stalls, which team owns the
          stall, and what evidence would prove improvement. The second decision is fit. Fit means choosing the
          operating model that matches your current constraints across role depth, stack complexity, compliance
          requirements, and collaboration overlap. The third decision is commitment. Commitment means approving a
          controlled implementation sequence with explicit checkpoints at day 30, day 60, and day 90 so leadership
          can measure whether the selected path actually changed system behavior. This sequence protects executive
          attention by reducing false starts and turning each hiring motion into a testable operational decision.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Discovery: define the dominant execution bottleneck and its measurable impact.</li>
          <li>Fit: align role, stack, and collaboration model to that bottleneck.</li>
          <li>Commitment: run staged checkpoints with explicit acceptance criteria.</li>
          <li>Validation: tie engineering metrics to business metrics before scaling.</li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground">What strong pages should always include</h3>
        <p>
          Pages intended for executive buyers must do more than introduce a topic. They need structured guidance
          that supports decision making. That structure starts with clear H1 and H2 sections that answer what
          problem is being solved, why the current model fails, and how a better model is executed in practice.
          It then requires H3 level segmentation that gives readers practical scan points for diagnostics, delivery
          controls, and implementation checkpoints. Bullet frameworks are critical because leaders often read under
          time pressure and need clear action paths, not dense unsegmented prose. Visual elements such as cards and
          guided tooltips are not decoration. They are interaction aids that reduce ambiguity and increase clarity.
        </p>
        <p>
          The target outcome is decision confidence. A CTO should be able to land on a page and understand the
          issue, the proposed operating change, and the proof threshold required to continue. A CIO should be able
          to map that same page to governance, cost control, and risk posture without requesting separate translation.
          If a page cannot support both views, it is usually too thin or too generic. This manual block exists to
          prevent that by enforcing practical, role relevant, and system level language across core routes.
        </p>

        <h3 className="text-lg font-semibold text-foreground">Implementation controls that reduce execution risk</h3>
        <p>
          Controlled implementation starts with ownership, then cadence, then telemetry. Ownership means each
          workflow segment has one accountable role for decision quality and one backup role for continuity.
          Cadence means weekly planning, daily progress visibility, and explicit risk escalation windows. Telemetry
          means tracking only the metrics that reflect real flow and quality: cycle time, review latency, change
          failure rate, and recovery speed. This combination keeps teams from mistaking activity for progress.
          It also gives leadership a stable way to detect drift before drift becomes a release failure.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Ownership map: one primary and one secondary decision owner per workflow stage.</li>
          <li>Cadence map: fixed review rhythm with visible risk handling windows.</li>
          <li>Telemetry map: flow, quality, and reliability metrics tied to business impact.</li>
          <li>Governance map: escalation thresholds and decision records for major changes.</li>
        </ul>
        <p>
          When these controls are applied consistently, teams generally ship with fewer reversals and stronger
          confidence at release boundaries. More importantly, hiring quality improves because the organization can
          evaluate talent against real operating behavior instead of isolated interview performance. This is where
          durable advantage appears. Not from finding isolated high performers, but from designing a system where
          strong people can produce strong outcomes repeatedly under real constraints.
        </p>

        <h3 className="text-lg font-semibold text-foreground">Contextual Interlinking Mesh for CTO Navigation</h3>
        <p>
          Use this anchor mesh to move from diagnosis to execution without losing context. These links are designed
          to keep leaders on a coherent path across planning, research, and operating doctrine.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><Link href="/playbook/hub" className="text-primary hover:underline">CTO playbook hub for executive operating decisions</Link></li>
          <li><Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics model for cost and velocity analysis</Link></li>
          <li><Link href="/playbook/nearshore-vs-offshore" className="text-primary hover:underline">nearshore versus offshore framework for strategic fit</Link></li>
          <li><Link href="/playbook/tco-model" className="text-primary hover:underline">total cost of ownership model for delivery planning</Link></li>
          <li><Link href="/research/hub" className="text-primary hover:underline">research hub for methodology and evidence standards</Link></li>
          <li><Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity framework for throughput and load analysis</Link></li>
          <li><Link href="/hire/by-role" className="text-primary hover:underline">hire by role path for capability based team design</Link></li>
          <li><Link href="/hire/by-technology" className="text-primary hover:underline">hire by technology path for stack aligned hiring</Link></li>
          <li><Link href="/hire/by-country" className="text-primary hover:underline">hire by country path for collaboration overlap planning</Link></li>
          <li><a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine for systems level execution design</a></li>
          <li><a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">evaluation protocols for interview and calibration consistency</a></li>
          <li><a href="https://research.teamstation.dev/protocols/governance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">governance protocols for risk and compliance controls</a></li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground">Final operating guidance</h3>
        <p>
          Use this manual as a live operating reference. Revisit it at each planning cycle, update constraints,
          and align hiring decisions to current delivery reality. If the organization changes direction, update
          role requirements, stack priorities, and governance checkpoints before opening new requisitions. This
          keeps execution coherent and protects leadership focus. The objective is not to publish longer pages for
          appearance. The objective is to build pages that function as practical decision instruments for teams
          that are accountable for production outcomes, compliance integrity, and sustained delivery quality.
        </p>

        <h3 className="text-lg font-semibold text-foreground">Common failure scenarios and corrective actions</h3>
        <p>
          Scenario one is rapid scaling without role boundary precision. Teams expand quickly, but platform and
          product decisions overlap, so review queues expand and accountability weakens. Corrective action is to
          re establish ownership per workflow stage and redefine acceptance criteria at the handoff boundary.
          Scenario two is tool adoption without operating discipline. Organizations introduce new stack components
          but do not update evaluation standards or governance controls, which increases variation rather than
          reducing it. Corrective action is to pair each stack decision with role calibration, telemetry updates,
          and escalation protocol updates. Scenario three is budget optimization without flow protection. Teams
          choose lower cost options but absorb delay through longer feedback loops and rework. Corrective action
          is to track true delivery cost including coordination overhead and release risk, not only hourly cost.
        </p>
        <p>
          Scenario four is fragmented communication in distributed teams. Daily progress is visible in tools, but
          decision intent is not visible across functions. This creates silent divergence between architecture,
          implementation, and security expectations. Corrective action is to enforce short decision records with
          explicit owner, rationale, and review date so every major change has an auditable context trail.
          Scenario five is weak day 1 onboarding structure. New hires receive environment access but no operational
          map, so early output looks active but lacks strategic alignment. Corrective action is to run a day 1 to
          day 14 operating checklist with ownership map, quality gate map, and dependency map completion targets.
          These practical corrections keep delivery systems stable as complexity grows and protect leadership
          confidence during aggressive roadmap cycles.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Failure pattern: rapid scale plus unclear boundaries. Corrective action: reset ownership and handoff controls.</li>
          <li>Failure pattern: stack change without governance update. Corrective action: update evaluation and telemetry together.</li>
          <li>Failure pattern: lower rate but slower flow. Corrective action: optimize for total delivery cost, not labor price.</li>
          <li>Failure pattern: visible tasks but invisible decisions. Corrective action: require concise decision records.</li>
          <li>Failure pattern: weak onboarding map. Corrective action: enforce day 1 to day 14 integration checkpoints.</li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground">Executive readiness checklist</h3>
        <p>
          Before launching the next hiring cycle, run this readiness checklist at leadership level. Confirm that
          each hiring request has a named operational objective, an explicit risk statement, and a quantifiable
          success metric. Confirm that interview loops are calibrated to scenario evidence and that evaluation notes
          can be audited for consistency. Confirm that onboarding includes a weekly cadence and clear escalation
          route. Confirm that the link mesh above is used in planning workflows so stakeholders can move from
          diagnosis to economic modeling to protocol level governance without losing context. This checklist helps
          ensure that hiring decisions are not isolated events. They become part of an integrated execution system.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Is the highest cost delivery constraint explicitly documented.</li>
          <li>Is there a role or stack decision mapped to that constraint.</li>
          <li>Are day 30, day 60, and day 90 targets defined and visible.</li>
          <li>Are interview pass criteria scenario based and role specific.</li>
          <li>Is there a weekly leadership review cadence for execution risk.</li>
          <li>Are protocol and doctrine links embedded in planning documents.</li>
        </ul>
      </div>
    </section>
  );
}
