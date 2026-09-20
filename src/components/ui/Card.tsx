import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "soft" | "inverse" | "elevated";
};

export function Card({ className, tone = "default", ...props }: CardProps) {
  const legacyInverse = className?.includes("bg-surface-inverse") ?? false;
  const resolvedTone = legacyInverse ? "inverse" : tone;
  return (
    <div
      className={cn(
        "rounded-card border shadow-xs transition-[background-color,border-color,box-shadow,transform]",
        resolvedTone === "inverse" && "!border-surface-inverse !bg-surface-inverse text-on-surface-inverse",
        resolvedTone === "soft" && "border-border bg-surface-soft",
        resolvedTone === "default" && "border-border bg-surface",
        resolvedTone === "elevated" && "border-border/80 bg-surface-elevated shadow-md",
        className,
      )}
      {...props}
    />
  );
}
