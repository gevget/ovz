// 34 — DEMO STORE SCHEMA
// Shared runtime state for cross-role demo.

import type {
  Role,
  DemoSettings,
  Place,
  HelpRequest,
  AccessibilityReport,
  UserNeedKey,
  Organization,
} from "./20_TYPES_AND_DATA_MODELS";
import type { OpportunityCourse, OpportunityEvent, OpportunityVacancy, PartnerOffer } from "./src/types/opportunities";
import type { PartnerAccessibilityDraft, PartnerAnalytics, PartnerContentStatus, PartnerRequest } from "./src/types/partner";
import type { DemoQuestion } from "./src/types/help";
import type { SocialPost } from "./src/types/social";
import type { ContactPermissions, NotificationPreferences, ProfileNotification, PaperworkProgress, SecuritySettings } from "./src/types/profile";
import type { VolunteerProfileSettings } from "./src/types/volunteer";
import type { AdminHistoryEntry, AdminModerationItem, AdminModerationStatus, AdminQualityState, AdminVerificationItem, AdminVerificationStatus } from "./src/types/admin";

export interface DemoState {
  initialized: boolean;
  role: Role;
  settings: DemoSettings;
  userNeeds: UserNeedKey[];

  // Shared mutable entity state
  places: Place[];
  organizations: Organization[];
  vacancies: OpportunityVacancy[];
  courses: OpportunityCourse[];
  events: OpportunityEvent[];
  offers: PartnerOffer[];
  helpRequests: HelpRequest[];
  volunteerSettings: VolunteerProfileSettings;
  accessibilityReports: AccessibilityReport[];
  adminVerificationQueue: AdminVerificationItem[];
  adminModerationItems: AdminModerationItem[];
  adminModerationStatuses: Record<string, AdminModerationStatus>;
  adminQualityStates: Record<string, AdminQualityState>;
  adminHistory: AdminHistoryEntry[];
  platformVerificationStatuses: Record<string, AdminVerificationStatus>;
  partnerRequests: PartnerRequest[];
  partnerAccessibilityDraft: PartnerAccessibilityDraft | null;
  partnerContentStatuses: Record<string, PartnerContentStatus>;
  partnerAnalytics: PartnerAnalytics;
  demoQuestions: DemoQuestion[];
  savedArticleIds: string[];

  // User interaction state
  favoriteIds: string[];
  followedAuthorIds: string[];
  joinedEventIds: string[];
  joinedClubIds: string[];
  enrolledCourseIds: string[];
  appliedVacancyIds: string[];
  resume: import("./20_TYPES_AND_DATA_MODELS").Resume;
  likedPostIds: string[];
  savedPostIds: string[];
  friendIds: string[];
  incomingFriendRequestIds: string[];
  outgoingFriendRequestIds: string[];
  joinedCommunityIds: string[];
  hiddenDatingRecommendationIds: string[];
  contactRequestIds: string[];
  reportedPostIds: string[];
  reportedUserIds: string[];
  notifications: ProfileNotification[];
  notificationPreferences: NotificationPreferences;
  contactPermissions: ContactPermissions;
  isAuthor: boolean;
  userCreatedPosts: SocialPost[];
  paperworkProgress: PaperworkProgress;
  securitySettings: SecuritySettings;

  // Presentation state
  guidedScenario:
    | null
    | "clinic"
    | "volunteer"
    | "partner-update"
    | "job"
    | "ai";
  guidedStep: number;

  // Map flow presentation state. These IDs keep the flagship route coherent across screens.
  selectedPlaceId: string | null;
  selectedRouteId: string | null;

