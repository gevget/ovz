"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { AccessibilityReport } from "@/types";
import { issueOptions } from "@/data/map";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { MapHeader } from "@/components/map/MapHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Textarea } from "@/components/ui/Textarea";

export function ReportIssueScreen({ placeId }: { placeId: string }) {
  const place = useDemoStore((state) => state.places.find((item) => item.id === placeId));
  const createReport = useDemoStore((state) => state.actions.createAccessibilityReport);
  const [type, setType] = useState<AccessibilityReport["type"]>("elevator");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  if (!place) return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Сообщить об изменении" backHref={routes.user.map} /><main className="p-5"><EmptyState title="Объект не найден в демо-данных" action={<Link href={routes.user.map} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к карте</Link>} /></main></div>;
  if (submitted) return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Сообщение отправлено" backHref={routes.user.place(place.id)} /><main className="p-5"><Card className="border-success/30 bg-[#e8f7f0] p-6 text-center"><CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-success" /><h2 className="mt-4 text-xl font-bold text-ink">Спасибо за обновление</h2><p className="mt-2 text-sm leading-6 text-muted">Сообщение сохранено в общем состоянии демо. После проверки оно будет видно администратору.</p><Link href={routes.user.place(place.id)} className="mt-5 inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к месту</Link></Card></main></div>;
  return <div className="flex min-h-0 flex-1 flex-col"><MapHeader title="Сообщить об изменении" backHref={routes.user.place(place.id)} /><main className="app-scrollbar min-h-0 flex-1 overflow-y-auto p-5"><p className="text-sm text-muted">{place.name}</p><h2 className="mt-1 text-2xl font-bold text-ink">Что изменилось?</h2><Card className="mt-5 p-4"><label htmlFor="issue-type" className="text-sm font-semibold text-ink">Тип изменения</label><select id="issue-type" value={type} onChange={(event) => setType(event.target.value as AccessibilityReport["type"])} className="mt-2 min-h-12 w-full rounded-control border border-border bg-surface px-3 text-base text-ink">{issueOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select><label htmlFor="issue-comment" className="mt-5 block text-sm font-semibold text-ink">Комментарий <span className="font-normal text-muted">(необязательно)</span></label><Textarea id="issue-comment" value={text} onChange={(event) => setText(event.target.value)} placeholder="Что стоит проверить?" className="mt-2 min-h-28 resize-y py-3" /></Card><Button className="mt-5 w-full" onClick={() => { createReport({ placeId: place.id, createdBy: "user_anna", type, text: text.trim() || undefined }); setSubmitted(true); }}>Отправить сообщение</Button><p className="mt-3 text-center text-xs leading-5 text-muted">Это демонстрационный сценарий. Внешняя служба обращений не вызывается.</p></main></div>;
}
