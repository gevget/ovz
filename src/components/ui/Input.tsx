import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-control border border-border bg-surface px-4 text-base text-ink placeholder:text-muted",
        className,
      )}
      {...props}
    />
  );
}
