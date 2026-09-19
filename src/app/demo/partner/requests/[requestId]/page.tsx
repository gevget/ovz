import { PartnerAppShell } from "@/components/partner/PartnerAppShell";
import { PartnerRequestDetailScreen } from "@/components/partner/PartnerScreens";
import { staticParams } from "@/lib/staticParams";
export function generateStaticParams() { return staticParams.requestIds; }
export default async function PartnerRequestPage({ params }: { params: Promise<{ requestId: string }> }) { const { requestId } = await params; return <PartnerAppShell><PartnerRequestDetailScreen requestId={requestId} /></PartnerAppShell>; }
