import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-12 w-full rounded-control border border-border bg-surface px-4 text-base text-ink placeholder:text-muted", className)} {...props} />;
}
