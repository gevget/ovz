"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { BottomNavigation } from "@/components/demo/BottomNavigation";
import { AppScreenHeader } from "@/components/demo/AppScreenHeader";
import { DemoPhoneShell } from "@/components/demo/DemoPhoneShell";
import { routes } from "@/lib/routes";

export function ProfileRouteFrame({ children, title }: { children: ReactNode; title: string }) {
  const pathname = usePathname();
  return <DemoPhoneShell title={title} navigation={<BottomNavigation />}>{pathname === routes.user.profile ? <AppScreenHeader title={title} compact /> : null}{children}</DemoPhoneShell>;
}
