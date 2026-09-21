"use client";

import { cloneElement, isValidElement, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Bot, CalendarClock, CheckCircle2, HandHelping, Send, ShieldAlert, Sparkles } from "lucide-react";
import { helpArticles, helpCategories, helpOrganizations, helpSpecialists, aiIntentExamples, bookingSlotsByOrganization } from "@/data/help";
import { places } from "@/data/seed";
import { volunteerProfiles } from "@/data/volunteer";
import { calculateAccessibilityMatch } from "@/domain/accessibility";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { useDemoStore } from "@/store/demoStore";
import type { AiIntentId, HelpRequest } from "@/types";
import { PlaceCard } from "@/components/demo/PlaceCard";
import { ArticleCard, ArticleDetail, AIEntityCard, ChatBubble, HelpCategoryCard, OrganizationCard, OrganizationDetail, QuickReply, RequestStatus, SpecialistCard, SpecialistProfile, Timeline, MultiStepForm } from "@/components/help/HelpComponents";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";
import { SearchBar } from "@/components/ui/SearchBar";
import { Textarea } from "@/components/ui/Textarea";
import { AppScreenHeader } from "@/components/demo/AppScreenHeader";

function HelpHeader({ title = "Помощь", backHref = routes.user.home }: { title?: string; backHref?: string }) {
  return <AppScreenHeader title={title} backHref={backHref} eyebrow="Навигатор" />;
}

function translateHelpText(text: string) {
  return text
    .replaceAll("AI-навигатор", "ИИ-навигатор")
    .replaceAll("AI", "ИИ")
    .replaceAll("demo-место", "тестовое место")
    .replaceAll("demo-курсы", "тестовые курсы")
    .replaceAll("demo-разделы", "разделы демонстрации")
    .replaceAll("demo события", "тестовые события")
    .replaceAll("demo-оценка", "демонстрационная оценка")
    .replaceAll("Accessibility Match", "персональная оценка доступности")
    .replaceAll("demo-вопроса", "тестовых вопросов")
    .replaceAll("demo-материалов", "демонстрационных материалов")
    .replaceAll("demo-профилей", "тестовых профилей")
    .replaceAll("demo-запись", "тестовая запись")
    .replaceAll("demo-времён", "тестовых времён")
    .replaceAll("demo-время", "тестовое время")
    .replaceAll("shared state", "общем состоянии")
    .replaceAll("Map flow", "картой")
    .replaceAll("Demo-контакт", "Тестовый контакт")
    .replaceAll("demo", "демо")
    .replaceAll("placeholder", "пример вложения");
}

function localizeHelpNode(node: ReactNode): ReactNode {
  if (typeof node === "string") return translateHelpText(node);
  if (Array.isArray(node)) {
    return node.map((item, index) => {
      const localized = localizeHelpNode(item);
      return isValidElement(localized) && localized.key == null
        ? cloneElement(localized, { key: `help-localized-${index}` })
        : localized;
    });
  }
  if (!isValidElement(node)) return node;
  const children = (node.props as { children?: ReactNode }).children;
  return cloneElement(node, undefined, localizeHelpNode(children));
}

export function HelpMain({ children }: { children: ReactNode }) {
  return <main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-5">{localizeHelpNode(children)}</main>;
}

