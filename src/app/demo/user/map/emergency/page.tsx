import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { EmergencyScreen } from "@/components/map/SecondaryMapScreen";

export default function EmergencyPage() {
  return <MapRouteFrame title="Экстренные действия"><EmergencyScreen /></MapRouteFrame>;
}
