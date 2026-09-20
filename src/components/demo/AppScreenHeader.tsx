"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { localizeVisibleCopy } from "@/lib/localizeVisibleCopy";
import { AppIcon } from "@/components/ui/AppIcon";

type AppScreenHeaderProps = {
  title: string;
  backHref?: string;
  onBack?: () => void;
  rightAction?: ReactNode;
  compact?: boolean;
  eyebrow?: string;
};

export function AppScreenHeader({ title, backHref, onBack, rightAction, compact = false, eyebrow }: AppScreenHeaderProps) {
  const backControl = backHref ? (
    <Link href={backHref} aria-label="Назад" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control text-muted hover:bg-surface-soft">
      <AppIcon name="ArrowLeft" className="h-5 w-5" />
    </Link>
  ) : onBack ? (
    <button type="button" onClick={onBack} aria-label="Назад" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control text-muted hover:bg-surface-soft">
      <AppIcon name="ArrowLeft" className="h-5 w-5" />
    </button>
  ) : null;

  return (
    <header className={cn("relative z-10 flex min-h-[4.25rem] items-center justify-between gap-3 border-b border-border/80 bg-surface/95 px-5 shadow-xs backdrop-blur", compact ? "py-3" : "pb-3 pt-6 max-md:pt-4")}>
      <div className="flex min-w-0 items-center gap-3">
        {backControl}
        <div className="min-w-0">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{localizeVisibleCopy(eyebrow)}</p> : null}
          <h1 className={cn("line-clamp-2 font-bold tracking-[-0.015em] text-ink", compact ? "text-lg" : "text-xl")}>{localizeVisibleCopy(title)}</h1>
        </div>
      </div>
      {rightAction}
    </header>
  );
}
