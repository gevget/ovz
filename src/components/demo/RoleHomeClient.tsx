"use client";

import { ArrowLeft, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import type { Role } from "@/types";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { useDemoStore } from "@/store/demoStore";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { PhoneFrame } from "@/components/demo/PhoneFrame";
import { UserAppShell } from "@/components/demo/UserAppShell";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

function RolePlaceholder({ role }: { role: Exclude<Role, "user"> }) {
  const Icon = role === "partner" ? Building2 : role === "admin" ? ShieldCheck : CheckCircle2;
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-canvas p-5 pt-10">
      <Link href={routes.demo} className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-muted hover:text-ink"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Выбрать другую роль</Link>
      <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-card bg-primary-soft text-primary"><Icon aria-hidden="true" className="h-7 w-7" /></div>
      <Badge className="mt-6 w-fit">Foundation shell</Badge>
      <h1 className="mt-3 text-2xl font-bold text-ink">{uiCopy.role[role]}</h1>
      <p className="mt-3 text-base leading-7 text-muted">Роль подключена к shared state. Полный role-specific экран будет добавлен в следующем этапе, не меняя основу навигации и данных.</p>
      <Card className="mt-6 border-dashed bg-surface-soft p-4">
        <p className="text-sm font-semibold text-ink">Что уже работает</p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>• переключение роли снаружи phone frame;</li>
          <li>• локальное сохранение настроек;</li>
          <li>• reset demo к seed state.</li>
        </ul>
      </Card>
    </div>
  );
}

function AdminPlaceholder() {
  return (
    <div className="min-h-[calc(100vh-88px)] bg-[#eef1f5] p-4 lg:p-8">
      <div className="mx-auto max-w-[1200px] rounded-card border border-border bg-surface p-6 shadow-sm lg:p-8">
        <Badge className="bg-primary-soft text-primary">Desktop web-shell · Demo</Badge>
        <h1 className="mt-4 text-3xl font-bold text-ink">Обзор администратора</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">Администратор использует отдельный desktop-shell. В этом первом проходе доступен только foundation preview; moderation и analytics появятся позже.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Пользователи", "Объекты", "Сообщения"].map((label) => <Card key={label} className="p-5"><p className="text-sm text-muted">{label}</p><p className="mt-2 text-2xl font-bold">Demo</p></Card>)}
        </div>
      </div>
    </div>
  );
}

export function RoleHomeClient({ role }: { role: Role }) {
  const setRole = useDemoStore((state) => state.actions.setRole);
  const settings = useDemoStore((state) => state.settings);

  useEffect(() => setRole(role), [role, setRole]);

  return (
    <div className={`min-h-screen bg-canvas ${settings.theme === "dark" ? "theme-dark" : ""} ${settings.highContrast ? "high-contrast" : ""} ${settings.reducedMotion ? "reduced-motion" : ""}`} style={{ fontSize: `${settings.textScale}em` }}>
      <DemoToolbar />
      {role === "admin" ? <AdminPlaceholder /> : <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full items-center justify-center px-0 pb-8 md:px-4"><PhoneFrame title={`${uiCopy.role[role]} demo`}><>{role === "user" ? <UserAppShell /> : <RolePlaceholder role={role} />}</></PhoneFrame></main>}
    </div>
  );
}
