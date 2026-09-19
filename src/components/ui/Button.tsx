import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "md" | "sm";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-4 font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        size === "sm" ? "min-h-10 px-3 text-sm" : "text-sm",
        variant === "primary" && "bg-primary text-white hover:bg-[#1f5ed9]",
        variant === "secondary" && "border border-border bg-surface text-ink hover:bg-surface-soft",
        variant === "ghost" && "text-ink hover:bg-surface-soft",
        variant === "danger" && "bg-danger text-white hover:bg-[#aa3030]",
        className,
      )}
      {...props}
    />
  );
}
