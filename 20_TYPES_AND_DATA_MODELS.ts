// 20 — TYPES AND DATA MODELS
// Canonical types for demo application.

export type Role = "user" | "volunteer" | "partner" | "admin";

export type TriState = true | false | "partial" | "unknown";

export type AccessibilityFeatureKey =
  | "stepFree"
  | "ramp"
  | "elevator"
  | "accessibleToilet"
  | "wideDoors"
  | "accessibleParking"
  | "tactileNavigation"
  | "hearingLoop"
  | "quietZone"
  | "assistanceAvailable";

export type AccessibilityFeatures = Record<AccessibilityFeatureKey, TriState>;

export type UserNeedKey =
  | "step_free"
  | "elevator"
  | "accessible_toilet"
  | "wide_doors"
  | "accessible_parking"
  | "tactile_navigation"
  | "hearing_support"
  | "quiet_zone"
  | "assistance"
  | "high_contrast"
  | "large_text"
  | "screen_reader"
  | "simple_mode"
  | "voice_hints";

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface User {
  id: string;
  name: string;
  city: string;
  avatar?: string;
  verified: boolean;
  role?: Role;
  needs: UserNeedKey[];
  interests: string[];
  status?: string;
}

export interface VolunteerProfile {
  userId: string;
  radiusKm: number;
  available: boolean;
  skills: string[];
  languages?: string[];
  completedHelpCount: number;
}

export interface Organization {
  id: string;
  name: string;
  category: string;
  verified: boolean;
  description: string;
  city: string;
  contacts?: {
    phone?: string;
    email?: string;
    telegram?: string;
  };
}

export interface Place {
  id: string;
  organizationId?: string;
  name: string;
  category: string;
  address: string;
  coordinates: GeoPoint;
  schedule: string;
  verified: boolean;
  verificationSource: "organization" | "community" | "moderator" | "mixed";
  lastConfirmedLabel: string;
  accessibility: AccessibilityFeatures;
  rating?: number;
  images: string[];
  description?: string;
}

export interface AccessibilityMatchResult {
  score: number;
  label: "Хорошо подходит" | "Подходит частично" | "Есть ограничения";
  criticalMismatch: boolean;
  reasons: {
    key: AccessibilityFeatureKey;
    status: TriState;
    weight: number;
  }[];
}

export interface RouteOption {
  id: string;
  title: string;
  durationMin: number;
  transfers: number;
  accessibilityReliability: number;
  stepFree: boolean;
  obstacleCount: number;
  labels: string[];
}

export type HelpRequestStatus =
  | "draft"
  | "submitted"
  | "matching"
  | "accepted"
  | "volunteer_on_way"
  | "active"
  | "completed"
  | "cancelled";

export interface HelpRequest {
  id: string;
  createdBy: string;
  volunteerId?: string;
  title: string;
  description?: string;
  dateLabel: string;
  locationLabel: string;
  approximateArea?: string;
  status: HelpRequestStatus;
  estimatedDuration?: string;
  createdAtLabel?: string;
}

export interface Vacancy {
  id: string;
  organizationId: string;
  title: string;
  salaryRange?: string;
  workMode: "remote" | "hybrid" | "office";
  accessibilityConditions: string[];
  description: string;
  requirements: string[];
  verified: boolean;
  status: "open" | "closed";
}

export interface Course {
  id: string;
  organizationId: string;
  title: string;
  format: "online" | "offline" | "hybrid";
  duration: string;
  description: string;
  accessibility: {
    subtitles: boolean;
    transcript: boolean;
    screenReaderCompatible: boolean;
    flexiblePace: boolean;
    signLanguage: boolean;
    accessibleOfflineVenue: boolean | "unknown";
  };
  status: "available" | "closed";
}

export interface Event {
  id: string;
  organizationId?: string;
  placeId?: string;
  title: string;
  dateLabel: string;
  description: string;
  accessibilitySummary: string[];
  capacityLabel?: string;
  status: "available" | "full" | "ended" | "cancelled";
}

export interface Community {
  id: string;
  title: string;
  city?: string;
  tags: string[];
  memberCount: number;
  verified: boolean;
}

export interface Post {
  id: string;
  authorId: string;
  authorType: "user" | "organization";
  title: string;
  body: string;
  dateLabel: string;
  media?: string[];
  reactions: number;
  verifiedAuthor: boolean;
}

export interface Story {
  id: string;
  authorId: string;
  title: string;
  body: string;
  type: "event" | "update" | "tip" | "volunteer" | "course";
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
  relatedOrganizationIds?: string[];
  relatedSpecialistIds?: string[];
}

export interface Specialist {
  id: string;
  organizationId?: string;
  name: string;
  category: "lawyer" | "psychologist" | "career" | "social_navigator";
  verified: boolean;
  specialties: string[];
  nextSlotLabel?: string;
  format: "online" | "offline" | "hybrid";
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  body?: string;
  read: boolean;
  dateGroup: "today" | "yesterday" | "earlier";
  deepLink?: string;
}

export interface AccessibilityReport {
  id: string;
  placeId: string;
  createdBy: string;
  type:
    | "entrance"
    | "elevator"
    | "ramp"
    | "toilet"
    | "parking"
    | "passage"
    | "information"
    | "other";
  text?: string;
  status: "submitted" | "under_review" | "verified" | "rejected";
}

export interface Resume {
  userId: string;
  title: string;
  summary: string;
  skills: string[];
  experience: string[];
  preferredWorkMode: ("remote" | "hybrid" | "office")[];
  accessibilityNeeds?: string[];
}

export interface DemoSettings {
  role: Role;
  contentMode: "normal" | "simple" | "voice";
  theme: "light" | "dark" | "system";
  textScale: 1 | 1.25 | 1.5;
  highContrast: boolean;
  reducedMotion: boolean;
  voiceHints: boolean;
}
