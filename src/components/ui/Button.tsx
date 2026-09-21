import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { localizeVisibleCopy } from "@/lib/localizeVisibleCopy";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "md" | "sm" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 min-w-0 max-w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control px-4 font-semibold transition-[background-color,border-color,box-shadow] active:shadow-inset focus-visible:ring-4 focus-visible:ring-focus/20 disabled:cursor-not-allowed disabled:opacity-50",
        size === "sm" ? "min-h-10 px-3 text-sm" : "text-sm",
        size === "lg" && "min-h-[3.25rem] px-5 text-base",
        variant === "primary" && "bg-primary text-white shadow-sm hover:bg-primary-strong hover:shadow-md",
        variant === "secondary" && "border border-border bg-surface-elevated text-ink hover:border-border-strong hover:bg-surface-soft",
        variant === "ghost" && "text-ink hover:bg-surface-soft hover:shadow-xs",
        variant === "danger" && "bg-danger text-white shadow-sm hover:bg-danger-strong",
        className,
      )}
      {...props}
    >
      {typeof children === "string" ? localizeVisibleCopy(children) : children}
    </button>
  );
}
