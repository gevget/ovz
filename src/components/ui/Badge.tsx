import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex min-h-7 items-center rounded-full bg-surface-soft px-2.5 text-xs font-semibold text-muted", className)}
      {...props}
    />
  );
}
