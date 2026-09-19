import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { RequestStatusScreen } from "@/components/help/HelpScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.requestIds; }

export default async function RequestPage({ params }: { params: Promise<{ requestId: string }> }) {
  const { requestId } = await params;
  return <HelpRouteFrame title="Статус запроса"><RequestStatusScreen requestId={requestId} /></HelpRouteFrame>;
}
