"use client";

import { BarChart3, Building2, FileText, Flag, HelpCircle, LayoutDashboard, MapPin, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { routes } from "@/lib/routes";
import { useDemoStore } from "@/store/demoStore";
import { AdminMetricCard } from "@/components/admin/AdminComponents";

const navItems = [
  ["Overview", routes.admin.home, LayoutDashboard],
  ["Users", routes.admin.users, Users],
  ["Partners", routes.admin.partners, Building2],
  ["Places", routes.admin.places, MapPin],
  ["Reports", routes.admin.reports, Flag],
  ["Help Requests", routes.admin.helpRequests, HelpCircle],
  ["Content", routes.admin.content, FileText],
  ["Verification", routes.admin.verification, ShieldCheck],
  ["Analytics", routes.admin.analytics, BarChart3],
] as const;

function adminTitle(pathname: string) { return navItems.find(([, href]) => pathname === href)?.[0] ?? "Обзор"; }

export function AdminSidebar({ pathname }: { pathname: string }) {
  return <aside className="w-[260px] shrink-0 border-r border-border bg-surface p-4" aria-label="Admin-навигация"><div className="mb-5 px-3"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Admin-demo</p><p className="mt-1 text-sm text-muted">Модерация и качество данных</p></div><nav className="space-y-1">{navItems.map(([label, href, Icon]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`flex min-h-11 items-center gap-3 rounded-control px-3 text-sm font-semibold ${pathname === href ? "bg-primary text-white" : "text-ink hover:bg-surface-soft"}`}><Icon aria-hidden="true" className="h-4 w-4" />{label}</Link>)}</nav><Card className="mt-6 border-dashed bg-surface-soft p-3"><p className="text-xs font-semibold text-ink">Режим демонстрации</p><p className="mt-1 text-xs leading-5 text-muted">Без реальных контактов, KYC, CRM и массовых операций.</p></Card></aside>;
}

export function AdminTopbar({ title }: { title: string }) {
  const allNotifications = useDemoStore((state) => state.notifications);
  const notifications = useMemo(() => allNotifications.filter((item) => item.userId === "partner_clinic" && !item.read).length, [allNotifications]);
  return <header className="flex min-h-20 items-center justify-between gap-4 border-b border-border bg-surface px-6 py-4"><div><p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">Администратор</p><h1 className="mt-1 text-2xl font-bold text-ink">{title}</h1></div><div className="flex items-center gap-2"><Badge className="bg-primary-soft text-primary">Demo-данные</Badge><span className="hidden text-sm text-muted xl:inline">Системные уведомления: {notifications}</span></div></header>;
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const setRole = useDemoStore((state) => state.actions.setRole);
  const settings = useDemoStore((state) => state.settings);
  const reports = useDemoStore((state) => state.accessibilityReports);
  const verification = useDemoStore((state) => state.adminVerificationQueue);
  const moderation = useDemoStore((state) => state.adminModerationItems);
  useEffect(() => setRole("admin"), [setRole]);
  return <div className={`min-h-screen bg-canvas ${settings.theme === "dark" ? "theme-dark" : ""} ${settings.highContrast ? "high-contrast" : ""} ${settings.reducedMotion ? "reduced-motion" : ""}`} style={{ fontSize: `${settings.textScale}em` }}><DemoToolbar /><div className="lg:hidden px-4 pb-8"><Card className="border-primary/20 bg-primary-soft p-5"><Badge>Admin-demo · mobile summary</Badge><h1 className="mt-4 text-2xl font-bold text-ink">Для удобного просмотра admin-demo откройте его на большом экране</h1><p className="mt-3 text-sm leading-6 text-muted">Здесь доступна краткая сводка очередей. Полный desktop shell начинается от 1024 px.</p><div className="mt-5 grid grid-cols-3 gap-2"><AdminMetricCard label="Отчёты" value={reports.filter((item) => item.status === "submitted").length} /><AdminMetricCard label="Проверка" value={verification.filter((item) => item.status !== "verified").length} /><AdminMetricCard label="Контент" value={moderation.filter((item) => item.status === "flagged").length} /></div></Card></div><div className="hidden min-h-[calc(100vh-88px)] lg:flex"><AdminSidebar pathname={pathname} /><div className="min-w-0 flex-1"><AdminTopbar title={adminTitle(pathname)} /><main className="min-w-0 p-6 xl:p-8">{children}</main></div></div></div>;
}
