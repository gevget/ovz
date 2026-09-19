"use client";

import { CalendarClock, CarFront, ExternalLink, Heart, MessageSquareWarning, Phone, Share2 } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { calculateAccessibilityMatch } from "@/domain/accessibility";
import { placePresentationMeta } from "@/data/map";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { MapHeader } from "@/components/map/MapHeader";
import { AccessibilityFeatureList } from "@/components/demo/AccessibilityFeatureList";
import { AccessibilityMatch } from "@/components/demo/AccessibilityMatch";
import { PlaceCard } from "@/components/demo/PlaceCard";
import { StateBadge } from "@/components/ui/StateBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Toast } from "@/components/ui/Toast";

export function PlaceDetailScreen({ placeId }: { placeId: string }) {
  const router = useRouter();
  const actions = useDemoStore((state) => state.actions);
  const place = useDemoStore((state) => state.places.find((item) => item.id === placeId));
  const favoriteIds = useDemoStore((state) => state.favoriteIds);
  const reports = useDemoStore((state) => state.accessibilityReports);
  const userNeeds = useDemoStore((state) => state.userNeeds);
  const user = { needs: userNeeds };
  const [toast, setToast] = useState<string | null>(null);
  const dismissToast = useCallback(() => setToast(null), []);
  const organizations = useDemoStore((state) => state.organizations);
  const organization = useMemo(() => place?.organizationId ? organizations.find((item) => item.id === place.organizationId) : undefined, [place, organizations]);

  if (!place) return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Место не найдено" backHref={routes.user.map} /><main className="app-scrollbar flex-1 overflow-y-auto p-5"><EmptyState title="Объект не найден в demo-данных" description="Вернитесь к карте и выберите место из локального набора." action={<Link href={routes.user.map} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к карте</Link>} /></main></div>;

  const match = calculateAccessibilityMatch(userNeeds, place.accessibility);
  const hasVerifiedReport = reports.some((report) => report.placeId === place.id && report.status === "verified");
  const hasLocalReport = hasVerifiedReport || reports.some((report) => report.placeId === place.id && ["submitted", "under_review"].includes(report.status));
  const favorite = favoriteIds.includes(place.id);
  const toggleFavorite = () => { actions.toggleFavorite(place.id); setToast(favorite ? "Место убрано из избранного" : "Место сохранено в избранное"); };
  const share = async () => { try { await navigator.clipboard?.writeText(window.location.href); } catch { /* clipboard is optional in demo */ } setToast("Ссылка на место подготовлена"); };
  const buildRoute = () => { actions.setSelectedPlace(place.id); router.push(routes.user.route); };

  return <div className="relative flex min-h-0 flex-1 flex-col"><MapHeader title="Карточка места" backHref={routes.user.map} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><PlaceCard place={place} match={match} variant="featured" isFavorite={favorite} onFavorite={toggleFavorite} onRoute={buildRoute} /><div className="mt-3 flex flex-wrap gap-2"><StateBadge variant={hasLocalReport ? "warning" : match.criticalMismatch ? "warning" : "demo"} label={hasLocalReport ? "Есть новое сообщение" : match.criticalMismatch ? "Критичное ограничение" : placePresentationMeta[place.id]?.message ?? "Почему это важно для вас"} /><Link href={routes.user.placeAccessibility(place.id)} className="inline-flex min-h-7 items-center rounded-full border border-border bg-surface px-3 text-xs font-semibold text-ink hover:bg-surface-soft">Показать все условия</Link></div><section className="mt-4"><AccessibilityMatch result={match} /></section><div className="mt-4 grid grid-cols-2 gap-2"><Button variant="secondary" onClick={toggleFavorite}><Heart aria-hidden="true" className={`h-4 w-4 ${favorite ? "fill-danger text-danger" : ""}`} />{favorite ? "В избранном" : "В избранное"}</Button><Button variant="secondary" onClick={share}><Share2 aria-hidden="true" className="h-4 w-4" />Поделиться</Button><Button variant="secondary" onClick={() => router.push(routes.user.taxi)}><CarFront aria-hidden="true" className="h-4 w-4" />Вызвать такси</Button><Link href={routes.user.placeReport(place.id)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-border bg-surface px-3 text-center text-sm font-semibold text-ink hover:bg-surface-soft"><MessageSquareWarning aria-hidden="true" className="h-4 w-4" />Сообщить</Link></div><section className="mt-6"><AccessibilityFeatureList features={place.accessibility} userNeeds={user.needs} /></section><Card className="mt-4 p-4"><h2 className="font-bold text-ink">О месте</h2><p className="mt-2 text-sm leading-6 text-muted">{place.description ?? "Описание появится после подтверждения карточки организацией или сообществом."}</p><dl className="mt-4 space-y-3 text-sm"><div className="flex gap-3"><dt className="w-6 text-muted"><CalendarClock aria-hidden="true" className="h-5 w-5" /></dt><dd><span className="font-semibold text-ink">График</span><br /><span className="text-muted">{place.schedule}</span></dd></div><div className="flex gap-3"><dt className="w-6 text-muted"><Phone aria-hidden="true" className="h-5 w-5" /></dt><dd><span className="font-semibold text-ink">Контакты</span><br /><span className="text-muted">{organization?.contacts?.phone ?? "Контакты доступны в demo-сценарии"}</span></dd></div></dl>{organization ? <Link href={routes.user.organization(organization.id)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Профиль организации <ExternalLink aria-hidden="true" className="h-4 w-4" /></Link> : null}</Card><Link href={routes.user.entrance(place.id)} className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Посмотреть вход</Link></main><Toast message={toast} onDismiss={dismissToast} /></div>;
}
