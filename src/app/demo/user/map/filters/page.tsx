import { Suspense } from "react";
import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { MapFiltersScreen } from "@/components/map/MapFiltersScreen";

export default function MapFiltersPage() {
  return <MapRouteFrame title="Фильтры карты"><Suspense fallback={<div className="flex-1 bg-canvas" />}><MapFiltersScreen /></Suspense></MapRouteFrame>;
}
