"use client";

import type { ReactNode } from "react";
import { VolunteerBottomNavigation } from "@/components/volunteer/VolunteerBottomNavigation";
import { DemoPhoneShell } from "@/components/demo/DemoPhoneShell";

export function VolunteerAppShell({ children, title = "Кабинет волонтёра" }: { children: ReactNode; title?: string }) {
  return <DemoPhoneShell title={title} navigation={<VolunteerBottomNavigation />}>{children}</DemoPhoneShell>;
}
