export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
  viewport: { once: true, amount: 0.2 },
};

export const hoverLift = {
  whileHover: { y: -6, scale: 1.01 },
  whileTap: { scale: 0.99 },
  transition: { type: 'spring' as const, stiffness: 280, damping: 20 },
};

export const revealStagger = {
  container: {
    initial: {},
    whileInView: {},
    viewport: { once: true, amount: 0.15 },
    transition: { staggerChildren: 0.08 },
  },
  item: {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};
