import type { AccessibilityReport } from "../../20_TYPES_AND_DATA_MODELS";

export type AdminVerificationEntity = "partner" | "volunteer" | "author" | "place";
export type AdminVerificationStatus = "incomplete" | "pending" | "verified" | "update_requested";

export interface AdminVerificationItem {
  id: string;
  entityType: AdminVerificationEntity;
  entityId: string;
  label: string;
  status: AdminVerificationStatus;
  requestedAtLabel: string;
  note?: string;
}

export type AdminModerationEntity = "post" | "user" | "vacancy" | "course" | "event" | "offer";
export type AdminModerationStatus = "flagged" | "under_review" | "approved" | "request_edit" | "hidden";

export interface AdminModerationItem {
  id: string;
  entityType: AdminModerationEntity;
  entityId: string;
  reporterId?: string;
  label: string;
  reason: string;
  status: AdminModerationStatus;
  createdAtLabel: string;
}

export type AdminQualityState = "current" | "needs_review" | "conflicting" | "unconfirmed";

export interface AdminHistoryEntry {
  id: string;
  entityId: string;
  entityType: "accessibility_report" | "verification" | "moderation" | "place_quality";
  action: string;
  actorRole: "user" | "partner" | "admin";
  timestampLabel: string;
  detail?: string;
}

export type AdminReportStatus = AccessibilityReport["status"];
