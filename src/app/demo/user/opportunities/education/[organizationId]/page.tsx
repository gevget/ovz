import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { EducationOrganizationScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.organizationIds; }

export default async function EducationOrganizationPage({ params }: { params: Promise<{ organizationId: string }> }) { const { organizationId } = await params; return <OpportunitiesRouteFrame title="Провайдер обучения"><EducationOrganizationScreen organizationId={organizationId} /></OpportunitiesRouteFrame>; }
