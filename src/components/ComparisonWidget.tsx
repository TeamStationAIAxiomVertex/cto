
'use client';
import { useState, useEffect } from 'react';

export function ComparisonWidget() {
    const [basisHours, setBasisHours] = useState(173);
    const [offshoreOverhead, setOffshoreOverhead] = useState(0.25);
    const [nearshoreLegacyOverhead, setNearshoreLegacyOverhead] = useState(0.10);
    const [onshoreOverhead, setOnshoreOverhead] = useState(0.20);
    const [data, setData] = useState<any>(null);

    const inputs = {
        buildIn: { salaryAnnual: 180000, burdenPct: 0.30 },
        onshore: { hourlyLow: 120, hourlyHigh: 150 },
        offshoreLegacy: { hourlyLow: 45, hourlyHigh: 65 },
        nearshoreLegacy: { hourlyLow: 45, hourlyHigh: 65 },
        nearshoreCoPilot: { hourlyMin: 40, hourlyCap: 47, includes: ["EOR","Devices/MDM","SSO/SAML/SCIM","Compliance"] },
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
              nearshoreCoPilot: { EM: 0, PM: 0 }
            },
            mgmtRatesUSD: { EM: 120, PM: 95 },
            auditHoursSavedPerYear: { buildIn: 80, onshore: 80, offshoreLegacy: 20, nearshoreLegacy: 120, nearshoreCoPilot: 250 },
            complianceHourRateUSD: 110
        }
    };

    useEffect(() => {
        function calculate() {
            const f = (n: number | undefined) => n ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) : '$0';
            const fRange = (low: number | undefined, high: number | undefined) => `${f(low)} – ${f(high)}`;

            const buildInMonthly = ((inputs.buildIn.salaryAnnual * (1 + inputs.buildIn.burdenPct)) / 12);
            const onshoreMonthlyLow = (inputs.onshore.hourlyLow * basisHours * (1 + onshoreOverhead));
            const onshoreMonthlyHigh = (inputs.onshore.hourlyHigh * basisHours * (1 + onshoreOverhead));
            const offshoreLegacyMonthlyLow = (inputs.offshoreLegacy.hourlyLow * basisHours * (1 + offshoreOverhead));
            const offshoreLegacyMonthlyHigh = (inputs.offshoreLegacy.hourlyHigh * basisHours * (1 + offshoreOverhead));
            const nearshoreLegacyMonthlyLow = (inputs.nearshoreLegacy.hourlyLow * basisHours * (1 + nearshoreLegacyOverhead));
            const nearshoreLegacyMonthlyHigh = (inputs.nearshoreLegacy.hourlyHigh * basisHours * (1 + nearshoreLegacyOverhead));
            const nearshoreCoPilotMonthlyLow = (inputs.nearshoreCoPilot.hourlyMin * basisHours);
            const nearshoreCoPilotMonthlyHigh = (inputs.nearshoreCoPilot.hourlyCap * basisHours);

            const results = {
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
                prLatencyCost: [
                    f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.buildIn - 1.0) * inputs.ops.devHourBlended),
                    f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.onshore - 1.0) * inputs.ops.devHourBlended),
                    f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.offshoreLegacy - 1.0) * inputs.ops.devHourBlended),
                    f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.nearshoreLegacy - 1.0) * inputs.ops.devHourBlended),
                    f(inputs.ops.prsPerMonth * (inputs.ops.reviewHours.nearshoreCoPilot - 1.0) * inputs.ops.devHourBlended),
                ],
                vacancyCost: [
                    f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.buildIn - inputs.ops.ttoDays.nearshoreCoPilot)),
                    f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.onshore - inputs.ops.ttoDays.nearshoreCoPilot)),
                    f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.offshoreLegacy - inputs.ops.ttoDays.nearshoreCoPilot)),
                    f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.nearshoreLegacy - inputs.ops.ttoDays.nearshoreCoPilot)),
                    f(inputs.ops.dailyValueUSD * (inputs.ops.ttoDays.nearshoreCoPilot - inputs.ops.ttoDays.nearshoreCoPilot)),
                ],
                cfrLoss: [
                    f(inputs.ops.deploysPerMonth * (inputs.ops.cfr.buildIn - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD),
                    f(inputs.ops.deploysPerMonth * (inputs.ops.cfr.onshore - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD),
                    f(inputs.ops.deploysPerMonth * (inputs.ops.cfr.offshoreLegacy - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD),
                    f(inputs.ops.deploysPerMonth * (inputs.ops.cfr.nearshoreLegacy - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD),
                    f(inputs.ops.deploysPerMonth * (inputs.ops.cfr.nearshoreCoPilot - inputs.ops.cfr.nearshoreCoPilot) * inputs.ops.incidentCostUSD),
                ],
                mgmtOverhead: [
                    f(12 * (inputs.ops.mgmtHoursMonth.buildIn.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.buildIn.PM * inputs.ops.mgmtRatesUSD.PM)),
                    f(12 * (inputs.ops.mgmtHoursMonth.onshore.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.onshore.PM * inputs.ops.mgmtRatesUSD.PM)),
                    f(12 * (inputs.ops.mgmtHoursMonth.offshoreLegacy.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.offshoreLegacy.PM * inputs.ops.mgmtRatesUSD.PM)),
                    f(12 * (inputs.ops.mgmtHoursMonth.nearshoreLegacy.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.nearshoreLegacy.PM * inputs.ops.mgmtRatesUSD.PM)),
                    f(12 * (inputs.ops.mgmtHoursMonth.nearshoreCoPilot.EM * inputs.ops.mgmtRatesUSD.EM + inputs.ops.mgmtHoursMonth.nearshoreCoPilot.PM * inputs.ops.mgmtRatesUSD.PM)),
                ],
                complianceSavings: [
                    f(inputs.ops.auditHoursSavedPerYear.buildIn * inputs.ops.complianceHourRateUSD),
                    f(inputs.ops.auditHoursSavedPerYear.onshore * inputs.ops.complianceHourRateUSD),
                    f(inputs.ops.auditHoursSavedPerYear.offshoreLegacy * inputs.ops.complianceHourRateUSD),
                    f(inputs.ops.auditHoursSavedPerYear.nearshoreLegacy * inputs.ops.complianceHourRateUSD),
                    f(inputs.ops.auditHoursSavedPerYear.nearshoreCoPilot * inputs.ops.complianceHourRateUSD),
                ]
            };
            setData(results);
        }
        calculate();
    }, [basisHours, offshoreOverhead, nearshoreLegacyOverhead, onshoreOverhead]);

    if (!data) return <div>Loading...</div>;

    const columns = [
        "Build-In (In-House)", "Onshore (US)", "Offshore (Legacy)", "Nearshore (Legacy)", "Nearshore IT Co-Pilot (New Gen)"
    ];

    const rows = [
        { label: "Fully-loaded seat cost (monthly)", data: data.seatCost },
        { label: "Effective hourly", data: data.effectiveHourly },
        { label: "Time-zone overlap (hrs/day)", data: ["8+", "8+", "0-2", "4-8", "4-8"] },
        { label: "PR review median (hrs)", data: ["2", "2", "4", "2", "1"] },
        { label: "PR latency cost vs 1h (monthly)", data: data.prLatencyCost },
        { label: "Time-to-offer (days)", data: [
            inputs.ops.ttoDays.buildIn, 
            inputs.ops.ttoDays.onshore, 
            inputs.ops.ttoDays.offshoreLegacy, 
            inputs.ops.ttoDays.nearshoreLegacy, 
            inputs.ops.ttoDays.nearshoreCoPilot
        ] },
        { label: "Vacancy cost vs Co-Pilot (one role)", data: data.vacancyCost },
        { label: "Change failure rate (CFR)", data: [
            `${(inputs.ops.cfr.buildIn * 100).toFixed(0)}%`,
            `${(inputs.ops.cfr.onshore * 100).toFixed(0)}%`,
            `${(inputs.ops.cfr.offshoreLegacy * 100).toFixed(0)}%`,
            `${(inputs.ops.cfr.nearshoreLegacy * 100).toFixed(0)}%`,
            `${(inputs.ops.cfr.nearshoreCoPilot * 100).toFixed(0)}%`
        ] },
        { label: "$ loss vs Co-Pilot from CFR (monthly)", data: data.cfrLoss },
        { label: "Attrition (annual)", data: [
            `${(inputs.ops.attrition.buildIn * 100).toFixed(0)}%`,
            `${(inputs.ops.attrition.onshore * 100).toFixed(0)}%`,
            `${(inputs.ops.attrition.offshoreLegacy * 100).toFixed(0)}%`,
            `${(inputs.ops.attrition.nearshoreLegacy * 100).toFixed(0)}%`,
            `${(inputs.ops.attrition.nearshoreCoPilot * 100).toFixed(0)}%`
        ] },
        { label: "Mgmt overhead (annual)", data: data.mgmtOverhead },
        { label: "Compliance readiness (audit hours saved / $)", data: data.complianceSavings },
    ];


  return (
    <section className="my-16" id="comparison-widget">
        <h2 className="text-3xl font-bold text-center">New-Gen Nearshore vs Onshore, Offshore, and Legacy Nearshore</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
            We count the hidden taxes—PR latency, vacancy days, failed-change costs, and management overhead—not just the sticker. The Nearshore IT Co-Pilot wins because it removes lag and makes outcomes observable.
        </p>

        <div className="flex flex-wrap justify-end items-center gap-4 my-4 text-sm">
             <div className="flex items-center gap-2">
                <label htmlFor="basis-hours" className="font-medium">Basis Hours:</label>
                <select id="basis-hours" value={basisHours} onChange={e => setBasisHours(Number(e.target.value))} className="bg-background border border-border rounded-md px-2 py-1">
                    <option value="173">173</option>
                    <option value="160">160</option>
                </select>
            </div>
             <div className="flex items-center gap-2">
                <label htmlFor="onshore-overhead" className="font-medium">Onshore Overhead:</label>
                <input type="number" id="onshore-overhead" value={onshoreOverhead * 100} onChange={e => setOnshoreOverhead(Number(e.target.value) / 100)} className="w-16 bg-background border border-border rounded-md px-2 py-1" />
                <span>%</span>
            </div>
             <div className="flex items-center gap-2">
                <label htmlFor="offshore-overhead" className="font-medium">Offshore Overhead:</label>
                <input type="number" id="offshore-overhead" value={offshoreOverhead * 100} onChange={e => setOffshoreOverhead(Number(e.target.value) / 100)} className="w-16 bg-background border border-border rounded-md px-2 py-1" />
                <span>%</span>
            </div>
             <div className="flex items-center gap-2">
                <label htmlFor="legacy-overhead" className="font-medium">Legacy Nearshore Overhead:</label>
                <input type="number" id="legacy-overhead" value={nearshoreLegacyOverhead * 100} onChange={e => setNearshoreLegacyOverhead(Number(e.target.value) / 100)} className="w-16 bg-background border border-border rounded-md px-2 py-1" />
                 <span>%</span>
            </div>
        </div>
      
        <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-sm text-left border-collapse">
                <caption className="sr-only">Comparison of different software development engagement models.</caption>
                <thead>
                    <tr>
                        <th scope="col" className="p-2 border-b border-border font-semibold text-foreground sticky left-0 bg-background w-[200px]">Metric</th>
                        {columns.map((col, i) => (
                            <th key={i} scope="col" className={`p-2 border-b border-border font-semibold text-center ${i === 4 ? 'text-primary' : 'text-foreground'}`}>
                                {col}
                                {i === 4 && <div className="text-xs font-normal bg-primary/10 text-primary rounded-full px-2 py-0.5 mt-1 inline-block">Includes EOR • Devices/MDM • SSO/SAML/SCIM • Compliance</div>}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-card/50">
                            <th scope="row" className="p-2 border-b border-border font-medium text-muted-foreground sticky left-0 bg-background w-[200px]">{row.label}</th>
                            {row.data.map((cell, cellIndex) => (
                                <td key={cellIndex} className={`p-2 border-b border-border text-center font-mono ${cellIndex === 4 ? 'text-primary font-bold' : 'text-foreground'}`}>
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
