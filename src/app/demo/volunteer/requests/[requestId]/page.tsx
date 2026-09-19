import { VolunteerAppShell } from "@/components/volunteer/VolunteerAppShell";
import { VolunteerRequestDetailScreen } from "@/components/volunteer/VolunteerScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.requestIds; }

export default async function VolunteerRequestPage({ params }: { params: Promise<{ requestId: string }> }) { const { requestId } = await params; return <VolunteerAppShell title="Детали заявки"><VolunteerRequestDetailScreen requestId={requestId} /></VolunteerAppShell>; }
