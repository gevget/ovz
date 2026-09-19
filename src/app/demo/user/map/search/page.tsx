import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { SearchResultsScreen } from "@/components/map/SearchResultsScreen";

export default function MapSearchPage() {
  return <MapRouteFrame title="Поиск по карте"><SearchResultsScreen /></MapRouteFrame>;
}