export function HelpHomeScreen() {
  const [query, setQuery] = useState("");
  const savedArticleIds = useDemoStore((state) => state.savedArticleIds);
  const toggleSavedArticle = useDemoStore((state) => state.actions.toggleSavedArticle);
  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return helpArticles.filter((article) => !normalized || `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(normalized));
  }, [query]);
  const saved = helpArticles.filter((article) => savedArticleIds.includes(article.id));
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader /><HelpMain><SearchBar value={query} onChange={setQuery} label="Поиск по помощи" placeholder="Статья, организация или специалист" /><section className="mt-5 rounded-card bg-[#10233f] p-5 text-white"><Badge className="bg-white/15 text-white"><Sparkles aria-hidden="true" className="h-3.5 w-3.5" />Навигатор</Badge><h2 className="mt-4 text-2xl font-bold leading-tight">Опишите, что вам нужно</h2><p className="mt-2 text-sm leading-6 text-white/75">Поможем понять следующий шаг: найти место, специалиста, статью или создать запрос.</p><Link href={routes.user.helpAi} className="mt-5 inline-flex min-h-11 items-center rounded-control bg-white px-4 text-sm font-bold text-[#10233f]">Открыть AI-навигатор<ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></Link></section><section className="mt-6" aria-labelledby="help-categories"><div className="flex items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Разделы</p><h2 id="help-categories" className="mt-1 text-xl font-bold text-ink">Начните с задачи</h2></div><Link href={routes.user.helpTopics} className="text-sm font-semibold text-primary">Все темы</Link></div><div className="mt-3 grid gap-3 sm:grid-cols-2">{helpCategories.slice(0, 6).map((category) => <HelpCategoryCard key={category.id} category={category} href={category.href} />)}</div></section><section className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Сервисы помощи"><Link href={routes.user.helpSpecialists} className="rounded-card border border-border bg-surface p-4 hover:bg-surface-soft"><div className="flex items-center gap-2 font-bold text-ink"><Avatar initials="С" className="h-9 w-9" />Специалисты</div><p className="mt-2 text-sm leading-5 text-muted">Юристы, психологи, карьерные консультанты и социальные навигаторы.</p></Link><Link href={routes.user.helpOrganizations} className="rounded-card border border-border bg-surface p-4 hover:bg-surface-soft"><div className="flex items-center gap-2 font-bold text-ink"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">⌂</span>Организации</div><p className="mt-2 text-sm leading-5 text-muted">Профили, услуги, контакты и связанные места на карте.</p></Link></section>{query && !filteredArticles.length ? <EmptyState title="Ничего не найдено" description="Попробуйте изменить запрос или открыть популярные темы." action={<Link href={routes.user.helpTopics} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Открыть темы</Link>} /> : <section className="mt-6" aria-labelledby="popular-help"><div className="flex items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">База знаний</p><h2 id="popular-help" className="mt-1 text-xl font-bold text-ink">Популярные материалы</h2></div><Link href={routes.user.helpArticles} className="text-sm font-semibold text-primary">Все статьи</Link></div><div className="mt-3 space-y-3">{filteredArticles.slice(0, 3).map((article) => <ArticleCard key={article.id} article={article} saved={savedArticleIds.includes(article.id)} onSave={toggleSavedArticle} />)}</div></section>}{saved.length ? <section className="mt-6" aria-labelledby="saved-help"><h2 id="saved-help" className="text-xl font-bold text-ink">Сохранённые материалы</h2><div className="mt-3 space-y-3">{saved.slice(0, 2).map((article) => <ArticleCard key={article.id} article={article} saved onSave={toggleSavedArticle} compact />)}</div></section> : <Card className="mt-6 border-dashed p-4"><p className="font-semibold text-ink">Последние материалы</p><p className="mt-1 text-sm leading-5 text-muted">Сохраняйте статьи, чтобы быстро вернуться к ним перед действием.</p></Card>}<Link href={routes.user.volunteerRequest} className="mt-6 flex min-h-12 items-center justify-center rounded-control border border-primary/30 bg-primary-soft px-4 text-sm font-bold text-primary"><HandHelping aria-hidden="true" className="mr-2 h-5 w-5" />Нужен сопровождающий</Link></HelpMain></div>;
}

type ChatMessage = { id: string; role: "user" | "assistant"; text: string; intent?: AiIntentId; quickReplies?: string[] };

function intentFromText(text: string): AiIntentId | null {
  const value = text.toLowerCase();
  if (value.includes("клиник") || value.includes("врач")) return "clinic";
  if (value.includes("сопровожд") || value.includes("волонт")) return "volunteer";
  if (value.includes("лифт") || value.includes("пандус")) return "broken_elevator";
  if (value.includes("работ")) return "job";
  if (value.includes("курс") || value.includes("учеб")) return "course";
  if (value.includes("мероприят") || value.includes("событ")) return "event";
  if (value.includes("match") || value.includes("соответств") || value.includes("доступност")) return "match";
  if (value.includes("организац") || value.includes("центр")) return "organization";
  return null;
}

function AIResponse({ intent }: { intent: AiIntentId }) {
  const userNeeds = useDemoStore((state) => state.userNeeds);
  if (intent === "clinic") { const clinic = places.find((place) => place.id === "place_clinic_12"); if (!clinic) return null; const match = calculateAccessibilityMatch(userNeeds, clinic.accessibility); return <><p>Для вас важны условия из профиля. Нашла тестовое место с персональной оценкой доступности {match.score}%.</p><div className="mt-3"><PlaceCard place={clinic} match={match} variant="compact" /></div><Link href={routes.user.place(clinic.id)} className="mt-3 inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Открыть на карте<ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></Link></>; }
  if (intent === "volunteer") return <><p>Помогу создать запрос. Куда нужно поехать?</p><div className="mt-3 flex flex-wrap gap-2"><Link href={`${routes.user.volunteerRequest}?intent=volunteer&location=clinic`} className="rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">В клинику</Link><Link href={`${routes.user.volunteerRequest}?intent=volunteer&location=event`} className="rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">На мероприятие</Link><Link href={`${routes.user.volunteerRequest}?intent=volunteer`} className="rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">Другое</Link></div><Link href={`${routes.user.volunteerRequest}?intent=volunteer`} className="mt-4 inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Создать запрос волонтёру</Link></>;
  if (intent === "broken_elevator") return <><p>Если речь об объекте на карте, можно сообщить об изменении. В демо уже подготовлена карточка транспортного узла.</p><div className="mt-3"><AIEntityCard title="Транспортный узел «Центральный»" description="У западной платформы есть временное ограничение." href={routes.user.placeReport("place_station_demo")} ctaLabel="Сообщить о проблеме" /></div></>;
  if (intent === "job") return <><p>Начните с условий, которые помогают выполнять работу: формат, темп и доступность рабочего места.</p><div className="mt-3"><AIEntityCard icon="organization" title="Подобрать вакансию" description="Откройте реальный список вакансий с фильтрами по формату и доступности." href={routes.user.vacancies} ctaLabel="Открыть вакансии" /></div></>;
  if (intent === "course") return <><p>Покажу тестовые курсы и критерии доступного обучения: субтитры, расшифровка и гибкий темп.</p><div className="mt-3"><AIEntityCard icon="organization" title="Подобрать курс" description="Сравните форматы обучения и запишитесь на подходящую программу." href={routes.user.courses} ctaLabel="Открыть курсы" /></div></>;
  if (intent === "event") return <><p>Для событий сначала проверьте место и доступность входа. В демо события связаны с картой.</p><div className="mt-3"><AIEntityCard icon="organization" title="Найти событие" description="Откройте список событий и проверьте доступное место на карте." href={routes.user.events} ctaLabel="Открыть события" /></div></>;
  if (intent === "match") return <><p>Персональная оценка доступности — демонстрационная оценка того, насколько условия места совпадают с вашим профилем. Это не медицинское заключение.</p><div className="mt-3"><AIEntityCard icon="article" title="Как читать карточку доступности" description="Посмотрите причины оценки и свежесть данных." href={routes.user.article("article_read_accessibility")} /></div></>;
  return <><p>Подберу организацию по теме и покажу услуги, контакты, специалистов и связанные места.</p><div className="mt-3"><AIEntityCard icon="organization" title="Навигатор социальных сервисов" description="Социальная навигация и подготовка обращения." href={routes.user.organization("org_social_navigator")} /></div></>;
}

export function AIHelpScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [activeIntent, setActiveIntent] = useState<AiIntentId | null>(null);
  const startIntent = (intent: AiIntentId, sample = aiIntentExamples.find((item) => item.id === intent)?.sample ?? "") => {
    setActiveIntent(intent);
    setMessages([{ id: `user-${intent}`, role: "user", text: sample }, { id: `assistant-${intent}`, role: "assistant", text: "", intent }]);
    setTyping(true);
    window.setTimeout(() => setTyping(false), 280);
  };
  const submit = () => {
    const value = input.trim();
    if (!value) return;
    setInput("");
    const intent = intentFromText(value);
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: "user", text: value }, { id: `assistant-${Date.now()}-answer`, role: "assistant", text: intent ? "" : "В demo доступны несколько подготовленных сценариев. Выберите пример ниже.", intent: intent ?? undefined }]);
    if (intent) { setActiveIntent(intent); setTyping(true); window.setTimeout(() => setTyping(false), 280); }
  };
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="ИИ-навигатор" backHref={routes.user.help} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-5"><div className="rounded-card border border-primary/20 bg-primary-soft p-4"><div className="flex items-start gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><Bot aria-hidden="true" className="h-5 w-5" /></span><div><h2 className="font-bold text-ink">Демо ИИ-навигатора</h2><p className="mt-1 text-sm leading-5 text-muted">Выберите сценарий или опишите задачу. Ответы подготовлены заранее и ведут в реальные разделы демонстрации.</p></div></div></div><div className="mt-5 space-y-3" aria-live="polite">{messages.map((message) => <ChatBubble key={message.id} role={message.role}>{message.role === "user" ? message.text : message.intent ? <AIResponse intent={message.intent} /> : message.text}</ChatBubble>)}{typing ? <ChatBubble role="assistant"><span className="inline-flex items-center gap-2 text-muted"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" />Готовлю следующий шаг…</span></ChatBubble> : null}</div><section className="mt-6" aria-labelledby="intent-title"><h2 id="intent-title" className="text-lg font-bold text-ink">Подготовленные сценарии</h2><div className="mt-3 flex flex-wrap gap-2">{aiIntentExamples.map((example) => <QuickReply key={example.id} onClick={() => startIntent(example.id)}>{example.label}</QuickReply>)}</div></section><form className="mt-6" onSubmit={(event) => { event.preventDefault(); submit(); }}><label htmlFor="ai-question" className="text-sm font-semibold text-ink">Опишите задачу</label><div className="mt-2 flex gap-2"><Input id="ai-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Например: найти доступную клинику" /><Button type="submit" aria-label="Отправить вопрос" className="h-12 w-12 shrink-0 px-0"><Send aria-hidden="true" className="h-5 w-5" /></Button></div></form><div className="mt-6 rounded-control border border-border bg-surface p-3 text-xs leading-5 text-muted"><ShieldAlert aria-hidden="true" className="mr-1 inline h-4 w-4" />{uiCopy.demo.aiDisclaimer}</div>{activeIntent ? <p className="mt-3 text-center text-xs text-muted">Сценарий: {aiIntentExamples.find((item) => item.id === activeIntent)?.label}</p> : null}</main></div>;
}

export function KnowledgeScreen() {
  return <ArticleListScreen title="База знаний" backHref={routes.user.help} />;
}

export function ArticleListScreen({ title = "Статьи", backHref = routes.user.help }: { title?: string; backHref?: string }) {
  const [query, setQuery] = useState("");
  const savedArticleIds = useDemoStore((state) => state.savedArticleIds);
  const toggleSavedArticle = useDemoStore((state) => state.actions.toggleSavedArticle);
  const filtered = helpArticles.filter((article) => !query.trim() || `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title={title} backHref={backHref} /><HelpMain><SearchBar value={query} onChange={setQuery} label="Поиск статей" placeholder="Найти статью" /><p className="mt-4 text-sm text-muted">{helpArticles.length} demo-материалов · короткие инструкции с понятным следующим шагом</p>{!filtered.length ? <EmptyState title="Статьи не найдены" description="Измените запрос или откройте популярные темы." action={<Link href={routes.user.helpTopics} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Открыть темы</Link>} /> : <div className="mt-4 space-y-3">{filtered.map((article) => <ArticleCard key={article.id} article={article} saved={savedArticleIds.includes(article.id)} onSave={toggleSavedArticle} />)}</div>}</HelpMain></div>;
}

export function ArticleDetailScreen({ articleId }: { articleId: string }) {
  const article = helpArticles.find((item) => item.id === articleId);
  const placesState = useDemoStore((state) => state.places);
  const saved = useDemoStore((state) => state.savedArticleIds.includes(articleId));
  const toggleSavedArticle = useDemoStore((state) => state.actions.toggleSavedArticle);
  const settings = useDemoStore((state) => state.settings);
  const patchSettings = useDemoStore((state) => state.actions.patchSettings);
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => () => { if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel(); }, []);
  if (!article) return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Статья" backHref={routes.user.helpArticles} /><HelpMain><EmptyState title="Статья не найдена" description={uiCopy.errors.entityNotFound} action={<Link href={routes.user.helpArticles} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к статьям</Link>} /></HelpMain></div>;
  const relatedPlaces = (article.relatedPlaceIds ?? []).map((id) => placesState.find((place) => place.id === id)).filter((place): place is (typeof placesState)[number] => Boolean(place)).map((place) => ({ id: place.id, name: place.name }));
  const relatedOrganizations = helpOrganizations.filter((organization) => article.relatedOrganizationIds?.includes(organization.id));
  const relatedSpecialists = helpSpecialists.filter((specialist) => article.relatedSpecialistIds?.includes(specialist.id));
  const toggleVoice = () => { if (typeof window === "undefined" || !("speechSynthesis" in window)) { setSpeaking(false); return; } if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; } const utterance = new SpeechSynthesisUtterance(`${article.title}. ${article.summary}. ${article.body.join(" ")}`); utterance.lang = "ru-RU"; utterance.onend = () => setSpeaking(false); window.speechSynthesis.speak(utterance); setSpeaking(true); };
  const relatedArticles = helpArticles.filter((item) => article.relatedArticleIds?.includes(item.id));
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Статья" backHref={routes.user.helpArticles} /><HelpMain><ArticleDetail article={article} blocks={settings.contentMode === "simple" ? article.contentMode.simple : article.contentMode.normal} saved={saved} simpleMode={settings.contentMode === "simple"} speaking={speaking} onSave={() => toggleSavedArticle(article.id)} onToggleSimple={() => patchSettings({ contentMode: settings.contentMode === "simple" ? "normal" : "simple" })} onSpeak={toggleVoice} relatedPlaces={relatedPlaces} relatedOrganizations={relatedOrganizations} relatedSpecialists={relatedSpecialists} relatedArticles={relatedArticles} /></HelpMain></div>;
}

