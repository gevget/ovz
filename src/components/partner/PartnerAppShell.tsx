"use client";

import type { ReactNode } from "react";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { PhoneFrame } from "@/components/demo/PhoneFrame";
import { PartnerBottomNavigation } from "@/components/partner/PartnerBottomNavigation";
import { useDemoStore } from "@/store/demoStore";

export function PartnerAppShell({ children, title = "Кабинет партнёра" }: { children: ReactNode; title?: string }) {
  const settings = useDemoStore((state) => state.settings);
  const classes = ["min-h-screen", "bg-canvas", settings.theme === "dark" ? "theme-dark" : "", settings.highContrast ? "high-contrast" : "", settings.reducedMotion ? "reduced-motion" : ""].filter(Boolean).join(" ");
  return <div className={classes} style={{ fontSize: `${settings.textScale}em` }}><DemoToolbar /><main className="mx-auto flex min-h-[calc(100vh-88px)] w-full items-center justify-center px-0 pb-8 md:px-4"><PhoneFrame title={title}><div className="flex min-h-0 flex-1 flex-col bg-canvas">{children}<PartnerBottomNavigation /></div></PhoneFrame></main></div>;
}
