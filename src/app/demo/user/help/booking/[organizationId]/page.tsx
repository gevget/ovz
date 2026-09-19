import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { BookingScreen } from "@/components/help/HelpScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.organizationIds; }

export default async function BookingPage({ params }: { params: Promise<{ organizationId: string }> }) {
  const { organizationId } = await params;
  return <HelpRouteFrame title="Запись"><BookingScreen organizationId={organizationId} /></HelpRouteFrame>;
}
