
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
  const OUTER = 90; // %
  const THICK = 16; // %
  const STEP = 18; // %
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
      className="relative flex flex-col items-center rounded-2xl border p-4 shadow-sm"
      style={{ width: size, height: size, background: 'hsl(var(--card))' }}
      aria-label="Operational KPI rings"
      role="img"
    >
      <div style={{ width: '100%', height: '65%'}} className="relative">
        <RadialBarChart
          width={size}
          height={size * 0.65}
          cx="50%"
          cy="50%"
          innerRadius="38%"
          outerRadius="90%"
          data={[{ value: 100 }]} // scaffold for axis
          startAngle={90}
          endAngle={-270}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
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
          <div className="px-1">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">
              {title}
            </div>
            <div className="mt-1 text-3xl font-bold text-foreground">
              {normalized[0]?.value}
              {normalized[0]?.unit ?? '%'}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {normalized[0]?.label}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full mt-auto pt-2 border-t border-border/50">
        <div className="grid grid-cols-1 gap-1 text-xs">
          {normalized.map((m) => (
            <div key={m.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <span
                  className="inline-block h-2 w-2 flex-shrink-0 rounded-sm"
                  style={{ background: fillFromVar(m.colorVar) }}
                />
                <span className="text-muted-foreground truncate">{m.label}</span>
              </div>
              <div className="tabular-nums text-foreground font-medium">
                {m.value}
                {m.unit ?? ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KpiRings;
