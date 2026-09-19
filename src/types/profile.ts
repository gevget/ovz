import type { Notification, UserNeedKey } from "@/types";

export type ProfileNotificationCategory = "help" | "map" | "work" | "learning" | "events" | "community" | "system";

export interface ProfileNotification extends Notification {
  category: ProfileNotificationCategory;
  timeLabel: string;
}

export interface NotificationPreferences {
  help: boolean;
  map: boolean;
  work: boolean;
  learning: boolean;
  events: boolean;
  community: boolean;
  partnerOffers: boolean;
  quietHoursEnabled: boolean;
  quietHoursStart: string;
  quietHoursEnd: string;
}

export type ContactVisibility = "friends" | "common_communities" | "request" | "nobody";

export interface ContactPermissions {
  whoCanRequest: ContactVisibility;
  showTelegramAfterConfirmation: boolean;
  showEmailAfterConfirmation: boolean;
}

export interface SecuritySettings {
  appProtectionEnabled: boolean;
}

export interface PaperworkProgress {
  scenarioId: string;
  completedStageIds: string[];
}

export interface ProfileCompletenessData {
  needs: UserNeedKey[];
  interests: string[];
  hasResume: boolean;
  contactPermissionsConfigured: boolean;
}
