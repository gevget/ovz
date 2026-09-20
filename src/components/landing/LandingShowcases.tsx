"use client";

import { ArrowRight, CircleCheck, HeartHandshake, MapPin, Route as RouteIcon, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Place, RouteOption } from "@/types";
import type { SocialAuthor } from "@/components/social/SocialComponents";
import { useDemoStore } from "@/store/demoStore";
import { calculateAccessibilityMatch, rankRoutes } from "@/domain/accessibility";
import { places as seedPlaces } from "@/data/seed";
import { routeOptionsByPlaceId, journeyStepsByRouteId } from "@/data/map";
import { opportunityCourses, opportunityEvents, opportunityOrganizations, opportunityVacancies } from "@/data/opportunities";
import { partnerAnalytics } from "@/data/partner";
import { helpRequestMeta } from "@/data/volunteer";
import { socialCommunities, socialPosts, socialUsers } from "@/data/social";
import { volunteerProfiles } from "@/data/volunteer";
import { MapCanvas } from "@/components/map/MapCanvas";
import { AccessibilityMatch } from "@/components/demo/AccessibilityMatch";
import { PlaceCard } from "@/components/demo/PlaceCard";
import { PhoneFrame } from "@/components/demo/PhoneFrame";
import { RouteOptionCard } from "@/components/demo/RouteOptionCard";
import { RequestStatus, Timeline } from "@/components/help/HelpComponents";
import { VacancyCard, CourseCard, EventCard } from "@/components/opportunities/OpportunityComponents";
import { CommunityCard, PostCard } from "@/components/social/SocialComponents";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StateBadge } from "@/components/ui/StateBadge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { DemoCTA, LandingMedia, StatusPill } from "@/components/landing/LandingPrimitives";

type ProductScreen = "map" | "place" | "match" | "route" | "journey";

const screenLabels: Record<ProductScreen, string> = {
  map: "Карта",
  place: "Место",
  match: "Доступность",
  route: "Маршрут",
  journey: "Путь",
};

function useLandingProductData() {
  const places = useDemoStore((state) => state.places);
  const userNeeds = useDemoStore((state) => state.userNeeds);
  const helpRequests = useDemoStore((state) => state.helpRequests);
  const clinic = places.find((place) => place.id === "place_clinic_12") ?? seedPlaces[0];
  const match = useMemo(() => calculateAccessibilityMatch(userNeeds, clinic.accessibility), [clinic, userNeeds]);
  const routes = useMemo(() => rankRoutes(routeOptionsByPlaceId[clinic.id] ?? []), [clinic.id]);
  return { places: places.length ? places : seedPlaces, userNeeds, helpRequests, clinic, match, routes };
}

function ProductScreenContent({ screen, places, clinic, match, routes }: { screen: ProductScreen; places: Place[]; clinic: Place; match: ReturnType<typeof calculateAccessibilityMatch>; routes: RouteOption[] }) {
  const journey = journeyStepsByRouteId["route_accessible_clinic"] ?? [];
  if (screen === "map") {
    return <div className="space-y-3"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Карта</p><p className="mt-1 font-bold text-ink">Найти место под свой сценарий</p></div><StatusPill tone="primary">6 мест</StatusPill></div><MapCanvas places={places.slice(0, 7)} selectedPlaceId={clinic.id} onSelect={() => undefined} /></div>;
  }
  if (screen === "place") return <PlaceCard place={clinic} match={match} variant="compact" onOpen={() => undefined} onRoute={() => undefined} />;
  if (screen === "match") return <div className="space-y-3"><div className="rounded-card bg-primary-soft p-4"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Профиль доступности</p><p className="mt-2 text-sm leading-6 text-ink">Система сравнивает условия места с выбранными потребностями и показывает причины.</p></div><AccessibilityMatch result={match} /></div>;
  if (screen === "route") return <div className="space-y-3"><div className="flex items-center gap-2 text-sm font-semibold text-ink"><RouteIcon aria-hidden="true" className="h-4 w-4 text-primary" />Маршрут до {clinic.name}</div>{routes.slice(0, 2).map((route, index) => <RouteOptionCard key={route.id} route={route} recommended={index === 0} onSelect={() => undefined} />)}</div>;
  return <div className="space-y-3"><div className="rounded-card border border-surface-inverse bg-surface-inverse p-4 text-on-surface-inverse shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary-soft">Режим пути</p><p className="mt-2 text-lg font-bold">До клиники — по шагам</p><p className="mt-1 text-sm leading-6 text-on-surface-inverse/70">Следующий шаг: {journey[0]?.title ?? "найти доступный вход"}</p></div><Timeline items={journey.slice(0, 4).map((step, index) => ({ label: step.title, detail: step.detail, current: index === 0 }))} /></div>;
}

