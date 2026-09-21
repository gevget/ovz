import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-control border border-border bg-surface-elevated text-ink transition-[background-color,border-color,box-shadow] hover:border-border-strong hover:bg-surface-soft hover:shadow-sm active:shadow-inset focus-visible:ring-4 focus-visible:ring-focus/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
