import { VolunteerAppShell } from "@/components/volunteer/VolunteerAppShell";
import { VolunteerActiveRequestScreen } from "@/components/volunteer/VolunteerScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.requestIds; }

export default async function VolunteerActiveRequestPage({ params }: { params: Promise<{ requestId: string }> }) { const { requestId } = await params; return <VolunteerAppShell title="Активная помощь"><VolunteerActiveRequestScreen requestId={requestId} /></VolunteerAppShell>; }
