import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  size?: "sm" | "md";
};

export function Chip({ className, selected, size = "md", ...props }: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex shrink-0 whitespace-nowrap items-center rounded-full border font-medium transition-[background-color,border-color,box-shadow,transform] hover:-translate-y-px active:translate-y-0 active:scale-[0.985] focus-visible:ring-4 focus-visible:ring-focus/20",
        size === "sm" ? "min-h-9 px-2.5 text-xs" : "min-h-10 px-3 text-sm",
        selected
          ? "border-primary bg-primary-soft text-primary"
          : "border-border bg-surface-elevated text-muted hover:border-border-strong hover:bg-surface-soft",
        className,
      )}
      aria-pressed={selected}
      {...props}
    />
  );
}
