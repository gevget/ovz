import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { VacancyDetailScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.vacancyIds; }

export default async function VacancyPage({ params }: { params: Promise<{ vacancyId: string }> }) { const { vacancyId } = await params; return <OpportunitiesRouteFrame title="Вакансия"><VacancyDetailScreen vacancyId={vacancyId} /></OpportunitiesRouteFrame>; }