  actions: {
    setRole(role: Role): void;
    resetDemo(): void;

    toggleFavorite(entityId: string): void;
    toggleFollow(authorId: string): void;
    joinEvent(eventId: string): void;
    joinClub(clubId: string): void;
    enrollCourse(courseId: string): void;
    applyVacancy(vacancyId: string): void;
    updateResume(patch: Partial<import("./20_TYPES_AND_DATA_MODELS").Resume>): void;
    toggleLikedPost(postId: string): void;
    toggleSavedPost(postId: string): void;
    sendFriendRequest(userId: string): void;
    acceptFriendRequest(userId: string): void;
    declineFriendRequest(userId: string): void;
    joinCommunity(communityId: string): void;
    hideDatingRecommendation(userId: string): void;
    requestContact(userId: string): void;
    reportPost(postId: string): void;
    reportUser(userId: string): void;
    updateUserNeeds(needs: UserNeedKey[]): void;
    markNotificationRead(notificationId: string): void;
    markAllNotificationsRead(): void;
    updateNotificationPreferences(patch: Partial<NotificationPreferences>): void;
    updateContactPermissions(patch: Partial<ContactPermissions>): void;
    setAuthor(value: boolean): void;
    createPost(post: Omit<SocialPost, "id" | "authorId" | "authorType" | "dateLabel" | "publishedAt" | "reactions" | "commentCount" | "verifiedAuthor" | "status">): string;
    updatePaperworkProgress(stageId: string, completed: boolean): void;
    updateSecuritySettings(patch: Partial<SecuritySettings>): void;

    createHelpRequest(
      request: Omit<HelpRequest, "id" | "status">
    ): string;

    acceptHelpRequest(requestId: string, volunteerId: string): void;
    setHelpRequestStatus(
      requestId: string,
      status: HelpRequest["status"]
    ): void;
    cancelVolunteerHelpRequest(requestId: string): void;
    updateVolunteerSettings(patch: Partial<VolunteerProfileSettings>): void;
    completeVolunteerOnboarding(): void;

    createAccessibilityReport(
      report: Omit<AccessibilityReport, "id" | "status">
    ): string;

    resolveAccessibilityReport(
      reportId: string,
      result: "verified" | "rejected"
    ): void;
    takeAccessibilityReportForReview(reportId: string): void;
    setModerationStatus(itemId: string, status: AdminModerationStatus): void;
    verifyEntity(queueId: string): void;
    requestVerificationUpdate(queueId: string): void;
    requestPlaceUpdate(placeId: string): void;

    createQuestion(question: Omit<DemoQuestion, "id" | "createdAtLabel" | "status">): string;
    toggleSavedArticle(articleId: string): void;

    updatePlaceAccessibility(
      placeId: string,
      patch: Partial<Place["accessibility"]>
    ): void;
    updateOrganization(organizationId: string, patch: Partial<Organization>): void;
    updatePartnerAccessibilityDraft(placeId: string, changes: Partial<Place["accessibility"]>): void;
    confirmPartnerAccessibilityChanges(): void;
    markPartnerReportChecked(reportId: string): void;
    respondPartnerRequest(requestId: string, response: string): void;
    setPartnerContentStatus(contentId: string, status: PartnerContentStatus): void;
    createPartnerVacancy(vacancy: Omit<OpportunityVacancy, "id">): string;
    updatePartnerVacancy(vacancyId: string, patch: Partial<OpportunityVacancy>): void;
    createPartnerCourse(course: Omit<OpportunityCourse, "id">): string;
    updatePartnerCourse(courseId: string, patch: Partial<OpportunityCourse>): void;
    createPartnerEvent(event: Omit<OpportunityEvent, "id">): string;
    updatePartnerEvent(eventId: string, patch: Partial<OpportunityEvent>): void;
    createPartnerOffer(offer: Omit<PartnerOffer, "id">): string;
    updatePartnerOffer(offerId: string, patch: Partial<PartnerOffer>): void;

    startScenario(
      scenario: NonNullable<DemoState["guidedScenario"]>
    ): void;
    setGuidedStep(step: number): void;
    endScenario(): void;
    setSelectedPlace(placeId: string | null): void;
    setSelectedRoute(routeId: string | null): void;

    patchSettings(patch: Partial<DemoSettings>): void;
  };
}

export const initialDemoSettings: DemoSettings = {
  role: "user",
  contentMode: "normal",
  theme: "light",
  textScale: 1,
  highContrast: false,
  reducedMotion: false,
  voiceHints: false,
};

/**
 * Persistence recommendation
 *
 * Persist:
 * - role
 * - settings
 * - favoriteIds
 * - followedAuthorIds
 * - joinedEventIds
 * - joinedClubIds
 * - enrolledCourseIds
 * - appliedVacancyIds
 * - resume
 * - likedPostIds
 * - savedPostIds
 * - friendIds
 * - incomingFriendRequestIds
 * - outgoingFriendRequestIds
 * - joinedCommunityIds
 * - hiddenDatingRecommendationIds
 * - contactRequestIds
 * - reportedPostIds
 * - reportedUserIds
 * - places
 * - helpRequests
 * - accessibilityReports
 *
 * Do NOT persist:
 * - temporary modal state
 * - current route
 * - transient loading flags
 */

export const DEMO_STORAGE_KEY = "accessibility-navigator-demo-v3";

/**
 * Reset behavior:
 * restore exact seed snapshot,
 * preserve nothing except optional UI theme if desired.
 */