export function HeroProductDemo() {
  const { places, clinic, match, routes } = useLandingProductData();
  const [screen, setScreen] = useState<ProductScreen>("map");
  return <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto"><PhoneFrame title="Интерактивный экран Навигатора" fullBleedMobile={false} className="h-[600px] lg:h-[min(620px,calc(100vh-220px))]"><div className="flex min-h-0 flex-1 flex-col bg-canvas"><div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3"><span className="text-sm font-bold text-ink">Навигатор</span><span className="text-xs font-semibold text-muted">Тестовые данные</span></div><div className="flex flex-wrap gap-1 border-b border-border bg-surface px-3 py-2">{(Object.keys(screenLabels) as ProductScreen[]).map((item) => <button key={item} type="button" className={`min-h-9 rounded-full px-3 text-xs font-semibold ${screen === item ? "bg-primary text-white" : "bg-surface-soft text-muted"}`} aria-pressed={screen === item} onClick={() => setScreen(item)}>{screenLabels[item]}</button>)}</div><div className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-3"><ProductScreenContent screen={screen} places={places} clinic={clinic} match={match} routes={routes} /></div></div></PhoneFrame><div className="pointer-events-none absolute -left-5 top-16 hidden rounded-card border border-border bg-surface p-3 shadow-md sm:block lg:-left-28"><p className="text-xs font-semibold text-ink">Вход без ступеней</p><p className="mt-1 text-xs text-success">Доступно</p></div><div className="pointer-events-none absolute -right-5 bottom-28 hidden rounded-card border border-border bg-surface p-3 shadow-md sm:block lg:-right-20"><p className="text-xs font-semibold text-ink">{match.score}% подходит вам</p><p className="mt-1 text-xs text-muted">{clinic.lastConfirmedLabel}</p></div></div>;
}

export function Hero({ onPartner }: { onPartner: () => void }) {
  return <section id="top" className="surface-grid overflow-hidden border-b border-border bg-canvas"><div className="page-container grid items-center gap-8 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-10"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Персональный навигатор по городу</p><h1 className="text-balance mt-4 text-5xl font-bold leading-tight tracking-[-0.065em] text-ink sm:text-6xl lg:text-6xl">Город и сервисы, которыми действительно можно пользоваться</h1><p className="mt-5 max-w-xl text-lg leading-8 text-muted">Навигатор доступности объединяет доступную инфраструктуру, маршруты, помощь, знания, работу, обучение и сообщества в одном цифровом сервисе. Он учитывает потребности конкретного человека и помогает не только найти место или услугу, но и понять, как ими воспользоваться.</p><div className="mt-6 flex flex-wrap gap-3"><DemoCTA label="Открыть интерактивное демо" /><button type="button" onClick={onPartner} className="inline-flex min-h-12 items-center justify-center rounded-control border border-border bg-surface px-5 text-sm font-semibold text-ink hover:bg-surface-soft">Обсудить партнёрство</button></div><p className="mt-3 text-sm leading-6 text-muted">Демонстрация работает на тестовых данных и показывает ключевые пользовательские сценарии.</p></div><div><HeroProductDemo /><div className="mt-4 rounded-card border border-accent/20 bg-accent-soft p-4"><p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Город как маршрут</p><p className="mt-2 text-sm font-semibold leading-6 text-ink">Проверяем не только точку на карте, но и путь до неё.</p></div></div></div></section>;
}

