"use client";

import { Accessibility, ArrowLeft, Camera, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { places } from "@/data/seed";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { MapHeader } from "@/components/map/MapHeader";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";

export function EntranceScreen({ placeId }: { placeId: string }) {
  const selectedPlace = useDemoStore((state) => state.places.find((place) => place.id === placeId)) ?? places.find((place) => place.id === placeId);
  if (!selectedPlace) return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Вход не найден" backHref={routes.user.map} /><main className="p-5"><EmptyState title="Объект не найден в демо-данных" action={<Link href={routes.user.map} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к карте</Link>} /></main></div>;
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Вход в здание" backHref={routes.user.place(selectedPlace.id)} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><p className="text-sm text-muted">{selectedPlace.name}</p><Card className="mt-4 overflow-hidden p-0"><div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-primary-soft via-surface-soft to-warm-soft"><div className="absolute inset-x-10 bottom-0 h-40 rounded-t-[36px] border-8 border-white/80 bg-primary/30"><div className="mx-auto mt-8 h-28 w-24 rounded-t-[18px] bg-primary/60" /></div><div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink"><Camera aria-hidden="true" className="h-4 w-4 text-primary" />Фото входа</div></div><div className="p-5"><h2 className="text-xl font-bold text-ink">Безбарьерный вход со стороны переулка</h2><p className="mt-2 text-sm leading-6 text-muted">Дверь открывается наружу. Справа от входа есть кнопка вызова сотрудника.</p><div className="mt-4 flex items-start gap-2 rounded-control bg-success-soft p-3 text-sm text-success"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />Вход без ступеней подтверждён</div></div></Card><Card className="mt-4 p-4"><div className="flex items-start gap-3"><Accessibility aria-hidden="true" className="h-5 w-5 text-primary" /><div><h2 className="font-bold text-ink">Если нужна помощь</h2><p className="mt-1 text-sm leading-6 text-muted">Можно открыть запрос сопровождения или сообщить о препятствии прямо из режима пути.</p></div></div></Card><Link href={routes.user.journey} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control bg-primary px-4 text-sm font-semibold text-white"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Вернуться к маршруту</Link></main></div>;
}
