import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { TaxiScreen } from "@/components/map/SecondaryMapScreen";

export default function TaxiPage() {
  return <MapRouteFrame title="Подходящий транспорт"><TaxiScreen /></MapRouteFrame>;
}
