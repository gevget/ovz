// 35 — ACCESSIBILITY ENGINE
// Deterministic demo scoring logic.

import type {
  AccessibilityFeatureKey,
  AccessibilityFeatures,
  AccessibilityMatchResult,
  TriState,
  UserNeedKey,
  RouteOption,
} from "./20_TYPES_AND_DATA_MODELS";

type NeedRule = {
  feature: AccessibilityFeatureKey;
  weight: number;
  critical: boolean;
};

const needMap: Partial<Record<UserNeedKey, NeedRule>> = {
  step_free: { feature: "stepFree", weight: 3, critical: true },
  elevator: { feature: "elevator", weight: 3, critical: true },
  accessible_toilet: {
    feature: "accessibleToilet",
    weight: 1,
    critical: false,
  },
  wide_doors: { feature: "wideDoors", weight: 2, critical: false },
  accessible_parking: {
    feature: "accessibleParking",
    weight: 1,
    critical: false,
  },
  tactile_navigation: {
    feature: "tactileNavigation",
    weight: 2,
    critical: false,
  },
  hearing_support: {
    feature: "hearingLoop",
    weight: 2,
    critical: false,
  },
  quiet_zone: { feature: "quietZone", weight: 1, critical: false },
  assistance: {
    feature: "assistanceAvailable",
    weight: 2,
    critical: false,
  },
};

const statusFactor: Record<string, number> = {
  true: 1,
  partial: 0.5,
  unknown: 0.25,
  false: 0,
};

function factor(value: TriState): number {
  return statusFactor[String(value)] ?? 0;
}

export function calculateAccessibilityMatch(
  needs: UserNeedKey[],
  features: AccessibilityFeatures
): AccessibilityMatchResult {
  const rules = needs
    .map((need) => needMap[need])
    .filter(Boolean) as NeedRule[];

  if (rules.length === 0) {
    return {
      score: 100,
      label: "Хорошо подходит",
      criticalMismatch: false,
      reasons: [],
    };
  }

  let total = 0;
  let earned = 0;
  let criticalMismatch = false;

  const reasons = rules.map((rule) => {
    const status = features[rule.feature];
    total += rule.weight;
    earned += rule.weight * factor(status);

    if (rule.critical && status === false) {
      criticalMismatch = true;
    }

    return {
      key: rule.feature,
      status,
      weight: rule.weight,
    };
  });

  const score = Math.round((earned / total) * 100);

  let label: AccessibilityMatchResult["label"] =
    score >= 85
      ? "Хорошо подходит"
      : score >= 60
      ? "Подходит частично"
      : "Есть ограничения";

  if (criticalMismatch && score > 84) {
    label = "Подходит частично";
  }

  return {
    score,
    label,
    criticalMismatch,
    reasons,
  };
}

export function rankRoutes(routes: RouteOption[]): RouteOption[] {
  return [...routes].sort((a, b) => {
    if (a.stepFree !== b.stepFree) {
      return Number(b.stepFree) - Number(a.stepFree);
    }

    if (a.accessibilityReliability !== b.accessibilityReliability) {
      return b.accessibilityReliability - a.accessibilityReliability;
    }

    if (a.obstacleCount !== b.obstacleCount) {
      return a.obstacleCount - b.obstacleCount;
    }

    return a.durationMin - b.durationMin;
  });
}
