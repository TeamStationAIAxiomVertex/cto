
'use client';

import * as React from 'react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  LineChart,
  Line,
  Tooltip as RTooltip,
  XAxis,
  BarChart,
  Bar,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';

type TrendDir = 'up' | 'down' | 'neutral';
type Desire = 'up' | 'down'; // which direction is “good”

export type KpiItem = {
  id: string;
  label: string;
  value: number;
  unit?: string;     // '%', 'h', 'd'
  max?: number;      // normalize ring, e.g. 8h SLA -> max: 8
  target?: number;   // for “goal vs actual” in tooltip
  desire?: Desire;   // which way is good: 'down' for MTTR/cycle time
  trend?: number[];  // recent values for sparkline (old->new)
  colorVar?: string; // CSS var token e.g. '--primary', defaults to '--primary'
};

function pctOf(value: number, max = 100) {
  const pct = Math.round((value / max) * 100);
  return Math.max(0, Math.min(100, pct));
}

function trendDir(values?: number[], desire: Desire = 'up'): TrendDir {
  if (!values || values.length < 2) return 'neutral';
  const a = values[values.length - 2];
  const b = values[values.length - 1];
  const delta = b - a;
  // If “down is good” (e.g., MTTR), invert
  if (desire === 'down') {
    if (delta < -Number.EPSILON) return 'up';
    if (delta > Number.EPSILON) return 'down';
    return 'neutral';
  }
  // “up is good”
  if (delta > Number.EPSILON) return 'up';
  if (delta < -Number.EPSILON) return 'down';
  return 'neutral';
}

function DirIcon({ dir }: { dir: TrendDir }) {
  const cls =
    dir === 'up'
      ? 'text-emerald-500'
      : dir === 'down'
      ? 'text-red-500'
      : 'text-muted-foreground';
  const Icon =
    dir === 'up' ? ArrowUpRight : dir === 'down' ? ArrowDownRight : ArrowRight;
  return <Icon className={`h-3.5 w-3.5 ${cls}`} aria-hidden />;
}

function DonutTile({ item }: { item: KpiItem }) {
  const fill = `hsl(var(${item.colorVar ?? '--primary'}))`;
  const track = `hsl(var(--border))`;
  const fg = `hsl(var(--foreground))`;
  const muted = `hsl(var(--muted-foreground))`;
  const border = `hsl(var(--border))`;
  const bg = `hsl(var(--card))`;

  const normMax = item.max ?? 100;
  // For “lower is better” KPIs, you can visualize “target attainment”:
  // if desire === 'down' and target is set, convert to % of target floor.
  const valueForRing =
    item.desire === 'down' && item.target
      ? Math.max(0, Math.min(1, item.target / (item.value || item.target))) *
        100
      : pctOf(item.value, normMax);

  const dir = trendDir(item.trend, item.desire ?? 'up');
  const data = [{ name: item.label, value: Math.round(valueForRing) }];

  const spark = (item.trend ?? []).map((y, i) => ({ i, y }));

  return (
    <div
      className="relative rounded-xl border p-3 bg-card"
      style={{ borderColor: border, background: bg }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground truncate">{item.label}</div>
          <div className="mt-0.5 text-lg font-semibold text-foreground tabular-nums">
            {item.value}
            {item.unit ?? ''}
          </div>
        </div>
        <div className="shrink-0 rounded-md px-1.5 py-0.5 text-[10px] bg-background border text-muted-foreground">
          <DirIcon dir={dir} />
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        {/* Donut */}
        <div className="h-20">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={data}
              startAngle={90}
              endAngle={-270}
              innerRadius="70%"
              outerRadius="100%"
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar
                dataKey="value"
                background={{ fill: track }}
                fill={fill}
                cornerRadius={8}
              />
              <RTooltip
                cursor={false}
                content={({ payload }) => {
                  const p = payload?.[0]?.payload as { name: string; value: number } | undefined;
                  if (!p) return null;
                  return (
                    <div
                      style={{
                        background: `hsl(var(--popover))`,
                        border: `1px solid ${border}`,
                        borderRadius: 8,
                        padding: '8px 10px',
                        color: fg,
                        fontSize: 12,
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{item.label}</div>
                      <div style={{ color: muted }}>
                        {item.value}
                        {item.unit ?? ''}{' '}
                        {item.max ? `of ${item.max}${item.unit ?? ''}` : ''}
                        {item.target !== undefined ? ` · target ${item.target}${item.unit ?? ''}` : ''}
                        {` · ${p.value}%`}
                      </div>
                    </div>
                  );
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {/* Sparkline */}
        <div className="h-20">
          {spark.length > 1 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spark} margin={{ top: 6, bottom: 0, left: 0, right: 6 }}>
                <XAxis dataKey="i" hide />
                <Line
                  type="monotone"
                  dataKey="y"
                  dot={false}
                  stroke={fill}
                  strokeWidth={2}
                />
                <RTooltip
                  cursor={false}
                  content={({ payload }) => {
                    const val = payload?.[0]?.value as number | undefined;
                    if (val === undefined) return null;
                    return (
                      <div
                        style={{
                          background: `hsl(var(--popover))`,
                          border: `1px solid ${border}`,
                          borderRadius: 8,
                          padding: '6px 8px',
                          color: fg,
                          fontSize: 12,
                        }}
                      >
                        {val}
                        {item.unit ?? ''}
                      </div>
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full grid place-items-center">
              <span className="text-[11px] text-muted-foreground">no trend</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function HeroKpiBoard({
  items,
  rotateEveryMs = 6000,
  maxVisible = 6,
}: {
  items: KpiItem[];
  rotateEveryMs?: number;
  maxVisible?: number;
}) {
  const [offset, setOffset] = React.useState(0);
  const pages = Math.max(1, Math.ceil(items.length / maxVisible));
  React.useEffect(() => {
    if (pages <= 1) return;
    const t = setInterval(
      () => setOffset((o) => (o + 1) % pages),
      rotateEveryMs
    );
    return () => clearInterval(t);
  }, [pages, rotateEveryMs]);

  const start = offset * maxVisible;
  const slice = items.slice(start, start + maxVisible);

  return (
    <div className="w-full">
      {/* Desktop: grid of donuts */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {slice.map((k) => (
          <DonutTile key={k.id} item={k} />
        ))}
      </div>

      {/* Mobile: bars for readability */}
      <div className="md:hidden">
        <ResponsiveContainer width="100%" height={Math.max(140, slice.length * 46)}>
          <BarChart layout="vertical" data={slice}>
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="label"
              width={0}
              tick={false}
            />
            <Bar
              dataKey={(d: any) => {
                const max = d.max ?? 100;
                // same normalization as donuts
                if (d.desire === 'down' && d.target) {
                  return Math.max(0, Math.min(100, Math.round((d.target / (d.value || d.target)) * 100)));
                }
                return pctOf(d.value, max);
              }}
              radius={[0, 8, 8, 0]}
              fill="hsl(var(--primary))"
            />
            <RTooltip
              cursor={{ fill: 'hsl(var(--muted)/.15)' }}
            />
          </BarChart>
        </ResponsiveContainer>
        <ul className="mt-2 space-y-1">
          {slice.map((s) => (
            <li key={s.id} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="tabular-nums">
                {s.value}
                {s.unit ?? ''}
                {s.max ? ` / ${s.max}${s.unit ?? ''}` : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pager dots (desktop only when multiple pages) */}
      {pages > 1 && (
        <div className="hidden md:flex items-center justify-center gap-2 mt-3">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              aria-label={`Show KPI page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === offset ? 'w-6 bg-foreground' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HeroKpiBoard;
