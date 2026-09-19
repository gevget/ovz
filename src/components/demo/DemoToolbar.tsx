"use client";

import { ChevronDown, Eye, ListChecks, RotateCcw } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Role } from "@/types";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useDemoStore } from "@/store/demoStore";

const roleOrder: Role[] = ["user", "volunteer", "partner", "admin"];

const roleHome = (role: Role) => {
  if (role === "admin") return routes.admin.home;
  if (role === "partner") return routes.partner.home;
  if (role === "volunteer") return routes.volunteer.home;
  return routes.user.home;
};

export function DemoToolbar() {
  const router = useRouter();
  const pathname = usePathname();
  const role = useDemoStore((state) => state.role);
  const highContrast = useDemoStore((state) => state.settings.highContrast);
  const textScale = useDemoStore((state) => state.settings.textScale);
  const actions = useDemoStore((state) => state.actions);

  const switchRole = (nextRole: Role) => {
    actions.setRole(nextRole);
    router.push(roleHome(nextRole));
  };

  return (
    <header className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-3 px-4 py-4 lg:px-8">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-sm font-bold tracking-[-0.02em] text-ink">Навигатор доступности</Link>
        <span className="rounded-full bg-primary-soft px-2 py-1 text-[13px] font-bold uppercase tracking-[0.12em] text-primary">Demo</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <label className="relative">
          <span className="sr-only">Выбрать роль</span>
          <select
            className="min-h-11 appearance-none rounded-control border border-border bg-surface py-2 pl-3 pr-9 text-sm font-semibold text-ink"
            value={role}
            onChange={(event) => switchRole(event.target.value as Role)}
            aria-label="Выбрать роль"
          >
            {roleOrder.map((option) => <option key={option} value={option}>{uiCopy.role[option]}</option>)}
          </select>
          <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2.5 top-3.5 h-4 w-4 text-muted" />
        </label>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={highContrast}
          onClick={() => actions.patchSettings({ highContrast: !highContrast })}
          title="Переключить усиленный контраст"
        >
          <Eye aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">Доступность</span>
        </Button>
        <Link href={routes.demoScenarios} className="inline-flex min-h-10 items-center gap-2 rounded-control border border-border bg-surface px-2 text-sm font-semibold text-ink hover:bg-surface-soft" aria-label="Открыть сценарии" title="Сценарии">
          <ListChecks aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">Сценарии</span>
        </Link>
        <label className="sr-only" htmlFor="demo-text-scale">Размер текста</label>
        <select
          id="demo-text-scale"
          aria-label="Размер текста"
          value={textScale}
          onChange={(event) => actions.patchSettings({ textScale: Number(event.target.value) as 1 | 1.25 | 1.5 })}
          className="min-h-10 rounded-control border border-border bg-surface px-2 text-xs font-semibold text-ink"
        >
          <option value="1">100%</option>
          <option value="1.25">125%</option>
          <option value="1.5">150%</option>
        </select>
        <Button size="sm" variant="secondary" onClick={() => { actions.resetDemo(); router.push(routes.demo); }}>
          <RotateCcw aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">Сбросить</span>
        </Button>
        {pathname !== routes.demo ? <Link className={cn("inline-flex min-h-10 items-center px-2 text-sm font-semibold text-muted hover:text-ink", "focus-visible:outline-none")} href="/">На сайт</Link> : null}
      </div>
    </header>
  );
}
