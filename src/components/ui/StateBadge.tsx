import { AlertTriangle, BadgeCheck, CircleHelp, Clock3, Info, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

export type StateBadgeVariant = "verified" | "pending" | "stale" | "partial" | "warning" | "unknown" | "demo" | "success";

const stateConfig: Record<StateBadgeVariant, { label: string; className: string; icon: typeof BadgeCheck }> = {
  verified: { label: "Проверено", className: "bg-success-soft text-success", icon: BadgeCheck },
  pending: { label: "На проверке", className: "bg-warning-soft text-warning", icon: Clock3 },
  stale: { label: "Данные требуют проверки", className: "bg-warning-soft text-warning", icon: Clock3 },
  partial: { label: "Частичная доступность", className: "bg-warning-soft text-warning", icon: Info },
  warning: { label: "Есть ограничение", className: "bg-danger-soft text-danger", icon: AlertTriangle },
  unknown: { label: "Нет данных", className: "bg-surface-soft text-muted", icon: CircleHelp },
  demo: { label: "Демо-данные", className: "bg-primary-soft text-primary", icon: ShieldCheck },
  success: { label: "Обновлено", className: "bg-success-soft text-success", icon: BadgeCheck },
};

export function StateBadge({ variant, label }: { variant: StateBadgeVariant; label?: string }) {
  const config = stateConfig[variant];
  const Icon = config.icon;
  return (
    <Badge className={cn("gap-1", config.className)}>
      <Icon aria-hidden="true" className="h-3.5 w-3.5" />
      {label ?? config.label}
    </Badge>
  );
}
