"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { helpRequests as seedHelpRequests, organizations as seedOrganizations, places as seedPlaces, users } from "@/data/seed";
import { opportunityCourses, opportunityEvents, opportunityVacancies, partnerOffers } from "@/data/opportunities";
import { currentPartner, partnerAccessibilityReport, partnerAnalytics, partnerRequests as seedPartnerRequests, partnerSeedCourses, partnerSeedEvents, partnerSeedOffers, partnerSeedVacancies } from "@/data/partner";
import { currentVolunteerId, expandedHelpRequests, volunteerProfiles } from "@/data/volunteer";
import { demoQuestions as seedQuestions } from "@/data/help";
import { profileNotifications } from "@/data/profile";
import { adminAccessibilityReports, adminModerationItems, adminPlaceQuality, adminVerificationQueue } from "@/data/admin";
import type { AccessibilityReport, DemoQuestion, HelpRequest, Organization, Place, Resume, Role, UserNeedKey } from "@/types";
import type { OpportunityCourse, OpportunityEvent, OpportunityVacancy, PartnerOffer } from "@/types/opportunities";
import type { PartnerAccessibilityDraft, PartnerAnalytics, PartnerContentStatus, PartnerRequest } from "@/types/partner";
import type { ContactPermissions, NotificationPreferences, PaperworkProgress, ProfileNotification, SecuritySettings } from "@/types/profile";
import type { SocialPost } from "@/types/social";
import type { AdminHistoryEntry, AdminModerationStatus, AdminVerificationStatus } from "@/types/admin";
import { DEMO_STORAGE_KEY, initialDemoSettings } from "@/store/schema";
import { routes } from "@/lib/routes";
import type { DemoState } from "@/store/schema";

const clonePlaces = (): Place[] => structuredClone(seedPlaces);
const cloneOrganizations = (): Organization[] => structuredClone(seedOrganizations);
const cloneVacancies = (): OpportunityVacancy[] => structuredClone([...opportunityVacancies, ...partnerSeedVacancies]);
const cloneCourses = (): OpportunityCourse[] => structuredClone([...opportunityCourses, ...partnerSeedCourses]);
const cloneEvents = (): OpportunityEvent[] => structuredClone([...opportunityEvents, ...partnerSeedEvents]);
const cloneOffers = (): PartnerOffer[] => structuredClone([...partnerOffers, ...partnerSeedOffers]);
const cloneHelpRequests = (): HelpRequest[] => structuredClone([...seedHelpRequests, ...expandedHelpRequests]);
const cloneQuestions = (): DemoQuestion[] => structuredClone(seedQuestions);
const cloneNotifications = (): ProfileNotification[] => structuredClone([...profileNotifications, {
  id: "partner_notification_001",
  userId: currentPartner.id,
  category: "system",
  title: "Новый вопрос о доступности",
  body: "Посетитель уточняет работу лифта в клинике.",
  read: false,
  dateGroup: "today",
  timeLabel: "10:24",
  deepLink: routes.partner.request("partner_request_001"),
}]);

function helpNotification(request: HelpRequest, title: string, body: string): ProfileNotification {
  return {
    id: `notification_${request.id}_${Date.now()}_${title.slice(0, 4)}`,
    userId: request.createdBy,
    title,
    body,
    read: false,
    dateGroup: "today",
    timeLabel: "Только что",
    category: "help",
    deepLink: routes.user.helpRequest(request.id),
  };
}

const statusLabels: Record<HelpRequest["status"], string> = {
  draft: "Черновик",
  submitted: "Запрос создан",
  matching: "Ищем волонтёра",
  accepted: "Волонтёр найден",
  volunteer_on_way: "Волонтёр в пути",
  active: "Помощь началась",
  completed: "Запрос помощи завершён",
  cancelled: "Отменено",
};

