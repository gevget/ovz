"use client";

import { useEffect } from "react";
import type { Role } from "@/types";
import { useDemoStore } from "@/store/demoStore";
import { UserAppShell } from "@/components/demo/UserAppShell";
import { VolunteerAppShell } from "@/components/volunteer/VolunteerAppShell";
import { VolunteerHomeScreen } from "@/components/volunteer/VolunteerScreens";
import { PartnerAppShell } from "@/components/partner/PartnerAppShell";
import { PartnerHomeScreen } from "@/components/partner/PartnerScreens";
import { AdminOverviewScreen } from "@/components/admin/AdminScreens";

export function RoleHomeClient({ role }: { role: Role }) {
  const setRole = useDemoStore((state) => state.actions.setRole);

  useEffect(() => setRole(role), [role, setRole]);

  if (role === "admin") return <AdminOverviewScreen />;
  if (role === "volunteer") return <VolunteerAppShell title="Заявки волонтёра"><VolunteerHomeScreen /></VolunteerAppShell>;
  if (role === "partner") return <PartnerAppShell><PartnerHomeScreen /></PartnerAppShell>;
  return <UserAppShell />;
}
