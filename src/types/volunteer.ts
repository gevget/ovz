import type { HelpRequest, VolunteerProfile } from "@/types";

export type HelpRequestKind =
  | "clinic"
  | "documents"
  | "event"
  | "station"
  | "medicine"
  | "household"
  | "trip";

export type HelpRequestTimeSlot = "today" | "tomorrow" | "later";

export interface VolunteerProfileDetails extends VolunteerProfile {
  displayName: string;
  city: string;
  initials: string;
  verified: boolean;
  languages: string[];
}

export interface HelpRequestMeta {
  requestId: string;
  kind: HelpRequestKind;
  kindLabel: string;
  distanceKm: number;
  timeSlot: HelpRequestTimeSlot;
  neededSkills: string[];
  destinationPlaceId?: string;
  exactLocationLabel: string;
  contactLabel: string;
  accessibilityNotes: string[];
  checklist: string[];
  etaLabel: string;
}

export interface VolunteerProfileSettings {
  currentVolunteerId: string;
  available: boolean;
  radiusKm: number;
  skills: string[];
  languages: string[];
  onboardingCompleted: boolean;
}

export type VolunteerRequestView = HelpRequest & { meta: HelpRequestMeta };
