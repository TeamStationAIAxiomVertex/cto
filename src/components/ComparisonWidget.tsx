
'use client';
import { useState, useMemo, type ReactNode, useId } from 'react';
import { WithTooltip } from '@/components/ui/tooltip';

const inputs = {
  buildIn: { salaryAnnual: 180000, burdenPct: 0.30 },
  onshore: { hourlyLow: 120, hourlyHigh: 150 },
  offshoreLegacy: { hourlyLow: 45, hourlyHigh: 65 },
  nearshoreLegacy: { hourlyLow: 45, hourlyHigh: 65 },
  nearshoreCoPilot: { hourlyMin: 40, hourlyCap: 47, includes: ['EOR', 'Devices/MDM', 'SSO/SAML/SCIM', 'Compliance'] },
  ops: {
    prsPerMonth: 120,
    devHourBlended: 85,
    reviewHours: { buildIn: 2.0, onshore: 2.0, offshoreLegacy: 4.0, nearshoreLegacy: 2.0, nearshoreCoPilot: 1.0 },
    ttoDays: { buildIn: 60, onshore: 60, offshoreLegacy: 45, nearshoreLegacy: 30, nearshoreCoPilot: 14 },
    dailyValueUSD: 3000,
    deploysPerMonth: 60,
    incidentCostUSD: 12000,
    cfr: { buildIn: 0.06, onshore: 0.06, offshoreLegacy: 0.08, nearshoreLegacy: 0.06, nearshoreCoPilot: 0.04 },
    teamSize: 12,
    attrition: { buildIn: 0.15, onshore: 0.15, offshoreLegacy: 0.20, nearshoreLegacy: 0.16, nearshoreCoPilot: 0.12 },
    replaceCostUSD: 25000,
    mgmtHoursMonth: {
      buildIn: { EM: 15, PM: 10 },
      onshore: { EM: 18, PM: 12 },
      offshoreLegacy: { EM: 30, PM: 20 },
      nearshoreLegacy: { EM: 18, PM: 12 },
      nearshoreCoPilot: { EM: 0, PM: 0 },
    },
    mgmtRatesUSD: { EM: 120, PM: 95 },
    auditHoursSavedPerYear: { buildIn: 80, onshore: 80, offshoreLegacy: 20, nearshoreLegacy: 120, nearshoreCoPilot: 250 },
    complianceHourRateUSD: 110,
  },
} as const;

type Cell = ReactNode;

type Results = {
  seatCost: string[];
  effectiveHourly: string[];
  prLatencyCost: string[];
  vacancyCost: string[];
  cfrLoss: string[];
  mgmtOverhead: string[];
  complianceSavings: string[];
};