const initialState = {
  initialized: true,
  role: initialDemoSettings.role,
  settings: { ...initialDemoSettings },
  userNeeds: [...(users.find((user) => user.id === "user_anna")?.needs ?? [])] as UserNeedKey[],
  organizations: cloneOrganizations(),
  places: clonePlaces(),
  vacancies: cloneVacancies(),
  courses: cloneCourses(),
  events: cloneEvents(),
  offers: cloneOffers(),
  helpRequests: cloneHelpRequests(),
  volunteerSettings: {
    currentVolunteerId,
    available: volunteerProfiles[0].available,
    radiusKm: volunteerProfiles[0].radiusKm,
    skills: [...volunteerProfiles[0].skills],
    languages: [...volunteerProfiles[0].languages],
    onboardingCompleted: true,
  },
  accessibilityReports: structuredClone([partnerAccessibilityReport, ...adminAccessibilityReports]) as AccessibilityReport[],
  adminVerificationQueue: structuredClone(adminVerificationQueue),
  adminModerationItems: structuredClone(adminModerationItems),
  adminModerationStatuses: {} as Record<string, AdminModerationStatus>,
  adminQualityStates: structuredClone(adminPlaceQuality),
  adminHistory: [] as AdminHistoryEntry[],
  platformVerificationStatuses: {
    org_clinic_12: "pending",
    volunteer_max: "pending",
    user_lena: "pending",
    org_kontur: "update_requested",
    place_station_demo: "pending",
  } as Record<string, AdminVerificationStatus>,
  partnerRequests: structuredClone(seedPartnerRequests) as PartnerRequest[],
  partnerAccessibilityDraft: null as PartnerAccessibilityDraft | null,
  partnerContentStatuses: {
    vacancy_clinic_coordinator: "published",
    course_clinic_patient_school: "published",
    event_clinic_open_day: "published",
    offer_clinic_checkup: "published",
  } as Record<string, PartnerContentStatus>,
  partnerAnalytics: structuredClone(partnerAnalytics) as PartnerAnalytics,
  demoQuestions: cloneQuestions(),
  savedArticleIds: [] as string[],
  favoriteIds: [] as string[],
  followedAuthorIds: [] as string[],
  joinedEventIds: [] as string[],
  joinedClubIds: [] as string[],
  enrolledCourseIds: [] as string[],
  appliedVacancyIds: [] as string[],
  resume: {
    userId: "user_anna",
    title: "UX-дизайнер и исследователь",
    summary: "Помогаю превращать пользовательские задачи в понятные и доступные цифровые продукты.",
    skills: ["UX-исследования", "Прототипирование", "Figma"],
    experience: ["Волонтёрские исследования доступности цифровых сервисов"],
    preferredWorkMode: ["remote", "hybrid"],
    accessibilityNeeds: ["Гибкий темп общения", "Возможность удалённой работы"],
  } as Resume,
  likedPostIds: [] as string[],
  savedPostIds: [] as string[],
  friendIds: ["user_igor"] as string[],
  incomingFriendRequestIds: ["user_lena"] as string[],
  outgoingFriendRequestIds: ["user_timur"] as string[],
  joinedCommunityIds: ["community_design"] as string[],
  hiddenDatingRecommendationIds: [] as string[],
  contactRequestIds: [] as string[],
  reportedPostIds: [] as string[],
  reportedUserIds: [] as string[],
  notifications: cloneNotifications(),
  notificationPreferences: {
    help: true,
    map: true,
    work: true,
    learning: true,
    events: true,
    community: true,
    partnerOffers: false,
    quietHoursEnabled: false,
    quietHoursStart: "22:00",
    quietHoursEnd: "08:00",
  } as NotificationPreferences,
  contactPermissions: {
    whoCanRequest: "request",
    showTelegramAfterConfirmation: true,
    showEmailAfterConfirmation: false,
  } as ContactPermissions,
  isAuthor: false,
  userCreatedPosts: [] as SocialPost[],
  paperworkProgress: { scenarioId: "disability-status", completedStageIds: [] } as PaperworkProgress,
  securitySettings: { appProtectionEnabled: false } as SecuritySettings,
  guidedScenario: null,
  guidedStep: 0,
  selectedPlaceId: null as string | null,
  selectedRouteId: null as string | null,
};

function migrateDemoState(persistedState: unknown): Partial<DemoState> {
  if (!persistedState || typeof persistedState !== "object") return {};
  const persisted = persistedState as Partial<DemoState>;
  return {
    ...persisted,
    places: persisted.places?.map((place) => ({
      ...place,
      address: place.address.replaceAll("Демо-адрес", "Тестовый адрес"),
      description: place.description
        ?.replaceAll("Демо-карточка", "Тестовая карточка")
        .replaceAll("Демо-объект", "Тестовый объект"),
    })),
  };
}

