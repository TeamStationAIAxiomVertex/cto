
'use client';
import 'client-only';

import { useState, useMemo, type ReactNode, useId } from 'react';
import { WithTooltip } from '@/components/client/tooltip';

const inputs = {
  // Base cost inputs
  buildIn: { salaryAnnual: 180000, burdenPct: 0.30 },
  onshore: { hourlyLow: 120, hourlyHigh: 150 },
  offshoreLegacy: { hourlyLow: 45, hourlyHigh: 65 },
  nearshoreLegacy: { hourlyLow: 45, hourlyHigh: 65 },
  nearshoreCoPilot: { hourlyMin: 40, hourlyCap: 47, includes: ['EOR', 'Devices/MDM', 'SSO/SAML/SCIM', 'Compliance'] },

  // Operational & multiplier inputs
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
      nearshoreCoPilot: { EM: 0, PM: 0 }, // Co-pilot model aims to eliminate this overhead
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
  totalMonthlyCost: string[];
};

type Row = {
  label: string;
  description: string;
  data: Cell[];
};

const columns = [
  'Build-In (In-House)',
  'Onshore (US)',
  'Offshore (Legacy)',
  'Nearshore (Legacy)',
  'Nearshore IT Co-Pilot (New Gen)',
];

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export default function ComparisonWidget() {
  const [basisHours, setBasisHours] = useState(173);
  const [offshoreOverhead, setOffshoreOverhead] = useState(0.25);
  const [nearshoreLegacyOverhead, setNearshoreLegacyOverhead] = useState(0.10);
  const [onshoreOverhead, setOnshoreOverhead] = useState(0.20);
  const [devHourBlended, setDevHourBlended] = useState(inputs.ops.devHourBlended);


  const baseId = useId();

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

  const data: Results = useMemo(() => {
    const buildInMonthly = (inputs.buildIn.salaryAnnual * (1 + inputs.buildIn.burdenPct)) / 12;

    const onshoreMonthlyLow = inputs.onshore.hourlyLow * basisHours * (1 + onshoreOverhead);
    const onshoreMonthlyHigh = inputs.onshore.hourlyHigh * basisHours * (1 + onshoreOverhead);

    const offshoreLegacyMonthlyLow = inputs.offshoreLegacy.hourlyLow * basisHours * (1 + offshoreOverhead);
    const offshoreLegacyMonthlyHigh = inputs.offshoreLegacy.hourlyHigh * basisHours * (1 + offshoreOverhead);

    const nearshoreLegacyMonthlyLow =
      inputs.nearshoreLegacy.hourlyLow * basisHours * (1 + nearshoreLegacyOverhead);
    const nearshoreLegacyMonthlyHigh =
      inputs.nearshoreLegacy.hourlyHigh * basisHours * (1 + nearshoreLegacyOverhead);

    const nearshoreCoPilotMonthlyLow = inputs.nearshoreCoPilot.hourlyMin * basisHours;
    const nearshoreCoPilotMonthlyHigh = inputs.nearshoreCoPilot.hourlyCap * basisHours;

    const prLatency = {
        buildIn: inputs.ops.prsPerMonth * (inputs.ops.reviewHours.buildIn - 1.0) * devHourBlended,
        onshore: inputs.ops.prsPerMonth * (inputs.ops.reviewHours.onshore - 1.0) * devHourBlended,
        offshoreLegacy: inputs.ops.prsPerMonth * (inputs.ops.reviewHours.offshoreLegacy - 1.0) * devHourBlended,
        nearshoreLegacy: inputs.ops.prsPerMonth * (inputs.ops.reviewHours.nearshoreLegacy - 1.0) * devHourBlended,
        nearshoreCoPilot: inputs.ops.prsPerMonth * (inputs.ops.reviewHours.nearshoreCoPilot - 1.0) * devHourBlended
    };

    const vacancy = {
        buildIn: inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.buildIn - inputs.ops.ttoDays.nearshoreCoPilot),
        onshore: inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.onshore - inputs.ops.ttoDays.nearshoreCoPilot),
        offshoreLegacy: inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.offshoreLegacy - inputs.ops.ttoDays.nearshoreCoPilot),
        nearshoreLegacy: inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.nearshoreLegacy - inputs.ops.ttoDays.nearshoreCoPilot),
        nearshoreCoPilot: inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.nearshoreCoPilot - inputs.ops.ttoDays.nearshoreCoPilot)
    };

    const cfr = {
        buildIn: inputs.ops.deploysPerMonth * (inputs.ops.cfr.buildIn - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD,
        onshore: inputs.ops.deploysPerMonth * (inputs.ops.cfr.onshore - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD,
        offshoreLegacy: inputs.ops.deploysPerMonth * (inputs.ops.cfr.offshoreLegacy - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD,
        nearshoreLegacy: inputs.ops.deploysPerMonth * (inputs.ops.cfr.nearshoreLegacy - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD,
        nearshoreCoPilot: 0
    };
    
    const mgmt = {
        buildIn: (inputs.ops.mgmtHoursMonth.buildIn.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.buildIn.PM * inputs.ops.mgmtRatesUSD.PM),
        onshore: (inputs.ops.mgmtHoursMonth.onshore.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.onshore.PM * inputs.ops.mgmtRatesUSD.PM),
        offshoreLegacy: (inputs.ops.mgmtHoursMonth.offshoreLegacy.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.offshoreLegacy.PM * inputs.ops.mgmtRatesUSD.PM),
        nearshoreLegacy: (inputs.ops.mgmtHoursMonth.nearshoreLegacy.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.nearshoreLegacy.PM * inputs.ops.mgmtRatesUSD.PM),
        nearshoreCoPilot: 0
    };
    
    const compliance = {
       buildIn: (inputs.ops.auditHoursSavedPerYear.buildIn * inputs.ops.complianceHourRateUSD) / 12,
       onshore: (inputs.ops.auditHoursSavedPerYear.onshore * inputs.ops.complianceHourRateUSD) / 12,
       offshoreLegacy: (inputs.ops.auditHoursSavedPerYear.offshoreLegacy * inputs.ops.complianceHourRateUSD) / 12,
       nearshoreLegacy: (inputs.ops.auditHoursSavedPerYear.nearshoreLegacy * inputs.ops.complianceHourRateUSD) / 12,
       nearshoreCoPilot: (inputs.ops.auditHoursSavedPerYear.nearshoreCoPilot * inputs.ops.complianceHourRateUSD) / 12
    }
    
    const total = {
       buildIn: buildInMonthly + prLatency.buildIn + mgmt.buildIn - compliance.buildIn,
       onshore: (onshoreMonthlyLow + onshoreMonthlyHigh)/2 + prLatency.onshore + mgmt.onshore - compliance.onshore,
       offshoreLegacy: (offshoreLegacyMonthlyLow + offshoreLegacyMonthlyHigh)/2 + prLatency.offshoreLegacy + mgmt.offshoreLegacy - compliance.offshoreLegacy,
       nearshoreLegacy: (nearshoreLegacyMonthlyLow + nearshoreLegacyMonthlyHigh)/2 + prLatency.nearshoreLegacy + mgmt.nearshoreLegacy - compliance.nearshoreLegacy,
       nearshoreCoPilot: (nearshoreCoPilotMonthlyLow + nearshoreCoPilotMonthlyHigh)/2 - compliance.nearshoreCoPilot
    }

    return {
      seatCost: [
        f(buildInMonthly),
        fRange(onshoreMonthlyLow, onshoreMonthlyHigh),
        fRange(offshoreLegacyMonthlyLow, offshoreLegacyMonthlyHigh),
        fRange(nearshoreLegacyMonthlyLow, nearshoreLegacyMonthlyHigh),
        fRange(nearshoreCoPilotMonthlyLow, nearshoreCoPilotMonthlyHigh),
      ],
      effectiveHourly: [
        f(buildInMonthly / basisHours),
        fRange(onshoreMonthlyLow / basisHours, onshoreMonthlyHigh / basisHours),
        fRange(offshoreLegacyMonthlyLow / basisHours, offshoreLegacyMonthlyHigh / basisHours),
        fRange(nearshoreLegacyMonthlyLow / basisHours, nearshoreLegacyMonthlyHigh / basisHours),
        fRange(nearshoreCoPilotMonthlyLow / basisHours, nearshoreCoPilotMonthlyHigh / basisHours),
      ],
      prLatencyCost: Object.values(prLatency).map(c => f(c)),
      vacancyCost: Object.values(vacancy).map(c => f(c)),
      cfrLoss: Object.values(cfr).map(c => f(c)),
      mgmtOverhead: Object.values(mgmt).map(c => f(c)),
      complianceSavings: Object.values(compliance).map(c => f(c)),
      totalMonthlyCost: Object.values(total).map(c => f(c)),
    };
  }, [basisHours, onshoreOverhead, offshoreOverhead, nearshoreLegacyOverhead, devHourBlended, f, fRange]);

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
        label: 'Mgmt overhead tax (monthly)',
        data: data.mgmtOverhead,
        description:
          'The cost of engineering/product management time spent on vendor coordination, rework, and other non-value-add activities.',
      },
      {
        label: 'Compliance readiness (audit hrs saved / mo)',
        data: data.complianceSavings,
        description:
          'The value of engineering/security time saved by having an audit-ready, compliant posture from day one, avoiding questionnaire fire-drills.',
      },
      {
        label: 'Total TCO / month',
        data: data.totalMonthlyCost,
        description:
          'The true monthly cost per seat, including seat cost and hidden taxes like latency and management overhead, minus compliance savings.',
      }
    ],
    [data]
  );

  return (
    <section className="my-16 rounded-xl border bg-card p-6 md:p-8 shadow-lg" id="comparison-widget">
      <h2 className="text-3xl font-bold text-center text-foreground">New-Gen Nearshore vs Onshore, Offshore, and Legacy Nearshore</h2>
      <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
        We count the hidden taxes—PR latency, vacancy days, failed-change costs, and management overhead—not just the sticker. The Nearshore IT Co-Pilot wins because it removes lag and makes outcomes observable.
      </p>

      <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 rounded-lg bg-background p-4 border text-sm">
        <div className="flex items-center gap-2">
          <WithTooltip content="The number of billable hours per month. 173 is standard for full-time.">
            <label htmlFor={`${baseId}-basis-hours`} className="font-medium text-muted-foreground border-b border-dashed">
              <span>Basis Hours:</span>
            </label>
          </WithTooltip>
          <select
            id={`${baseId}-basis-hours`}
            value={basisHours}
            onChange={(e) => setBasisHours(Number(e.target.value))}
            className="bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          >
            <option value="173">173</option>
            <option value="160">160</option>
          </select>
        </div>
         <div className="flex items-center gap-2">
          <WithTooltip content="Your blended engineering cost per hour, used for calculating latency and rework costs.">
            <label htmlFor={`${baseId}-dev-hour`} className="font-medium text-muted-foreground border-b border-dashed">
                <span>Blended Dev Rate:</span>
            </label>
           </WithTooltip>
           <span className="text-muted-foreground">$</span>
           <input
            type="number"
            id={`${baseId}-dev-hour`}
            min={50} max={200} step={5}
            value={devHourBlended}
            onChange={(e) => setDevHourBlended(Number(e.target.value))}
            className="w-20 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <WithTooltip content="Estimated management and administrative overhead for onshore vendors.">
            <label
              htmlFor={`${baseId}-onshore-overhead`}
              className="font-medium text-muted-foreground border-b border-dashed"
            >
              <span>Onshore Overhead:</span>
            </label>
          </WithTooltip>
          <input
            type="number"
            id={`${baseId}-onshore-overhead`}
            min={0} max={100} step={1}
            value={onshoreOverhead * 100}
            onChange={(e) => setOnshoreOverhead(clamp(e.target.valueAsNumber, 0, 100) / 100)}
            className="w-16 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
          <span className="text-muted-foreground">%</span>
        </div>
        <div className="flex items-center gap-2">
          <WithTooltip content="Estimated management, communication, and rework overhead for offshore vendors.">
            <label
              htmlFor={`${baseId}-offshore-overhead`}
              className="font-medium text-muted-foreground border-b border-dashed"
            >
              <span>Offshore Overhead:</span>
            </label>
          </WithTooltip>
          <input
            type="number"
            id={`${baseId}-offshore-overhead`}
            min={0} max={100} step={1}
            value={offshoreOverhead * 100}
            onChange={(e) => setOffshoreOverhead(clamp(e.target.valueAsNumber, 0, 100) / 100)}
            className="w-16 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
          <span className="text-muted-foreground">%</span>
        </div>
        <div className="flex items-center gap-2">
          <WithTooltip content="Estimated management and administrative overhead for legacy nearshore vendors.">
            <label
              htmlFor={`${baseId}-legacy-overhead`}
              className="font-medium text-muted-foreground border-b border-dashed"
            >
              <span>Legacy Nearshore Overhead:</span>
            </label>
          </WithTooltip>
          <input
            type="number"
            id={`${baseId}-legacy-overhead`}
            min={0} max={100} step={1}
            value={nearshoreLegacyOverhead * 100}
            onChange={(e) => setNearshoreLegacyOverhead(clamp(e.target.valueAsNumber, 0, 100) / 100)}
            className="w-16 bg-background border border-border rounded-md px-2 py-1 focus:ring-2 focus:ring-primary"
          />
          <span className="text-muted-foreground">%</span>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <caption className="sr-only">
            Comparison of different software development engagement models.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="p-3 border-b-2 border-border font-semibold text-foreground sticky left-0 bg-card w-1/6 z-10"
              >
                Metric
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className={`p-3 border-b-2 border-border font-semibold text-center w-[16.66%] ${
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
                  className="p-3 font-medium text-muted-foreground sticky left-0 bg-card w-1/6 z-10"
                >
                  <WithTooltip content={row.description}>
                    <span className="border-b border-dashed cursor-help">{row.label}</span>
                  </WithTooltip>
                </th>
                {row.data.map((cell, cellIndex) => (
                  <td
                    key={`${row.label}:${columns[cellIndex]}`}
                    className={`p-3 text-center font-mono w-[16.66%] ${
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
