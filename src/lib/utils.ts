// src/utils/cn.ts
// Utility for merging Tailwind classes: uses clsx for conditional classes and 
// twMerge for ensuring the last class applied wins (e.g., 'p-4' overwrites 'p-2').

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}