import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { EventDetailScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.eventIds; }

export default async function EventPage({ params }: { params: Promise<{ eventId: string }> }) { const { eventId } = await params; return <OpportunitiesRouteFrame title="Событие"><EventDetailScreen eventId={eventId} /></OpportunitiesRouteFrame>; }
