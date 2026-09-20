// 31 — SEED DATA CORE
// Compact, usable initial seed. Expand using 17_DEMO_DATA_EXPANSION_V2.md.

import type {
  User,
  Organization,
  Place,
  HelpRequest,
  Vacancy,
  Course,
  Event,
  Article,
  Notification,
} from "./20_TYPES_AND_DATA_MODELS";

export const users: User[] = [
  {
    id: "user_anna",
    name: "Анна Морозова",
    city: "Москва",
    verified: true,
    needs: ["step_free", "elevator", "accessible_toilet"],
    interests: ["кино", "дизайн", "прогулки"],
  },
  {
    id: "user_igor",
    name: "Игорь Власов",
    city: "Москва",
    verified: true,
    needs: ["high_contrast", "voice_hints"],
    interests: ["музыка", "технологии"],
  },
  {
    id: "volunteer_max",
    name: "Максим Орлов",
    city: "Москва",
    verified: true,
    role: "volunteer",
    needs: [],
    interests: ["город", "волонтёрство"],
  },
];

export const organizations: Organization[] = [
  {
    id: "org_clinic_12",
    name: "Городская клиника №12",
    category: "medicine",
    verified: true,
    description: "Демо-организация для сценариев карты и партнёрского кабинета.",
    city: "Москва",
    contacts: { phone: "+7 000 000-00-00", email: "demo@clinic.local" },
  },
  {
    id: "org_kontur",
    name: "Школа цифровых профессий «Контур»",
    category: "education",
    verified: true,
    description: "Демо-провайдер образовательных программ.",
    city: "Москва",
  },
];

export const places: Place[] = [
  {
    id: "place_clinic_12",
    organizationId: "org_clinic_12",
    name: "Городская клиника №12",
    category: "medicine",
    address: "Тестовый адрес, Москва",
    coordinates: { lat: 55.756, lng: 37.62 },
    schedule: "Сегодня до 20:00",
    verified: true,
    verificationSource: "mixed",
    lastConfirmedLabel: "Подтверждено 12 дней назад",
    accessibility: {
      stepFree: true,
      ramp: true,
      elevator: true,
      accessibleToilet: false,
      wideDoors: true,
      accessibleParking: true,
      tactileNavigation: "partial",
      hearingLoop: false,
      quietZone: "unknown",
      assistanceAvailable: true,
    },
    rating: 4.7,
    images: ["/assets/places/place-clinic-12-cover.webp"],
    description: "Тестовая карточка клиники.",
  },
  {
    id: "place_library",
    name: "Библиотека «Сфера»",
    category: "culture",
    address: "Тестовый адрес, Москва",
    coordinates: { lat: 55.759, lng: 37.625 },
    schedule: "Сегодня до 21:00",
    verified: true,
    verificationSource: "organization",
    lastConfirmedLabel: "Обновлено недавно",
    accessibility: {
      stepFree: true,
      ramp: true,
      elevator: true,
      accessibleToilet: true,
      wideDoors: true,
      accessibleParking: "partial",
      tactileNavigation: true,
      hearingLoop: true,
      quietZone: true,
      assistanceAvailable: true,
    },
    rating: 4.9,
    images: ["/assets/places/place-library-cover.webp"],
  },
];

export const helpRequests: HelpRequest[] = [
  {
    id: "help_001",
    createdBy: "user_anna",
    title: "Нужно сопровождение до клиники",
    dateLabel: "Завтра, 11:30",
    locationLabel: "м. Парк → Городская клиника №12",
    approximateArea: "Центральный район",
    status: "matching",
    estimatedDuration: "1,5 часа",
  },
];

export const vacancies: Vacancy[] = [
  {
    id: "vacancy_ux",
    organizationId: "org_kontur",
    title: "Junior UX researcher",
    salaryRange: "Демо-диапазон",
    workMode: "hybrid",
    accessibilityConditions: [
      "Доступный офис",
      "Гибкий график",
      "Возможность удалённой работы",
    ],
    description: "Участие в пользовательских исследованиях цифровых продуктов.",
    requirements: ["Интерес к UX", "Умение структурировать наблюдения"],
    verified: true,
    status: "open",
  },
];

export const courses: Course[] = [
  {
    id: "course_design",
    organizationId: "org_kontur",
    title: "Основы цифрового дизайна",
    format: "online",
    duration: "8 недель",
    description: "Демо-курс по базовым принципам цифрового дизайна.",
    accessibility: {
      subtitles: true,
      transcript: true,
      screenReaderCompatible: true,
      flexiblePace: true,
      signLanguage: false,
      accessibleOfflineVenue: "unknown",
    },
    status: "available",
  },
];

export const events: Event[] = [
  {
    id: "event_cinema",
    organizationId: "org_kontur",
    placeId: "place_library",
    title: "Кинопоказ с тифлокомментированием",
    dateLabel: "Суббота, 18:00",
    description: "Демо-мероприятие для проверки сценария события.",
    accessibilitySummary: ["Вход без ступеней", "Доступный туалет", "Тифлокомментарий"],
    status: "available",
  },
];

export const articles: Article[] = [
  {
    id: "article_trip",
    title: "Как подготовиться к поездке в новое место",
    category: "transport",
    summary: "Короткий демонстрационный чек-лист перед поездкой.",
    body: [
      "Проверьте вход и маршрут заранее.",
      "Сохраните контакты организации.",
      "Если нужна помощь, создайте запрос сопровождения.",
    ],
    relatedOrganizationIds: ["org_clinic_12"],
  },
];

export const notifications: Notification[] = [
  {
    id: "notif_001",
    userId: "user_anna",
    title: "Волонтёр откликнулся на ваш запрос",
    read: false,
    dateGroup: "today",
    deepLink: "/demo/user/help/requests/help_001",
  },
  {
    id: "notif_002",
    userId: "user_anna",
    title: "Информация о клинике обновлена",
    read: true,
    dateGroup: "yesterday",
    deepLink: "/demo/user/map/place/place_clinic_12",
  },
];
