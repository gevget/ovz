"use client";

import { AlertTriangle, Check, CheckCircle2, Clock3, Filter, History, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useDemoStore } from "@/store/demoStore";
import type { AccessibilityReport, Place } from "@/types";
import type { AdminHistoryEntry, AdminModerationItem, AdminModerationStatus, AdminQualityState, AdminVerificationItem, AdminVerificationStatus } from "@/types/admin";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { StateBadge } from "@/components/ui/StateBadge";

export const reportTypeLabels: Record<AccessibilityReport["type"], string> = {
  entrance: "Вход",
  elevator: "Лифт",
  ramp: "Пандус",
  toilet: "Туалет",
  parking: "Парковка",
  passage: "Проход",
  information: "Информация",
  other: "Другое",
};

export const reportStatusLabels: Record<AccessibilityReport["status"], string> = {
  submitted: "Новый",
  under_review: "На проверке",
  verified: "Подтверждён",
  rejected: "Отклонён",
};

export const verificationStatusLabels: Record<AdminVerificationStatus, string> = {
  incomplete: "Не заполнено",
  pending: "Ожидает проверки",
  verified: "Проверено платформой",
  update_requested: "Нужно уточнение",
};

export const moderationStatusLabels: Record<AdminModerationStatus, string> = {
  flagged: "На проверке",
  under_review: "Рассматривается",
  approved: "Одобрено",
  request_edit: "Нужно исправить",
  hidden: "Скрыто модерацией",
};

export const qualityStateLabels: Record<AdminQualityState, string> = {
  current: "Данные актуальны",
  needs_review: "Данные требуют актуализации",
  conflicting: "Есть противоречие",
  unconfirmed: "Нет подтверждения",
};

export function AdminMetricCard({ label, value, detail, tone = "primary" }: { label: string; value: string | number; detail?: string; tone?: "primary" | "warning" | "success" }) {
  return <Card className="p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold text-muted">{label}</p><p className={`mt-2 text-3xl font-bold ${tone === "warning" ? "text-warning" : tone === "success" ? "text-success" : "text-primary"}`}>{value}</p></div><Badge className="bg-primary-soft text-primary">Demo-данные</Badge></div>{detail ? <p className="mt-3 text-xs leading-5 text-muted">{detail}</p> : null}</Card>;
}

