import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { VacancyApplyScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.vacancyIds; }

export default async function VacancyApplyPage({ params }: { params: Promise<{ vacancyId: string }> }) { const { vacancyId } = await params; return <OpportunitiesRouteFrame title="Отклик"><VacancyApplyScreen vacancyId={vacancyId} /></OpportunitiesRouteFrame>; }