type Row = {
  label: string;
  description: string;
  data: Cell[];
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function ComparisonWidget() {
  const [basisHours, setBasisHours] = useState(173);
  const [offshoreOverhead, setOffshoreOverhead] = useState(0.25);
  const [nearshoreLegacyOverhead, setNearshoreLegacyOverhead] = useState(0.10);
  const [onshoreOverhead, setOnshoreOverhead] = useState(0.20);

  const baseId = useId();
  const basisHoursId = `${baseId}-basis-hours`;
  const onshoreOverheadId = `${baseId}-onshore-overhead`;
  const offshoreOverheadId = `${baseId}-offshore-overhead`;
  const legacyOverheadId = `${baseId}-legacy-overhead`;

  // Stable formatter, created once.
  const currency = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }),
    []
  );
  const f = (n?: number) => (typeof n === 'number' ? currency.format(n) : '$0');
  const fRange = (low?: number, high?: number) => `${f(low)} – ${f(high)}`;

  // Clamp inputs used in calculations to avoid subtle bugs.
  const safeHours = useMemo(() => clamp(Number(basisHours) || 0, 120, 200), [basisHours]);
  const safeOnshoreOH = useMemo(() => clamp(onshoreOverhead, 0, 1), [onshoreOverhead]);
  const safeOffshoreOH = useMemo(() => clamp(offshoreOverhead, 0, 1), [offshoreOverhead]);
  const safeLegacyNearshoreOH = useMemo(() => clamp(nearshoreLegacyOverhead, 0, 1), [nearshoreLegacyOverhead]);

  const columns = [
    'Build-In (In-House)',
    'Onshore (US)',
    'Offshore (Legacy)',
    'Nearshore (Legacy)',
    'Nearshore IT Co-Pilot (New Gen)',
  ] as const;

  const data: Results = useMemo(() => {
    const buildInMonthly = (inputs.buildIn.salaryAnnual * (1 + inputs.buildIn.burdenPct)) / 12;

    const onshoreMonthlyLow = inputs.onshore.hourlyLow * safeHours * (1 + safeOnshoreOH);
    const onshoreMonthlyHigh = inputs.onshore.hourlyHigh * safeHours * (1 + safeOnshoreOH);

    const offshoreLegacyMonthlyLow = inputs.offshoreLegacy.hourlyLow * safeHours * (1 + safeOffshoreOH);
    const offshoreLegacyMonthlyHigh = inputs.offshoreLegacy.hourlyHigh * safeHours * (1 + safeOffshoreOH);

    const nearshoreLegacyMonthlyLow =
      inputs.nearshoreLegacy.hourlyLow * safeHours * (1 + safeLegacyNearshoreOH);
    const nearshoreLegacyMonthlyHigh =
      inputs.nearshoreLegacy.hourlyHigh * safeHours * (1 + safeLegacyNearshoreOH);

    const nearshoreCoPilotMonthlyLow = inputs.nearshoreCoPilot.hourlyMin * safeHours;
    const nearshoreCoPilotMonthlyHigh = inputs.nearshoreCoPilot.hourlyCap * safeHours;

    return {
      seatCost: [
        f(buildInMonthly),
        fRange(onshoreMonthlyLow, onshoreMonthlyHigh),
        fRange(offshoreLegacyMonthlyLow, offshoreLegacyMonthlyHigh),
        fRange(nearshoreLegacyMonthlyLow, nearshoreLegacyMonthlyHigh),
        fRange(nearshoreCoPilotMonthlyLow, nearshoreCoPilotMonthlyHigh),
      ],
      effectiveHourly: [
        f(buildInMonthly / safeHours),
        fRange(onshoreMonthlyLow / safeHours, onshoreMonthlyHigh / safeHours),
        fRange(offshoreLegacyMonthlyLow / safeHours, offshoreLegacyMonthlyHigh / safeHours),
        fRange(nearshoreLegacyMonthlyLow / safeHours, nearshoreLegacyMonthlyHigh / safeHours),
        fRange(nearshoreCoPilotMonthlyLow / safeHours, nearshoreCoPilotMonthlyHigh / safeHours),
      ],
      prLatencyCost: [
        f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.buildIn - 1.0) * inputs.ops.devHourBlended),
        f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.onshore - 1.0) * inputs.ops.devHourBlended),
        f(
          inputs.ops.prsPerMonth *
            (inputs.ops.reviewHours.offshoreLegacy - 1.0) *
            inputs.ops.devHourBlended
        ),
        f(
          inputs.ops.prsPerMonth *
            (inputs.ops.reviewHours.nearshoreLegacy - 1.0) *
            inputs.ops.devHourBlended
        ),
        f(
          inputs.ops.prsPerMonth *
            (inputs.ops.reviewHours.nearshoreCoPilot - 1.0) *
            inputs.ops.devHourBlended
        ),
      ],
      vacancyCost: [
        f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.buildIn - inputs.ops.ttoDays.nearshoreCoPilot)),
        f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.onshore - inputs.ops.ttoDays.nearshoreCoPilot)),
        f(
          inputs.ops.dailyValueUSD *
            (inputs.ops.ttoDays.offshoreLegacy - inputs.ops.ttoDays.nearshoreCoPilot)
        ),
        f(
          inputs.ops.dailyValueUSD *
            (inputs.ops.ttoDays.nearshoreLegacy - inputs.ops.ttoDays.nearshoreCoPilot)
        ),
        f(
          inputs.ops.dailyValueUSD *
            (inputs.ops.ttoDays.nearshoreCoPilot - inputs.ops.ttoDays.nearshoreCoPilot)
        ),
      ],
      cfrLoss: [
        f(
          inputs.ops.deploysPerMonth *
            (inputs.ops.cfr.buildIn - inputs.ops.cfr.nearshoreCoPilot) *
            inputs.ops.incidentCostUSD
        ),
        f(
          inputs.ops.deploysPerMonth *
            (inputs.ops.cfr.onshore - inputs.ops.cfr.nearshoreCoPilot) *
            inputs.ops.incidentCostUSD
        ),
        f(
          inputs.ops.deploysPerMonth *
            (inputs.ops.cfr.offshoreLegacy - inputs.ops.cfr.nearshoreCoPilot) *
            inputs.ops.incidentCostUSD
        ),
        f(
          inputs.ops.deploysPerMonth *
            (inputs.ops.cfr.nearshoreLegacy - inputs.ops.cfr.nearshoreCoPilot) *
            inputs.ops.incidentCostUSD
        ),
        f(
          inputs.ops.deploysPerMonth *
            (inputs.ops.cfr.nearshoreCoPilot - inputs.ops.cfr.nearshoreCoPilot) *
            inputs.ops.incidentCostUSD
        ),
      ],
      mgmtOverhead: [
        f(
          12 *
            (inputs.ops.mgmtHoursMonth.buildIn.EM * inputs.ops.mgmtRatesUSD.EM +
              inputs.ops.mgmtHoursMonth.buildIn.PM * inputs.ops.mgmtRatesUSD.PM)
        ),
        f(
          12 *
            (inputs.ops.mgmtHoursMonth.onshore.EM * inputs.ops.mgmtRatesUSD.EM +
              inputs.ops.mgmtHoursMonth.onshore.PM * inputs.ops.mgmtRatesUSD.PM)
        ),
        f(
          12 *
            (inputs.ops.mgmtHoursMonth.offshoreLegacy.EM * inputs.ops.mgmtRatesUSD.EM +
              inputs.ops.mgmtHoursMonth.offshoreLegacy.PM * inputs.ops.mgmtRatesUSD.PM)
        ),
        f(
          12 *
            (inputs.ops.mgmtHoursMonth.nearshoreLegacy.EM * inputs.ops.mgmtRatesUSD.EM +
              inputs.ops.mgmtHoursMonth.nearshoreLegacy.PM * inputs.ops.mgmtRatesUSD.PM)
        ),
        f(
          12 *
            (inputs.ops.mgmtHoursMonth.nearshoreCoPilot.EM * inputs.ops.mgmtRatesUSD.EM +
              inputs.ops.mgmtHoursMonth.nearshoreCoPilot.PM * inputs.ops.mgmtRatesUSD.PM)
        ),
      ],
      complianceSavings: [
        f(inputs.ops.auditHoursSavedPerYear.buildIn * inputs.ops.complianceHourRateUSD),
        f(inputs.ops.auditHoursSavedPerYear.onshore * inputs.ops.complianceHourRateUSD),
        f(inputs.ops.auditHoursSavedPerYear.offshoreLegacy * inputs.ops.complianceHourRateUSD),
        f(inputs.ops.auditHoursSavedPerYear.nearshoreLegacy * inputs.ops.complianceHourRateUSD),
        f(inputs.ops.auditHoursSavedPerYear.nearshoreCoPilot * inputs.ops.complianceHourRateUSD),
      ],
    };
  }, [safeHours, safeOnshoreOH, safeOffshoreOH, safeLegacyNearshoreOH, currency]);

  const rows: Row[] = useMemo(
    () => [
      {
        label: 'Fully-loaded seat cost (monthly)',
        data: data.seatCost,
        description:
          'The total monthly cost per engineer, including salary, benefits, taxes, and all vendor overhead.',
      },
      {
        label: 'Effective hourly',
        data: data.effectiveHourly,
        description:
          'The fully-loaded monthly cost divided by the basis hours, representing the true hourly rate.',
      },
      {
        label: 'Time-zone overlap (hrs/day)',
        data: ['8+', '8+', '0-2', '4-8', '4-8'],
        description:
          'The number of daily working hours that overlap with a standard US time zone (e.g., PST/EST).',
      },
      {
        label: 'PR review median (hrs)',
        data: ['2', '2', '4', '2', '1'],
        description:
          "The median time a developer's Pull Request waits for a code review. Higher latency directly delays feature delivery.",
      },
      {
        label: 'PR latency cost vs 1h (monthly)',
        data: data.prLatencyCost,
        description:
          'The monthly cost of developer time wasted waiting for code reviews, calculated against a 1-hour ideal.',
      },
      {
        label: 'Time-to-offer (days)',
        data: [
          inputs.ops.ttoDays.buildIn,
          inputs.ops.ttoDays.onshore,
          inputs.ops.ttoDays.offshoreLegacy,
          inputs.ops.ttoDays.nearshoreLegacy,
          inputs.ops.ttoDays.nearshoreCoPilot,
        ],
        description:
          "The number of days from opening a role to a signed offer. Shorter times reduce the 'Vacancy Tax'.",
      },
      {
        label: 'Vacancy cost vs Co-Pilot (one role)',
        data: data.vacancyCost,
        description:
          "The opportunity cost (lost revenue/value) incurred by a role remaining empty, calculated against the Co-Pilot's faster hiring time.",
      },
      {
        label: 'Change failure rate (CFR)',
        data: [
          `${(inputs.ops.cfr.buildIn * 100).toFixed(0)}%`,
          `${(inputs.ops.cfr.onshore * 100).toFixed(0)}%`,
          `${(inputs.ops.cfr.offshoreLegacy * 100).toFixed(0)}%`,
          `${(inputs.ops.cfr.nearshoreLegacy * 100).toFixed(0)}%`,
          `${(inputs.ops.cfr.nearshoreCoPilot * 100).toFixed(0)}%`,
        ],
        description:
          'The percentage of deployments that cause a failure in production (a core DORA metric).',
      },
      {
        label: '$ loss vs Co-Pilot from CFR (monthly)',
        data: data.cfrLoss,
        description:
          "The monthly financial impact of failed changes, based on the cost of each incident, compared to the Co-Pilot's lower CFR.",
      },
      {
        label: 'Attrition (annual)',
        data: [
          `${(inputs.ops.attrition.buildIn * 100).toFixed(0)}%`,
          `${(inputs.ops.attrition.onshore * 100).toFixed(0)}%`,
          `${(inputs.ops.attrition.offshoreLegacy * 100).toFixed(0)}%`,
          `${(inputs.ops.attrition.nearshoreLegacy * 100).toFixed(0)}%`,
          `${(inputs.ops.attrition.nearshoreCoPilot * 100).toFixed(0)}%`,
        ],
        description:
          'The annual percentage of engineers who leave, creating high replacement and knowledge transfer costs.',
      },
      {
        label: 'Mgmt overhead (annual)',
        data: data.mgmtOverhead,
        description:
          'The cost of engineering/product management time spent on vendor coordination, rework, and other non-value-add activities.',
      },
      {
        label: 'Compliance readiness (audit hrs saved / $)',
        data: data.complianceSavings,
        description:
          'The value of engineering/security time saved by having an audit-ready, compliant posture from day one, avoiding questionnaire fire-drills.',
      },
    ],
    [data]
  );

  return (
    <section className="my-16 rounded-xl border bg-card p-6 md:p-8 shadow-lg" id="comparison-widget">
      <h2 className="text-3xl font-bold text-center text-foreground">New-Gen Nearshore vs Onshore, Offshore, and Legacy Nearshore</h2>
      <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
        We count the hidden taxes—PR latency, vacancy days, failed-change costs, and management overhead—not just the sticker. The Nearshore IT Co-Pilot wins because it removes lag and makes outcomes observable.
      </p>

      <div className="mt-6 flex flex-wrap justify-center md:justify-end items-center gap-4 rounded-lg bg-background p-4 border text-sm">
        <div className="flex items-center gap-2">
          <label htmlFor={basisHoursId} className="font-medium text-muted-foreground">
            Basis Hours:
          </label>
          <select
            id={basisHoursId}
            value={basisHours}
            onChange={(e) => setBasisHours(Number(e.target.value))}
            className="bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          >
            <option value="173">173</option>
            <option value="160">160</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <WithTooltip label="Estimated management and administrative overhead for onshore vendors.">
            <label
              htmlFor={onshoreOverheadId}
              className="font-medium text-muted-foreground border-b border-dashed"
            >
              Onshore Overhead:
            </label>
          </WithTooltip>
          <input
            type="number"
            id={onshoreOverheadId}
            min={0}
            max={100}
            step={0.1}
            inputMode="decimal"
            value={onshoreOverhead * 100}
            onChange={(e) => {
              const v = e.currentTarget.valueAsNumber;
              if (!Number.isFinite(v)) return;
              setOnshoreOverhead(clamp(v, 0, 100) / 100);
            }}
            className="w-16 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
          <span className="text-muted-foreground">%</span>
        </div>
        <div className="flex items-center gap-2">
          <WithTooltip label="Estimated management, communication, and rework overhead for offshore vendors.">
            <label
              htmlFor={offshoreOverheadId}
              className="font-medium text-muted-foreground border-b border-dashed"
            >
              Offshore Overhead:
            </label>
          </WithTooltip>
          <input
            type="number"
            id={offshoreOverheadId}
            min={0}
            max={100}
            step={0.1}
            inputMode="decimal"
            value={offshoreOverhead * 100}
            onChange={(e) => {
              const v = e.currentTarget.valueAsNumber;
              if (!Number.isFinite(v)) return;
              setOffshoreOverhead(clamp(v, 0, 100) / 100);
            }}
            className="w-16 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
          <span className="text-muted-foreground">%</span>
        </div>
        <div className="flex items-center gap-2">
          <WithTooltip label="Estimated management and administrative overhead for legacy nearshore vendors.">
            <label
              htmlFor={legacyOverheadId}
              className="font-medium text-muted-foreground border-b border-dashed"
            >
              Legacy Nearshore Overhead:
            </label>
          </WithTooltip>
          <input
            type="number"
            id={legacyOverheadId}
            min={0}
            max={100}
            step={0.1}
            inputMode="decimal"
            value={nearshoreLegacyOverhead * 100}
            onChange={(e) => {
              const v = e.currentTarget.valueAsNumber;
              if (!Number.isFinite(v)) return;
              setNearshoreLegacyOverhead(clamp(v, 0, 100) / 100);
            }}
            className="w-16 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
          <span className="text-muted-foreground">%</span>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[1200px] text-sm text-left border-collapse">
          <caption className="sr-only">
            Comparison of different software development engagement models.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="p-3 border-b-2 border-border font-semibold text-foreground sticky left-0 bg-card w-[200px] z-10"
              >
                Metric
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className={`p-3 border-b-2 border-border font-semibold text-center ${
                    col.includes('Co-Pilot') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {col}
                  {col.includes('Co-Pilot') && (
                    <div className="text-xs font-normal bg-primary/10 text-primary rounded-full px-2 py-0.5 mt-1 inline-block">
                      Includes {inputs.nearshoreCoPilot.includes.join(' • ')}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.label} className="hover:bg-background/50">
                <th
                  scope="row"
                  className="p-3 font-medium text-muted-foreground sticky left-0 bg-card w-[200px] z-10"
                >
                  <WithTooltip label={row.description}>
                    <span className="border-b border-dashed cursor-help">{row.label}</span>
                  </WithTooltip>
                </th>
                {row.data.map((cell, cellIndex) => (
                  <td
                    key={`${row.label}:${columns[cellIndex]}`}
                    className={`p-3 text-center font-mono ${
                      cellIndex === 4 ? 'text-primary font-bold' : 'text-foreground'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
