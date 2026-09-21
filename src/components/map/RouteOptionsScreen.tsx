"use client";

import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { rankRoutes } from "@/domain/accessibility";
import { routeOptionsByPlaceId } from "@/data/map";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { MapHeader } from "@/components/map/MapHeader";
import { RouteOptionCard } from "@/components/demo/RouteOptionCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function RouteOptionsScreen() {
  const router = useRouter();
  const selectedPlaceId = useDemoStore((state) => state.selectedPlaceId);
  const setSelectedRoute = useDemoStore((state) => state.actions.setSelectedRoute);
  const places = useDemoStore((state) => state.places);
  const selectedPlace = places.find((place) => place.id === selectedPlaceId) ?? places.find((place) => place.id === "place_clinic_12") ?? places[0];
  const options = useMemo(() => {
    const base = routeOptionsByPlaceId[selectedPlace.id] ?? [];
    const adjusted = selectedPlace.id === "place_clinic_12" && selectedPlace.accessibility.elevator === false
      ? base.map((route) => route.id === "route_accessible_clinic" ? { ...route, accessibilityReliability: 0.35, obstacleCount: 2, labels: ["Лифт на пересадке недоступен", "Нужен альтернативный маршрут"] } : route)
      : base;
    return rankRoutes(adjusted);
  }, [selectedPlace]);
  if (options.length === 0) return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Варианты маршрута" backHref={routes.user.route} /><main className="p-5"><EmptyState title="Полностью подходящий маршрут не найден" description="Для этого демо-объекта нет подготовленных вариантов. Выберите другое место на карте." action={<Link href={routes.user.map} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к карте</Link>} /></main></div>;
  const choose = (routeId: string) => { setSelectedRoute(routeId); };
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Варианты маршрута" backHref={routes.user.route} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><p className="text-sm text-muted">До {selectedPlace.name}</p><div className="mt-4 flex items-start gap-3 rounded-control bg-positive-soft p-4 text-sm text-success"><ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0" /><span>Система ставит выше маршрут с лучшей надёжностью доступности, а не только самый быстрый.</span></div><div className="mt-5 space-y-3">{options.map((route, index) => <RouteOptionCard key={route.id} route={route} recommended={index === 0} onSelect={(id) => { choose(id); router.push(routes.user.journey); }} />)}</div><p className="mt-5 text-center text-xs leading-5 text-muted">Если полностью подходящего маршрута нет, демонстрация всё равно покажет ограничения.</p></main></div>;
}
