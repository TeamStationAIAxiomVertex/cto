'use client';

import * as React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
} from 'recharts';

type Datum = { name: string; value: number; label: string };
type Props = {
  data: Datum[];
  height?: number; // px
};

export default function TrustByNumbersChart({ data, height = 320 }: Props) {
  const fills = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--foreground))'];

  return (
    <div
      className="w-full"
      style={{ height }}
      aria-label="Trust by Numbers chart showing key performance indicators"
      role="img"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <RechartsTooltip
            cursor={{ fill: 'hsla(var(--card))' }}
            contentStyle={{
              background: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--popover-foreground))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={5}
            stroke="none"
          >
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={fills[i % fills.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
