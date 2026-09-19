import type { AccessibilityReport, Organization, Place } from "@/types";
import type { OpportunityCourse, OpportunityEvent, OpportunityVacancy, PartnerOffer } from "@/types/opportunities";
import type { PartnerAnalytics, PartnerProfile, PartnerRequest } from "@/types/partner";

export const currentPartner: PartnerProfile = {
  id: "partner_clinic",
  organizationId: "org_clinic_12",
  displayName: "Мария Петрова",
  roleLabel: "Представитель организации",
  email: "partner@clinic.local",
};

export const partnerOrganizationId = currentPartner.organizationId;
export const partnerPlaceId = "place_clinic_12";

export const partnerRequests: PartnerRequest[] = [
  {
    id: "partner_request_001",
    organizationId: partnerOrganizationId,
    createdBy: "user_anna",
    userName: "Анна Смирнова",
    type: "accessibility",
    createdAtLabel: "Сегодня, 10:24",
    text: "Подскажите, работает ли лифт до кабинетов на втором этаже? Я планирую визит с креслом.",
    relatedPlaceId: partnerPlaceId,
    relatedService: "Приём врача-терапевта",
    status: "new",
  },
  {
    id: "partner_request_002",
    organizationId: partnerOrganizationId,
    createdBy: "user_igor",
    userName: "Игорь Волков",
    type: "booking",
    createdAtLabel: "Вчера, 16:40",
    text: "Можно ли заранее забронировать тихое время для оформления документов?",
    relatedPlaceId: partnerPlaceId,
    relatedService: "Оформление документов",
    status: "answered",
    response: "Да, оставьте удобное время через регистратуру — мы предупредим администратора.",
  },
];

export const partnerSeedVacancies: OpportunityVacancy[] = [
  {
    id: "vacancy_clinic_coordinator",
    organizationId: partnerOrganizationId,
    title: "Координатор доступного сервиса",
    salaryRange: "70 000–90 000 ₽",
    workMode: "hybrid",
    accessibilityConditions: ["Доступный офис", "Гибкий график", "Наставник"],
    description: "Помогать посетителям клиники выбрать понятный и удобный сценарий обращения.",
    requirements: ["Внимательность", "Спокойная коммуникация"],
    verified: true,
    status: "open",
    category: "support",
    skills: ["Координация", "Коммуникация"],
    schedule: "Гибкий график",
    city: "Москва",
    recommendationTags: ["гибкий график", "доступный офис"],
  },
];

export const partnerSeedCourses: OpportunityCourse[] = [
  {
    id: "course_clinic_patient_school",
    organizationId: partnerOrganizationId,
    title: "Школа спокойного визита",
    format: "offline",
    duration: "2 встречи",
    description: "Короткий курс о подготовке к визиту и доступных каналах связи с клиникой.",
    accessibility: { subtitles: true, transcript: true, screenReaderCompatible: true, flexiblePace: true, signLanguage: false, accessibleOfflineVenue: true },
    status: "available",
    category: "career",
    level: "Начальный",
    schedule: "По субботам",
    seatsLabel: "10 мест",
    recommendationTags: ["поддержка"],
  },
];

export const partnerSeedEvents: OpportunityEvent[] = [
  {
    id: "event_clinic_open_day",
    organizationId: partnerOrganizationId,
    placeId: partnerPlaceId,
    title: "День открытой клиники",
    dateLabel: "28 октября",
    timeLabel: "12:00",
    description: "Знакомство с входом, навигацией и командой сопровождения клиники.",
    accessibilitySummary: ["Вход без ступеней", "Тихая зона", "Помощь координатора"],
    status: "available",
    category: "community",
    recommendationTags: ["поддержка"],
  },
];

export const partnerSeedOffers: PartnerOffer[] = [
  {
    id: "offer_clinic_checkup",
    organizationId: partnerOrganizationId,
    title: "Бесплатная консультация координатора",
    description: "Поможем подготовить первый визит и подобрать удобный способ связи.",
    benefit: "30 минут без оплаты",
    validUntil: "До 31 декабря",
    status: "available",
    category: "service",
  },
];

const snapshot = (value: number): PartnerAnalytics["7"] => ({
  profileViews: value,
  placeViews: value * 2,
  routeStarts: Math.round(value * 0.6),
  favorites: Math.round(value * 0.4),
  userQuestions: Math.round(value * 0.2),
  vacancyViews: Math.round(value * 0.7),
  applications: Math.round(value * 0.15),
  courseEnrollments: Math.round(value * 0.12),
  eventJoins: Math.round(value * 0.2),
  accessibilityConfirmations: 1,
});

export const partnerAnalytics: PartnerAnalytics = { "7": snapshot(24), "30": snapshot(86), "90": snapshot(214) };

export const partnerAccessibilityReport: AccessibilityReport = {
  id: "report_clinic_elevator_001",
  placeId: partnerPlaceId,
  createdBy: "user_anna",
  type: "elevator",
  text: "Проверьте, пожалуйста, работает ли лифт до второго этажа.",
  status: "submitted",
};

export const partnerOrganizationFallback: Organization = {
  id: partnerOrganizationId,
  name: "Городская клиника №12",
  category: "medicine",
  verified: true,
  description: "Demo-организация для сценариев карты и партнёрского кабинета.",
  city: "Москва",
  contacts: { phone: "+7 000 000-00-00", email: "demo@clinic.local" },
};

export const partnerPlaceFallback: Place = {
  id: partnerPlaceId,
  organizationId: partnerOrganizationId,
  name: "Городская клиника №12",
  category: "medicine",
  address: "Demo-адрес, Москва",
  coordinates: { lat: 55.756, lng: 37.62 },
  schedule: "Сегодня до 20:00",
  verified: true,
  verificationSource: "mixed",
  lastConfirmedLabel: "Подтверждено 12 дней назад",
  accessibility: { stepFree: true, ramp: true, elevator: true, accessibleToilet: false, wideDoors: true, accessibleParking: true, tactileNavigation: "partial", hearingLoop: false, quietZone: "unknown", assistanceAvailable: true },
  images: [],
};
