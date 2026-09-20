"use client";

import type { ReactNode } from "react";
import { PartnerBottomNavigation } from "@/components/partner/PartnerBottomNavigation";
import { DemoPhoneShell } from "@/components/demo/DemoPhoneShell";

export function PartnerAppShell({ children, title = "Кабинет партнёра" }: { children: ReactNode; title?: string }) {
  return <DemoPhoneShell title={title} navigation={<PartnerBottomNavigation />}>{children}</DemoPhoneShell>;
}
