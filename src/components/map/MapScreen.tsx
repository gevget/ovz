"use client";

import { Filter, HelpCircle, Home, List, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { calculateAccessibilityMatch } from "@/domain/accessibility";
import { placeCategories, type MapFilterFeature } from "@/data/map";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { useDemoStore } from "@/store/demoStore";
import { MapCanvas } from "@/components/map/MapCanvas";
import { PlaceCard } from "@/components/demo/PlaceCard";
import { StateBadge } from "@/components/ui/StateBadge";
import { SearchBar } from "@/components/ui/SearchBar";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { EmptyState } from "@/components/ui/EmptyState";
import { Skeleton } from "@/components/ui/Skeleton";
import { Toast } from "@/components/ui/Toast";

function categoryLabel(category: string) {
  return placeCategories.find((item) => item.id === category)?.label ?? category;
}

export function MapScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const actions = useDemoStore((state) => state.actions);
  const selectedPlaceFromStore = useDemoStore((state) => state.selectedPlaceId);
  const favoriteIds = useDemoStore((state) => state.favoriteIds);
  const currentPlaces = useDemoStore((state) => state.places);
  const userNeeds = useDemoStore((state) => state.userNeeds);
  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [selectedPlaceId, setSelectedPlaceId] = useState(selectedPlaceFromStore ?? "place_clinic_12");
  const [toast, setToast] = useState<string | null>(null);
  const [loading, setLoading] = useState(searchParams.get("state") === "loading");
  const [showResults, setShowResults] = useState(true);
  const category = searchParams.get("category") ?? "all";
  const feature = (searchParams.get("feature") ?? "") as MapFilterFeature | "";
  const state = searchParams.get("state");

  useEffect(() => {
    if (state !== "loading") return;
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    setSearch(searchParams.get("q") ?? "");
  }, [searchParams]);

  const dismissToast = useCallback(() => setToast(null), []);
  const filteredPlaces = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    return currentPlaces.filter((place) => {
      const matchesSearch = !normalized || `${place.name} ${place.address} ${place.category}`.toLowerCase().includes(normalized);
      const matchesCategory = category === "all" || place.category === category;
      const matchesFeature = !feature || place.accessibility[feature] === true || place.accessibility[feature] === "partial";
      return matchesSearch && matchesCategory && matchesFeature;
    });
  }, [category, currentPlaces, feature, search]);
  const placesWithMatches = useMemo(() => filteredPlaces.map((place) => ({ place, match: calculateAccessibilityMatch(userNeeds, place.accessibility) })), [filteredPlaces, userNeeds]);
  const selectedPlace = currentPlaces.find((place) => place.id === selectedPlaceId) ?? filteredPlaces[0] ?? null;
  const selectedMatch = selectedPlace ? calculateAccessibilityMatch(userNeeds, selectedPlace.accessibility) : null;

  const selectPlace = (placeId: string) => {
    setSelectedPlaceId(placeId);
    actions.setSelectedPlace(placeId);
    setShowResults(true);
  };
  const openPlace = (placeId: string) => {
    actions.setSelectedPlace(placeId);
    router.push(routes.user.place(placeId));
  };
  const buildRoute = (placeId: string) => {
    actions.setSelectedPlace(placeId);
    router.push(routes.user.route);
  };
  const toggleFavorite = (placeId: string) => {
    actions.toggleFavorite(placeId);
    setToast(favoriteIds.includes(placeId) ? "Место убрано из избранного" : "Место сохранено в избранное");
  };
  const resetFilters = () => router.push(routes.user.map);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <header className="border-b border-border bg-surface px-5 pb-3 pt-8 max-md:pt-5">
        <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Ваш маршрут начинается здесь</p><h1 className="mt-1 text-2xl font-bold text-ink">Карта</h1></div><Link href={routes.user.home} aria-label="Вернуться на главную" className="inline-flex h-11 w-11 items-center justify-center rounded-control text-muted hover:bg-surface-soft"><Home aria-hidden="true" className="h-5 w-5" /></Link></div>
        <div className="mt-4"><SearchBar value={search} onChange={setSearch} placeholder={uiCopy.map.searchPlaceholder} label="Поиск мест на карте" /></div>
      </header>
      <main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Категории мест">{placeCategories.slice(0, 7).map((item) => <Chip key={item.id} selected={category === item.id} onClick={() => router.push(item.id === "all" ? routes.user.map : `${routes.user.map}?category=${item.id}`)}>{item.label}</Chip>)}</div>
        <div className="mt-3 flex flex-wrap gap-2"><Link href={routes.user.mapFilters} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-3 text-sm font-semibold text-ink hover:bg-surface-soft"><Filter aria-hidden="true" className="h-4 w-4" />{uiCopy.map.filters}{feature || category !== "all" ? " · 1" : ""}</Link><Button size="sm" variant="secondary" onClick={() => setToast("Маршрут домой готовится на тестовых данных") }><Home aria-hidden="true" className="h-4 w-4" />{uiCopy.map.homeRoute}</Button><Link href={routes.user.helpAtLocation} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-3 text-sm font-semibold text-ink hover:bg-surface-soft"><HelpCircle aria-hidden="true" className="h-4 w-4" />Помощь рядом</Link></div>
        {state === "location-unavailable" ? <div className="mt-4 flex items-center justify-between gap-3 rounded-control border border-warning/40 bg-warning-soft p-3 text-sm text-warning"><span>{uiCopy.map.locationUnavailable}</span><Button size="sm" variant="secondary" onClick={() => setToast("Введите адрес в поле поиска")}>Ввести адрес</Button></div> : null}
        {state === "temporary-issue" ? <div className="mt-4"><StateBadge variant="warning" label={uiCopy.map.temporaryIssue} /></div> : null}
        {state === "stale" ? <div className="mt-4"><StateBadge variant="stale" label={uiCopy.map.staleData} /></div> : null}
        <div className="mt-4">{loading ? <div className="space-y-3"><Skeleton className="h-[330px]" /><Skeleton className="h-12" /></div> : <MapCanvas places={filteredPlaces} selectedPlaceId={selectedPlace?.id ?? null} onSelect={selectPlace} showRoute={false} />}</div>
        <div className="mt-4 flex items-center justify-between gap-3"><div><p className="text-sm font-bold text-ink">{filteredPlaces.length} {uiCopy.map.placesFound}</p><p className="text-xs text-muted">Пины и список синхронизированы</p></div><Button size="sm" variant="secondary" aria-pressed={showResults} onClick={() => setShowResults(!showResults)}><List aria-hidden="true" className="h-4 w-4" />{showResults ? "Скрыть список" : uiCopy.map.listAlternative}</Button></div>
        {feature || category !== "all" || search ? <div className="mt-3 flex flex-wrap items-center gap-2"><StateBadge variant="demo" label={search ? `Поиск: ${search}` : categoryLabel(category)} /><Button size="sm" variant="ghost" onClick={resetFilters}><X aria-hidden="true" className="h-4 w-4" />Сбросить</Button></div> : null}
        {showResults ? <section aria-label="Список мест на карте" aria-labelledby="map-list-title" className="mt-4"><h2 id="map-list-title" className="sr-only">Список мест на карте</h2>{placesWithMatches.length === 0 ? <EmptyState title={uiCopy.map.noResults} description="Попробуйте убрать фильтр или изменить запрос." action={<Button variant="secondary" onClick={resetFilters}>Сбросить фильтры</Button>} /> : <div className="space-y-3">{placesWithMatches.slice(0, 6).map(({ place, match }) => <PlaceCard key={place.id} place={place} match={match} variant="map" selected={place.id === selectedPlace?.id} isFavorite={favoriteIds.includes(place.id)} onOpen={openPlace} onFavorite={toggleFavorite} onRoute={buildRoute} />)}</div>}</section> : null}
      </main>
      {selectedPlace && selectedMatch && showResults && filteredPlaces.length > 0 ? <BottomSheet open title="Выбранное место" onClose={() => setShowResults(false)}><PlaceCard place={selectedPlace} match={selectedMatch} variant="featured" selected isFavorite={favoriteIds.includes(selectedPlace.id)} onOpen={openPlace} onFavorite={toggleFavorite} onRoute={buildRoute} /></BottomSheet> : null}
      <Toast message={toast} onDismiss={dismissToast} />
    </div>
  );
}