export function AdminTable({ headers, rows, empty = "Записей пока нет." }: { headers: string[]; rows: ReactNode[][]; empty?: string }) {
  if (!rows.length) return <EmptyState title="Нет данных" description={empty} />;
  return <>
    <div className="hidden overflow-x-auto rounded-card border border-border bg-surface md:block">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-surface-soft"><tr>{headers.map((header) => <th key={header} className="border-b border-border px-4 py-3 font-semibold text-muted">{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-border last:border-0">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-4 align-top text-ink">{cell}</td>)}</tr>)}</tbody></table>
    </div>
    <div className="space-y-3 md:hidden">{rows.map((row, rowIndex) => <Card key={rowIndex} className="p-4"><dl className="space-y-3">{row.map((cell, cellIndex) => <div key={cellIndex}><dt className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">{headers[cellIndex]}</dt><dd className="mt-1 text-sm text-ink">{cell}</dd></div>)}</dl></Card>)}</div>
  </>;
}

export function AdminFilterBar({ children }: { children: ReactNode }) { return <Card className="flex flex-wrap items-end gap-3 bg-surface-soft p-4"><Filter aria-hidden="true" className="mb-2 h-4 w-4 text-primary" />{children}</Card>; }

export function ModerationQueue({ items, onOpen }: { items: AdminModerationItem[]; onOpen?: (item: AdminModerationItem) => void }) {
  return <div className="space-y-3">{items.length ? items.map((item) => <Card key={item.id} className="p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="font-semibold text-ink">{item.label}</p><p className="mt-1 text-sm text-muted">{item.reason}</p></div><StateBadge variant={item.status === "hidden" ? "warning" : item.status === "approved" ? "verified" : "pending"} label={moderationStatusLabels[item.status]} /></div><div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted"><span>{item.createdAtLabel}</span>{onOpen ? <Button size="sm" variant="secondary" onClick={() => onOpen(item)}>Открыть</Button> : null}</div></Card>) : <EmptyState title="Очередь пуста" description="Новых flagged-материалов нет." />}</div>;
}

export function ReportReviewPanel({ report, place, onReview, onResolve, onClose }: { report: AccessibilityReport; place?: Place; onReview: () => void; onResolve: (result: "verified" | "rejected") => void; onClose: () => void }) {
  const adminHistory = useDemoStore((state) => state.adminHistory);
  const history = useMemo(() => adminHistory.filter((entry) => entry.entityId === report.id), [adminHistory, report.id]);
  return <div className="rounded-card border border-primary/25 bg-surface p-5 shadow-sm" role="region" aria-label="Детали отчёта"><div className="flex items-start justify-between gap-4"><div><Badge>{reportTypeLabels[report.type]}</Badge><h2 className="mt-3 text-xl font-bold text-ink">{place?.name ?? "Место не найдено"}</h2><p className="mt-1 text-sm text-muted">Отчёт {report.id} · {report.createdBy} · Demo-данные</p></div><Button size="sm" variant="ghost" onClick={onClose} aria-label="Закрыть детали"><X aria-hidden="true" className="h-4 w-4" /></Button></div><dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-muted">Статус</dt><dd className="mt-1 font-semibold text-ink">{reportStatusLabels[report.status]}</dd></div><div><dt className="text-muted">Время</dt><dd className="mt-1 font-semibold text-ink">В demo-ленте</dd></div><div><dt className="text-muted">Текст</dt><dd className="mt-1 font-semibold text-ink">{report.text ?? "Без текста"}</dd></div><div><dt className="text-muted">Медиа</dt><dd className="mt-1 font-semibold text-muted">Медиа-вложение — placeholder</dd></div></dl><div className="mt-5 rounded-control bg-warning/10 p-4 text-sm"><p className="font-semibold text-ink">Текущая доступность места</p><p className="mt-1 text-muted">{place ? `${place.lastConfirmedLabel}. Источник: ${place.verificationSource}.` : "Данные места недоступны."}</p></div><div className="mt-5 flex flex-wrap gap-2"><Button size="sm" variant="secondary" disabled={report.status !== "submitted"} onClick={onReview}><Clock3 aria-hidden="true" className="h-4 w-4" />Взять на проверку</Button><Button size="sm" disabled={report.status !== "under_review"} onClick={() => onResolve("verified")}><Check aria-hidden="true" className="h-4 w-4" />Подтвердить</Button><Button size="sm" variant="danger" disabled={report.status !== "under_review"} onClick={() => onResolve("rejected")}><X aria-hidden="true" className="h-4 w-4" />Отклонить</Button></div><StatusHistory entries={history} /></div>;
}

export function VerificationCard({ item, onOpen, onVerify, onRequestUpdate }: { item: AdminVerificationItem; onOpen: () => void; onVerify: () => void; onRequestUpdate: () => void }) {
  return <Card className="p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="font-semibold text-ink">{item.label}</p><p className="mt-1 text-sm text-muted">{item.entityType} · {item.requestedAtLabel}</p></div><StateBadge variant={item.status === "verified" ? "verified" : item.status === "update_requested" ? "warning" : "pending"} label={verificationStatusLabels[item.status]} /></div>{item.note ? <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p> : null}<div className="mt-4 flex flex-wrap gap-2"><Button size="sm" variant="secondary" onClick={onOpen}>Открыть</Button><Button size="sm" disabled={item.status === "verified"} onClick={onVerify}><ShieldCheck aria-hidden="true" className="h-4 w-4" />Проверить</Button><Button size="sm" variant="ghost" disabled={item.status === "verified"} onClick={onRequestUpdate}>Запросить уточнение</Button></div></Card>;
}

export function VerificationDetail({ item, onClose, onVerify, onRequestUpdate }: { item: AdminVerificationItem; onClose: () => void; onVerify: () => void; onRequestUpdate: () => void }) {
  return <Card className="border-primary/25 p-5"><div className="flex items-start justify-between gap-3"><div><Badge>Проверка профиля</Badge><h2 className="mt-3 text-xl font-bold text-ink">{item.label}</h2></div><Button size="sm" variant="ghost" onClick={onClose} aria-label="Закрыть детали"><X aria-hidden="true" className="h-4 w-4" /></Button></div><p className="mt-4 text-sm leading-6 text-muted">Admin видит только demo-профиль, навыки и историю статусов. KYC, чувствительные контакты и impersonation не используются.</p><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-control bg-surface-soft p-3 text-sm"><p className="text-muted">Текущий статус</p><p className="mt-1 font-semibold text-ink">{verificationStatusLabels[item.status]}</p></div><div className="rounded-control bg-surface-soft p-3 text-sm"><p className="text-muted">Запрос создан</p><p className="mt-1 font-semibold text-ink">{item.requestedAtLabel}</p></div></div><div className="mt-5 flex flex-wrap gap-2"><Button disabled={item.status === "verified"} onClick={onVerify}><CheckCircle2 aria-hidden="true" className="h-4 w-4" />Подтвердить</Button><Button variant="secondary" disabled={item.status === "verified"} onClick={onRequestUpdate}>Запросить уточнение</Button></div></Card>;
}

export function DataQualityCard({ state, detail }: { state: AdminQualityState; detail?: string }) { return <Card className="p-4"><div className="flex items-start gap-3"><div className="mt-0.5 text-warning"><AlertTriangle aria-hidden="true" className="h-5 w-5" /></div><div><p className="font-semibold text-ink">{qualityStateLabels[state]}</p><p className="mt-1 text-sm leading-6 text-muted">{detail ?? "Состояние показано по demo-данным и требует контекстной проверки."}</p></div></div></Card>; }

export function AdminChart({ values, labels }: { values: number[]; labels: string[] }) { const max = Math.max(...values, 1); return <div className="flex items-end gap-3 rounded-card border border-border bg-surface p-4" aria-label="Demo-график"><div className="flex h-40 flex-1 items-end gap-2">{values.map((value, index) => <div key={`${labels[index]}-${value}`} className="flex flex-1 flex-col items-center justify-end gap-2"><span className="text-xs font-semibold text-ink">{value}</span><div className="w-full rounded-t-control bg-primary" style={{ height: `${Math.max(8, (value / max) * 100)}%` }} /><span className="text-[11px] text-muted">{labels[index]}</span></div>)}</div></div>; }

export function StatusHistory({ entries }: { entries: AdminHistoryEntry[] }) { return <div className="mt-5 border-t border-border pt-4"><div className="flex items-center gap-2 text-sm font-semibold text-ink"><History aria-hidden="true" className="h-4 w-4 text-primary" />История статусов</div>{entries.length ? <div className="mt-3 space-y-2">{entries.map((entry) => <div key={entry.id} className="rounded-control bg-surface-soft p-3 text-sm"><div className="flex justify-between gap-3"><span className="font-semibold text-ink">{entry.action}</span><span className="text-xs text-muted">{entry.timestampLabel}</span></div>{entry.detail ? <p className="mt-1 text-muted">{entry.detail}</p> : null}</div>)}</div> : <p className="mt-2 text-sm text-muted">История пока не заполнена.</p>}</div>; }

export function ModerationActionBar({ status, onChange }: { status: AdminModerationStatus; onChange: (status: AdminModerationStatus) => void }) { return <div className="flex flex-wrap gap-2"><Button size="sm" variant="secondary" onClick={() => onChange("approved")} disabled={status === "approved"}><Check aria-hidden="true" className="h-4 w-4" />Одобрить</Button><Button size="sm" variant="ghost" onClick={() => onChange("request_edit")} disabled={status === "request_edit"}>Запросить исправление</Button><Button size="sm" variant="danger" onClick={() => onChange("hidden")} disabled={status === "hidden"}><X aria-hidden="true" className="h-4 w-4" />Скрыть</Button></div>; }

export function AdminEntityLink({ href, children }: { href: string; children: ReactNode }) { return <Link href={href} className="font-semibold text-primary hover:underline">{children}</Link>; }

export function qualityBadge(state: AdminQualityState) { return <StateBadge variant={state === "current" ? "success" : state === "needs_review" ? "stale" : state === "conflicting" ? "warning" : "unknown"} label={qualityStateLabels[state]} />; }
