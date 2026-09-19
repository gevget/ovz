import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function VerifiedBadge({ label = "Проверено" }: { label?: string }) {
  return (
    <Badge className="gap-1 bg-primary-soft text-primary" title="Профиль прошёл проверку в рамках demo-модели.">
      <BadgeCheck aria-hidden="true" className="h-3.5 w-3.5" />
      {label}
    </Badge>
  );
}
