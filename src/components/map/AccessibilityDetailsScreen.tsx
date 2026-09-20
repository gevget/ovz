"use client";

import Link from "next/link";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { calculateAccessibilityMatch } from "@/domain/accessibility";
import { AccessibilityFeatureList } from "@/components/demo/AccessibilityFeatureList";
import { AccessibilityMatch } from "@/components/demo/AccessibilityMatch";
import { EmptyState } from "@/components/ui/EmptyState";
import { MapHeader } from "@/components/map/MapHeader";

export function AccessibilityDetailsScreen({ placeId }: { placeId: string }) {
  const place = useDemoStore((state) => state.places.find((item) => item.id === placeId));
  const userNeeds = useDemoStore((state) => state.userNeeds);
  const user = { needs: userNeeds };
  if (!place) return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Условия не найдены" backHref={routes.user.map} /><main className="p-5"><EmptyState title="Объект не найден в демо-данных" action={<Link href={routes.user.map} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к карте</Link>} /></main></div>;
  const match = calculateAccessibilityMatch(userNeeds, place.accessibility);
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Детали доступности" backHref={routes.user.place(place.id)} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><p className="text-sm text-muted">{place.name}</p><h2 className="mt-1 text-2xl font-bold text-ink">Что важно учесть перед визитом</h2><div className="mt-4"><AccessibilityMatch result={match} /></div><div className="mt-4"><AccessibilityFeatureList features={place.accessibility} userNeeds={user.needs} highlightRelevant /></div><Link href={routes.user.route} className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Построить маршрут</Link></main></div>;
}
