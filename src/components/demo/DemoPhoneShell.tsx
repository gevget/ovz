"use client";

import type { ReactNode } from "react";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { PhoneFrame } from "@/components/demo/PhoneFrame";
import { useDemoStore } from "@/store/demoStore";

type DemoPhoneShellProps = {
  children: ReactNode;
  navigation: ReactNode;
  title: string;
};

export function DemoPhoneShell({ children, navigation, title }: DemoPhoneShellProps) {
  const settings = useDemoStore((state) => state.settings);
  const classes = [
    "grid h-[100vh] max-h-[100vh] min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden supports-[height:100dvh]:h-[100dvh] supports-[height:100dvh]:max-h-[100dvh]",
    "bg-canvas",
    settings.theme === "dark" ? "theme-dark" : "",
    settings.highContrast ? "high-contrast" : "",
    settings.reducedMotion ? "reduced-motion" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={classes} style={{ fontSize: `${settings.textScale}em` }}>
      <DemoToolbar />
      <main className="mx-auto flex h-full min-h-0 w-full items-center justify-center overflow-hidden px-0 pb-0 md:px-4 md:pb-8">
        <PhoneFrame title={title} className="!h-full !max-h-[880px] max-md:!max-h-none">
          <div className="grid min-h-0 min-w-0 flex-1 grid-rows-[minmax(0,1fr)_auto] bg-canvas">
            <div className="app-phone-content app-shell-content flex min-h-0 min-w-0 flex-col overflow-hidden">{children}</div>
            <div className="min-w-0 overflow-hidden">{navigation}</div>
          </div>
        </PhoneFrame>
      </main>
    </div>
  );
}
