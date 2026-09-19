"use client";

import { Bell, Settings2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { calculateAccessibilityMatch } from "@/domain/accessibility";
import { places } from "@/data/seed";
import { useDemoStore } from "@/store/demoStore";
import { routes } from "@/lib/routes";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { AccessibilityMatch } from "@/components/demo/AccessibilityMatch";
import { PlaceCard } from "@/components/demo/PlaceCard";
import { BottomNavigation } from "@/components/demo/BottomNavigation";

export function UserAppShell() {
  const router = useRouter();
  const userNeeds = useDemoStore((state) => state.userNeeds);
  const settings = useDemoStore((state) => state.settings);
  const featuredPlace = places.find((place) => place.id === "place_clinic_12") ?? places[0];
  const match = calculateAccessibilityMatch(userNeeds, featuredPlace.accessibility);

  return (
    <div className={`flex min-h-0 flex-1 flex-col bg-canvas text-ink ${settings.theme === "dark" ? "theme-dark" : ""} ${settings.highContrast ? "high-contrast" : ""} ${settings.reducedMotion ? "reduced-motion" : ""}`} style={{ fontSize: `${settings.textScale}em` }}>
      <header className="flex items-center justify-between border-b border-border bg-surface px-5 pb-3 pt-8 max-md:pt-5">
        <div className="flex items-center gap-3">
          <Avatar initials="АМ" />
          <div>
            <p className="text-xs font-semibold text-muted">Добрый день</p>
            <h1 className="text-lg font-bold">Анна</h1>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link href={routes.user.profile} className="inline-flex h-11 w-11 items-center justify-center rounded-control text-muted hover:bg-surface-soft hover:text-ink" aria-label="Настройки профиля">
            <Settings2 aria-hidden="true" className="h-5 w-5" />
          </Link>
          <Link href={routes.user.profile} className="inline-flex h-11 w-11 items-center justify-center rounded-control text-muted hover:bg-surface-soft hover:text-ink" aria-label="Уведомления">
            <Bell aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </header>
      <main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="rounded-card bg-[#10233f] p-5 text-white">
          <Badge className="bg-white/15 text-white">Ваш навигатор</Badge>
          <h2 className="mt-4 text-2xl font-bold leading-tight">Собираем путь целиком</h2>
          <p className="mt-2 text-sm leading-6 text-white/75">Фундамент demo готов: пять зон продукта, общий профиль и единый shell приложения.</p>
          <Link href={routes.user.map} className="mt-4 inline-flex min-h-11 items-center rounded-control bg-white px-4 text-sm font-bold text-[#10233f] hover:bg-white/90">
            Открыть карту
          </Link>
        </div>

        <Link href={routes.user.feed} className="mt-5 block rounded-card border border-primary/20 bg-primary-soft p-4 hover:bg-primary/10">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Сообщество</p>
          <div className="mt-2 flex items-center justify-between gap-3"><div><h2 className="font-bold text-ink">Полезный опыт рядом</h2><p className="mt-1 text-sm leading-5 text-muted">Обновления мест, события, курсы и истории людей.</p></div><span className="text-sm font-bold text-primary">Открыть ленту</span></div>
        </Link>

        <section aria-labelledby="foundation-title" className="mt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Пример продукта</p>
              <h2 id="foundation-title" className="mt-1 text-xl font-bold">Место рядом с вашим профилем</h2>
            </div>
            <Badge>Demo-данные</Badge>
          </div>
          <div className="mt-3"><PlaceCard place={featuredPlace} match={match} onOpen={() => router.push(routes.user.map)} /></div>
        </section>

        <section aria-labelledby="match-title" className="mt-5">
          <h2 id="match-title" className="sr-only">Расчёт соответствия</h2>
          <AccessibilityMatch result={match} />
        </section>

        <Card className="mt-5 border-dashed bg-surface-soft p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary"><Settings2 aria-hidden="true" className="h-5 w-5" /></div>
            <div>
              <h2 className="font-bold">Основа готова к следующему этапу</h2>
              <p className="mt-1 text-sm leading-5 text-muted">Карточки, карта и сценарии будут подключаться поверх этого общего состояния без дублирования сущностей.</p>
            </div>
          </div>
        </Card>
        <p className="mt-5 text-center text-xs leading-5 text-muted">Сценарии и детальная карта подключаются следующим этапом поверх этого shell.</p>
      </main>
      <BottomNavigation />
    </div>
  );
}