export function CityContextShowcase() {
  return <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"><LandingMedia src="/assets/landing/city-route.webp" alt="Городская улица с тактильной навигацией и низкопольным трамваем" priority className="min-h-[250px] aspect-[16/8] lg:aspect-auto" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><Card className="p-5 sm:p-6"><p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Город как маршрут</p><p className="mt-3 text-xl font-bold leading-7 text-ink">Проверяем не только точку на карте, но и путь до неё.</p><p className="mt-3 text-sm leading-6 text-muted">Транспорт, вход, покрытие и место назначения складываются в один понятный сценарий.</p></Card><Card className="border-primary/20 bg-primary-soft p-5 sm:p-6"><p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">Контекст рядом</p><p className="mt-3 text-xl font-bold leading-7 text-ink">Фотография помогает заранее представить пространство.</p><p className="mt-3 text-sm leading-6 text-muted">Поэтому визуальные подсказки появляются там, где человек принимает решение.</p></Card></div></div>;
}

export function ProblemFlow() {
  const today = ["Найти клинику", "Проверить вход", "Уточнить лифт", "Построить маршрут", "Найти сопровождение"];
  const product = ["Найти", "Проверить", "Построить маршрут", "Получить помощь"];
  return <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"><Card className="p-6 sm:p-8"><div className="flex items-center justify-between gap-4"><p className="font-bold text-ink">Сегодня один запрос — десятки источников</p><StatusPill>Разрозненные действия</StatusPill></div><p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.04em] text-ink">Нужно попасть на приём — а путь приходится собирать самому.</p><ul className="mt-6 space-y-3">{today.map((item) => <li key={item} className="flex items-center gap-3 text-sm text-muted"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-soft text-muted">{today.indexOf(item) + 1}</span>{item}</li>)}</ul><LandingMedia src="/assets/landing/accessible-entrance.webp" alt="Ступенчатый вход заменён плавным входом в общественное здание" className="mt-6 aspect-[16/8]" /></Card><Card className="self-start border-primary/20 bg-primary-soft p-6 sm:p-8"><p className="font-bold text-primary">Навигатор доступности</p><p className="mt-5 text-3xl font-bold leading-tight tracking-[-0.05em] text-ink">Мы собираем путь целиком.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{product.map((item, index) => <div key={item} className="flex items-center gap-3 rounded-control bg-surface p-4"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/10 text-sm font-bold text-success">{index + 1}</span><span className="font-semibold text-ink">{item}</span></div>)}</div><p className="mt-7 text-sm leading-6 text-muted">Доступность — это не только пандус. Важно, можно ли воспользоваться услугой и что делать дальше.</p></Card></div>;
}

export function ProductCore() {
  const { places, clinic, helpRequests, userNeeds } = useLandingProductData();
  const place = places.find((item) => item.id === "place_library") ?? places[1] ?? clinic;
  const request = helpRequests.find((item) => item.id === "help_001") ?? helpRequests[0];
  const match = useMemo(() => calculateAccessibilityMatch(userNeeds, place.accessibility), [place, userNeeds]);
  const community = socialCommunities[0];
  const vacancy = opportunityVacancies[0];
  const organization = opportunityOrganizations.find((item) => item.id === vacancy.organizationId);
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><Card className="overflow-hidden p-4 md:col-span-2 xl:col-span-2"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Карта</p><h3 className="mt-2 text-xl font-bold text-ink">Места и маршруты под ваши условия</h3></div><MapPin aria-hidden="true" className="h-6 w-6 text-primary" /></div><div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"><MapCanvas places={places.slice(0, 6)} selectedPlaceId={place.id} onSelect={() => undefined} showRoute /><LandingMedia src="/assets/landing/partner-venue.webp" alt="Доступное общественное пространство с понятным входом" className="aspect-[16/10] lg:aspect-auto" /></div></Card><Card className="p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Помощь</p><h3 className="mt-2 text-xl font-bold text-ink">Не искать — решить</h3></div><HeartHandshake aria-hidden="true" className="h-6 w-6 text-primary" /></div><div className="mt-4"><RequestStatus request={request} cancelable={false} onCancel={() => undefined} /></div></Card><Card className="p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Возможности</p><h3 className="mt-2 text-xl font-bold text-ink">Работа и обучение</h3></div><Sparkles aria-hidden="true" className="h-6 w-6 text-primary" /></div><div className="mt-4"><VacancyCard vacancy={vacancy} organization={organization} /></div></Card><Card className="p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Сообщество</p><h3 className="mt-2 text-xl font-bold text-ink">Полезный опыт рядом</h3></div><Users aria-hidden="true" className="h-6 w-6 text-primary" /></div><div className="mt-4"><CommunityCard community={community} joined onJoin={() => undefined} /></div></Card><Card className="p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Профиль</p><h3 className="mt-2 text-xl font-bold text-ink">Единые потребности</h3></div><ShieldCheck aria-hidden="true" className="h-6 w-6 text-primary" /></div><div className="mt-4"><AccessibilityMatch result={match} /></div></Card></div>;
}

