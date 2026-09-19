import Link from "next/link";
import { ArrowRight, Building2, BriefcaseBusiness, CalendarDays, FileCheck2, HandHelping, MapPinned } from "lucide-react";
import { DemoToolbar } from "@/components/demo/DemoToolbar";
import { Card } from "@/components/ui/Card";
import { routes } from "@/lib/routes";

const scenarios = [
  { title: "Найти доступную клинику", description: "Карта, Accessibility Match и маршрут с учётом условий.", href: routes.user.map, icon: MapPinned },
  { title: "Запросить помощь", description: "Создание запроса сопровождения и переход в общий поток помощи.", href: routes.user.volunteerRequest, icon: HandHelping },
  { title: "Найти работу", description: "Вакансии, условия доступности и отправка резюме.", href: routes.user.vacancies, icon: BriefcaseBusiness },
  { title: "Сходить на мероприятие", description: "Событие, место и проверка доступного входа.", href: routes.user.events, icon: CalendarDays },
  { title: "Обновить доступность как партнёр", description: "Карточка организации и подтверждение актуальности данных.", href: routes.partner.accessibility, icon: Building2 },
  { title: "Проверить отчёт как администратор", description: "Очередь сообщений о доступности и допустимые переходы статусов.", href: routes.admin.reports, icon: FileCheck2 },
];

export default function DemoScenariosPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <DemoToolbar />
      <main className="mx-auto w-full max-w-5xl px-4 pb-12 pt-8 lg:px-8">
        <Link href={routes.demo} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted hover:text-ink"><ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" />К выбору роли</Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.12em] text-primary">Guided demo</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Сценарии</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">Выберите стартовую точку и пройдите ключевой поток на локальных demo-данных.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {scenarios.map(({ title, description, href, icon: Icon }) => (
            <Link key={title} href={href} className="group">
              <Card className="h-full p-5 transition-colors group-hover:border-primary/50 group-hover:bg-primary-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-control bg-primary-soft text-primary"><Icon aria-hidden="true" className="h-6 w-6" /></span>
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary">Начать <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