export function TopicsScreen() {
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Популярные темы" backHref={routes.user.help} /><HelpMain><p className="text-sm leading-6 text-muted">Выберите направление, чтобы открыть короткие инструкции.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{helpCategories.map((category) => <HelpCategoryCard key={category.id} category={category} href={`${routes.user.helpArticles}?category=${category.id}`} />)}</div></HelpMain></div>;
}

export function SpecialistsScreen() {
  const [query, setQuery] = useState("");
  const filtered = helpSpecialists.filter((item) => !query.trim() || `${item.name} ${item.specialties.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Специалисты" backHref={routes.user.help} /><HelpMain><SearchBar value={query} onChange={setQuery} label="Поиск специалистов" placeholder="Имя или специализация" />{!filtered.length ? <EmptyState title="Специалист не найден" description="Попробуйте другую тему или откройте подготовленный профиль." /> : <div className="mt-4 space-y-3">{filtered.map((specialist) => <SpecialistCard key={specialist.id} specialist={specialist} />)}</div>}</HelpMain></div>;
}

export function SpecialistDetailScreen({ specialistId }: { specialistId: string }) {
  const router = useRouter();
  const specialist = helpSpecialists.find((item) => item.id === specialistId);
  if (!specialist) return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Специалист" backHref={routes.user.helpSpecialists} /><HelpMain><EmptyState title="Специалист не найден" description={uiCopy.errors.entityNotFound} action={<Link href={routes.user.helpSpecialists} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к специалистам</Link>} /></HelpMain></div>;
  const organization = helpOrganizations.find((item) => item.id === specialist.organizationId);
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Профиль специалиста" backHref={routes.user.helpSpecialists} /><HelpMain><SpecialistProfile specialist={specialist} organization={organization} onQuestion={() => router.push(`${routes.user.helpQuestion}?specialistId=${specialist.id}`)} onBook={() => router.push(routes.user.helpBooking(specialist.organizationId))} /><Card className="mt-5 border-dashed p-4"><p className="text-sm leading-6 text-muted">Специалист помогает с навигацией и формулировкой следующего шага. Медицинские диагнозы и окончательные юридические решения в demo не выдаются.</p></Card></HelpMain></div>;
}

export function OrganizationsScreen() {
  const [query, setQuery] = useState("");
  const filtered = helpOrganizations.filter((item) => !query.trim() || `${item.name} ${item.category} ${item.services.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Организации" backHref={routes.user.help} /><HelpMain><SearchBar value={query} onChange={setQuery} label="Поиск организаций" placeholder="Название или услуга" /><p className="mt-4 text-sm text-muted">{helpOrganizations.length} demo-профилей с canonical ID и связями с местами.</p>{!filtered.length ? <EmptyState title="Организация не найдена" description="Проверьте название или откройте все профили." /> : <div className="mt-4 space-y-3">{filtered.map((organization) => <OrganizationCard key={organization.id} organization={organization} />)}</div>}</HelpMain></div>;
}

export function OrganizationDetailScreen({ organizationId }: { organizationId: string }) {
  const router = useRouter();
  const sharedOrganizations = useDemoStore((state) => state.organizations);
  const sharedPlaces = useDemoStore((state) => state.places);
  const platformVerificationStatuses = useDemoStore((state) => state.platformVerificationStatuses);
  const seedOrganization = helpOrganizations.find((item) => item.id === organizationId);
  const sharedOrganization = sharedOrganizations.find((item) => item.id === organizationId);
  const organization = seedOrganization && sharedOrganization ? { ...seedOrganization, ...sharedOrganization } : seedOrganization;
  if (!organization) return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Организация" backHref={routes.user.helpOrganizations} /><HelpMain><EmptyState title="Организация не найдена" description={uiCopy.errors.entityNotFound} action={<Link href={routes.user.helpOrganizations} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к организациям</Link>} /></HelpMain></div>;
  const placeNames = organization.placeIds.map((id) => sharedPlaces.find((place) => place.id === id) ?? places.find((place) => place.id === id)).filter((place): place is (typeof places)[number] => Boolean(place)).map((place) => ({ id: place.id, name: place.name }));
  const specialists = helpSpecialists.filter((item) => organization.specialistIds.includes(item.id));
  const organizationWithPlatformVerification = platformVerificationStatuses[organization.id] === "verified" ? { ...organization, verified: true } : organization;
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Профиль организации" backHref={routes.user.helpOrganizations} /><HelpMain><OrganizationDetail organization={organizationWithPlatformVerification} placeNames={placeNames} specialists={specialists} articleCount={organization.articleIds.length} onBook={() => router.push(routes.user.helpBooking(organization.id))} /></HelpMain></div>;
}

export function BookingScreen({ organizationId }: { organizationId: string }) {
  const organization = helpOrganizations.find((item) => item.id === organizationId);
  const slots = bookingSlotsByOrganization[organizationId] ?? [];
  const [selectedSlot, setSelectedSlot] = useState("");
  const [booked, setBooked] = useState(false);
  if (!organization) return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Запись" backHref={routes.user.helpOrganizations} /><HelpMain><EmptyState title="Организация не найдена" description={uiCopy.errors.entityNotFound} /></HelpMain></div>;
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Запись" backHref={routes.user.organization(organization.id)} /><HelpMain>{booked ? <Card className="border-success/30 bg-[#e8f7f0] p-6 text-center"><CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-success" /><h2 className="mt-4 text-xl font-bold text-ink">Demo-запись создана</h2><p className="mt-2 text-sm leading-6 text-muted">{organization.name}<br />{slots.find((slot) => slot.id === selectedSlot)?.label}</p><Link href={routes.user.organization(organization.id)} className="mt-5 inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться в профиль</Link></Card> : !slots.length ? <EmptyState title="Нет доступных demo-времён" description="Попробуйте задать вопрос организации или выбрать другого специалиста." action={<Link href={routes.user.helpQuestion} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Задать вопрос</Link>} /> : <Card className="p-5"><CalendarClock aria-hidden="true" className="h-8 w-8 text-primary" /><h2 className="mt-4 text-xl font-bold text-ink">Выберите demo-время</h2><p className="mt-2 text-sm leading-6 text-muted">{organization.name}. Реальная запись не создаётся.</p><fieldset className="mt-5 space-y-2"><legend className="text-sm font-semibold text-ink">Доступные слоты</legend>{slots.map((slot) => <label key={slot.id} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-control border border-border px-3 hover:bg-surface-soft"><input type="radio" name="booking-slot" value={slot.id} checked={selectedSlot === slot.id} onChange={() => setSelectedSlot(slot.id)} /> <span className="text-sm text-ink">{slot.label} · {slot.format === "online" ? "онлайн" : "очно"}</span></label>)}</fieldset><Button className="mt-5 w-full" disabled={!selectedSlot} onClick={() => setBooked(true)}>Подтвердить запись</Button></Card>}</HelpMain></div>;
}

export function QuestionScreen() {
  const createQuestion = useDemoStore((state) => state.actions.createQuestion);
  const [category, setCategory] = useState("Доступность");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [visibility, setVisibility] = useState<"public" | "private">("private");
  const [attachment, setAttachment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const submit = () => { if (!topic.trim() || question.trim().length < 10) { setError("Укажите тему и вопрос не короче 10 символов."); return; } setError(""); createQuestion({ createdBy: "user_anna", category, topic: topic.trim(), question: question.trim(), visibility }); setSuccess(true); };
  if (success) return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Вопрос отправлен" backHref={routes.user.helpQuestions} /><HelpMain><Card className="border-success/30 bg-[#e8f7f0] p-6 text-center"><CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-success" /><h2 className="mt-4 text-xl font-bold text-ink">Вопрос сохранён</h2><p className="mt-2 text-sm leading-6 text-muted">Он появился в разделе «Мои вопросы». Attachment в demo не загружается{attachment ? `: ${attachment}` : "."}</p><div className="mt-5 flex flex-wrap justify-center gap-2"><Link href={routes.user.helpQuestions} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Мои вопросы</Link><Link href={routes.user.help} className="inline-flex min-h-11 items-center rounded-control border border-border bg-surface px-4 text-sm font-semibold text-ink">В помощь</Link></div></Card></HelpMain></div>;
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Задать вопрос" backHref={routes.user.help} /><HelpMain><form onSubmit={(event) => { event.preventDefault(); submit(); }} className="space-y-4"><Card className="p-4"><label htmlFor="question-category" className="text-sm font-semibold text-ink">Категория</label><select id="question-category" value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 min-h-12 w-full rounded-control border border-border bg-surface px-3 text-base text-ink"><option>Доступность</option><option>Работа</option><option>Документы</option><option>Помощь</option></select><label htmlFor="question-topic" className="mt-4 block text-sm font-semibold text-ink">Тема</label><Input id="question-topic" value={topic} onChange={(event) => setTopic(event.target.value)} placeholder="Например, доступный вход" /><label htmlFor="question-text" className="mt-4 block text-sm font-semibold text-ink">Вопрос</label><Textarea id="question-text" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Опишите ситуацию и нужный следующий шаг" className="mt-2 min-h-32 resize-y py-3" /><fieldset className="mt-4"><legend className="text-sm font-semibold text-ink">Видимость</legend><div className="mt-2 flex gap-2"><label className="flex min-h-11 flex-1 items-center gap-2 rounded-control border border-border px-3 text-sm"><input type="radio" checked={visibility === "private"} onChange={() => setVisibility("private")} />Приватный</label><label className="flex min-h-11 flex-1 items-center gap-2 rounded-control border border-border px-3 text-sm"><input type="radio" checked={visibility === "public"} onChange={() => setVisibility("public")} />Публичный</label></div></fieldset><label htmlFor="question-attachment" className="mt-4 block text-sm font-semibold text-ink">Вложение <span className="font-normal text-muted">(placeholder)</span></label><Input id="question-attachment" value={attachment} onChange={(event) => setAttachment(event.target.value)} placeholder="Название файла, без загрузки" /></Card>{error ? <p className="rounded-control bg-[#fff0f0] p-3 text-sm font-semibold text-danger" role="alert">{error}</p> : null}<Button type="submit" className="w-full"><Send aria-hidden="true" className="h-4 w-4" />Отправить вопрос</Button></form></HelpMain></div>;
}

export function QuestionsScreen() {
  const questions = useDemoStore((state) => state.demoQuestions);
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Мои вопросы" backHref={routes.user.help} /><HelpMain><div className="flex items-center justify-between gap-3"><p className="text-sm text-muted">{questions.length} demo-вопроса</p><Link href={routes.user.helpQuestion} className="inline-flex min-h-11 items-center rounded-control bg-primary px-3 text-sm font-semibold text-white">Задать вопрос</Link></div><div className="mt-4 space-y-3">{questions.map((item) => <Card key={item.id} className="p-4"><div className="flex items-start justify-between gap-3"><h2 className="font-bold text-ink">{item.topic}</h2><Badge className={item.status === "answered" ? "text-success" : "text-warning"}>{item.status === "answered" ? "Есть ответ" : "На рассмотрении"}</Badge></div><p className="mt-2 text-sm leading-6 text-muted">{item.question}</p><p className="mt-3 text-xs text-muted">{item.category} · {item.visibility === "private" ? "Приватный" : "Публичный"} · {item.createdAtLabel}</p></Card>)}</div></HelpMain></div>;
}

const volunteerSteps = ["Что нужно", "Где", "Когда", "Комментарий", "Контакты", "Подтверждение"];
const canCancelStatuses = new Set<HelpRequest["status"]>(["draft", "submitted", "matching", "accepted", "volunteer_on_way"]);

export function VolunteerRequestScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const createHelpRequest = useDemoStore((state) => state.actions.createHelpRequest);
  const setHelpRequestStatus = useDemoStore((state) => state.actions.setHelpRequestStatus);
  const [step, setStep] = useState(0);
  const [task, setTask] = useState(searchParams.get("intent") ? "Сопровождение до выбранного места" : "");
  const [location, setLocation] = useState(searchParams.get("location") === "clinic" ? "Городская клиника №12" : "");
  const [date, setDate] = useState("Завтра, 11:30");
  const [comment, setComment] = useState("");
  const [contacts, setContacts] = useState("");
  const [error, setError] = useState("");
  const next = () => { const values = [task, location, date, comment, contacts, "ok"]; if (!values[step].trim()) { setError("Заполните это поле, чтобы продолжить."); return; } setError(""); if (step < 5) { setStep(step + 1); return; } const id = createHelpRequest({ createdBy: "user_anna", title: task, description: `${comment}. Контакты: ${contacts}`, dateLabel: date, locationLabel: location, approximateArea: "Центральный район", estimatedDuration: "1,5 часа" }); setHelpRequestStatus(id, "matching"); router.replace(routes.user.helpRequest(id)); };
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Запрос волонтёру" backHref={routes.user.help} /><HelpMain><p className="text-sm leading-6 text-muted">Опишите задачу по шагам. После подтверждения запрос сразу появится в shared state со статусом «Ищем волонтёра».</p><div className="mt-5"><MultiStepForm steps={volunteerSteps} step={step} onBack={step ? () => { setError(""); setStep(step - 1); } : undefined} onNext={next} nextLabel={step === 5 ? "Создать запрос" : "Продолжить"} canContinue={step !== 3 || comment.trim().length > 0}>{step === 0 ? <div><label htmlFor="help-task" className="text-sm font-semibold text-ink">Что нужно?</label><Textarea id="help-task" value={task} onChange={(event) => setTask(event.target.value)} placeholder="Например, сопровождение до клиники" className="mt-2 min-h-28 py-3" /></div> : null}{step === 1 ? <div><label htmlFor="help-location" className="text-sm font-semibold text-ink">Куда нужно?</label><Input id="help-location" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Место или организация" className="mt-2" /><p className="mt-2 text-xs text-muted">Можно указать «Городская клиника №12» для связи с Map flow.</p></div> : null}{step === 2 ? <div><label htmlFor="help-date" className="text-sm font-semibold text-ink">Когда?</label><Input id="help-date" value={date} onChange={(event) => setDate(event.target.value)} placeholder="Завтра, 11:30" className="mt-2" /></div> : null}{step === 3 ? <div><label htmlFor="help-comment" className="text-sm font-semibold text-ink">Комментарий</label><Textarea id="help-comment" value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Что важно учесть сопровождающему?" className="mt-2 min-h-32 py-3" /></div> : null}{step === 4 ? <div><label htmlFor="help-contacts" className="text-sm font-semibold text-ink">Контакты</label><Input id="help-contacts" value={contacts} onChange={(event) => setContacts(event.target.value)} placeholder="Как с вами связаться в demo" className="mt-2" /><p className="mt-2 text-xs leading-5 text-muted">Demo-контакт не отправляется во внешние службы.</p></div> : null}{step === 5 ? <Card className="border-primary/20 bg-primary-soft p-4"><h2 className="font-bold text-ink">Проверьте запрос</h2><dl className="mt-3 space-y-2 text-sm leading-5"><div><dt className="font-semibold text-muted">Задача</dt><dd>{task}</dd></div><div><dt className="font-semibold text-muted">Место</dt><dd>{location}</dd></div><div><dt className="font-semibold text-muted">Когда</dt><dd>{date}</dd></div><div><dt className="font-semibold text-muted">Комментарий</dt><dd>{comment}</dd></div></dl></Card> : null}{error ? <p className="mt-4 rounded-control bg-[#fff0f0] p-3 text-sm font-semibold text-danger" role="alert">{error}</p> : null}</MultiStepForm></div></HelpMain></div>;
}

export function RequestStatusScreen({ requestId }: { requestId: string }) {
  const request = useDemoStore((state) => state.helpRequests.find((item) => item.id === requestId));
  const setStatus = useDemoStore((state) => state.actions.setHelpRequestStatus);
  if (!request) return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Запрос" backHref={routes.user.help} /><HelpMain><EmptyState title="Запрос не найден" description={uiCopy.errors.entityNotFound} action={<Link href={routes.user.help} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться в помощь</Link>} /></HelpMain></div>;
  const sequence: HelpRequest["status"][] = ["submitted", "matching", "accepted", "volunteer_on_way", "active", "completed"];
  const currentIndex = request.status === "cancelled" ? -1 : Math.max(0, sequence.indexOf(request.status));
  const labels: Record<HelpRequest["status"], string> = { draft: "Черновик", submitted: "Запрос создан", matching: "Ищем волонтёра", accepted: "Волонтёр найден", volunteer_on_way: "Волонтёр в пути", active: "Помощь идёт", completed: "Завершено", cancelled: "Отменено" };
  const timeline = sequence.map((status, index) => ({ label: labels[status], detail: index <= currentIndex ? (index === currentIndex ? "Текущий demo-статус" : "Шаг пройден") : "Следующий шаг", current: index === currentIndex }));
  const volunteer = request.volunteerId ? volunteerProfiles.find((item) => item.userId === request.volunteerId) : undefined;
  return <div className="flex min-h-0 flex-1 flex-col"><HelpHeader title="Статус запроса" backHref={routes.user.help} /><HelpMain><RequestStatus request={request} cancelable={canCancelStatuses.has(request.status)} onCancel={() => setStatus(request.id, "cancelled")} />{volunteer ? <Card className="mt-5 border-primary/20 bg-primary-soft p-4"><div className="flex items-center gap-3"><Avatar initials={volunteer.initials} /><div><p className="font-bold text-ink">{volunteer.displayName}</p><p className="text-sm text-muted">{volunteer.verified ? "Проверенный волонтёр · demo" : "Волонтёр"}</p></div></div><p className="mt-3 text-sm leading-6 text-ink">{request.status === "accepted" ? "Волонтёр подтвердил помощь." : request.status === "volunteer_on_way" ? "Волонтёр сообщил, что выехал." : request.status === "active" ? "Помощь началась." : request.status === "completed" ? "Помощь завершена." : ""}</p></Card> : null}<Card className="mt-5 p-5"><Timeline items={timeline} /></Card><Link href={routes.user.map} className="mt-5 flex min-h-12 items-center justify-center rounded-control border border-border bg-surface text-sm font-semibold text-ink">Открыть карту и проверить место</Link></HelpMain></div>;
}
