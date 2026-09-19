import { PartnerAppShell } from "@/components/partner/PartnerAppShell";
import { PartnerEventFormScreen } from "@/components/partner/PartnerScreens";
import { staticParams } from "@/lib/staticParams";
export function generateStaticParams() { return staticParams.eventIds; }
export default async function PartnerEventEditPage({ params }: { params: Promise<{ eventId: string }> }) { const { eventId } = await params; return <PartnerAppShell><PartnerEventFormScreen eventId={eventId} /></PartnerAppShell>; }
