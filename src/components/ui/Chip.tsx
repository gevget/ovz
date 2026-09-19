import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean };

export function Chip({ className, selected, ...props }: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex min-h-10 items-center rounded-full border px-3 text-sm font-medium transition-colors",
        selected
          ? "border-primary bg-primary-soft text-primary"
          : "border-border bg-surface text-muted hover:bg-surface-soft",
        className,
      )}
      aria-pressed={selected}
      {...props}
    />
  );
}
