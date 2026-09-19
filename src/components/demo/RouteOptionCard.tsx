import { ArrowRight, BusFront, CheckCircle2, Clock3, Footprints } from "lucide-react";
import type { RouteOption } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function RouteOptionCard({ route, recommended = false, onSelect }: { route: RouteOption; recommended?: boolean; onSelect: (routeId: string) => void }) {
  return (
    <Card className={`p-4 ${recommended ? "border-primary ring-2 ring-primary/10" : ""}`}>
      <div className="flex items-start justify-between gap-3"><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-bold text-ink">{route.title}</h2>{recommended ? <Badge className="bg-[#e8f7f0] text-success">Рекомендуем</Badge> : null}</div><p className="mt-1 text-sm text-muted">{route.accessibilityReliability * 100}% надёжность доступности</p></div><CheckCircle2 aria-hidden="true" className={`h-5 w-5 ${recommended ? "text-success" : "text-border"}`} /></div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm"><div className="rounded-control bg-surface-soft p-3"><Clock3 aria-hidden="true" className="h-4 w-4 text-primary" /><p className="mt-2 font-bold text-ink">{route.durationMin} мин</p><p className="text-xs text-muted">в пути</p></div><div className="rounded-control bg-surface-soft p-3"><BusFront aria-hidden="true" className="h-4 w-4 text-primary" /><p className="mt-2 font-bold text-ink">{route.transfers}</p><p className="text-xs text-muted">пересадка</p></div><div className="rounded-control bg-surface-soft p-3"><Footprints aria-hidden="true" className="h-4 w-4 text-primary" /><p className="mt-2 font-bold text-ink">{route.stepFree ? "Да" : "Нет"}</p><p className="text-xs text-muted">без ступеней</p></div></div>
      <ul className="mt-4 space-y-2 text-sm text-muted">{route.labels.map((label) => <li key={label} className="flex gap-2"><span aria-hidden="true">•</span>{label}</li>)}</ul>
      <Button className="mt-4 w-full" onClick={() => onSelect(route.id)}>Выбрать маршрут <ArrowRight aria-hidden="true" className="h-4 w-4" /></Button>
    </Card>
  );
}
