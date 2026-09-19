"use client";

import { ArrowLeft, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { calculateAccessibilityMatch } from "@/domain/accessibility";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { PlaceCard } from "@/components/demo/PlaceCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Toast } from "@/components/ui/Toast";

export function SearchResultsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const actions = useDemoStore((state) => state.actions);
  const favoriteIds = useDemoStore((state) => state.favoriteIds);
  const currentPlaces = useDemoStore((state) => state.places);
  const userNeeds = useDemoStore((state) => state.userNeeds);
  const user = { needs: userNeeds };
  const results = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    return currentPlaces.filter((place) => !normalized || `${place.name} ${place.address} ${place.category}`.toLowerCase().includes(normalized));
  }, [currentPlaces, search]);
  const dismissToast = useCallback(() => setToast(null), []);
  const openPlace = (id: string) => { actions.setSelectedPlace(id); router.push(routes.user.place(id)); };
  const routeToPlace = (id: string) => { actions.setSelectedPlace(id); router.push(routes.user.route); };
  const toggleFavorite = (id: string) => { actions.toggleFavorite(id); setToast(favoriteIds.includes(id) ? "Место убрано из избранного" : "Место сохранено в избранное"); };
  return <div className="relative flex min-h-0 flex-1 flex-col"><header className="border-b border-border bg-surface px-5 pb-4 pt-8 max-md:pt-5"><div className="flex items-center justify-between"><Link href={routes.user.map} aria-label="Назад к карте" className="inline-flex h-11 w-11 items-center justify-center rounded-control text-muted hover:bg-surface-soft"><ArrowLeft aria-hidden="true" className="h-5 w-5" /></Link><h1 className="text-lg font-bold text-ink">Поиск по карте</h1><Link href={routes.user.mapFilters} aria-label="Открыть фильтры" className="inline-flex h-11 w-11 items-center justify-center rounded-control text-muted hover:bg-surface-soft"><Filter aria-hidden="true" className="h-5 w-5" /></Link></div><div className="mt-4"><SearchBar value={search} onChange={setSearch} placeholder="Клиника, кафе, библиотека" label="Поиск мест" /></div></header><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-5"><div className="flex items-center gap-2 text-sm text-muted"><Search aria-hidden="true" className="h-4 w-4" />{results.length} результатов</div><section className="mt-4 space-y-3" aria-label="Результаты поиска">{results.length === 0 ? <EmptyState title="По вашему запросу ничего не найдено" description="Измените запрос или откройте все места на карте." action={<Link href={routes.user.map} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Открыть карту</Link>} /> : results.map((place) => <PlaceCard key={place.id} place={place} match={calculateAccessibilityMatch(user.needs, place.accessibility)} isFavorite={favoriteIds.includes(place.id)} onOpen={openPlace} onFavorite={toggleFavorite} onRoute={routeToPlace} />)}</section></main><Toast message={toast} onDismiss={dismissToast} /></div>;
}
