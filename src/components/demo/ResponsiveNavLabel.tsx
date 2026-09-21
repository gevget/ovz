"use client";

export function ResponsiveNavLabel({ label, compactLabel }: { label: string; compactLabel: string }) {
  return <span className="max-w-full truncate" title={label}>{compactLabel}</span>;
}
