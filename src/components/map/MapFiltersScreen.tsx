"use client";

import { MapPinned } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { routes } from "@/lib/routes";
import { filterFeatures, placeCategories, type MapFilterFeature } from "@/data/map";
import { Card } from "@/components/ui/Card";
import { FilterSheet } from "@/components/map/FilterSheet";

export function MapFiltersScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const initialFeature = (searchParams.get("feature") ?? "") as MapFilterFeature | "";
  const summary = useMemo(() => `${placeCategories.find((item) => item.id === initialCategory)?.label ?? "Все места"}${initialFeature ? ` · ${filterFeatures.find((item) => item.id === initialFeature)?.label ?? "фильтр"}` : ""}`, [initialCategory, initialFeature]);
  const apply = ({ category, feature }: { category: string; feature: MapFilterFeature | "" }) => {
    const query = new URLSearchParams();
    if (category !== "all") query.set("category", category);
    if (feature) query.set("feature", feature);
    router.push(`${routes.user.map}${query.toString() ? `?${query.toString()}` : ""}`);
  };
  return <div className="relative flex min-h-0 flex-1 flex-col bg-canvas"><main className="flex min-h-0 flex-1 flex-col justify-end overflow-y-auto p-5"><Card className="mb-2 bg-surface-inverse p-5 text-white shadow-hero"><MapPinned aria-hidden="true" className="h-7 w-7 text-primary" /><h1 className="mt-5 text-2xl font-bold">Настройте карту под себя</h1><p className="mt-2 text-sm leading-6 text-on-surface-inverse-muted">Выберите условия и категорию. Сейчас выбрано: {summary}.</p></Card></main><FilterSheet open initialCategory={initialCategory} initialFeature={initialFeature} onClose={() => router.push(routes.user.map)} onApply={apply} /></div>;
}
