import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { ClubDetailScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.clubIds; }

export default async function ClubPage({ params }: { params: Promise<{ clubId: string }> }) { const { clubId } = await params; return <OpportunitiesRouteFrame title="Клуб"><ClubDetailScreen clubId={clubId} /></OpportunitiesRouteFrame>; }
