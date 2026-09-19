import { Suspense } from "react";
import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { MapScreen } from "@/components/map/MapScreen";

export default function MapPage() {
  return <MapRouteFrame title="Карта demo"><Suspense fallback={<div className="flex-1 bg-canvas" />}><MapScreen /></Suspense></MapRouteFrame>;
}
