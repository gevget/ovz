"use client";

import { ArrowRight, MapPin, Settings2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { places } from "@/data/seed";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { MapHeader } from "@/components/map/MapHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function RouteBuildScreen() {
  const router = useRouter();
  const selectedPlaceId = useDemoStore((state) => state.selectedPlaceId);
  const selectedPlace = places.find((place) => place.id === selectedPlaceId) ?? places.find((place) => place.id === "place_clinic_12") ?? places[0];
  const setSelectedPlace = useDemoStore((state) => state.actions.setSelectedPlace);
  const openOptions = () => { setSelectedPlace(selectedPlace.id); router.push(routes.user.routeOptions); };
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Построить маршрут" backHref={routes.user.place(selectedPlace.id)} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><p className="text-sm text-muted">Куда едем</p><Card className="mt-3 p-4"><div className="flex items-start gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary"><MapPin aria-hidden="true" className="h-5 w-5" /></div><div><h2 className="font-bold text-ink">{selectedPlace.name}</h2><p className="mt-1 text-sm text-muted">{selectedPlace.address}</p></div></div></Card><section className="mt-6"><h2 className="text-lg font-bold text-ink">Откуда</h2><div className="mt-3 rounded-control border border-border bg-surface p-4 text-sm"><p className="font-semibold text-ink">Моё примерное местоположение</p><p className="mt-1 text-muted">Геолокация не требуется для демо — используется условная точка.</p></div></section><section className="mt-6"><h2 className="text-lg font-bold text-ink">Требования профиля</h2><div className="mt-3 flex items-center gap-3 rounded-control bg-primary-soft p-4 text-sm text-primary"><Settings2 aria-hidden="true" className="h-5 w-5" /><span>Вход без ступеней · лифт · доступный туалет</span></div></section><Button className="mt-6 w-full" onClick={openOptions}>Найти маршруты <ArrowRight aria-hidden="true" className="h-4 w-4" /></Button><Link href={routes.user.map} className="mt-3 inline-flex min-h-11 w-full items-center justify-center text-sm font-semibold text-muted hover:text-ink">Вернуться к карте</Link></main></div>;
}
