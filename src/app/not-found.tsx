import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-5 py-12 text-ink">
      <Card className="w-full max-w-lg p-6 text-center sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Навигатор доступности</p>
        <h1 className="mt-3 text-3xl font-bold">Страница не найдена</h1>
        <p className="mt-3 text-base leading-7 text-muted">Проверьте адрес или вернитесь к началу демо-сценария.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-control border border-border bg-surface px-4 text-sm font-semibold text-ink hover:bg-surface-soft"><Home aria-hidden="true" className="h-4 w-4" />На главную</Link>
        <Link href="/demo" className="inline-flex min-h-11 items-center gap-2 rounded-control bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-strong"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Открыть демо</Link>
        </div>
      </Card>
    </main>
  );
}
