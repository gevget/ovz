"use client";

import Link from "next/link";
import { useState } from "react";
import { routes } from "@/lib/routes";
import { BottomNavigation } from "@/components/demo/BottomNavigation";
import { AppScreenHeader } from "@/components/demo/AppScreenHeader";
import { DemoPhoneShell } from "@/components/demo/DemoPhoneShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { Toast } from "@/components/ui/Toast";

export function UserUnknownRoute({ slug }: { slug: string[] }) {
  const [toast, setToast] = useState<string | null>("Объект не найден в демо-данных");

  return (
    <DemoPhoneShell title="Пользователь — демо" navigation={<BottomNavigation />}>
      <div className="flex min-h-0 flex-1 flex-col bg-canvas">
        <AppScreenHeader title="Маршрут не найден" backHref={routes.user.home} compact />
        <main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-8 pt-8">
          <EmptyState title="Маршрут не найден" description={`Адрес «${slug.join("/")}» не относится к доступным экранам демо.`} action={<Link href={routes.user.home} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться на главную</Link>} />
        </main>
      </div>
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </DemoPhoneShell>
  );
}
