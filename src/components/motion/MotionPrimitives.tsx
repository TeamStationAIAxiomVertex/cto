"use client";

import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PrimitiveProps = {
  children: ReactNode;
  className?: string;
};

function useRevealOnce() {
  const ref = React.useRef<HTMLElement | HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function revealClasses(visible: boolean) {
  return cn(
    "transition-ui will-change-transform",
    visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
  );
}

export function RevealSection({ children, className }: PrimitiveProps) {
  const { ref, visible } = useRevealOnce();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={cn(revealClasses(visible), className)}>
      {children}
    </section>
  );
}

export function RevealBlock({ children, className }: PrimitiveProps) {
  const { ref, visible } = useRevealOnce();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn(revealClasses(visible), className)}>
      {children}
    </div>
  );
}

export function StaggerGrid({ children, className }: PrimitiveProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          staggerIndex: index,
        });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  staggerIndex = 0,
}: PrimitiveProps & { staggerIndex?: number }) {
  const { ref, visible } = useRevealOnce();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(revealClasses(visible), className)}
      style={{ transitionDelay: `${Math.min(staggerIndex * 45, 220)}ms` }}
    >
      {children}
    </div>
  );
}

export function LiftCard({ children, className }: PrimitiveProps) {
  const { ref, visible } = useRevealOnce();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn(revealClasses(visible), className)}>
      {children}
    </div>
  );
}
