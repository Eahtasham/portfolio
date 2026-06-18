import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Turn a date range like "June 2025 – Present" into an inclusive
 * duration label such as "6m" or "1y 2m". Returns null if unparseable.
 */
export function formatDuration(range: string): string | null {
  const parts = range.split(/[–—-]/).map((s) => s.trim());
  if (parts.length < 2) return null;

  const start = new Date(parts[0]);
  const end = /present|now/i.test(parts[1]) ? new Date() : new Date(parts[1]);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  if (months <= 0) return null;

  const years = Math.floor(months / 12);
  const rem = months % 12;
  const out: string[] = [];
  if (years) out.push(`${years}y`);
  if (rem) out.push(`${rem}m`);
  return out.join(" ") || "1m";
}

/**
 * Combine a list of role periods (ordered most-recent first) into a single
 * company span, e.g. ["Jan 2026 – Present", "Sep 2025 – Dec 2025"] -> "Sep 2025 – Present".
 */
export function companySpan(periods: string[]): string {
  if (periods.length === 0) return "";
  const split = (p: string) => p.split(/[–—-]/).map((s) => s.trim());
  const newestEnd = split(periods[0])[1] ?? "";
  const oldestStart = split(periods[periods.length - 1])[0] ?? "";
  return `${oldestStart} – ${newestEnd}`;
}
