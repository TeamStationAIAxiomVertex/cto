'use client';

import * as RT from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

type Side = 'top' | 'right' | 'bottom' | 'left';
type Align = 'start' | 'center' | 'end';

export type WithTooltipProps = {
  /** Preferred prop */
  content?: ReactNode;
  /** Back-compat alias for older callers */
  label?: ReactNode;
  children: ReactNode;
  side?: Side;
  align?: Align;
  /** Optional: delay before showing (ms) */
  delayDuration?: number;
};

export function WithTooltip({
  children,
  content,
  label,
  side = 'top',
  align = 'center',
  delayDuration = 150,
}: WithTooltipProps) {
  const node = content ?? label;
  if (!node) return <>{children}</>;

  return (
    <RT.Provider delayDuration={delayDuration}>
      <RT.Root>
        <RT.Trigger asChild>{children}</RT.Trigger>
        <RT.Portal>
          <RT.Content
            side={side}
            align={align}
            className="rounded-md px-2 py-1 text-xs bg-black text-white shadow-md"
          >
            {node}
            <RT.Arrow className="fill-black" />
          </RT.Content>
        </RT.Portal>
      </RT.Root>
    </RT.Provider>
  );
}

export default WithTooltip;