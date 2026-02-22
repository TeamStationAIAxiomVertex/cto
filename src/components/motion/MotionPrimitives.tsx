"use client";

import type { ReactNode } from "react";

type PrimitiveProps = {
  children: ReactNode;
  className?: string;
};

export function RevealSection({ children, className }: PrimitiveProps) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export function RevealBlock({ children, className }: PrimitiveProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerGrid({ children, className }: PrimitiveProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: PrimitiveProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function LiftCard({ children, className }: PrimitiveProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
