"use client";

import { AlertTriangle, CarFront, CheckCircle2, HandHelping, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { routes } from "@/lib/routes";
import { MapHeader } from "@/components/map/MapHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function TaxiScreen() {
  const [requested, setRequested] = useState(false);
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Подходящий транспорт" backHref={routes.user.map} /><main className="p-5"><Card className="p-5"><CarFront aria-hidden="true" className="h-8 w-8 text-primary" /><h2 className="mt-5 text-xl font-bold text-ink">Такси в демо-режиме</h2><p className="mt-2 text-sm leading-6 text-muted">Показываем интерфейс запроса транспорта, но не вызываем реальную службу.</p>{requested ? <div className="mt-5 flex items-start gap-2 rounded-control bg-success-soft p-3 text-sm text-success"><CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0" />Запрос сохранён локально</div> : <Button className="mt-5 w-full" onClick={() => setRequested(true)}>Запросить транспорт</Button>}</Card></main></div>;
}

export function HelpAtLocationScreen() {
  const [requested, setRequested] = useState(false);
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Помощь на месте" backHref={routes.user.journey} /><main className="p-5"><Card className="p-5"><HandHelping aria-hidden="true" className="h-8 w-8 text-primary" /><h2 className="mt-5 text-xl font-bold text-ink">Нужен человек рядом?</h2><p className="mt-2 text-sm leading-6 text-muted">Создайте локальный демо-запрос. Реальный волонтёр пока не уведомляется.</p>{requested ? <div className="mt-5 flex items-start gap-2 rounded-control bg-success-soft p-3 text-sm text-success"><CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0" />Запрос создан в общем состоянии</div> : <Button className="mt-5 w-full" onClick={() => setRequested(true)}>Создать запрос помощи</Button>}</Card></main></div>;
}

export function EmergencyScreen() {
  const [opened, setOpened] = useState(false);
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Экстренные действия" backHref={routes.user.map} /><main className="p-5"><Card className="border-danger/30 bg-danger-soft p-5"><ShieldAlert aria-hidden="true" className="h-8 w-8 text-danger" /><h2 className="mt-5 text-xl font-bold text-ink">Действуйте спокойно</h2><p className="mt-2 text-sm leading-6 text-muted">Это демонстрационный интерфейс. Он не вызывает реальные экстренные службы.</p></Card><div className="mt-4 space-y-2"><Button variant="danger" className="w-full" onClick={() => setOpened(true)}><AlertTriangle aria-hidden="true" className="h-4 w-4" />Открыть список контактов</Button>{opened ? <Card className="border-danger/30 p-4"><p className="text-sm font-semibold text-ink">Демо-контакты</p><p className="mt-1 text-sm text-muted">Список показан только для демонстрации интерфейса.</p></Card> : null}<Link href={routes.user.help} className="inline-flex min-h-12 w-full items-center justify-center rounded-control border border-border bg-surface px-4 text-sm font-semibold text-ink hover:bg-surface-soft">Перейти в помощь</Link></div></main></div>;
}
