import React from "react";

type ScorePoint = {
  label: string;
  value: number;
  target?: number;
};

function clampScore(value: number) {
  return Math.max(0, Math.min(5, value));
}

export default function ScoreProfilePanel({
  title = "Score profile",
  subtitle,
  points,
}: {
  title?: string;
  subtitle?: string;
  points: ScorePoint[];
}) {
  const width = 340;
  const height = 120;
  const padX = 14;
  const padY = 14;
  const usableW = width - padX * 2;
  const usableH = height - padY * 2;

  const path = points
    .map((p, idx) => {
      const x = padX + (idx * usableW) / Math.max(1, points.length - 1);
      const y = padY + usableH - (clampScore(p.value) / 5) * usableH;
      return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const avg =
    points.length > 0
      ? points.reduce((sum, p) => sum + clampScore(p.value), 0) / points.length
      : 0;

  return (
    <section className="glass-panel gradient-ring rounded-xl border border-border/70 p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        <div className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          Avg {avg.toFixed(1)} / 5
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border/70 bg-background/60 p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-28 w-full">
          <defs>
            <linearGradient id="scoreLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="hsl(var(--chart-2))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>

          {[1, 2, 3, 4].map((tick) => {
            const y = padY + usableH - (tick / 5) * usableH;
            return (
              <line
                key={tick}
                x1={padX}
                x2={width - padX}
                y1={y}
                y2={y}
                stroke="hsl(var(--border))"
                strokeOpacity="0.45"
                strokeDasharray="3 4"
              />
            );
          })}

          <path d={path} fill="none" stroke="url(#scoreLine)" strokeWidth="2.5" strokeLinecap="round" />

          {points.map((p, idx) => {
            const x = padX + (idx * usableW) / Math.max(1, points.length - 1);
            const y = padY + usableH - (clampScore(p.value) / 5) * usableH;
            const targetY =
              p.target == null ? null : padY + usableH - (clampScore(p.target) / 5) * usableH;
            return (
              <g key={`${p.label}-${idx}`}>
                {targetY != null ? (
                  <line
                    x1={x - 6}
                    x2={x + 6}
                    y1={targetY}
                    y2={targetY}
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                  />
                ) : null}
                <circle cx={x} cy={y} r="4.25" fill="hsl(var(--primary))" />
                <circle cx={x} cy={y} r="7.5" fill="hsl(var(--primary))" fillOpacity="0.14" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {points.map((p) => (
          <div key={p.label} className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-xs font-semibold text-foreground">{p.label}</p>
              <p className="text-xs font-mono text-primary">
                {clampScore(p.value).toFixed(1)}
                {typeof p.target === "number" ? ` / ${clampScore(p.target).toFixed(1)}` : ""}
              </p>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-border/70">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: `${(clampScore(p.value) / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
