
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  if (value >= 10000000) { // 1 crore or more
    return (value / 10000000).toFixed(2) + " Cr";
  } else if (value >= 100000) { // 1 lakh or more
    return (value / 100000).toFixed(2) + " L";
  } else if (value >= 1000) { // 1 thousand or more
    return (value / 1000).toFixed(2) + " K";
  } else {
    return value.toFixed(2);
  }
}
