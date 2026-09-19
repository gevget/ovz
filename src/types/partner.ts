import type { AccessibilityFeatures, Organization, Place } from "../../20_TYPES_AND_DATA_MODELS";
import type { OpportunityCourse, OpportunityEvent, OpportunityVacancy, PartnerOffer } from "./opportunities";

export interface PartnerProfile {
  id: string;
  organizationId: Organization["id"];
  displayName: string;
  roleLabel: string;
  email: string;
}

export type PartnerRequestType = "question" | "booking" | "accessibility" | "service" | "partnership";
export type PartnerRequestStatus = "new" | "answered" | "closed";

export interface PartnerRequest {
  id: string;
  organizationId: string;
  createdBy: string;
  userName: string;
  type: PartnerRequestType;
  createdAtLabel: string;
  text: string;
  relatedPlaceId?: Place["id"];
  relatedService?: string;
  status: PartnerRequestStatus;
  response?: string;
}

export interface PartnerAnalyticsSnapshot {
  profileViews: number;
  placeViews: number;
  routeStarts: number;
  favorites: number;
  userQuestions: number;
  vacancyViews: number;
  applications: number;
  courseEnrollments: number;
  eventJoins: number;
  accessibilityConfirmations: number;
}

export type PartnerAnalytics = Record<"7" | "30" | "90", PartnerAnalyticsSnapshot>;
export type PartnerContentStatus = "draft" | "published" | "closed" | "archived" | "expired";

export interface PartnerAccessibilityDraft {
  placeId: string;
  changes: Partial<AccessibilityFeatures>;
  status: "verified_data" | "edited_local" | "confirm_changes" | "verified_data_updated";
}

export type PartnerOwnedContent = OpportunityVacancy | OpportunityCourse | OpportunityEvent | PartnerOffer;
