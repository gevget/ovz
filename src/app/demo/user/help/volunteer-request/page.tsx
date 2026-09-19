import { Suspense } from "react";
import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { VolunteerRequestScreen } from "@/components/help/HelpScreens";

export default function VolunteerRequestPage() {
  return <HelpRouteFrame title="Запрос волонтёру"><Suspense fallback={<div className="flex-1 bg-canvas" />}><VolunteerRequestScreen /></Suspense></HelpRouteFrame>;
}
