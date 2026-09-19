import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { AccessibilityMatchResult } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { uiCopy } from "@/lib/ui-copy";

export function AccessibilityMatch({ result, compact = false }: { result: AccessibilityMatchResult; compact?: boolean }) {
  const statusLabel = (status: AccessibilityMatchResult["reasons"][number]["status"]) => status === true ? uiCopy.accessibility.statusAvailable : status === false ? uiCopy.accessibility.statusUnavailable : status === "partial" ? uiCopy.accessibility.statusPartial : uiCopy.accessibility.statusUnknown;
  return (
    <Card className={compact ? "p-3" : "p-4"}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Accessibility Match</p>
          <p className="mt-1 text-lg font-bold text-ink">{result.score}% подходит вам</p>
        </div>
        <Badge className={result.criticalMismatch ? "bg-[#fff3df] text-warning" : "bg-[#e8f7f0] text-success"}>
          {result.criticalMismatch ? <AlertTriangle aria-hidden="true" className="mr-1 h-3.5 w-3.5" /> : <CheckCircle2 aria-hidden="true" className="mr-1 h-3.5 w-3.5" />}
          {result.label}
        </Badge>
      </div>
      {result.reasons.length > 0 ? (
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {result.reasons.slice(0, compact ? 2 : 4).map((reason) => (
            <li key={reason.key} className="flex items-center justify-between gap-3">
              <span>{uiCopy.accessibility[reason.key]}</span>
              <span className="font-medium text-ink">{statusLabel(reason.status)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted">Профиль доступности пока не ограничивает рекомендации.</p>
      )}
    </Card>
  );
}
