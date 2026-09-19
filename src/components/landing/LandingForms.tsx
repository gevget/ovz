"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { partnerAnalytics } from "@/data/partner";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { DemoCTA } from "@/components/landing/LandingPrimitives";

export type ContactFormKind = "partner" | "investor";

export function ContactForm({ kind, onSuccess }: { kind: ContactFormKind; onSuccess?: () => void }) {
  const [values, setValues] = useState({ name: "", organization: "", role: "", email: "", phone: "", interest: "", stage: "", comment: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const partner = kind === "partner";
  const update = (key: keyof typeof values, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.name.trim() || !values.organization.trim() || !values.email.trim() || !values.interest.trim()) {
      setError("Заполните имя, организацию, email и тип интереса.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setError("Проверьте формат email.");
      return;
    }
    setError("");
    setSubmitted(true);
    onSuccess?.();
  };
  if (submitted) return <div className="rounded-card border border-success/25 bg-success/10 p-5" role="status"><CheckCircle2 aria-hidden="true" className="h-6 w-6 text-success" /><p className="mt-3 font-bold text-ink">{partner ? "Спасибо. В demo заявка сохранена локально." : "Спасибо. Это демонстрационный сценарий. Реальная форма подключения будет активирована после запуска backend."}</p><p className="mt-2 text-sm leading-6 text-muted">Внешняя отправка и CRM в этой версии не подключены.</p></div>;
  return <form noValidate onSubmit={submit} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-semibold text-ink">{partner ? "Имя" : "Имя"}<Input className="mt-2" value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required /></label><label className="block text-sm font-semibold text-ink">{partner ? "Организация" : "Компания / фонд"}<Input className="mt-2" value={values.organization} onChange={(event) => update("organization", event.target.value)} required /></label><label className="block text-sm font-semibold text-ink">Роль<Input className="mt-2" value={values.role} onChange={(event) => update("role", event.target.value)} placeholder={partner ? "Например, руководитель проекта" : "Например, investment partner"} /></label><label className="block text-sm font-semibold text-ink">Email<Input className="mt-2" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" required /></label>{partner ? <label className="block text-sm font-semibold text-ink">Телефон / Telegram <span className="font-normal text-muted">(необязательно)</span><Input className="mt-2" value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label> : <label className="block text-sm font-semibold text-ink">Telegram <span className="font-normal text-muted">(необязательно)</span><Input className="mt-2" value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label>}<label className="block text-sm font-semibold text-ink">{partner ? "Тип партнёрства" : "Тип интереса"}<select className="mt-2 min-h-12 w-full rounded-control border border-border bg-surface px-4 text-base font-normal text-ink" value={values.interest} onChange={(event) => update("interest", event.target.value)} required><option value="">Выберите вариант</option>{partner ? <><option value="pilot">Пилот</option><option value="organization">Карточка организации</option><option value="content">Вакансии, курсы и мероприятия</option><option value="data">Данные и интеграции</option><option value="accessibility">Пилот доступности объекта</option></> : <><option value="investment">Инвестиции</option><option value="strategic">Стратегическое партнёрство</option><option value="pilot">Пилот</option><option value="data">Data / API</option><option value="program">Корпоративная программа</option></>}</select></label>{!partner ? <label className="block text-sm font-semibold text-ink">Стадия интереса<select className="mt-2 min-h-12 w-full rounded-control border border-border bg-surface px-4 text-base font-normal text-ink" value={values.stage} onChange={(event) => update("stage", event.target.value)}><option value="">Выберите вариант</option><option value="explore">Изучаю проект</option><option value="pilot">Обсуждаю пилот</option><option value="materials">Нужны материалы</option><option value="meeting">Готов к разговору</option></select></label> : null}</div><label className="block text-sm font-semibold text-ink">Комментарий<Textarea className="mt-2" value={values.comment} onChange={(event) => update("comment", event.target.value)} placeholder={partner ? "Что хотите подключить или проверить?" : "Что важно обсудить?"} /></label>{error ? <p role="alert" className="text-sm font-semibold text-danger">{error}</p> : null}<Button type="submit" className="w-full">Сохранить заявку в demo</Button></form>;
}

export function PartnerSection({ onOpen }: { onOpen: () => void }) {
  const benefits = ["верифицированная карточка", "управление данными доступности", "обращения пользователей", "публикация возможностей", "аналитика интереса", "участие в пилотах"];
  return <Card className="overflow-hidden border-primary/20 bg-primary-soft p-6 sm:p-10"><div className="grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center"><div><Badge className="bg-surface text-primary">Экосистема</Badge><h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-ink">Станьте частью инфраструктуры доступности</h3><p className="mt-4 max-w-xl text-base leading-7 text-muted">Организации могут подтверждать данные об объектах, отвечать на обращения, публиковать вакансии, программы, мероприятия и предложения.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{benefits.map((benefit) => <div key={benefit} className="flex items-start gap-2 text-sm text-ink"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-success" />{benefit}</div>)}</div><div className="mt-8 flex flex-wrap gap-3"><Button onClick={onOpen}>Стать партнёром</Button><DemoCTA label="Посмотреть партнёрский demo" role="partner" variant="secondary" /></div></div><PartnerPreview /></div></Card>;
}

