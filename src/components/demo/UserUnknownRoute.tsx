"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { routes } from "@/lib/routes";
import { BottomNavigation } from "@/components/demo/BottomNavigation";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { PhoneFrame } from "@/components/demo/PhoneFrame";
import { EmptyState } from "@/components/ui/EmptyState";
import { Toast } from "@/components/ui/Toast";

export function UserUnknownRoute({ slug }: { slug: string[] }) {
  const [toast, setToast] = useState<string | null>("Объект не найден в demo-данных");

  return (
    <div className="min-h-screen bg-canvas">
      <DemoToolbar />
      <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full items-center justify-center px-0 pb-8 md:px-4">
        <PhoneFrame title="Пользователь demo">
          <div className="flex min-h-0 flex-1 flex-col bg-canvas">
            <main className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-8 pt-12">
              <Link href={routes.user.home} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted hover:text-ink"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Назад на главную</Link>
              <div className="mt-8"><EmptyState title="Маршрут не найден" description={`Адрес «${slug.join("/")}» не относится к доступным demo-экранам.`} action={<Link href={routes.user.home} className="inline-flex min-h-11 items-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться на главную</Link>} /></div>
            </main>
            <BottomNavigation />
          </div>
        </PhoneFrame>
      </main>
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
