// 23 — UI COPY DICTIONARY
// Centralized labels to avoid inconsistent wording.

export const uiCopy = {
  nav: {
    home: "Главная",
    map: "Карта",
    help: "Помощь",
    opportunities: "Возможности",
    profile: "Профиль",
  },

  actions: {
    openDemo: "Открыть демо",
    buildRoute: "Построить маршрут",
    findRoutes: "Найти маршруты",
    requestHelp: "Запросить помощь",
    askQuestion: "Задать вопрос",
    book: "Записаться",
    join: "Присоединиться",
    enroll: "Записаться на курс",
    apply: "Отправить резюме",
    applied: "Отклик отправлен",
    favorite: "В избранное",
    removeFavorite: "Убрать из избранного",
    share: "Поделиться",
    follow: "Подписаться",
    unfollow: "Отписаться",
    reportChange: "Сообщить об изменении",
    confirmData: "Подтвердить данные",
    acceptHelp: "Откликнуться помочь",
    completeHelp: "Завершить помощь",
    reset: "Сбросить",
    applyFilters: "Применить",
    save: "Сохранить",
    cancel: "Отмена",
    close: "Закрыть",
    back: "Назад",
  },

  accessibility: {
    goodMatch: "Хорошо подходит",
    partialMatch: "Подходит частично",
    limitedMatch: "Есть ограничения",
    criticalMismatch: "Критичное ограничение",
    confirmedRecently: "Подтверждено недавно",
    requiresCheck: "Данные требуют проверки",
    newReport: "Есть новое сообщение",
    details: "Показать все условия",
    stepFree: "Вход без ступеней",
    ramp: "Пандус",
    elevator: "Лифт",
    accessibleToilet: "Доступный туалет",
    wideDoors: "Широкие проходы",
    accessibleParking: "Доступная парковка",
    tactileNavigation: "Тактильная навигация",
    hearingLoop: "Индукционная петля",
    quietZone: "Тихая зона",
    assistanceAvailable: "Можно запросить помощь",
    statusAvailable: "Доступно",
    statusPartial: "Частично",
    statusUnknown: "Нет данных",
    statusUnavailable: "Недоступно",
  },

  map: {
    searchPlaceholder: "Найти место или организацию",
    filters: "Фильтры",
    listAlternative: "Показать списком",
    currentLocation: "Вы здесь",
    homeRoute: "Маршрут домой",
    placesFound: "мест найдено",
    locationUnavailable: "Не удалось определить местоположение",
    noResults: "Ничего не найдено с текущими фильтрами",
    temporaryIssue: "Есть временное ограничение",
    staleData: "Данные требуют проверки",
  },

  states: {
    verified: "Проверено",
    pending: "На проверке",
    stale: "Устаревшие данные",
    partial: "Частичная доступность",
    warning: "Есть ограничение",
    unknown: "Нет данных",
    demo: "Demo-данные",
  },

  helpStatuses: {
    draft: "Черновик",
    submitted: "Запрос создан",
    matching: "Ищем волонтёра",
    accepted: "Волонтёр найден",
    volunteer_on_way: "Волонтёр в пути",
    active: "Помощь идёт",
    completed: "Завершено",
    cancelled: "Отменено",
  },

  empty: {
    favorites: "Пока ничего не сохранено",
    search: "По вашему запросу ничего не найдено",
    volunteerRequests: "Сейчас рядом нет подходящих запросов",
    notifications: "Новых уведомлений нет",
    posts: "Публикаций пока нет",
  },

  errors: {
    generic: "Что-то пошло не так",
    retry: "Попробовать ещё раз",
    location: "Не удалось определить местоположение",
    route: "Полностью подходящий маршрут не найден",
    entityNotFound: "Объект не найден в demo-данных",
  },

  demo: {
    label: "Demo",
    dataset: "Demo-данные",
    emergencyDisclaimer:
      "Это демонстрационный интерфейс. Он не вызывает реальные экстренные службы.",
    aiDisclaimer:
      "Это демонстрационный AI-сценарий. Для реальных решений проверяйте актуальные официальные источники.",
  },

  role: {
    user: "Пользователь",
    volunteer: "Волонтёр",
    partner: "Партнёр",
    admin: "Администратор",
  },
} as const;
