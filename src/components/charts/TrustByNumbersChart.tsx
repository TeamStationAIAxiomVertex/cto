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
  const fills = [
    'url(#gradient1)',
    'url(#gradient2)',
    'url(#gradient3)',
  ];

  return (
    <div
      className="w-full"
      style={{ height }}
      aria-label="Trust by Numbers chart showing key performance indicators"
      role="img"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
           <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
            </linearGradient>
             <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <RechartsTooltip
            cursor={{ fill: 'hsla(var(--card), 0.5)' }}
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
            innerRadius="70%"
            outerRadius="95%"
            paddingAngle={5}
            stroke="hsl(var(--border))"
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
