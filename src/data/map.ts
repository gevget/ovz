import type { RouteOption } from "@/types";

export const placeCategories = [
  { id: "all", label: "Все" },
  { id: "medicine", label: "Медицина" },
  { id: "cafe", label: "Кафе" },
  { id: "culture", label: "Культура" },
  { id: "education", label: "Образование" },
  { id: "public_service", label: "Госуслуги" },
  { id: "sport", label: "Спорт" },
  { id: "shops", label: "Магазины" },
  { id: "transport", label: "Транспорт" },
  { id: "employment", label: "Работа" },
] as const;

export const filterFeatures = [
  { id: "stepFree", label: "Без ступеней" },
  { id: "ramp", label: "Пандус" },
  { id: "elevator", label: "Лифт" },
  { id: "accessibleToilet", label: "Доступный туалет" },
  { id: "wideDoors", label: "Широкие проходы" },
  { id: "accessibleParking", label: "Парковка" },
  { id: "tactileNavigation", label: "Тактильная навигация" },
  { id: "hearingLoop", label: "Индукционная петля" },
  { id: "quietZone", label: "Тихая зона" },
  { id: "assistanceAvailable", label: "Сопровождение" },
] as const;

export type MapFilterFeature = (typeof filterFeatures)[number]["id"];

export const placePresentationMeta: Record<string, { state: "fresh" | "stale" | "temporary" | "unknown"; message?: string }> = {
  place_clinic_12: { state: "fresh" },
  place_library: { state: "fresh" },
  place_cafe_sever: { state: "fresh" },
  place_coworking: { state: "fresh" },
  place_theatre: { state: "fresh" },
  place_mfc: { state: "unknown", message: "Данные требуют проверки" },
  place_school_kontur: { state: "fresh" },
  place_sport_rhythm: { state: "fresh" },
  place_supermarket_city: { state: "stale", message: "Данные требуют проверки" },
  place_station_demo: { state: "temporary", message: "Лифт на западной платформе временно не работает" },
  place_pharmacy_24: { state: "fresh" },
  place_park_bereg: { state: "stale", message: "Подтверждено 22 дня назад" },
};

export const routeOptionsByPlaceId: Record<string, RouteOption[]> = {
  place_clinic_12: [
    {
      id: "route_fast_clinic",
      title: "Быстрее",
      durationMin: 28,
      transfers: 1,
      accessibilityReliability: 0.78,
      stepFree: false,
      obstacleCount: 1,
      labels: ["Быстрее на 6 минут", "Есть участок с ограничением"],
    },
    {
      id: "route_accessible_clinic",
      title: "Надёжнее по доступности",
      durationMin: 34,
      transfers: 1,
      accessibilityReliability: 0.96,
      stepFree: true,
      obstacleCount: 0,
      labels: ["Лифт на пересадке подтверждён", "Без критичных препятствий"],
    },
  ],
};

export type JourneyStep = {
  id: string;
  title: string;
  detail: string;
  mode: string;
  durationLabel: string;
  accessibilityHint: string;
};

export const journeyStepsByRouteId: Record<string, JourneyStep[]> = {
  route_accessible_clinic: [
    {
      id: "step_walk_home",
      title: "Выйдите на улицу",
      detail: "Идите до входа в метро через широкую дорожку справа.",
      mode: "Пешком",
      durationLabel: "6 мин",
      accessibilityHint: "Без ступеней, покрытие ровное",
    },
    {
      id: "step_metro_transfer",
      title: "Сядьте на зелёную линию",
      detail: "На пересадке используйте лифт у выхода №3.",
      mode: "Метро",
      durationLabel: "18 мин",
      accessibilityHint: "Лифт подтверждён недавно",
    },
    {
      id: "step_clinic_entrance",
      title: "Найдите вход клиники",
      detail: "Вход без ступеней находится со стороны тихого переулка.",
      mode: "Пешком",
      durationLabel: "10 мин",
      accessibilityHint: "Откройте фото входа перед последним поворотом",
    },
  ],
  route_fast_clinic: [
    {
      id: "step_fast_crossing",
      title: "Перейдите перекрёсток",
      detail: "На переходе есть высокий бордюр — закладывайте дополнительное время.",
      mode: "Пешком",
      durationLabel: "8 мин",
      accessibilityHint: "Участок с ограничением",
    },
    {
      id: "step_fast_metro",
      title: "Пересадка на синюю линию",
      detail: "Доступность лифта на пересадке не подтверждена.",
      mode: "Метро",
      durationLabel: "20 мин",
      accessibilityHint: "Проверьте лифт заранее",
    },
  ],
};

export const issueOptions = [
  { id: "elevator", label: "Лифт не работает" },
  { id: "entrance", label: "Вход перекрыт" },
  { id: "ramp", label: "Пандус повреждён" },
  { id: "toilet", label: "Недоступен туалет" },
  { id: "information", label: "Неверная информация" },
  { id: "other", label: "Другое" },
] as const;
