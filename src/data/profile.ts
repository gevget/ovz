import { routes } from "@/lib/routes";
import type { ProfileNotification } from "@/types/profile";

export const profileNotifications: ProfileNotification[] = [
  { id: "notif_001", userId: "user_anna", category: "help", title: "Волонтёр откликнулся на ваш запрос", body: "Максим готов помочь с маршрутом до клиники.", read: false, dateGroup: "today", timeLabel: "10:20", deepLink: routes.user.helpRequest("help_001") },
  { id: "notif_002", userId: "user_anna", category: "map", title: "Информация о клинике обновлена", body: "Партнёр подтвердил данные о входе и лифте.", read: true, dateGroup: "today", timeLabel: "09:40", deepLink: routes.user.place("place_clinic_12") },
  { id: "notif_003", userId: "user_anna", category: "work", title: "Работодатель посмотрел резюме", body: "Откройте вакансию, чтобы проверить условия.", read: false, dateGroup: "today", timeLabel: "08:15", deepLink: routes.user.vacancy("vacancy_access") },
  { id: "notif_004", userId: "user_anna", category: "events", title: "До события осталось 2 часа", body: "Кинопоказ с тифлокомментированием начинается сегодня.", read: false, dateGroup: "today", timeLabel: "07:50", deepLink: routes.user.event("event_cinema") },
  { id: "notif_005", userId: "user_anna", category: "learning", title: "Появился новый курс по вашему интересу", body: "Онлайн-курс по цифровому дизайну доступен в Opportunities.", read: true, dateGroup: "today", timeLabel: "07:10", deepLink: routes.user.course("course_design") },
  { id: "notif_006", userId: "user_anna", category: "community", title: "В сообществе новое обсуждение", body: "Участники обсуждают доступные кинопоказы.", read: false, dateGroup: "today", timeLabel: "06:45", deepLink: routes.user.post("post_cinema_invite") },
  { id: "notif_007", userId: "user_anna", category: "help", title: "Организация ответила на вопрос", body: "Ответ добавлен в вашу историю вопросов.", read: true, dateGroup: "today", timeLabel: "06:20", deepLink: routes.user.helpQuestions },
  { id: "notif_008", userId: "user_anna", category: "community", title: "Елена приняла заявку в друзья", body: "Теперь можно отправить запрос контактов по правилам приватности.", read: false, dateGroup: "yesterday", timeLabel: "18:30", deepLink: routes.user.userProfile("user_lena") },
  { id: "notif_009", userId: "user_anna", category: "map", title: "На маршруте появилось новое сообщение", body: "Проверьте статус лифта в транспортном узле.", read: true, dateGroup: "yesterday", timeLabel: "16:05", deepLink: routes.user.place("place_station_demo") },
  { id: "notif_010", userId: "user_anna", category: "work", title: "Ваш отклик на вакансию отправлен", body: "Состояние отклика сохранено в профиле.", read: true, dateGroup: "yesterday", timeLabel: "14:40", deepLink: routes.user.vacancy("vacancy_ux") },
  { id: "notif_011", userId: "user_anna", category: "learning", title: "Напоминание о курсе", body: "До начала следующего занятия осталось 3 дня.", read: false, dateGroup: "yesterday", timeLabel: "12:15", deepLink: routes.user.course("course_accessibility") },
  { id: "notif_012", userId: "user_anna", category: "events", title: "Организатор уточнил доступность события", body: "В карточке добавлена информация о тихой зоне.", read: false, dateGroup: "yesterday", timeLabel: "11:00", deepLink: routes.user.event("event_music") },
  { id: "notif_013", userId: "user_anna", category: "community", title: "Новая публикация в Дизайн и digital", body: "Тимур поделился чек-листом доступного интерфейса.", read: true, dateGroup: "yesterday", timeLabel: "09:30", deepLink: routes.user.communityDetail("community_design") },
  { id: "notif_014", userId: "user_anna", category: "map", title: "Место добавлено в избранное", body: "Сохранённая карточка доступна в профиле.", read: true, dateGroup: "yesterday", timeLabel: "08:20", deepLink: routes.user.favorites },
  { id: "notif_015", userId: "user_anna", category: "system", title: "Профиль доступности готов к обновлению", body: "Проверьте, что ваши текущие потребности отражены верно.", read: false, dateGroup: "earlier", timeLabel: "18 сентября", deepLink: routes.user.profileAccessibility },
  { id: "notif_016", userId: "user_anna", category: "help", title: "Запрос помощи перешёл в статус «Ищем волонтёра»", body: "Следующий статус появится после отклика.", read: true, dateGroup: "earlier", timeLabel: "17 сентября", deepLink: routes.user.profileRequests },
  { id: "notif_017", userId: "user_anna", category: "work", title: "Обновились условия удалённой работы", body: "Посмотрите сохранённые вакансии и фильтры.", read: false, dateGroup: "earlier", timeLabel: "16 сентября", deepLink: routes.user.vacancies },
  { id: "notif_018", userId: "user_anna", category: "learning", title: "Курс добавлен в избранное", body: "Вы можете открыть его из профиля или Opportunities.", read: true, dateGroup: "earlier", timeLabel: "15 сентября", deepLink: routes.user.course("course_design") },
  { id: "notif_019", userId: "user_anna", category: "events", title: "Событие добавлено в ваш план", body: "Открыть карточку и проверить маршрут можно в один шаг.", read: true, dateGroup: "earlier", timeLabel: "14 сентября", deepLink: routes.user.event("event_walk") },
  { id: "notif_020", userId: "user_anna", category: "system", title: "Демо-данные синхронизированы", body: "Локальное состояние приложения обновлено.", read: true, dateGroup: "earlier", timeLabel: "13 сентября", deepLink: routes.user.profileAbout },
];

export const initialNotificationPreferences = {
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
} as const;

export const initialContactPermissions = {
  whoCanRequest: "request",
  showTelegramAfterConfirmation: true,
  showEmailAfterConfirmation: false,
} as const;

export const paperworkStages = [
  { id: "collect", title: "Собрать вопросы", detail: "Сохраните темы и подготовьте список того, что нужно уточнить." },
  { id: "materials", title: "Подготовить демо-материалы", detail: "Отметьте справочные материалы и заметки, которые уже есть." },
  { id: "specialist", title: "Найти консультацию", detail: "Откройте доступные статьи или профиль организации." },
  { id: "check", title: "Проверить актуальность", detail: "Сверьте порядок и требования по официальному источнику." },
];