export function AccessibilityShowcase() {
  const { places, userNeeds } = useLandingProductData();
  const candidates = ["place_clinic_12", "place_library", "place_station_demo"].map((id) => places.find((place) => place.id === id)).filter(Boolean) as Place[];
  const [selectedId, setSelectedId] = useState(candidates[0]?.id ?? "");
  const selected = candidates.find((place) => place.id === selectedId) ?? candidates[0];
  const match = useMemo(() => selected ? calculateAccessibilityMatch(userNeeds, selected.accessibility) : null, [selected, userNeeds]);
  if (!selected || !match) return null;
  return <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"><div><p className="text-xl font-bold leading-8 text-ink">Один объект может быть удобен для одного человека и неудобен для другого.</p><p className="mt-4 leading-7 text-muted">Проверка доступности сравнивает карточку места с профилем пользователя и объясняет, что подходит, где есть ограничение и что стоит проверить заранее.</p><div className="mt-7 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">{candidates.map((place) => { const itemMatch = calculateAccessibilityMatch(userNeeds, place.accessibility); return <button key={place.id} type="button" onClick={() => setSelectedId(place.id)} aria-pressed={selected.id === place.id} className={`flex min-h-16 items-center justify-between rounded-control border px-4 text-left ${selected.id === place.id ? "border-primary bg-primary-soft" : "border-border bg-surface hover:bg-surface-soft"}`}><span><span className="block text-sm font-semibold text-ink">{place.name}</span><span className="mt-1 block text-xs text-muted">{place.lastConfirmedLabel}</span></span><strong className="text-lg text-primary">{itemMatch.score}%</strong></button>; })}</div><LandingMedia src="/assets/landing/library-interior.webp" alt="Светлый интерьер библиотеки с удобной навигацией" className="mt-5 aspect-[16/8]" /></div><Card className="p-5 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><div><Badge>По текущему профилю</Badge><h3 className="mt-3 text-2xl font-bold text-ink">{selected.name}</h3><p className="mt-1 text-sm text-muted">{selected.address}</p></div><StateBadge variant={selected.verified ? "verified" : "pending"} label={selected.lastConfirmedLabel} /></div><div className="mt-7 max-w-xl"><AccessibilityMatch result={match} /></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{match.reasons.slice(0, 6).map((reason) => <div key={reason.key} className="flex items-start gap-3 rounded-control bg-surface-soft p-4"><CircleCheck aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${reason.status === true ? "text-success" : reason.status === "partial" ? "text-warning" : "text-muted"}`} /><div><p className="text-sm font-semibold text-ink">{reason.key === "stepFree" ? "Вход без ступеней" : reason.key === "elevator" ? "Лифт" : reason.key === "accessibleToilet" ? "Доступный туалет" : reason.key === "wideDoors" ? "Широкие проходы" : reason.key === "accessibleParking" ? "Парковка" : "Условия места"}</p><p className="mt-1 text-xs leading-5 text-muted">{reason.status === true ? "Подходит" : reason.status === false ? "Недоступно" : reason.status === "partial" ? "Частично" : "Нужно уточнить"}</p></div></div>)}</div></Card></div>;
}

export function StickyProductShowcase() {
  const { places, clinic, match, routes } = useLandingProductData();
  const [screen, setScreen] = useState<ProductScreen>("map");
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-landing-step]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const next = visible?.target.getAttribute("data-landing-step") as ProductScreen | null;
      if (next) setScreen(next);
    }, { rootMargin: "-28% 0px -48% 0px", threshold: [0.1, 0.4, 0.8] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div ref={rootRef} className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div className="space-y-16"><div data-landing-step="map" className="min-h-[18rem] pt-2"><StatusPill tone="primary">01 · Карта</StatusPill><h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-ink">Сначала — место и условия.</h3><p className="mt-4 max-w-md text-base leading-7 text-muted">Не просто ближайшая точка, а место, которое можно проверить по своему сценарию.</p></div><div data-landing-step="place" className="min-h-[18rem] pt-2"><StatusPill tone="primary">02 · Карточка</StatusPill><h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-ink">Потом — конкретика.</h3><p className="mt-4 max-w-md text-base leading-7 text-muted">Вход, лифт, туалет, подтверждение данных и следующий шаг собраны в одной карточке.</p></div><div data-landing-step="match" className="min-h-[18rem] pt-2"><StatusPill tone="primary">03 · Доступность</StatusPill><h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-ink">Затем — понятное решение.</h3><p className="mt-4 max-w-md text-base leading-7 text-muted">Система показывает персональный процент и не прячет причины за одним зелёным значком.</p></div><div data-landing-step="route" className="min-h-[18rem] pt-2"><StatusPill tone="primary">04 · Маршрут</StatusPill><h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-ink">Маршрут выбирается по надёжности.</h3><p className="mt-4 max-w-md text-base leading-7 text-muted">Быстрее — не всегда лучше. В демонстрации первым показывается вариант с лучшей доступностью.</p></div><div data-landing-step="journey" className="min-h-[18rem] pt-2"><StatusPill tone="primary">05 · Режим пути</StatusPill><h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-ink">И путь продолжается на месте.</h3><p className="mt-4 max-w-md text-base leading-7 text-muted">Нужный вход, помощь и сообщение о препятствии остаются частью одного сценария.</p></div></div><div className="lg:sticky lg:top-24"><div className="mb-4 flex flex-wrap gap-2 lg:hidden">{(Object.keys(screenLabels) as ProductScreen[]).map((item) => <button key={item} type="button" className={`min-h-10 rounded-full px-3 text-sm font-semibold ${screen === item ? "bg-primary text-white" : "bg-surface-soft text-muted"}`} onClick={() => setScreen(item)} aria-pressed={screen === item}>{screenLabels[item]}</button>)}</div><PhoneFrame title="Сценарий доступного пути" fullBleedMobile={false}><div className="app-scrollbar min-h-0 flex-1 overflow-y-auto bg-canvas p-3"><ProductScreenContent screen={screen} places={places} clinic={clinic} match={match} routes={routes} /></div></PhoneFrame></div></div>;
}

export function JourneyShowcase() {
  const steps = journeyStepsByRouteId["route_accessible_clinic"] ?? [];
  const journeyNarrative = [
    { title: "Найти клинику", detail: "Выбрать место по задаче и району." },
    { title: "Проверить доступность", detail: "Открыть условия, персональную оценку и дату подтверждения." },
    { title: "Записаться", detail: "Перейти к следующему действию организации." },
    { title: "Построить маршрут", detail: steps[0]?.detail ?? "Выбрать маршрут с учётом доступности." },
    { title: "Вызвать подходящий транспорт", detail: "Сохранить способ поездки в общем сценарии." },
    { title: "Найти нужный вход", detail: steps[2]?.detail ?? "Открыть подсказку о входе перед прибытием." },
    { title: "Запросить помощь на месте", detail: "Подключить человека только там, где это действительно нужно." },
    { title: "Подтвердить актуальность данных", detail: "Оставить следующий посетительский сигнал для сообщества." },
  ];
  return <div className="space-y-5"><div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch"><LandingMedia src="/assets/landing/tram-interior.webp" alt="Салон низкопольного трамвая с понятным пространством для поездки" className="aspect-[16/8] lg:aspect-auto" /><Card className="flex flex-col justify-center border-accent/20 bg-accent-soft p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Путь без разрывов</p><p className="mt-3 text-2xl font-bold leading-8 text-ink">Следующий шаг остаётся видимым до самого места.</p><p className="mt-3 text-sm leading-6 text-muted">Карточка, транспорт, вход и помощь собраны в одном сценарии, поэтому человеку не приходится заново искать контекст.</p></Card></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{journeyNarrative.map((step, index) => <Card key={step.title} className="relative p-5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">{index + 1}</span><h3 className="mt-5 font-bold text-ink">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p><span className="mt-4 block text-xs font-semibold text-primary">{index === journeyNarrative.length - 1 ? "Финальный шаг" : "Следующий шаг"}</span></Card>)}</div></div>;
}

export function HelpShowcase() {
  const { helpRequests } = useLandingProductData();
  const request = helpRequests.find((item) => item.id === "help_001") ?? helpRequests[0];
  if (!request) return null;
  const volunteer = volunteerProfiles[0];
  const meta = helpRequestMeta[request.id];
  return <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr]"><RequestStatus request={request} cancelable={false} onCancel={() => undefined} /><Card className="p-6 sm:p-8"><div className="flex items-center gap-3"><Avatar initials={volunteer.initials} /><div><p className="font-bold text-ink">Подходящий волонтёр</p><p className="text-sm text-muted">{volunteer.displayName} · {volunteer.skills.slice(0, 2).join(" · ")}</p></div><StateBadge variant="verified" label="Профиль проверен" /></div><LandingMedia src="/assets/landing/community-cafe.webp" alt="Спокойное общественное пространство для встречи и поддержки" className="mt-6 aspect-[16/8]" /><div className="mt-6 rounded-card bg-primary-soft p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">От вопроса — к конкретному действию</p><p className="mt-3 text-xl font-bold leading-7 text-ink">«Мне нужен сопровождающий завтра»</p><p className="mt-2 text-sm leading-6 text-muted">Запрос уточняет время, район и удобный формат помощи. Точные контакты открываются только в контексте заявки.</p></div><div className="mt-6 flex flex-wrap gap-2">{meta?.neededSkills.slice(0, 3).map((skill) => <Badge key={skill}>{skill}</Badge>)}</div><DemoCTA label="Запросить помощь в демо" /></Card></div>;
}

export function OpportunitiesShowcase() {
  const vacancy = opportunityVacancies.find((item) => item.status === "open") ?? opportunityVacancies[0];
  const course = opportunityCourses.find((item) => item.status === "available") ?? opportunityCourses[0];
  const event = opportunityEvents.find((item) => item.status === "available") ?? opportunityEvents[0];
  const organization = opportunityOrganizations.find((item) => item.id === vacancy.organizationId);
  const courseOrganization = opportunityOrganizations.find((item) => item.id === course.organizationId);
  const eventOrganization = opportunityOrganizations.find((item) => item.id === event.organizationId);
  return <div className="grid gap-4 lg:grid-cols-3"><VacancyCard vacancy={vacancy} organization={organization} /><CourseCard course={course} organization={courseOrganization} /><EventCard event={event} organization={eventOrganization} /></div>;
}

function socialAuthorFor(postId: string): SocialAuthor {
  const post = socialPosts.find((item) => item.id === postId) ?? socialPosts[0];
  const user = socialUsers.find((item) => item.id === post.authorId);
  if (user) return { id: user.id, name: user.name, verified: user.verified, city: user.city, avatarLabel: user.avatarLabel, authorType: "user" };
  const organization = opportunityOrganizations.find((item) => item.id === post.authorId);
  return { id: post.authorId, name: organization?.name ?? "Партнёр Навигатора", verified: organization?.verified ?? post.verifiedAuthor, city: organization?.city ?? "Москва", avatarLabel: organization?.name.split(" ").map((part) => part[0]).join("").slice(0, 2) ?? "Н", authorType: "organization" };
}

export function CommunityShowcase() {
  const community = socialCommunities[0];
  const post = socialPosts.find((item) => item.type === "accessibility_update") ?? socialPosts[0];
  const author = socialAuthorFor(post.id);
  return <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]"><div className="space-y-4"><LandingMedia src="/assets/landing/park-promenade.webp" alt="Ровная прогулочная дорожка в городском парке" className="aspect-[16/9]" /><CommunityCard community={community} joined onJoin={() => undefined} /></div><PostCard post={post} author={author} liked={false} saved={false} followingAuthor={false} onOpen={() => undefined} onReact={() => undefined} onSave={() => undefined} onShare={() => undefined} onFollow={() => undefined} onOpenProfile={() => undefined} /></div>;
}

export function DataFreshnessShowcase() {
  const clinic = useDemoStore((state) => state.places.find((place) => place.id === "place_clinic_12"));
  const [confirmed, setConfirmed] = useState(false);
  if (!clinic) return null;
  return <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center"><div className="relative space-y-3"><div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] border-l-2 border-dashed border-primary/30 sm:block" aria-hidden="true" />{[{ label: "Пользователь", title: "Лифт не работает", icon: MapPin }, { label: "Партнёр", title: "Обновление карточки", icon: ShieldCheck }, { label: "Контроль качества", title: "Проверка сообщения", icon: CircleCheck }, { label: "Пользователь", title: "Текущая доступность", icon: Sparkles }].map(({ label, title, icon: Icon }, index) => <div key={title} className="relative flex gap-4 rounded-card border border-border bg-surface p-5 sm:ml-0"><span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary"><Icon aria-hidden="true" className="h-4 w-4" /></span><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{index + 1} · {label}</p><p className="mt-1 font-bold text-ink">{title}</p></div></div>)}</div><Card className="p-6 sm:p-8"><LandingMedia src="/assets/landing/volunteer-route.webp" alt="Волонтёр помогает сориентироваться на доступном городском маршруте" className="aspect-[16/8]" /><div className="mt-6 flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Объект</p><h3 className="mt-2 text-xl font-bold text-ink">{clinic.name}</h3></div><StateBadge variant={confirmed ? "success" : "verified"} label={confirmed ? "Только что" : clinic.lastConfirmedLabel} /></div><p className="mt-5 text-sm leading-6 text-muted">Доступность меняется. В демонстрации пользователь, организация и команда контроля качества проходят один общий сценарий.</p><div className="mt-6 rounded-card bg-surface-soft p-4"><div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-ink">Подтверждения за период</span><span className="text-xl font-bold text-primary">{partnerAnalytics["30"].accessibilityConfirmations}</span></div><p className="mt-2 text-xs text-muted">Пилотная метрика · Тестовые данные</p></div><Button className="mt-5 w-full" variant="secondary" onClick={() => setConfirmed(true)} disabled={confirmed}>{confirmed ? "Данные подтверждены в демонстрации" : "Показать подтверждение"}</Button></Card></div>;
}

export function RoleEcosystem() {
  const roles = [{ role: "user" as const, label: "Пользователь", description: "Находит место, помощь и возможность действовать." }, { role: "volunteer" as const, label: "Волонтёр", description: "Видит релевантные запросы и подключается к помощи." }, { role: "partner" as const, label: "Партнёр", description: "Обновляет данные и размещает предложения." }, { role: "admin" as const, label: "Контроль качества платформы", description: "Проверяет сообщения и поддерживает доверие к данным." }];
  const [selected, setSelected] = useState(roles[0]);
  return <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div className="space-y-4"><LandingMedia src="/assets/landing/volunteer-route.webp" alt="Волонтёр на доступном маршруте по городу" className="aspect-[16/9]" /><div className="grid gap-2">{roles.map((role) => <button key={role.role} type="button" onClick={() => setSelected(role)} aria-pressed={selected.role === role.role} className={`flex min-h-16 items-center justify-between rounded-control border px-4 text-left ${selected.role === role.role ? "border-primary bg-primary-soft" : "border-border bg-surface hover:bg-surface-soft"}`}><span className="font-semibold text-ink">{role.label}</span><ArrowRight aria-hidden="true" className="h-4 w-4 text-muted" /></button>)}</div></div><Card className="border-primary/20 bg-primary-soft p-7 sm:p-10"><p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Одна система — разные участники</p><h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-ink">{selected.label}</h3><p className="mt-4 max-w-xl text-lg leading-8 text-muted">{selected.description}</p><div className="mt-7 flex flex-wrap gap-3"><DemoCTA label={`Открыть демо как ${selected.label.toLowerCase()}`} role={selected.role} /></div></Card></div>;
}
