"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, hoverLift, revealStagger } from "@/lib/motion";

type PrimitiveProps = {
  children: ReactNode;
  className?: string;
};

export function RevealSection({ children, className }: PrimitiveProps) {
  return (
    <motion.section
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={fadeUp.viewport}
    >
      {children}
    </motion.section>
  );
}

export function RevealBlock({ children, className }: PrimitiveProps) {
  return (
    <motion.div
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={fadeUp.viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({ children, className }: PrimitiveProps) {
  return (
    <motion.div
      className={className}
      initial={revealStagger.container.initial}
      whileInView={revealStagger.container.whileInView}
      viewport={revealStagger.container.viewport}
      transition={revealStagger.container.transition}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: PrimitiveProps) {
  return (
    <motion.div
      className={className}
      initial={revealStagger.item.initial}
      whileInView={revealStagger.item.whileInView}
      transition={revealStagger.item.transition}
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export function LiftCard({ children, className }: PrimitiveProps) {
  return (
    <motion.div
      className={className}
      whileHover={hoverLift.whileHover}
      whileTap={hoverLift.whileTap}
      transition={hoverLift.transition}
    >
      {children}
    </motion.div>
  );
}

