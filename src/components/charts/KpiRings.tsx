'use client';

import * as React from 'react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip as RTooltip,
} from 'recharts';

type RingMetric = {
  /** Display name shown in legend */
  label: string;
  /** Raw value (e.g., 97, 7.6, 100) */
  value: number;
  /** Max to normalize against (default 100). Example: 8 for “7.6h of 8h SLA” */
  max?: number;
  /** CSS var name to color the ring: '--primary' | '--chart-2' | '--foreground' | etc. */
  colorVar: string;
  /** Optional unit shown in legend (e.g., '%', 'h', 'days') */
  unit?: string;
};

export function KpiRings({
  title = 'Operational KPIs',
  metrics,
  size = 260,
}: {
  title?: string;
  metrics: RingMetric[];
  size?: number;
}) {
  // Normalize to 0–100 for the arc fill
  const normalized = metrics.map((m) => ({
    ...m,
    pct: Math.max(0, Math.min(100, Math.round((m.value / (m.max ?? 100)) * 100))),
  }));

  // Build concentric band sizes (outer → inner)
  const OUTER = 86; // %
  const THICK = 14; // %
  const STEP = 16; // %
  const bands = normalized.map((_, i) => {
    const out = OUTER - i * STEP;
    const inn = out - THICK;
    return { innerRadius: `${inn}%`, outerRadius: `${out}%` };
  });

  // One data point per ring
  const dataPerRing = normalized.map((m) => [{ name: m.label, value: m.pct }]);

  // Theme helpers
  const fillFromVar = (v: string) => `hsl(var(${v}))`;
  const trackFill = `hsl(var(--border))`;
  const textMuted = `hsl(var(--muted-foreground))`;
  const textFg = `hsl(var(--foreground))`;
  const cardBg = `hsl(var(--popover))`;
  const border = `hsl(var(--border))`;

  return (
    <div
      className="relative rounded-2xl border p-4 shadow-sm"
      style={{ width: size, height: size, background: 'hsl(var(--card))' }}
      aria-label="Operational KPI rings"
      role="img"
    >
      <RadialBarChart
        width={size}
        height={size}
        cx="50%"
        cy="50%"
        innerRadius="38%"
        outerRadius="88%"
        data={[{ value: 100 }]} // scaffold for axis
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        {/* Rings */}
        {dataPerRing.map((ringData, i) => (
          <RadialBar
            key={normalized[i].label}
            data={ringData}
            dataKey="value"
            cornerRadius={8}
            background={{ fill: trackFill }}
            fill={fillFromVar(normalized[i].colorVar)}
            {...bands[i]}
          />
        ))}
        <RTooltip
          cursor={false}
          wrapperStyle={{ outline: 'none' }}
          content={({ payload }) => {
            if (!payload || !payload.length) return null;
            const name = payload[0].payload?.name as string;
            const idx = normalized.findIndex((m) => m.label === name);
            if (idx === -1) return null;
            const m = normalized[idx];
            return (
              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${border}`,
                  color: textFg,
                  borderRadius: 8,
                  padding: '8px 10px',
                  fontSize: 12,
                }}
              >
                <div style={{ fontWeight: 600 }}>{m.label}</div>
                <div style={{ color: textMuted }}>
                  {m.value}
                  {m.unit ? m.unit : ''}{' '}
                  {m.max ? `of ${m.max}${m.unit ?? ''}` : ''} · {m.pct}%
                </div>
              </div>
            );
          }}
        />
      </RadialBarChart>

      {/* Center label */}
      <div className="absolute inset-0 grid place-items-center text-center pointer-events-none">
        <div className="px-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">
            {title}
          </div>
          {/* Show the strongest headline metric in center (first ring) */}
          <div className="mt-1 text-3xl font-bold text-foreground">
            {normalized[0]?.value}
            {normalized[0]?.unit ?? '%'}
          </div>
          <div className="text-xs text-muted-foreground">
            {normalized[0]?.label}
            {normalized[0]?.max
              ? ` (${normalized[0].pct}%)`
              : normalized[0]
              ? ''
              : null}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 right-2 grid grid-cols-1 gap-1 text-xs">
        {normalized.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-sm"
                style={{ background: fillFromVar(m.colorVar) }}
              />
              <span className="text-muted-foreground">{m.label}</span>
            </div>
            <div className="tabular-nums text-foreground">
              {m.value}
              {m.unit ?? ''}
              {m.max ? ` / ${m.max}${m.unit ?? ''}` : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KpiRings;
