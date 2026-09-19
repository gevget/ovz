"use client";

import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/demo/BottomNavigation";
import { useDemoStore } from "@/store/demoStore";

export function ProfileRouteFrame({ children, title }: { children: ReactNode; title: string }) {
  const settings = useDemoStore((state) => state.settings);
  const classes = ["min-h-screen", "bg-canvas", settings.theme === "dark" ? "theme-dark" : "", settings.highContrast ? "high-contrast" : "", settings.reducedMotion ? "reduced-motion" : ""].filter(Boolean).join(" ");
  return <div className={classes} style={{ fontSize: `${settings.textScale}em` }}><div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col bg-canvas text-ink"><header className="border-b border-border bg-surface px-5 pb-3 pt-8 max-md:pt-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Профиль</p><h1 className="mt-1 text-2xl font-bold">{title}</h1></header>{children}<BottomNavigation /></div></div>;
}
