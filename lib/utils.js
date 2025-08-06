/**
 * Utility functions for class name manipulation.
 *
 * This file exports a helper function `cn` that combines Tailwind CSS classes using `clsx`
 * and then intelligently merges them using `tailwind-merge` to avoid class conflicts.
 *
 * Folder Purpose:
 * The `lib/` folder typically contains utility functions or libraries used across the project.
 * This helps keep reusable logic centralized and modular.
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
