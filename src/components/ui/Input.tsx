import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-control border border-border bg-surface-elevated px-4 text-base text-ink shadow-xs placeholder:text-muted transition-[border-color,box-shadow] hover:border-border-strong focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/10 disabled:cursor-not-allowed disabled:bg-surface-soft disabled:text-muted",
        className,
      )}
      {...props}
    />
  );
}
