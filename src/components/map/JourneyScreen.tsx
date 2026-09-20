"use client";

import { AlertTriangle, ArrowRight, Camera, CircleHelp, Flag, HandHelping } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { places } from "@/data/seed";
import { journeyStepsByRouteId, routeOptionsByPlaceId } from "@/data/map";
import { rankRoutes } from "@/domain/accessibility";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { MapHeader } from "@/components/map/MapHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StateBadge } from "@/components/ui/StateBadge";

export function JourneyScreen() {
  const selectedPlaceId = useDemoStore((state) => state.selectedPlaceId);
  const selectedRouteId = useDemoStore((state) => state.selectedRouteId);
  const selectedPlace = places.find((place) => place.id === selectedPlaceId) ?? places.find((place) => place.id === "place_clinic_12") ?? places[0];
  const fallbackRoute = rankRoutes(routeOptionsByPlaceId[selectedPlace.id] ?? [])[0];
  const routeId = selectedRouteId ?? fallbackRoute?.id ?? "route_accessible_clinic";
  const steps = journeyStepsByRouteId[routeId] ?? journeyStepsByRouteId.route_accessible_clinic;
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);
  const done = stepIndex === steps.length - 1;
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Режим пути" backHref={routes.user.map} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">До {selectedPlace.name}</p><h2 className="mt-1 text-2xl font-bold text-ink">Ваш путь</h2></div><StateBadge variant="success" label={`${stepIndex + 1} из ${steps.length}`} /></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-soft"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} /></div><Card className="mt-5 overflow-hidden p-0"><div className="relative h-36 bg-gradient-to-br from-[#dbe8ff] via-[#edf3ff] to-[#f8e4d2]"><div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(145deg, transparent 0 46%, rgba(41,110,242,.25) 46% 48%, transparent 48% 100%)" }} /><div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink"><Camera aria-hidden="true" className="h-4 w-4 text-primary" /> Фото и схема входа доступны</div></div><div className="p-5"><div className="flex items-center gap-2 text-sm text-primary"><Flag aria-hidden="true" className="h-4 w-4" />{currentStep.mode} · {currentStep.durationLabel}</div><h3 className="mt-3 text-xl font-bold text-ink">{currentStep.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{currentStep.detail}</p><div className="mt-4 flex items-start gap-2 rounded-control bg-primary-soft p-3 text-sm text-primary"><CircleHelp aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />{currentStep.accessibilityHint}</div></div></Card><div className="mt-4 grid grid-cols-2 gap-2"><Link href={routes.user.entrance(selectedPlace.id)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-border bg-surface px-3 text-center text-sm font-semibold text-ink hover:bg-surface-soft"><Camera aria-hidden="true" className="h-4 w-4" />Посмотреть вход</Link><Link href={routes.user.helpAtLocation} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-border bg-surface px-3 text-center text-sm font-semibold text-ink hover:bg-surface-soft"><HandHelping aria-hidden="true" className="h-4 w-4" />Запросить помощь</Link></div><Link href={routes.user.placeReport(selectedPlace.id)} className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-control border border-[#f0c77a] bg-[#fff8e8] px-3 text-center text-sm font-semibold text-warning hover:bg-[#fff3df]"><AlertTriangle aria-hidden="true" className="h-4 w-4" />Сообщить о препятствии</Link><Button className="mt-4 w-full" onClick={() => { if (!done) setStepIndex((value) => value + 1); }}>{done ? "Маршрут завершён" : "Следующий шаг"}{!done ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}</Button>{done ? <p className="mt-3 text-center text-sm font-semibold text-success">Вы у входа. Проверьте фото перед последним поворотом.</p> : null}</main></div>;
}
