import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-control border border-border bg-surface text-ink transition-colors hover:bg-surface-soft",
        className,
      )}
      {...props}
    />
  );
}
