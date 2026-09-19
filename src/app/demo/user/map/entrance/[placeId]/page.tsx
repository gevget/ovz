import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { EntranceScreen } from "@/components/map/EntranceScreen";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.placeIds; }

export default async function EntrancePage({ params }: { params: Promise<{ placeId: string }> }) {
  const { placeId } = await params;
  return <MapRouteFrame title="Вход в здание"><EntranceScreen placeId={placeId} /></MapRouteFrame>;
}
