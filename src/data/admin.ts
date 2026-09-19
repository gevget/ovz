import type { AccessibilityReport } from "../../20_TYPES_AND_DATA_MODELS";
import type { AdminModerationItem, AdminQualityState, AdminVerificationItem } from "@/types/admin";

export const adminVerificationQueue: AdminVerificationItem[] = [
  { id: "verification_org_clinic_12", entityType: "partner", entityId: "org_clinic_12", label: "Городская клиника №12", status: "pending", requestedAtLabel: "Сегодня, 09:12", note: "Проверка профиля организации и места." },
  { id: "verification_volunteer_max", entityType: "volunteer", entityId: "volunteer_max", label: "Максим Орлов", status: "pending", requestedAtLabel: "Сегодня, 08:40", note: "Профиль волонтёра и навыки." },
  { id: "verification_author_lena", entityType: "author", entityId: "user_lena", label: "Елена Соколова", status: "pending", requestedAtLabel: "Вчера, 18:20", note: "Профиль автора community-публикаций." },
  { id: "verification_org_kontur", entityType: "partner", entityId: "org_kontur", label: "Центр «Контур»", status: "update_requested", requestedAtLabel: "12 сентября", note: "Нужно уточнить актуальность карточки." },
  { id: "verification_place_station", entityType: "place", entityId: "place_station_demo", label: "Транспортный узел «Центральный»", status: "pending", requestedAtLabel: "11 сентября", note: "Карточка требует повторного подтверждения." },
];

export const adminModerationItems: AdminModerationItem[] = [
  { id: "moderation_post_theatre", entityType: "post", entityId: "post_theatre", reporterId: "user_anna", label: "Публикация о театре", reason: "Нужна проверка описания доступности.", status: "flagged", createdAtLabel: "Сегодня, 10:02" },
  { id: "moderation_post_digital", entityType: "post", entityId: "post_digital", reporterId: "user_igor", label: "Публикация о цифровом сервисе", reason: "Пользователь отметил спорное утверждение.", status: "under_review", createdAtLabel: "Сегодня, 09:24" },
  { id: "moderation_offer_clinic", entityType: "offer", entityId: "offer_clinic_checkup", reporterId: "user_lena", label: "Предложение клиники", reason: "Попросить партнёра уточнить условия.", status: "request_edit", createdAtLabel: "Вчера, 17:05" },
  { id: "moderation_vacancy_clinic", entityType: "vacancy", entityId: "vacancy_clinic_coordinator", reporterId: "user_timur", label: "Вакансия координатора", reason: "Требуется сверить условия доступной среды.", status: "flagged", createdAtLabel: "Вчера, 15:40" },
  { id: "moderation_user_lena", entityType: "user", entityId: "user_lena", reporterId: "user_anna", label: "Профиль пользователя", reason: "Ручная проверка обращения пользователя.", status: "under_review", createdAtLabel: "10 сентября" },
  { id: "moderation_event_open_day", entityType: "event", entityId: "event_clinic_open_day", reporterId: "user_maria", label: "День открытых дверей", reason: "Проверить актуальность даты и доступности.", status: "flagged", createdAtLabel: "9 сентября" },
];

export const adminAccessibilityReports: AccessibilityReport[] = [
  { id: "report_station_access_002", placeId: "place_station_demo", createdBy: "user_igor", type: "entrance", text: "Западный вход временно закрыт.", status: "submitted" },
  { id: "report_library_elevator_003", placeId: "place_library", createdBy: "user_lena", type: "elevator", text: "Лифт работает с перебоями после 18:00.", status: "under_review" },
  { id: "report_theatre_toilet_004", placeId: "place_theatre", createdBy: "user_maria", type: "toilet", text: "Пожалуйста, уточните состояние доступного туалета.", status: "submitted" },
  { id: "report_mfc_ramp_005", placeId: "place_mfc", createdBy: "user_timur", type: "ramp", text: "На пандусе нужна повторная проверка покрытия.", status: "verified" },
  { id: "report_supermarket_parking_006", placeId: "place_supermarket_city", createdBy: "user_olga", type: "parking", text: "Разметка доступного места почти не видна.", status: "rejected" },
  { id: "report_park_passage_007", placeId: "place_park_bereg", createdBy: "user_anna", type: "passage", text: "После дождя проход стал труднее для коляски.", status: "submitted" },
  { id: "report_cafe_information_008", placeId: "place_cafe_sever", createdBy: "user_igor", type: "information", text: "Нет понятной таблички у доступного входа.", status: "under_review" },
];

export const adminPlaceQuality: Record<string, AdminQualityState> = {
  place_clinic_12: "needs_review",
  place_library: "current",
  place_station_demo: "conflicting",
  place_supermarket_city: "needs_review",
  place_park_bereg: "needs_review",
  place_cafe_sever: "unconfirmed",
};
