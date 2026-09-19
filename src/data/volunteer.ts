import type { HelpRequest } from "@/types";
import type { HelpRequestMeta, VolunteerProfileDetails } from "@/types/volunteer";

export const currentVolunteerId = "volunteer_max";

export const volunteerProfiles: VolunteerProfileDetails[] = [
  { userId: "volunteer_max", displayName: "Максим Орлов", city: "Москва", initials: "МО", verified: true, radiusKm: 8, available: true, skills: ["Сопровождение", "Навигация", "Спокойное общение"], languages: ["Русский", "Английский"], completedHelpCount: 18 },
  { userId: "volunteer_sonya", displayName: "Соня Белова", city: "Москва", initials: "СБ", verified: true, radiusKm: 12, available: true, skills: ["Документы", "Перевод", "Сопровождение"], languages: ["Русский", "Английский"], completedHelpCount: 27 },
  { userId: "volunteer_dmitry", displayName: "Дмитрий Ким", city: "Москва", initials: "ДК", verified: true, radiusKm: 6, available: false, skills: ["Транспорт", "Навигация", "Аптеки"], languages: ["Русский"], completedHelpCount: 11 },
  { userId: "volunteer_olga", displayName: "Ольга Миронова", city: "Москва", initials: "ОМ", verified: true, radiusKm: 10, available: true, skills: ["Бытовая помощь", "Мероприятия"], languages: ["Русский"], completedHelpCount: 34 },
  { userId: "volunteer_pavel", displayName: "Павел Соколов", city: "Москва", initials: "ПС", verified: true, radiusKm: 15, available: true, skills: ["Сопровождение", "Мелкий ремонт", "Поездки"], languages: ["Русский", "Английский"], completedHelpCount: 9 },
  { userId: "volunteer_rita", displayName: "Рита Алиева", city: "Москва", initials: "РА", verified: true, radiusKm: 7, available: true, skills: ["Документы", "Аптеки", "Спокойное общение"], languages: ["Русский", "Татарский"], completedHelpCount: 22 },
];

export const expandedHelpRequests: HelpRequest[] = [
  { id: "help_002", createdBy: "user_igor", title: "Помочь разобраться с документами", description: "Нужно вместе проверить список справок и найти окно приёма.", dateLabel: "Сегодня, 16:00", locationLabel: "МФЦ «Мещерский»", approximateArea: "Западный район", status: "matching", estimatedDuration: "1 час" },
  { id: "help_003", createdBy: "user_anna", title: "Сопровождение на доступное мероприятие", description: "Нужна помощь с входом и поиском места в зале.", dateLabel: "Суббота, 18:00", locationLabel: "Библиотека на Арбате", approximateArea: "Центральный район", status: "submitted", estimatedDuration: "2 часа" },
  { id: "help_004", createdBy: "user_igor", title: "Помочь с навигацией на вокзале", dateLabel: "Завтра, 09:40", locationLabel: "Казанский вокзал", approximateArea: "Центральный район", status: "accepted", volunteerId: "volunteer_sonya", estimatedDuration: "45 минут" },
  { id: "help_005", createdBy: "user_anna", title: "Забрать лекарства в аптеке", description: "Аптека уже подтвердила наличие заказа.", dateLabel: "Сегодня, 19:00", locationLabel: "Аптека у метро «Тульская»", approximateArea: "Южный район", status: "volunteer_on_way", volunteerId: "volunteer_olga", estimatedDuration: "30 минут" },
  { id: "help_006", createdBy: "user_igor", title: "Помощь по хозяйству", dateLabel: "Сегодня, 13:00", locationLabel: "Жилой дом на Лесной улице", approximateArea: "Северный район", status: "active", volunteerId: "volunteer_pavel", estimatedDuration: "1,5 часа" },
  { id: "help_007", createdBy: "user_anna", title: "Сопровождение в поездке", dateLabel: "Вчера, 10:00", locationLabel: "м. Киевская → аэропорт", approximateArea: "Западный район", status: "completed", volunteerId: "volunteer_max", estimatedDuration: "2 часа" },
  { id: "help_008", createdBy: "user_igor", title: "Помочь попасть в поликлинику", dateLabel: "12 сентября, 12:00", locationLabel: "Поликлиника №8", approximateArea: "Северный район", status: "cancelled", estimatedDuration: "1 час" },
  { id: "help_009", createdBy: "user_anna", title: "Сопровождение до пункта выдачи", dateLabel: "Завтра, 15:30", locationLabel: "Пункт выдачи на Тверской", approximateArea: "Центральный район", status: "matching", estimatedDuration: "1 час" },
  { id: "help_010", createdBy: "user_igor", title: "Помочь найти доступный вход на вокзале", dateLabel: "Суббота, 11:00", locationLabel: "Белорусский вокзал", approximateArea: "Северный район", status: "submitted", estimatedDuration: "45 минут" },
];

const meta = (requestId: string, values: Omit<HelpRequestMeta, "requestId">): HelpRequestMeta => ({ requestId, ...values });

