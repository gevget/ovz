import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { OrganizationDetailScreen } from "@/components/help/HelpScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.organizationIds; }

export default async function OrganizationPage({ params }: { params: Promise<{ organizationId: string }> }) {
  const { organizationId } = await params;
  return <HelpRouteFrame title="Профиль организации"><OrganizationDetailScreen organizationId={organizationId} /></HelpRouteFrame>;
}
