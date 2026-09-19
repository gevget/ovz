// 36 — ROUTE CONSTANTS
// Use these helpers instead of hand-written route strings.

export const routes = {
  landing: "/",
  demo: "/demo",
  demoScenarios: "/demo/scenarios",

  user: {
    home: "/demo/user/home",
    feed: "/demo/user/feed",
    feedStory: (id: string) => `/demo/user/feed/story/${id}`,
    map: "/demo/user/map",
    mapSearch: "/demo/user/map/search",
    mapFilters: "/demo/user/map/filters",
    route: "/demo/user/map/route",
    routeOptions: "/demo/user/map/route/options",
    journey: "/demo/user/map/journey",
    taxi: "/demo/user/map/taxi",
    helpAtLocation: "/demo/user/map/help-at-location",
    emergency: "/demo/user/map/emergency",
    help: "/demo/user/help",
    helpAi: "/demo/user/help/ai",
    helpKnowledge: "/demo/user/help/knowledge",
    helpArticles: "/demo/user/help/articles",
    helpTopics: "/demo/user/help/topics",
    helpSpecialists: "/demo/user/help/specialists",
    helpOrganizations: "/demo/user/help/organizations",
    helpQuestion: "/demo/user/help/question",
    helpQuestions: "/demo/user/help/questions",
    volunteerRequest: "/demo/user/help/volunteer-request",
    helpBooking: (id: string) => `/demo/user/help/booking/${id}`,
    opportunities: "/demo/user/opportunities",
    vacancies: "/demo/user/opportunities/vacancies",
    vacancyFilters: "/demo/user/opportunities/vacancies/filters",
    resume: "/demo/user/opportunities/resume",
    resumeEdit: "/demo/user/opportunities/resume/edit",
    education: "/demo/user/opportunities/education",
    courses: "/demo/user/opportunities/courses",
    offers: "/demo/user/opportunities/offers",
    favorites: "/demo/user/opportunities/favorites",
    profile: "/demo/user/profile",
    profileAccessibility: "/demo/user/profile/accessibility",
    profileAccessibilityEdit: "/demo/user/profile/accessibility/edit",
    profileFriends: "/demo/user/profile/friends",
    profileContactPermissions: "/demo/user/profile/contact-permissions",
    profileResume: "/demo/user/profile/resume",
    profilePaperwork: "/demo/user/profile/paperwork",
    profileRequests: "/demo/user/profile/requests",
    profilePosts: "/demo/user/profile/posts",
    profileBecomeAuthor: "/demo/user/profile/become-author",
    profileNotifications: "/demo/user/profile/notifications",
    profileNotificationSettings: "/demo/user/profile/notifications/settings",
    profileAppearance: "/demo/user/profile/appearance",
    profileSecurity: "/demo/user/profile/security",
    profileApp: "/demo/user/profile/app",
    profileAbout: "/demo/user/profile/about",
    profileHelp: "/demo/user/profile/help",
    profileTransactions: "/demo/user/profile/transactions",
    profileFavorites: "/demo/user/profile/favorites",
    community: "/demo/user/community",
    communityDetail: (id: string) => `/demo/user/community/${id}`,
    friends: "/demo/user/friends",
    userProfile: (id: string) => `/demo/user/users/${id}`,
    dating: "/demo/user/dating",

    place: (id: string) => `/demo/user/map/place/${id}`,
    placeAccessibility: (id: string) =>
      `/demo/user/map/place/${id}/accessibility`,
    placeReport: (id: string) =>
      `/demo/user/map/place/${id}/report`,
    entrance: (id: string) => `/demo/user/map/entrance/${id}`,

    article: (id: string) =>
      `/demo/user/help/articles/${id}`,
    specialist: (id: string) =>
      `/demo/user/help/specialists/${id}`,
    organization: (id: string) =>
      `/demo/user/help/organizations/${id}`,

    helpRequest: (id: string) =>
      `/demo/user/help/requests/${id}`,

    vacancy: (id: string) =>
      `/demo/user/opportunities/vacancies/${id}`,
    vacancyApply: (id: string) =>
      `/demo/user/opportunities/vacancies/${id}/apply`,

    course: (id: string) =>
      `/demo/user/opportunities/courses/${id}`,
    courseEnroll: (id: string) =>
      `/demo/user/opportunities/courses/${id}/enroll`,
    educationOrganization: (id: string) =>
      `/demo/user/opportunities/education/${id}`,
    event: (id: string) =>
      `/demo/user/events/${id}`,
    events: "/demo/user/events",
    clubs: "/demo/user/clubs",
    club: (id: string) => `/demo/user/clubs/${id}`,
    offer: (id: string) => `/demo/user/opportunities/offers/${id}`,
    post: (id: string) =>
      `/demo/user/feed/post/${id}`,
  },

  volunteer: {
    root: "/demo/volunteer",
    home: "/demo/volunteer/home",
    requests: "/demo/volunteer/requests",
    request: (id: string) =>
      `/demo/volunteer/requests/${id}`,
    activeRequest: (id: string) =>
      `/demo/volunteer/requests/${id}/active`,
    history: "/demo/volunteer/history",
    map: "/demo/volunteer/map",
    community: "/demo/volunteer/community",
    profile: "/demo/volunteer/profile",
    onboarding: "/demo/volunteer/onboarding",
  },

  partner: {
    root: "/demo/partner",
    home: "/demo/partner/home",
    organization: "/demo/partner/organization",
    organizationEdit: "/demo/partner/organization/edit",
    accessibility:
      "/demo/partner/organization/accessibility",
    accessibilityConfirm: "/demo/partner/organization/accessibility/confirm",
    requests: "/demo/partner/requests",
    request: (id: string) => `/demo/partner/requests/${id}`,
    content: "/demo/partner/content",
    analytics: "/demo/partner/analytics",
    vacancies: "/demo/partner/vacancies",
    vacancyNew: "/demo/partner/vacancies/new",
    vacancyEdit: (id: string) => `/demo/partner/vacancies/${id}/edit`,
    courses: "/demo/partner/courses",
    courseNew: "/demo/partner/courses/new",
    courseEdit: (id: string) => `/demo/partner/courses/${id}/edit`,
    events: "/demo/partner/events",
    eventNew: "/demo/partner/events/new",
    eventEdit: (id: string) => `/demo/partner/events/${id}/edit`,
    offers: "/demo/partner/offers",
    offerNew: "/demo/partner/offers/new",
    offerEdit: (id: string) => `/demo/partner/offers/${id}/edit`,
    notifications: "/demo/partner/notifications",
    profile: "/demo/partner/profile",
  },

  admin: {
    home: "/demo/admin",
    users: "/demo/admin/users",
    partners: "/demo/admin/partners",
    places: "/demo/admin/places",
    reports: "/demo/admin/reports",
    helpRequests: "/demo/admin/help-requests",
    content: "/demo/admin/content",
    verification: "/demo/admin/verification",
    analytics: "/demo/admin/analytics",
  },
} as const;