function PartnerPreview() {
  const analytics = partnerAnalytics["30"];
  return <div className="rounded-card border border-border bg-surface p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Кабинет партнёра</p><p className="mt-2 font-bold text-ink">Чек-лист доступности</p></div><Badge className="text-success">Проверено</Badge></div><div className="mt-5 space-y-3">{["Вход без ступеней", "Лифт", "Доступный туалет", "Помощь координатора"].map((item, index) => <div key={item} className="flex items-center justify-between gap-3 rounded-control bg-surface-soft p-3 text-sm"><span className="text-ink">{item}</span><span className={index === 2 ? "text-warning" : "text-success"}>{index === 2 ? "Частично" : "Да"}</span></div>)}</div><div className="mt-5 grid grid-cols-3 gap-2">{[["Просмотры", analytics.placeViews], ["Маршруты", analytics.routeStarts], ["Запросы", analytics.userQuestions]].map(([label, value]) => <div key={label} className="rounded-control border border-border p-3"><p className="text-xs text-muted">{label}</p><p className="mt-1 text-lg font-bold text-ink">{value}</p><p className="text-[11px] text-muted">Demo</p></div>)}</div></div>;
}

export function InvestorSection({ onOpen }: { onOpen: () => void }) {
  return <Card className="border-[#2e4e7c] bg-[#10233f] p-6 text-white sm:p-10"><div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#a9c6ff]">Что мы строим</p><h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white">Инфраструктурный слой для доступной городской жизни</h3><p className="mt-4 max-w-xl text-base leading-7 text-white/72">Навигатор объединяет consumer-продукт, партнёрскую сеть и постоянно обновляемые данные о доступности.</p><div className="mt-6 flex flex-wrap gap-2">{["Пилотные партнёры", "Data providers", "Стратегические партнёры", "Инвестиционный партнёр"].map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-2 text-sm text-white/80">{item}</span>)}</div><p className="mt-6 text-sm leading-6 text-white/65">Мы ищем возможность развивать продукт, верификацию данных, интеграции, пилотные регионы и партнёрскую сеть. Размер раунда в demo не указывается.</p><div className="mt-8 flex flex-wrap gap-3"><Button onClick={onOpen}>Обсудить проект</Button><DemoCTA label="Открыть demo" variant="secondary" /></div></div><div className="rounded-card border border-white/15 bg-white/10 p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a9c6ff]">На масштабе</p><div className="mt-5 space-y-3">{["Пользователи", "Организации", "Объекты и маршруты", "Актуальные данные"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-control bg-white/10 p-4"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a9c6ff]/15 text-sm font-bold text-[#d5e2ff]">{index + 1}</span><span className="text-sm font-semibold text-white">{item}</span></div>)}</div></div></div></Card>;
}
