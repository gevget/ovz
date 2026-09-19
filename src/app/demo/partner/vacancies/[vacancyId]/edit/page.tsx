import { PartnerAppShell } from "@/components/partner/PartnerAppShell";
import { PartnerVacancyFormScreen } from "@/components/partner/PartnerScreens";
import { staticParams } from "@/lib/staticParams";
export function generateStaticParams() { return staticParams.vacancyIds; }
export default async function PartnerVacancyEditPage({ params }: { params: Promise<{ vacancyId: string }> }) { const { vacancyId } = await params; return <PartnerAppShell><PartnerVacancyFormScreen vacancyId={vacancyId} /></PartnerAppShell>; }
