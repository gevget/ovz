import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { OfferDetailScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.offerIds; }

export default async function OfferPage({ params }: { params: Promise<{ offerId: string }> }) { const { offerId } = await params; return <OpportunitiesRouteFrame title="Предложение"><OfferDetailScreen offerId={offerId} /></OpportunitiesRouteFrame>; }
