
// Server component: no 'use client'
import * as React from 'react';

type Desire = 'up' | 'down';

export type HeroKpi = {
  id: string;
  label: string;
  value: number;        // actual value to show
  unit?: string;        // '%', 'h', 'd', etc
  target?: number;      // optional target (goal)
  max?: number;         // optional max for normalization (defaults to 100 for %)
  desire?: Desire;      // 'up' means higher is better; 'down' means lower is better
};

/** Normalize to a 0–100 fill percentage (how “good” we are on a simple scale). */
function fillPct({ value, target, max, desire }: HeroKpi) {
  if (desire === 'down') {
    // Lower is better: if target provided, compute attainment = target/value (clamped)
    if (target && value > 0) {
      return Math.max(0, Math.min(100, Math.round((target / value) * 100)));
    }
    // Fallback: if no target, invert against max if given
    if (max) {
      const pct = 100 - Math.round((value / max) * 100);
      return Math.max(0, Math.min(100, pct));
    }
    return 0;
  }
  // Higher is better: use max if given else assume % scale
  const denom = max ?? 100;
  const pct = Math.round((value / denom) * 100);
  return Math.max(0, Math.min(100, pct));
}

function isGood({ value, target, desire }: HeroKpi) {
  if (target == null) return false;
  return desire === 'down' ? value <= target : value >= target;
}

export default function HeroKpis({ items }: { items: HeroKpi[] }) {
  return (
    <div className="w-full grid gap-3">
      {items.map((k) => {
        const pct = fillPct(k);
        const good = isGood(k);
        const barColor = good ? 'bg-primary' : 'bg-destructive';
        const trackColor = 'bg-border';

        return (
          <section
            key={k.id}
            aria-label={`${k.label}: ${k.value}${k.unit ?? ''}${k.target != null ? ` (target ${k.target}${k.unit ?? ''})` : ''}`}
            className="rounded-xl border bg-card p-3"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p role="heading" aria-level="3" className="text-sm text-muted-foreground truncate">{k.label}</p>
              <div className="text-lg font-semibold text-foreground tabular-nums">
                {k.value}
                {k.unit ?? ''}
                {k.target != null && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    {k.desire === 'down' ? '≤' : '≥'} {k.target}
                    {k.unit ?? ''}
                  </span>
                )}
              </div>
            </div>

            <div className={`mt-2 h-2.5 w-full rounded-full ${trackColor} relative overflow-hidden`}>
              <div
                className={`h-full ${barColor} transition-none`}
                style={{ width: `${pct}%` }}
              />
              {/* Optional target marker when we can position it sensibly */}
              {k.max != null && k.target != null && k.max > 0 && (
                <div
                  aria-hidden
                  className="absolute top-0 h-full w-0.5 bg-foreground/60"
                  style={{ left: `${Math.max(0, Math.min(100, (k.target / k.max) * 100))}%` }}
                />
              )}
            </div>

            {/* Helper line for screen readers */}
            <p className="sr-only">
              {pct}% of goal. {good ? 'On target.' : 'Below target.'}
            </p>
          </section>
        );
      })}
    </div>
  );
}
