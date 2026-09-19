import { PartnerAppShell } from "@/components/partner/PartnerAppShell";
import { PartnerOfferFormScreen } from "@/components/partner/PartnerScreens";
import { staticParams } from "@/lib/staticParams";
export function generateStaticParams() { return staticParams.offerIds; }
export default async function PartnerOfferEditPage({ params }: { params: Promise<{ offerId: string }> }) { const { offerId } = await params; return <PartnerAppShell><PartnerOfferFormScreen offerId={offerId} /></PartnerAppShell>; }
