import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { PlaceDetailScreen } from "@/components/map/PlaceDetailScreen";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.placeIds; }

export default async function PlacePage({ params }: { params: Promise<{ placeId: string }> }) {
  const { placeId } = await params;
  return <MapRouteFrame title="Карточка места"><PlaceDetailScreen placeId={placeId} /></MapRouteFrame>;
}
