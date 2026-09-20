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
    "min-h-screen",
    "bg-canvas",
    settings.theme === "dark" ? "theme-dark" : "",
    settings.highContrast ? "high-contrast" : "",
    settings.reducedMotion ? "reduced-motion" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={classes} style={{ fontSize: `${settings.textScale}em` }}>
      <DemoToolbar />
      <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full items-center justify-center px-0 pb-8 md:px-4">
        <PhoneFrame title={title}>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-canvas">
            {children}
            <div className="shrink-0">{navigation}</div>
          </div>
        </PhoneFrame>
      </main>
    </div>
  );
}
