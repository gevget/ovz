import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { AccessibilityDetailsScreen } from "@/components/map/AccessibilityDetailsScreen";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.placeIds; }

export default async function PlaceAccessibilityPage({ params }: { params: Promise<{ placeId: string }> }) {
  const { placeId } = await params;
  return <MapRouteFrame title="Детали доступности"><AccessibilityDetailsScreen placeId={placeId} /></MapRouteFrame>;
}