export const useDemoStore = create<DemoState>()(
  persist(
    (set) => ({
      ...initialState,
      actions: {
        setRole: (role: Role) =>
          set((state) => ({
            role,
            settings: { ...state.settings, role },
          })),
        resetDemo: () => set({ ...initialState, settings: { ...initialDemoSettings } }),
        updateUserNeeds: (needs) => set({ userNeeds: [...new Set(needs)] }),
        toggleFavorite: (entityId: string) =>
          set((state) => ({
            favoriteIds: state.favoriteIds.includes(entityId)
              ? state.favoriteIds.filter((id) => id !== entityId)
              : [...state.favoriteIds, entityId],
          })),
        toggleFollow: (authorId: string) =>
          set((state) => ({
            followedAuthorIds: state.followedAuthorIds.includes(authorId)
              ? state.followedAuthorIds.filter((id) => id !== authorId)
              : [...state.followedAuthorIds, authorId],
          })),
        joinEvent: (eventId: string) =>
          set((state) => ({
            joinedEventIds: state.joinedEventIds.includes(eventId)
              ? state.joinedEventIds
              : [...state.joinedEventIds, eventId],
          })),
        joinClub: (clubId: string) =>
          set((state) => ({
            joinedClubIds: state.joinedClubIds.includes(clubId)
              ? state.joinedClubIds
              : [...state.joinedClubIds, clubId],
          })),
        enrollCourse: (courseId: string) =>
          set((state) => ({
            enrolledCourseIds: state.enrolledCourseIds.includes(courseId)
              ? state.enrolledCourseIds
              : [...state.enrolledCourseIds, courseId],
          })),
        applyVacancy: (vacancyId: string) =>
          set((state) => ({
            appliedVacancyIds: state.appliedVacancyIds.includes(vacancyId)
              ? state.appliedVacancyIds
              : [...state.appliedVacancyIds, vacancyId],
          })),
        updateResume: (patch) => set((state) => ({ resume: { ...state.resume, ...patch } })),
        toggleLikedPost: (postId) => set((state) => ({ likedPostIds: state.likedPostIds.includes(postId) ? state.likedPostIds.filter((id) => id !== postId) : [...state.likedPostIds, postId] })),
        toggleSavedPost: (postId) => set((state) => ({ savedPostIds: state.savedPostIds.includes(postId) ? state.savedPostIds.filter((id) => id !== postId) : [...state.savedPostIds, postId] })),
        sendFriendRequest: (userId) => set((state) => ({ outgoingFriendRequestIds: state.outgoingFriendRequestIds.includes(userId) || state.friendIds.includes(userId) ? state.outgoingFriendRequestIds : [...state.outgoingFriendRequestIds, userId] })),
        acceptFriendRequest: (userId) => set((state) => ({ friendIds: state.friendIds.includes(userId) ? state.friendIds : [...state.friendIds, userId], incomingFriendRequestIds: state.incomingFriendRequestIds.filter((id) => id !== userId) })),
        declineFriendRequest: (userId) => set((state) => ({ incomingFriendRequestIds: state.incomingFriendRequestIds.filter((id) => id !== userId) })),
        joinCommunity: (communityId) => set((state) => ({ joinedCommunityIds: state.joinedCommunityIds.includes(communityId) ? state.joinedCommunityIds : [...state.joinedCommunityIds, communityId] })),
        hideDatingRecommendation: (userId) => set((state) => ({ hiddenDatingRecommendationIds: state.hiddenDatingRecommendationIds.includes(userId) ? state.hiddenDatingRecommendationIds : [...state.hiddenDatingRecommendationIds, userId] })),
        requestContact: (userId) => set((state) => ({ contactRequestIds: state.contactRequestIds.includes(userId) ? state.contactRequestIds : [...state.contactRequestIds, userId] })),
        reportPost: (postId) => set((state) => ({
          reportedPostIds: state.reportedPostIds.includes(postId) ? state.reportedPostIds : [...state.reportedPostIds, postId],
          adminModerationItems: state.adminModerationItems.some((item) => item.entityType === "post" && item.entityId === postId) ? state.adminModerationItems : [...state.adminModerationItems, { id: `moderation_${postId}`, entityType: "post", entityId: postId, reporterId: "user_anna", label: "Публикация пользователя", reason: "Жалоба пользователя отправлена на проверку.", status: "flagged", createdAtLabel: "Только что" }],
        })),
        reportUser: (userId) => set((state) => ({
          reportedUserIds: state.reportedUserIds.includes(userId) ? state.reportedUserIds : [...state.reportedUserIds, userId],
          adminModerationItems: state.adminModerationItems.some((item) => item.entityType === "user" && item.entityId === userId) ? state.adminModerationItems : [...state.adminModerationItems, { id: `moderation_user_${userId}`, entityType: "user", entityId: userId, reporterId: "user_anna", label: "Профиль пользователя", reason: "Жалоба пользователя отправлена на проверку.", status: "flagged", createdAtLabel: "Только что" }],
        })),
        markNotificationRead: (notificationId) => set((state) => ({ notifications: state.notifications.map((notification) => notification.id === notificationId ? { ...notification, read: true } : notification) })),
        markAllNotificationsRead: () => set((state) => ({ notifications: state.notifications.map((notification) => ({ ...notification, read: true })) })),
        updateNotificationPreferences: (patch) => set((state) => ({ notificationPreferences: { ...state.notificationPreferences, ...patch } })),
        updateContactPermissions: (patch) => set((state) => ({ contactPermissions: { ...state.contactPermissions, ...patch } })),
        setAuthor: (value) => set({ isAuthor: value }),
        createPost: (post) => {
          const id = `post_user_${Date.now()}`;
          set((state) => ({
            userCreatedPosts: [...state.userCreatedPosts, { ...post, id, authorId: "user_anna", authorType: "user", dateLabel: "Только что", publishedAt: "Только что", reactions: 0, commentCount: 0, verifiedAuthor: false, status: "published" }],
          }));
          return id;
        },
        updatePaperworkProgress: (stageId, completed) => set((state) => ({ paperworkProgress: { ...state.paperworkProgress, completedStageIds: completed ? [...new Set([...state.paperworkProgress.completedStageIds, stageId])] : state.paperworkProgress.completedStageIds.filter((id) => id !== stageId) } })),
        updateSecuritySettings: (patch) => set((state) => ({ securitySettings: { ...state.securitySettings, ...patch } })),
        createHelpRequest: (request) => {
          const id = `help_${Date.now()}`;
          set((state) => ({
            helpRequests: [...state.helpRequests, { ...request, id, status: "submitted" }],
          }));
          return id;
        },
        acceptHelpRequest: (requestId, volunteerId) =>
          set((state) => {
            const request = state.helpRequests.find((item) => item.id === requestId);
            if (!request || request.volunteerId || !["submitted", "matching"].includes(request.status)) return state;
            const volunteer = volunteerProfiles.find((item) => item.userId === volunteerId);
            const name = volunteer?.displayName ?? "Волонтёр";
            return {
              helpRequests: state.helpRequests.map((item) => item.id === requestId ? { ...item, volunteerId, status: "accepted" } : item),
              notifications: [...state.notifications, helpNotification(request, `${name} откликнулся на ваш запрос`, "Можно открыть статус запроса и связаться с волонтёром в demo.")],
            };
          }),
        setHelpRequestStatus: (requestId, status) =>
          set((state) => {
            const request = state.helpRequests.find((item) => item.id === requestId);
            const allowed: Record<HelpRequest["status"], HelpRequest["status"][]> = {
              draft: ["submitted", "cancelled"], submitted: ["matching", "cancelled"], matching: ["accepted", "cancelled"], accepted: ["volunteer_on_way", "cancelled"], volunteer_on_way: ["active", "cancelled"], active: ["completed"], completed: [], cancelled: [],
            };
            if (!request || !allowed[request.status].includes(status)) return state;
            const nextRequest = { ...request, status };
            const notificationTitle: Partial<Record<HelpRequest["status"], string>> = {
              volunteer_on_way: "Волонтёр в пути",
              active: "Помощь началась",
              completed: "Запрос помощи завершён",
            };
            return {
              helpRequests: state.helpRequests.map((item) => item.id === requestId ? nextRequest : item),
              notifications: notificationTitle[status] ? [...state.notifications, helpNotification(request, notificationTitle[status]!, `Статус запроса: ${statusLabels[status]}.`)] : state.notifications,
            };
          }),
        cancelVolunteerHelpRequest: (requestId) =>
          set((state) => {
            const request = state.helpRequests.find((item) => item.id === requestId);
            if (!request || request.volunteerId !== state.volunteerSettings.currentVolunteerId || !["accepted", "volunteer_on_way"].includes(request.status)) return state;
            return {
              helpRequests: state.helpRequests.map((item) => item.id === requestId ? { ...item, volunteerId: undefined, status: "matching" } : item),
              notifications: [...state.notifications, helpNotification(request, "Волонтёр отказался от запроса", "Запрос снова доступен для отклика.")],
            };
          }),
        updateVolunteerSettings: (patch) =>
          set((state) => ({ volunteerSettings: { ...state.volunteerSettings, ...patch, skills: patch.skills ? [...new Set(patch.skills)] : state.volunteerSettings.skills, languages: patch.languages ? [...new Set(patch.languages)] : state.volunteerSettings.languages } })),
        completeVolunteerOnboarding: () =>
          set((state) => ({ volunteerSettings: { ...state.volunteerSettings, available: true, onboardingCompleted: true } })),
        createQuestion: (question) => {
          const id = `question_${Date.now()}`;
          set((state) => ({
            demoQuestions: [...state.demoQuestions, { ...question, id, createdAtLabel: "Только что", status: "submitted" }],
          }));
          return id;
        },
        toggleSavedArticle: (articleId) =>
          set((state) => ({
            savedArticleIds: state.savedArticleIds.includes(articleId)
              ? state.savedArticleIds.filter((id) => id !== articleId)
              : [...state.savedArticleIds, articleId],
          })),
        createAccessibilityReport: (report) => {
          const id = `report_${Date.now()}`;
          set((state) => ({
            accessibilityReports: [
              ...state.accessibilityReports,
              { ...report, id, status: "submitted" },
            ],
          }));
          return id;
        },
        resolveAccessibilityReport: (reportId, result) =>
          set((state) => {
            const report = state.accessibilityReports.find((item) => item.id === reportId);
            if (!report || report.status !== "under_review") return state;
            const place = state.places.find((item) => item.id === report.placeId);
            const verifiedPlace = result === "verified" && place ? { ...place, lastConfirmedLabel: "Подтверждено модерацией", verificationSource: "moderator" as const } : place;
            const history: AdminHistoryEntry = { id: `history_${reportId}_${result}_${Date.now()}`, entityId: reportId, entityType: "accessibility_report", action: result === "verified" ? "Отчёт подтверждён" : "Отчёт отклонён", actorRole: "admin", timestampLabel: "Только что", detail: result === "verified" ? "Карточка места получила подтверждённую отметку." : "Карточка места не изменена." };
            const notifications = [...state.notifications, { id: `notification_report_${reportId}_${result}_${Date.now()}`, userId: report.createdBy, category: "map" as const, title: "Ваше сообщение проверено", body: result === "verified" ? "Мы проверили сообщение. В карточке места появилась отметка о подтверждённом изменении." : "Мы проверили сообщение. Сейчас данные карточки места не изменены.", read: false, dateGroup: "today" as const, timeLabel: "Только что", deepLink: routes.user.place(report.placeId) }, { id: `notification_partner_report_${reportId}_${result}_${Date.now()}`, userId: currentPartner.id, category: "map" as const, title: result === "verified" ? "Сообщение о доступности подтверждено" : "Сообщение о доступности отклонено", body: result === "verified" ? "Администратор подтвердил изменение в карточке вашего места." : "Администратор проверил сообщение и не изменил карточку места.", read: false, dateGroup: "today" as const, timeLabel: "Только что", deepLink: routes.partner.requests }];
            return {
              accessibilityReports: state.accessibilityReports.map((item) => item.id === reportId ? { ...item, status: result } : item),
              places: verifiedPlace ? state.places.map((item) => item.id === report.placeId ? verifiedPlace : item) : state.places,
              adminQualityStates: result === "verified" ? { ...state.adminQualityStates, [report.placeId]: "current" } : state.adminQualityStates,
              adminHistory: [...state.adminHistory, history],
              notifications,
            };
          }),
        takeAccessibilityReportForReview: (reportId) => set((state) => {
          const report = state.accessibilityReports.find((item) => item.id === reportId);
          if (!report || report.status !== "submitted") return state;
          return {
            accessibilityReports: state.accessibilityReports.map((item) => item.id === reportId ? { ...item, status: "under_review" } : item),
            adminHistory: [...state.adminHistory, { id: `history_${reportId}_review_${Date.now()}`, entityId: reportId, entityType: "accessibility_report", action: "Отчёт взят на проверку", actorRole: "admin", timestampLabel: "Только что" }],
          };
        }),
        markPartnerReportChecked: (reportId) =>
          set((state) => ({
            accessibilityReports: state.accessibilityReports.map((report) => report.id === reportId && report.status === "submitted" ? { ...report, status: "under_review" } : report),
          })),
        setModerationStatus: (itemId, status) => set((state) => {
          const item = state.adminModerationItems.find((entry) => entry.id === itemId);
          if (!item) return state;
          const userPost = item.entityType === "post" && state.userCreatedPosts.some((post) => post.id === item.entityId);
          const contentOwner = ["vacancy", "course", "event", "offer"].includes(item.entityType);
          return {
            adminModerationItems: state.adminModerationItems.map((entry) => entry.id === itemId ? { ...entry, status } : entry),
            adminModerationStatuses: { ...state.adminModerationStatuses, [item.entityId]: status },
            userCreatedPosts: userPost ? state.userCreatedPosts.map((post) => post.id === item.entityId ? { ...post, status: status === "hidden" ? "hidden" : "moderated" } : post) : state.userCreatedPosts,
            adminHistory: [...state.adminHistory, { id: `history_${itemId}_${status}_${Date.now()}`, entityId: item.entityId, entityType: "moderation", action: `Модерация: ${status}`, actorRole: "admin", timestampLabel: "Только что" }],
            notifications: contentOwner ? [...state.notifications, { id: `notification_content_${item.entityId}_${status}_${Date.now()}`, userId: currentPartner.id, category: "system" as const, title: status === "request_edit" ? "Нужно уточнить публикацию" : status === "hidden" ? "Публикация скрыта модерацией" : "Публикация прошла модерацию", body: status === "request_edit" ? "Пожалуйста, проверьте данные и обновите карточку." : "Результат проверки доступен в кабинете партнёра.", read: false, dateGroup: "today", timeLabel: "Только что", deepLink: routes.partner.content }] : state.notifications,
          };
        }),
        verifyEntity: (queueId) => set((state) => {
          const item = state.adminVerificationQueue.find((entry) => entry.id === queueId);
          if (!item || !["pending", "update_requested", "incomplete"].includes(item.status)) return state;
          const nextQueue = state.adminVerificationQueue.map((entry) => entry.id === queueId ? { ...entry, status: "verified" as const } : entry);
          const nextOrganizations = item.entityType === "partner" ? state.organizations.map((organization) => organization.id === item.entityId ? { ...organization, verified: true } : organization) : state.organizations;
          const nextPlaces = item.entityType === "place" ? state.places.map((place) => place.id === item.entityId ? { ...place, verified: true, verificationSource: "moderator" as const, lastConfirmedLabel: "Проверено платформой" } : place) : state.places;
          const notifyUser = item.entityType === "partner" || item.entityType === "place";
          return {
            adminVerificationQueue: nextQueue,
            platformVerificationStatuses: { ...state.platformVerificationStatuses, [item.entityId]: "verified" },
            organizations: nextOrganizations,
            places: nextPlaces,
            adminQualityStates: item.entityType === "place" ? { ...state.adminQualityStates, [item.entityId]: "current" } : state.adminQualityStates,
            adminHistory: [...state.adminHistory, { id: `history_${queueId}_verified_${Date.now()}`, entityId: item.entityId, entityType: "verification", action: "Проверено платформой", actorRole: "admin", timestampLabel: "Только что" }],
            notifications: [...state.notifications, { id: `notification_verification_${queueId}_${Date.now()}`, userId: item.entityType === "partner" ? currentPartner.id : item.entityId, category: "system" as const, title: "Проверка завершена", body: "Статус обновлён: объект отмечен как проверенный платформой.", read: false, dateGroup: "today", timeLabel: "Только что", deepLink: item.entityType === "partner" ? routes.partner.organization : notifyUser ? routes.user.place(item.entityId) : routes.user.profile }],
          };
        }),
        requestVerificationUpdate: (queueId) => set((state) => {
          const item = state.adminVerificationQueue.find((entry) => entry.id === queueId);
          if (!item || item.status === "verified") return state;
          return {
            adminVerificationQueue: state.adminVerificationQueue.map((entry) => entry.id === queueId ? { ...entry, status: "update_requested" as const } : entry),
            platformVerificationStatuses: { ...state.platformVerificationStatuses, [item.entityId]: "update_requested" },
            adminHistory: [...state.adminHistory, { id: `history_${queueId}_update_${Date.now()}`, entityId: item.entityId, entityType: "verification", action: "Запрошено уточнение", actorRole: "admin", timestampLabel: "Только что" }],
            notifications: [...state.notifications, { id: `notification_verification_update_${queueId}_${Date.now()}`, userId: item.entityType === "partner" || item.entityType === "place" ? currentPartner.id : item.entityId, category: "system" as const, title: "Нужно обновить данные", body: item.entityType === "place" ? "Пожалуйста, подтвердите актуальность данных объекта." : "Пожалуйста, уточните данные профиля для повторной проверки.", read: false, dateGroup: "today", timeLabel: "Только что", deepLink: item.entityType === "partner" || item.entityType === "place" ? routes.partner.organization : routes.user.profile }],
          };
        }),
        requestPlaceUpdate: (placeId) => set((state) => {
          const existing = state.adminVerificationQueue.find((item) => item.entityType === "place" && item.entityId === placeId);
          const queueItem = existing ?? { id: `verification_place_${placeId}`, entityType: "place" as const, entityId: placeId, label: state.places.find((place) => place.id === placeId)?.name ?? "Место", status: "pending" as const, requestedAtLabel: "Только что", note: "Запрос партнёру на актуализацию данных." };
          return {
            adminVerificationQueue: existing ? state.adminVerificationQueue.map((item) => item.id === existing.id ? { ...item, status: "update_requested" as const, requestedAtLabel: "Только что" } : item) : [...state.adminVerificationQueue, { ...queueItem, status: "update_requested" as const }],
            adminQualityStates: { ...state.adminQualityStates, [placeId]: "needs_review" },
            platformVerificationStatuses: { ...state.platformVerificationStatuses, [placeId]: "update_requested" },
            adminHistory: [...state.adminHistory, { id: `history_${placeId}_quality_${Date.now()}`, entityId: placeId, entityType: "place_quality", action: "Запрошена актуализация", actorRole: "admin", timestampLabel: "Только что" }],
            notifications: [...state.notifications, { id: `notification_place_update_${placeId}_${Date.now()}`, userId: currentPartner.id, category: "map" as const, title: "Пожалуйста, подтвердите актуальность данных объекта.", body: "Откройте чек-лист доступности и подтвердите данные организации.", read: false, dateGroup: "today", timeLabel: "Только что", deepLink: routes.partner.accessibility }],
          };
        }),
        updateOrganization: (organizationId, patch) =>
          set((state) => ({
            organizations: state.organizations.map((organization) => organization.id === organizationId ? { ...organization, ...patch } : organization),
          })),
        updatePartnerAccessibilityDraft: (placeId, changes) =>
          set((state) => ({
            partnerAccessibilityDraft: {
              placeId,
              changes: { ...(state.partnerAccessibilityDraft?.placeId === placeId ? state.partnerAccessibilityDraft.changes : {}), ...changes },
              status: "edited_local",
            },
          })),
        confirmPartnerAccessibilityChanges: () =>
          set((state) => {
            const draft = state.partnerAccessibilityDraft;
            if (!draft || !Object.keys(draft.changes).length) return state;
            const place = state.places.find((item) => item.id === draft.placeId);
            if (!place) return state;
            const nextPlace: Place = { ...place, accessibility: { ...place.accessibility, ...draft.changes }, lastConfirmedLabel: "Обновлено организацией", verificationSource: place.verificationSource === "mixed" ? "mixed" : "organization" };
            const nextAnalytics = { ...state.partnerAnalytics, "7": { ...state.partnerAnalytics["7"], accessibilityConfirmations: state.partnerAnalytics["7"].accessibilityConfirmations + 1 }, "30": { ...state.partnerAnalytics["30"], accessibilityConfirmations: state.partnerAnalytics["30"].accessibilityConfirmations + 1 }, "90": { ...state.partnerAnalytics["90"], accessibilityConfirmations: state.partnerAnalytics["90"].accessibilityConfirmations + 1 } };
            return {
              places: state.places.map((item) => item.id === place.id ? nextPlace : item),
              partnerAccessibilityDraft: { ...draft, status: "verified_data_updated" },
              partnerAnalytics: nextAnalytics,
              adminQualityStates: { ...state.adminQualityStates, [place.id]: "current" },
              platformVerificationStatuses: { ...state.platformVerificationStatuses, [place.id]: "verified" },
              adminVerificationQueue: state.adminVerificationQueue.map((item) => item.entityType === "place" && item.entityId === place.id ? { ...item, status: "verified" as const } : item),
              adminHistory: [...state.adminHistory, { id: `history_${place.id}_partner_confirm_${Date.now()}`, entityId: place.id, entityType: "place_quality" as const, action: "Партнёр подтвердил актуальность", actorRole: "partner" as const, timestampLabel: "Только что", detail: "Stale-состояние очищено после checklist confirm." }],
              notifications: [...state.notifications, {
                id: `notification_partner_accessibility_${Date.now()}`,
                userId: "user_anna",
                category: "map",
                title: "Информация о Городской клинике №12 обновлена",
                body: "Организация подтвердила изменения в доступности объекта.",
                read: false,
                dateGroup: "today",
                timeLabel: "Только что",
                deepLink: routes.user.place(place.id),
              }],
            };
          }),
        respondPartnerRequest: (requestId, response) =>
          set((state) => {
            const request = state.partnerRequests.find((item) => item.id === requestId);
            if (!request || !response.trim()) return state;
            return {
              partnerRequests: state.partnerRequests.map((item) => item.id === requestId ? { ...item, status: "answered", response: response.trim() } : item),
              notifications: [...state.notifications, { id: `notification_partner_request_${Date.now()}`, userId: request.createdBy, category: "help", title: "Организация ответила на ваш вопрос", body: response.trim(), read: false, dateGroup: "today", timeLabel: "Только что", deepLink: routes.user.helpQuestions }],
            };
          }),
        setPartnerContentStatus: (contentId, status) => set((state) => ({
          partnerContentStatuses: { ...state.partnerContentStatuses, [contentId]: status },
          vacancies: state.vacancies.map((item) => item.id === contentId ? { ...item, status: status === "closed" ? "closed" : status === "published" ? "open" : item.status } : item),
          courses: state.courses.map((item) => item.id === contentId ? { ...item, status: status === "closed" ? "closed" : status === "published" ? "available" : item.status } : item),
          events: state.events.map((item) => item.id === contentId ? { ...item, status: status === "closed" ? "cancelled" : status === "published" ? "available" : item.status } : item),
          offers: state.offers.map((item) => item.id === contentId ? { ...item, status: status === "expired" ? "expired" : status === "published" ? "available" : item.status } : item),
        })),
        createPartnerVacancy: (vacancy) => { const id = `vacancy_partner_${Date.now()}`; set((state) => ({ vacancies: [...state.vacancies, { ...vacancy, id }], partnerContentStatuses: { ...state.partnerContentStatuses, [id]: "published" } })); return id; },
        updatePartnerVacancy: (vacancyId, patch) => set((state) => ({ vacancies: state.vacancies.map((item) => item.id === vacancyId && item.organizationId === currentPartner.organizationId ? { ...item, ...patch } : item) })),
        createPartnerCourse: (course) => { const id = `course_partner_${Date.now()}`; set((state) => ({ courses: [...state.courses, { ...course, id }], partnerContentStatuses: { ...state.partnerContentStatuses, [id]: "published" } })); return id; },
        updatePartnerCourse: (courseId, patch) => set((state) => ({ courses: state.courses.map((item) => item.id === courseId && item.organizationId === currentPartner.organizationId ? { ...item, ...patch } : item) })),
        createPartnerEvent: (event) => { const id = `event_partner_${Date.now()}`; set((state) => ({ events: [...state.events, { ...event, id }], partnerContentStatuses: { ...state.partnerContentStatuses, [id]: "published" } })); return id; },
        updatePartnerEvent: (eventId, patch) => set((state) => ({ events: state.events.map((item) => item.id === eventId && item.organizationId === currentPartner.organizationId ? { ...item, ...patch } : item) })),
        createPartnerOffer: (offer) => { const id = `offer_partner_${Date.now()}`; set((state) => ({ offers: [...state.offers, { ...offer, id }], partnerContentStatuses: { ...state.partnerContentStatuses, [id]: "published" } })); return id; },
        updatePartnerOffer: (offerId, patch) => set((state) => ({ offers: state.offers.map((item) => item.id === offerId && item.organizationId === currentPartner.organizationId ? { ...item, ...patch } : item) })),
        updatePlaceAccessibility: (placeId, patch) =>
          set((state) => ({
            places: state.places.map((place) =>
              place.id === placeId
                ? {
                    ...place,
                    accessibility: { ...place.accessibility, ...patch },
                    lastConfirmedLabel: "Обновлено партнёром",
                  }
                : place,
            ),
          })),
        startScenario: (scenario) => set({ guidedScenario: scenario, guidedStep: 0 }),
        setGuidedStep: (step) => set({ guidedStep: step }),
        endScenario: () => set({ guidedScenario: null, guidedStep: 0 }),
        setSelectedPlace: (placeId) => set({ selectedPlaceId: placeId, selectedRouteId: null }),
        setSelectedRoute: (routeId) => set({ selectedRouteId: routeId }),
        patchSettings: (patch) =>
          set((state) => ({ settings: { ...state.settings, ...patch } })),
      },
    }),
    {
      name: DEMO_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        initialized: state.initialized,
        role: state.role,
        settings: state.settings,
        userNeeds: state.userNeeds,
        organizations: state.organizations,
        places: state.places,
        vacancies: state.vacancies,
        courses: state.courses,
        events: state.events,
        offers: state.offers,
        helpRequests: state.helpRequests,
        volunteerSettings: state.volunteerSettings,
        accessibilityReports: state.accessibilityReports,
        partnerRequests: state.partnerRequests,
        partnerAccessibilityDraft: state.partnerAccessibilityDraft,
        partnerContentStatuses: state.partnerContentStatuses,
        partnerAnalytics: state.partnerAnalytics,
        demoQuestions: state.demoQuestions,
        savedArticleIds: state.savedArticleIds,
        favoriteIds: state.favoriteIds,
        followedAuthorIds: state.followedAuthorIds,
        joinedEventIds: state.joinedEventIds,
        joinedClubIds: state.joinedClubIds,
        enrolledCourseIds: state.enrolledCourseIds,
        appliedVacancyIds: state.appliedVacancyIds,
        resume: state.resume,
        likedPostIds: state.likedPostIds,
        savedPostIds: state.savedPostIds,
        friendIds: state.friendIds,
        incomingFriendRequestIds: state.incomingFriendRequestIds,
        outgoingFriendRequestIds: state.outgoingFriendRequestIds,
        joinedCommunityIds: state.joinedCommunityIds,
        hiddenDatingRecommendationIds: state.hiddenDatingRecommendationIds,
        contactRequestIds: state.contactRequestIds,
        reportedPostIds: state.reportedPostIds,
        reportedUserIds: state.reportedUserIds,
        notifications: state.notifications,
        notificationPreferences: state.notificationPreferences,
        contactPermissions: state.contactPermissions,
        isAuthor: state.isAuthor,
        userCreatedPosts: state.userCreatedPosts,
        paperworkProgress: state.paperworkProgress,
        securitySettings: state.securitySettings,
        guidedScenario: state.guidedScenario,
        guidedStep: state.guidedStep,
        selectedPlaceId: state.selectedPlaceId,
        selectedRouteId: state.selectedRouteId,
        adminVerificationQueue: state.adminVerificationQueue,
        adminModerationItems: state.adminModerationItems,
        adminModerationStatuses: state.adminModerationStatuses,
        adminQualityStates: state.adminQualityStates,
        adminHistory: state.adminHistory,
        platformVerificationStatuses: state.platformVerificationStatuses,
      }),
      version: 2,
      migrate: migrateDemoState,
    },
  ),
);
