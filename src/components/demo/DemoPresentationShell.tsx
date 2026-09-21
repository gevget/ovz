"use client";

import type { ReactNode } from "react";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { PhoneFrame } from "@/components/demo/PhoneFrame";
import { useDemoStore } from "@/store/demoStore";

type DemoPresentationShellProps = {
  children: ReactNode;
  title: string;
};

/** Shared shell for demo presentation screens that are not role workspaces. */
export function DemoPresentationShell({ children, title }: DemoPresentationShellProps) {
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
          <div className="app-scrollbar min-h-0 min-w-0 flex-1 overflow-y-auto bg-canvas p-5">
            {children}
          </div>
        </PhoneFrame>
      </main>
    </div>
  );
}
