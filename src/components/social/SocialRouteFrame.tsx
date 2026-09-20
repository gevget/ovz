"use client";

import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/demo/BottomNavigation";
import { DemoPhoneShell } from "@/components/demo/DemoPhoneShell";

export function SocialRouteFrame({ children, title }: { children: ReactNode; title: string }) {
  return <DemoPhoneShell title={title} navigation={<BottomNavigation />}>{children}</DemoPhoneShell>;
}