export const helpRequestMeta: Record<string, HelpRequestMeta> = {
  help_001: meta("help_001", { kind: "clinic", kindLabel: "Клиника", distanceKm: 2.4, timeSlot: "tomorrow", neededSkills: ["Сопровождение", "Навигация"], destinationPlaceId: "place_clinic_12", exactLocationLabel: "Встреча у выхода из метро «Парк»", contactLabel: "Анна · +7 (900) 000-12-12", accessibilityNotes: ["Нужен спокойный темп", "Помочь найти вход без ступеней"], checklist: ["Встретиться у выхода из метро", "Проверить кабинет", "Дождаться завершения регистрации"], etaLabel: "18 минут пешком" }),
  help_002: meta("help_002", { kind: "documents", kindLabel: "Документы", distanceKm: 5.8, timeSlot: "today", neededSkills: ["Документы", "Спокойное общение"], exactLocationLabel: "Точное место откроется после принятия", contactLabel: "Игорь · +7 (900) 000-22-22", accessibilityNotes: ["Помочь прочитать талон", "Нужен размеренный темп"], checklist: ["Проверить список справок", "Найти окно приёма"], etaLabel: "25 минут на транспорте" }),
  help_003: meta("help_003", { kind: "event", kindLabel: "Мероприятие", distanceKm: 3.1, timeSlot: "later", neededSkills: ["Мероприятия", "Сопровождение"], destinationPlaceId: "place_library", exactLocationLabel: "Точное место откроется после принятия", contactLabel: "Анна · +7 (900) 000-12-12", accessibilityNotes: ["Показать доступный вход", "Помочь найти место"], checklist: ["Встретиться у входа", "Проводить до зала"], etaLabel: "12 минут пешком" }),
  help_004: meta("help_004", { kind: "station", kindLabel: "Вокзал", distanceKm: 4.7, timeSlot: "tomorrow", neededSkills: ["Навигация", "Поездки"], exactLocationLabel: "Главный вход Казанского вокзала", contactLabel: "Игорь · +7 (900) 000-22-22", accessibilityNotes: ["Помочь найти платформу"], checklist: ["Встретиться у входа", "Проводить к платформе"], etaLabel: "20 минут на транспорте" }),
  help_005: meta("help_005", { kind: "medicine", kindLabel: "Лекарства", distanceKm: 6.2, timeSlot: "today", neededSkills: ["Аптеки", "Поездки"], exactLocationLabel: "Аптека у метро «Тульская», окно 3", contactLabel: "Анна · +7 (900) 000-12-12", accessibilityNotes: ["Забрать готовый заказ по коду"], checklist: ["Показать код заказа", "Передать пакет"], etaLabel: "10 минут на транспорте" }),
  help_006: meta("help_006", { kind: "household", kindLabel: "Бытовая помощь", distanceKm: 1.8, timeSlot: "today", neededSkills: ["Бытовая помощь", "Мелкий ремонт"], exactLocationLabel: "Лесная улица, дом 8", contactLabel: "Игорь · +7 (900) 000-22-22", accessibilityNotes: ["Не менять порядок вещей без согласования"], checklist: ["Собрать список задач", "Помочь с безопасными действиями"], etaLabel: "8 минут пешком" }),
  help_007: meta("help_007", { kind: "trip", kindLabel: "Поездка", distanceKm: 7.3, timeSlot: "later", neededSkills: ["Поездки", "Сопровождение"], exactLocationLabel: "м. Киевская, выход 4", contactLabel: "Анна · +7 (900) 000-12-12", accessibilityNotes: ["Проверить лифт на пересадке"], checklist: ["Встретиться у метро", "Проводить до стойки регистрации"], etaLabel: "25 минут на транспорте" }),
  help_008: meta("help_008", { kind: "clinic", kindLabel: "Клиника", distanceKm: 9.1, timeSlot: "later", neededSkills: ["Сопровождение"], exactLocationLabel: "Запрос отменён", contactLabel: "Контакт недоступен", accessibilityNotes: [], checklist: [], etaLabel: "—" }),
  help_009: meta("help_009", { kind: "trip", kindLabel: "Поездка", distanceKm: 2.9, timeSlot: "tomorrow", neededSkills: ["Навигация", "Сопровождение"], exactLocationLabel: "Точное место откроется после принятия", contactLabel: "Анна · +7 (900) 000-12-12", accessibilityNotes: ["Нужна помощь с терминалом выдачи"], checklist: ["Встретиться у входа", "Проводить до стойки"], etaLabel: "14 минут пешком" }),
  help_010: meta("help_010", { kind: "station", kindLabel: "Вокзал", distanceKm: 4.2, timeSlot: "later", neededSkills: ["Навигация", "Сопровождение"], exactLocationLabel: "Главный вход Белорусского вокзала", contactLabel: "Игорь · +7 (900) 000-22-22", accessibilityNotes: ["Помочь найти доступный вход"], checklist: ["Встретиться у входа", "Проводить к лифту"], etaLabel: "18 минут на транспорте" }),
};

export function getHelpRequestMeta(request: HelpRequest): HelpRequestMeta {
  return helpRequestMeta[request.id] ?? meta(request.id, {
    kind: "trip",
    kindLabel: "Другая помощь",
    distanceKm: 4.5,
    timeSlot: request.dateLabel.toLowerCase().includes("сегодня") ? "today" : request.dateLabel.toLowerCase().includes("завтра") ? "tomorrow" : "later",
    neededSkills: ["Сопровождение"],
    exactLocationLabel: "Точное место откроется после принятия",
    contactLabel: "Контакт участника · +7 (900) 000-00-00",
    accessibilityNotes: ["Уточнить удобный темп общения"],
    checklist: ["Согласовать точку встречи", "Проверить следующий шаг"],
    etaLabel: "20 минут",
  });
}
