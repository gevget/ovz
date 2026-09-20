import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { localizeVisibleCopy } from "@/lib/localizeVisibleCopy";

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex min-h-7 shrink-0 items-center whitespace-nowrap rounded-full border border-border/70 bg-surface-soft px-2.5 text-xs font-semibold text-muted", className)}
      {...props}
    >
      {typeof children === "string" ? localizeVisibleCopy(children) : children}
    </span>
  );
}
