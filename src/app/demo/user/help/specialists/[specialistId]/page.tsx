import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { SpecialistDetailScreen } from "@/components/help/HelpScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.specialistIds; }

export default async function SpecialistPage({ params }: { params: Promise<{ specialistId: string }> }) {
  const { specialistId } = await params;
  return <HelpRouteFrame title="Профиль специалиста"><SpecialistDetailScreen specialistId={specialistId} /></HelpRouteFrame>;
}
