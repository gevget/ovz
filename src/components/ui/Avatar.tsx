import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type AvatarProps = HTMLAttributes<HTMLDivElement> & { initials: string };

export function Avatar({ initials, className, ...props }: AvatarProps) {
  return (
    <div
      className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary", className)}
      aria-label={`Аватар: ${initials}`}
      {...props}
    >
      {initials}
    </div>
  );
}
