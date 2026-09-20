import { Check, CircleHelp, Minus, X } from "lucide-react";
import type { AccessibilityFeatures, AccessibilityFeatureKey, TriState, UserNeedKey } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { uiCopy } from "@/lib/ui-copy";

const featureKeys: AccessibilityFeatureKey[] = ["stepFree", "ramp", "elevator", "accessibleToilet", "wideDoors", "accessibleParking", "tactileNavigation", "hearingLoop", "quietZone", "assistanceAvailable"];
const needToFeature: Partial<Record<UserNeedKey, AccessibilityFeatureKey>> = {
  step_free: "stepFree", elevator: "elevator", accessible_toilet: "accessibleToilet", wide_doors: "wideDoors", accessible_parking: "accessibleParking", tactile_navigation: "tactileNavigation", hearing_support: "hearingLoop", quiet_zone: "quietZone", assistance: "assistanceAvailable",
};

const statusText: Record<"true" | "false" | "partial" | "unknown", string> = { true: uiCopy.accessibility.statusAvailable, partial: uiCopy.accessibility.statusPartial, unknown: uiCopy.accessibility.statusUnknown, false: uiCopy.accessibility.statusUnavailable };
const labelFor = (key: AccessibilityFeatureKey) => uiCopy.accessibility[key];

function StatusIcon({ status }: { status: TriState }) {
  if (status === true) return <Check aria-hidden="true" className="h-4 w-4 text-success" />;
  if (status === false) return <X aria-hidden="true" className="h-4 w-4 text-danger" />;
  if (status === "partial") return <Minus aria-hidden="true" className="h-4 w-4 text-warning" />;
  return <CircleHelp aria-hidden="true" className="h-4 w-4 text-muted" />;
}

export function AccessibilityFeatureList({ features, userNeeds = [], highlightRelevant = true }: { features: AccessibilityFeatures; userNeeds?: UserNeedKey[]; highlightRelevant?: boolean }) {
  const relevantFeatures = new Set(userNeeds.map((need) => needToFeature[need]).filter(Boolean));
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border px-4 py-3"><h2 className="font-bold text-ink">Условия доступности</h2><p className="mt-1 text-sm text-muted">Параметры объекта из тестовых данных</p></div>
      <ul className="divide-y divide-border">
        {featureKeys.map((key) => {
          const status = features[key];
          const isRelevant = highlightRelevant && relevantFeatures.has(key);
          return <li key={key} className="flex min-h-12 items-center gap-3 px-4 py-3"><StatusIcon status={status} /><span className="flex-1 text-sm font-medium text-ink">{labelFor(key)}</span>{isRelevant ? <Badge className="bg-primary-soft text-primary">Важно вам</Badge> : null}<span className="text-sm text-muted">{statusText[String(status) as keyof typeof statusText]}</span></li>;
        })}
      </ul>
    </Card>
  );
}
