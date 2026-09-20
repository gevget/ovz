"use client";

import { Accessibility, Building2, HeartHandshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Role } from "@/types";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { Button } from "@/components/ui/Button";
import { DemoPresentationShell } from "@/components/demo/DemoPresentationShell";
import { useDemoStore } from "@/store/demoStore";

const roleCards: Array<{ role: Role; description: string; icon: typeof Accessibility }> = [
  { role: "user", description: "Ищу места, маршруты, помощь и возможности.", icon: Accessibility },
  { role: "volunteer", description: "Вижу запросы и могу подключиться к помощи.", icon: HeartHandshake },
  { role: "partner", description: "Обновляю данные организации и предложения.", icon: Building2 },
  { role: "admin", description: "Проверяю данные и сообщения платформы.", icon: ShieldCheck },
];

const homeForRole = (role: Role) => role === "admin" ? routes.admin.home : role === "partner" ? routes.partner.home : role === "volunteer" ? routes.volunteer.home : routes.user.home;

export function RoleSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setRole = useDemoStore((state) => state.actions.setRole);
  const storedRole = useDemoStore((state) => state.role);
  const [selectedRole, setSelectedRole] = useState<Role>(storedRole);

  useEffect(() => {
    const requestedRole = searchParams.get("role");
    if (requestedRole && roleCards.some((card) => card.role === requestedRole)) {
      const role = requestedRole as Role;
      setRole(role);
      router.replace(homeForRole(role));
    }
  }, [router, searchParams, setRole]);

  const continueToDemo = () => {
    setRole(selectedRole);
    router.push(homeForRole(selectedRole));
  };

  return (
    <DemoPresentationShell title="Выбор роли">
      <div className="flex min-h-full flex-col justify-center py-4">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Интерактивное демо</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">Выберите роль</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">Посмотрите, как одна система связывает пользователя, волонтёра, партнёра и администратора на общих тестовых данных.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {roleCards.map(({ role, description, icon: Icon }) => {
            const selected = selectedRole === role;
            return (
              <button
                key={role}
                type="button"
                className={`rounded-card border p-5 text-left transition-[border-color,background-color,box-shadow,transform] hover:-translate-y-px hover:shadow-card ${selected ? "border-primary bg-primary-soft shadow-card" : "border-border bg-surface hover:border-primary/50"}`}
                aria-pressed={selected}
                onClick={() => setSelectedRole(role)}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-control ${selected ? "bg-primary text-white" : "bg-surface-soft text-primary"}`}><Icon aria-hidden="true" className="h-6 w-6" /></span>
                <span className="mt-4 block text-lg font-bold text-ink">{uiCopy.role[role]}</span>
                <span className="mt-1 block text-sm leading-6 text-muted">{description}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button onClick={continueToDemo}>Продолжить как {uiCopy.role[selectedRole].toLowerCase()}</Button>
          <Link href="/" className="inline-flex min-h-11 items-center rounded-control px-4 text-sm font-semibold text-muted hover:bg-surface-soft hover:text-ink">Вернуться на сайт</Link>
        </div>
        <p className="mt-8 max-w-xl text-xs leading-5 text-muted">Демонстрация работает на локальных тестовых данных. Роль можно сменить в панели сверху, не теряя общий контекст.</p>
      </div>
    </DemoPresentationShell>
  );
}
