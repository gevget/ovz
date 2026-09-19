import { organizations as coreOrganizations } from "../../31_SEED_DATA_CORE";
import { routes } from "@/lib/routes";
import type {
  AiIntentId,
  ArticleBlock,
  BookingSlot,
  DemoQuestion,
  HelpArticle,
  HelpCategoryId,
  HelpOrganization,
  HelpSpecialist,
} from "@/types";

export const helpCategories: { id: HelpCategoryId; title: string; description: string; href: string }[] = [
  { id: "documents", title: "Документы", description: "Понятные шаги для обращений и заявлений", href: routes.user.helpArticles },
  { id: "work", title: "Работа", description: "Условия, поиск и подготовка к разговору", href: routes.user.helpArticles },
  { id: "education", title: "Образование", description: "Курсы с доступным форматом обучения", href: routes.user.helpArticles },
  { id: "transport", title: "Транспорт", description: "Подготовка поездки и выбор маршрута", href: routes.user.helpArticles },
  { id: "accessibility", title: "Доступность", description: "Медицинская навигация, данные места и сообщения об изменениях", href: routes.user.helpArticles },
  { id: "support", title: "Помощь", description: "Юридическая и психологическая помощь, волонтёры и вопросы", href: routes.user.helpArticles },
  { id: "family", title: "Близким", description: "Поддержка без потери самостоятельности", href: routes.user.helpArticles },
  { id: "social", title: "Социальные сервисы", description: "Навигация по организациям и услугам", href: routes.user.helpOrganizations },
];

const extraOrganizations: HelpOrganization[] = [
  { id: "org_new_stage", name: "Культурный центр «Новая сцена»", category: "culture", verified: true, description: "Культурная площадка с доступными форматами событий.", city: "Москва", services: ["События", "Сопровождение", "Тихая зона"], placeIds: ["place_theatre", "place_library"], specialistIds: ["specialist_irina"], articleIds: ["article_event_access"] },
  { id: "org_job_center", name: "Центр инклюзивной занятости «Старт»", category: "employment", verified: true, description: "Demo-организация для поиска работы и карьерной навигации.", city: "Москва", services: ["Карьерная консультация", "Подбор вакансий", "Подготовка резюме"], placeIds: [], specialistIds: ["specialist_dmitry", "specialist_olga"], articleIds: ["article_job_conditions", "article_remote_interview"] },
  { id: "org_psych_support", name: "Центр поддержки «Рядом»", category: "support", verified: true, description: "Психологическая поддержка и бережная навигация к следующим шагам.", city: "Москва", services: ["Психологическая консультация", "Группы поддержки"], placeIds: [], specialistIds: ["specialist_elena", "specialist_maria"], articleIds: ["article_first_question", "article_support_boundaries"] },
  { id: "org_legal_line", name: "Юридическая линия «Право рядом»", category: "legal", verified: true, description: "Информационные консультации по подготовке обращений.", city: "Москва", services: ["Разбор документов", "Подготовка вопроса", "Поиск официального источника"], placeIds: [], specialistIds: ["specialist_anna", "specialist_pavel"], articleIds: ["article_documents", "article_application"] },
  { id: "org_social_navigator", name: "Навигатор социальных сервисов", category: "social", verified: true, description: "Помогает понять, куда обратиться и какие сведения подготовить.", city: "Москва", services: ["Социальная навигация", "Список организаций", "Подготовка обращения"], placeIds: ["place_mfc"], specialistIds: ["specialist_svetlana", "specialist_roman"], articleIds: ["article_social_route", "article_official_sources"] },
  { id: "org_career_lab", name: "Лаборатория рабочего места «Точка»", category: "employment", verified: true, description: "Консультации о формате работы и адаптации рабочего места.", city: "Москва", services: ["Адаптация рабочего места", "Карьерная консультация"], placeIds: ["place_coworking"], specialistIds: ["specialist_dmitry"], articleIds: ["article_job_conditions"] },
  { id: "org_city_transport", name: "Городская транспортная служба demo", category: "transport", verified: true, description: "Demo-профиль для навигации по поездкам и сообщениям о препятствиях.", city: "Москва", services: ["Навигация по поездке", "Доступный вход", "Сообщить о препятствии"], placeIds: ["place_station_demo"], specialistIds: [], articleIds: ["article_trip", "article_transfer"] },
  { id: "org_family_center", name: "Центр поддержки близких", category: "family", verified: true, description: "Материалы о поддержке самостоятельности и совместном планировании.", city: "Москва", services: ["Консультация для близких", "Планирование поездки"], placeIds: [], specialistIds: ["specialist_maria"], articleIds: ["article_family_trip", "article_support_boundaries"] },
];

export const helpOrganizations: HelpOrganization[] = [
  ...coreOrganizations.map((organization) => ({
    ...organization,
    services: organization.id === "org_clinic_12" ? ["Медицинская навигация", "Запись на demo-время"] : ["Курсы", "Карьерная консультация"],
    placeIds: organization.id === "org_clinic_12" ? ["place_clinic_12"] : ["place_school_kontur"],
    specialistIds: organization.id === "org_clinic_12" ? ["specialist_svetlana"] : ["specialist_dmitry"],
    articleIds: organization.id === "org_clinic_12" ? ["article_trip", "article_match"] : ["article_course_choice", "article_remote_interview"],
  })),
  ...extraOrganizations,
];

export const helpSpecialists: HelpSpecialist[] = [
  { id: "specialist_anna", organizationId: "org_legal_line", name: "Анна Белова", avatar: "АБ", category: "lawyer", verified: true, specialties: ["Социальные обращения", "Подготовка документов"], format: "online", nextSlotLabel: "Сегодня, 18:30", availabilityLabel: "Ближайшее demo-время: сегодня, 18:30", description: "Помогает сформулировать вопрос и подготовить список документов. Не заменяет официальную юридическую консультацию." },
  { id: "specialist_pavel", organizationId: "org_legal_line", name: "Павел Мартынов", avatar: "ПМ", category: "lawyer", verified: true, specialties: ["Трудовые вопросы", "Доступная среда"], format: "hybrid", nextSlotLabel: "Завтра, 11:00", availabilityLabel: "Ближайшее demo-время: завтра, 11:00", description: "Помогает разобрать структуру обращения и найти официальный источник." },
  { id: "specialist_elena", organizationId: "org_psych_support", name: "Елена Романова", avatar: "ЕР", category: "psychologist", verified: true, specialties: ["Тревога перед обращением", "Поддержка в изменениях"], format: "online", nextSlotLabel: "Сегодня, 20:00", availabilityLabel: "Ближайшее demo-время: сегодня, 20:00", description: "Бережно помогает определить ближайший посильный шаг и подготовиться к разговору." },
  { id: "specialist_maria", organizationId: "org_family_center", name: "Мария Климова", avatar: "МК", category: "psychologist", verified: true, specialties: ["Поддержка близких", "Совместное планирование"], format: "hybrid", nextSlotLabel: "Пятница, 12:30", availabilityLabel: "Ближайшее demo-время: пятница, 12:30", description: "Работает с семейными сценариями поддержки и уважением самостоятельности." },
  { id: "specialist_dmitry", organizationId: "org_job_center", name: "Дмитрий Орлов", avatar: "ДО", category: "career", verified: true, specialties: ["Поиск работы", "Адаптация рабочего места"], format: "online", nextSlotLabel: "Завтра, 10:30", availabilityLabel: "Ближайшее demo-время: завтра, 10:30", description: "Помогает выбрать формат поиска и подготовить разговор об условиях работы." },
  { id: "specialist_olga", organizationId: "org_job_center", name: "Ольга Нестерова", avatar: "ОН", category: "career", verified: true, specialties: ["Резюме", "Удалённая работа"], format: "online", nextSlotLabel: "Суббота, 15:00", availabilityLabel: "Ближайшее demo-время: суббота, 15:00", description: "Разбирает опыт пользователя и переводит его в понятные пункты резюме." },
  { id: "specialist_svetlana", organizationId: "org_social_navigator", name: "Светлана Ильина", avatar: "СИ", category: "social_navigator", verified: true, specialties: ["Социальные услуги", "Навигация по организациям"], format: "offline", nextSlotLabel: "Сегодня, 17:00", availabilityLabel: "Ближайшее demo-время: сегодня, 17:00", description: "Помогает выбрать организацию и подготовить вопросы к обращению." },
  { id: "specialist_roman", organizationId: "org_social_navigator", name: "Роман Фёдоров", avatar: "РФ", category: "social_navigator", verified: true, specialties: ["МФЦ и заявления", "Подготовка сведений"], format: "hybrid", nextSlotLabel: "Понедельник, 09:30", availabilityLabel: "Ближайшее demo-время: понедельник, 09:30", description: "Объясняет следующий шаг простыми словами и отмечает, что нужно уточнить официально." },
];

const paragraph = (text: string): ArticleBlock => ({ type: "paragraph", text });
const heading = (text: string): ArticleBlock => ({ type: "heading", text });
const checklist = (items: string[]): ArticleBlock => ({ type: "checklist", items });
const info = (title: string, text: string): ArticleBlock => ({ type: "info", title, text });

const makeArticle = (args: {
  id: string;
  title: string;
  category: HelpCategoryId;
  summary: string;
  blocks: ArticleBlock[];
  simpleBlocks?: ArticleBlock[];
  organizationIds?: string[];
  specialistIds?: string[];
  placeIds?: string[];
  articleIds?: string[];
  nextAction?: { label: string; href: string };
}): HelpArticle => ({
  id: args.id,
  title: args.title,
  category: args.category,
  summary: args.summary,
  body: args.blocks.filter((block) => block.type === "paragraph").map((block) => block.text),
  contentMode: { normal: args.blocks, simple: args.simpleBlocks ?? args.blocks },
  relatedOrganizationIds: args.organizationIds,
  relatedSpecialistIds: args.specialistIds,
  relatedPlaceIds: args.placeIds,
  relatedArticleIds: args.articleIds,
  nextAction: args.nextAction,
  sourceNote: "Demo-инструкция. Для актуальных требований проверяйте официальные источники.",
});

export const helpArticles: HelpArticle[] = [
  makeArticle({ id: "article_documents", title: "Как подготовить документы к обращению", category: "documents", summary: "Короткий список того, что стоит собрать до обращения.", blocks: [heading("Соберите основу"), paragraph("Начните с описания ситуации своими словами. Отдельно отметьте, какой результат вам нужен."), checklist(["Запишите вопрос одним предложением", "Соберите имеющиеся документы", "Отметьте дату и организацию обращения"]), info("Важно", "Список документов зависит от конкретной услуги. В demo мы не подменяем официальную консультацию." )], simpleBlocks: [paragraph("Опишите ситуацию. Соберите документы. Запишите желаемый результат."), checklist(["Вопрос", "Документы", "Дата обращения"])], organizationIds: ["org_legal_line"], specialistIds: ["specialist_anna"], articleIds: ["article_application"], nextAction: { label: "Найти специалиста", href: routes.user.helpSpecialists } }),
  makeArticle({ id: "article_application", title: "Что сохранить после подачи заявления", category: "documents", summary: "Проверьте, что у вас остался понятный след обращения.", blocks: [heading("После отправки"), paragraph("Сохраните номер обращения, дату подачи и канал связи организации."), checklist(["Сохраните подтверждение", "Запишите срок ответа, если он указан", "Сохраните контакт для уточнений"]), info("Проверка", "Реальные сроки и порядок зависят от услуги и региона." )], organizationIds: ["org_social_navigator"], specialistIds: ["specialist_roman"], nextAction: { label: "Задать вопрос", href: routes.user.helpQuestion } }),
  makeArticle({ id: "article_job_conditions", title: "Как описать необходимые условия работодателю", category: "work", summary: "Говорите о рабочих задачах и условиях, которые помогают их выполнять.", blocks: [heading("Сформулируйте запрос"), paragraph("Опишите не диагноз, а конкретные условия: удалённый формат, гибкое начало дня, доступный вход или тихое место."), checklist(["Назовите задачу", "Опишите нужное условие", "Предложите удобный способ обсудить детали"]), info("Demo-совет", "Вы сами решаете, какой объём личной информации сообщать." )], organizationIds: ["org_job_center", "org_career_lab"], specialistIds: ["specialist_dmitry"], nextAction: { label: "Найти специалиста", href: routes.user.helpSpecialists } }),
  makeArticle({ id: "article_remote_interview", title: "Как подготовиться к удалённому собеседованию", category: "work", summary: "План подготовки к разговору без лишней спешки.", blocks: [heading("Перед разговором"), paragraph("Проверьте связь, подготовьте короткий рассказ об опыте и заранее сформулируйте вопросы об условиях работы."), checklist(["Откройте ссылку на встречу", "Подготовьте заметки", "Спросите о формате и доступности процесса"])], organizationIds: ["org_job_center"], specialistIds: ["specialist_olga"], nextAction: { label: "Открыть AI-навигатор", href: routes.user.helpAi } }),
  makeArticle({ id: "article_course_choice", title: "Как выбрать курс с подходящим форматом", category: "education", summary: "Сверьте формат, темп и материалы до записи.", blocks: [heading("Проверьте формат"), paragraph("Посмотрите, есть ли субтитры, расшифровка, совместимость со screen reader и гибкий темп."), checklist(["Откройте описание курса", "Проверьте доступность материалов", "Задайте вопрос провайдеру"]), info("Следующий шаг", "В demo можно открыть связанный образовательный профиль." )], organizationIds: ["org_kontur"], nextAction: { label: "Открыть организации", href: routes.user.helpOrganizations } }),
  makeArticle({ id: "article_learning_plan", title: "Как разбить обучение на небольшие шаги", category: "education", summary: "Небольшой план помогает начать без перегрузки.", blocks: [heading("Начните с одного шага"), paragraph("Выберите одну тему и короткое время для первого занятия."), checklist(["Определите цель", "Выберите удобный темп", "Запишите, что получилось"])], organizationIds: ["org_kontur"], articleIds: ["article_course_choice"] }),
  makeArticle({ id: "article_trip", title: "Как подготовиться к поездке в новое место", category: "transport", summary: "Короткий чеклист перед поездкой.", blocks: [heading("Проверьте маршрут"), paragraph("Откройте место на карте и сравните не только время, но и доступность пути."), checklist(["Проверьте вход", "Сохраните контакт организации", "Создайте запрос сопровождения при необходимости"]), info("Связанный сервис", "Карта показывает доступность места и маршрутные ограничения." )], organizationIds: ["org_city_transport", "org_clinic_12"], placeIds: ["place_clinic_12"], articleIds: ["article_transfer"], nextAction: { label: "Открыть клинику на карте", href: routes.user.place("place_clinic_12") } }),
  makeArticle({ id: "article_transfer", title: "Как выбрать маршрут с пересадкой", category: "transport", summary: "Сравните надёжность доступности и длительность.", blocks: [heading("Смотрите на ограничения"), paragraph("Более быстрый маршрут не всегда подходит. Откройте предупреждения о лифтах, ступенях и препятствиях."), checklist(["Сравните варианты", "Проверьте пересадку", "Оставьте запас времени"])], organizationIds: ["org_city_transport"], placeIds: ["place_station_demo"], nextAction: { label: "Открыть карту", href: routes.user.map } }),
  makeArticle({ id: "article_read_accessibility", title: "Как читать карточку доступности", category: "accessibility", summary: "Разберитесь в статусах и причинах Accessibility Match.", blocks: [heading("Смотрите на причины"), paragraph("Процент соответствия — это demo-оценка под ваш профиль, а не медицинское заключение."), checklist(["Откройте все условия", "Проверьте свежесть данных", "Учитывайте частичные и неизвестные значения"]), info("Почему это важно", "Один объект может подходить одному человеку и не подходить другому." )], placeIds: ["place_clinic_12"], articleIds: ["article_match"], nextAction: { label: "Открыть клинику", href: routes.user.place("place_clinic_12") } }),
  makeArticle({ id: "article_match", title: "Что значит «частично доступно»", category: "accessibility", summary: "Частичный статус означает, что часть условий подтверждена, а часть требует уточнения.", blocks: [heading("Не делайте вывод по одному значку"), paragraph("Откройте список features и посмотрите, какие условия важны именно для вас."), checklist(["Проверьте relevant features", "Посмотрите дату подтверждения", "Сообщите об изменении, если данные устарели"])], placeIds: ["place_clinic_12"], nextAction: { label: "Открыть доступность клиники", href: routes.user.placeAccessibility("place_clinic_12") } }),
  makeArticle({ id: "article_report", title: "Как сообщить о проблеме с доступностью", category: "accessibility", summary: "Сообщение помогает обновить карточку места.", blocks: [heading("Опишите факт"), paragraph("Выберите тип изменения и добавьте короткий комментарий без лишних личных данных."), checklist(["Выберите объект", "Укажите проблему", "Проверьте текст перед отправкой"])], placeIds: ["place_station_demo"], nextAction: { label: "Открыть карту", href: routes.user.map } }),
  makeArticle({ id: "article_volunteer", title: "Как создать запрос волонтёру", category: "support", summary: "Пошаговая форма помогает описать задачу и место.", blocks: [heading("Опишите задачу"), paragraph("Укажите, что нужно сделать, где и когда. Контакты добавляйте только в предусмотренном demo-поле."), checklist(["Что нужно", "Где", "Когда", "Комментарий и контакты"]), info("Статус", "После отправки запрос проходит submitted, затем matching по demo-state machine." )], nextAction: { label: "Создать запрос", href: routes.user.volunteerRequest } }),
  makeArticle({ id: "article_first_question", title: "Что написать в вопросе специалисту", category: "support", summary: "Один конкретный вопрос помогает быстрее выбрать следующий шаг.", blocks: [heading("Сделайте вопрос понятным"), paragraph("Опишите ситуацию, желаемый результат и то, что уже пробовали."), checklist(["Ситуация", "Желаемый результат", "Ограничения по формату"])], specialistIds: ["specialist_elena"], nextAction: { label: "Задать вопрос", href: routes.user.helpQuestion } }),
  makeArticle({ id: "article_support_boundaries", title: "Как попросить поддержку без лишних объяснений", category: "support", summary: "Вы можете сообщить только то, что нужно для следующего шага.", blocks: [heading("Сформулируйте границы"), paragraph("Можно начать с задачи и удобного формата, не раскрывая вторичные детали."), checklist(["Назовите действие", "Уточните удобный формат", "Скажите, что пока не хотите обсуждать"])], specialistIds: ["specialist_maria"], nextAction: { label: "Найти специалиста", href: routes.user.helpSpecialists } }),
  makeArticle({ id: "article_family_trip", title: "Как помочь близкому спланировать поездку", category: "family", summary: "Поддержка работает лучше, когда человек остаётся участником решения.", blocks: [heading("Планируйте вместе"), paragraph("Спросите, какая помощь нужна, и предложите варианты вместо того, чтобы принимать решение за человека."), checklist(["Спросите о предпочтениях", "Проверьте маршрут вместе", "Оставьте человеку контроль над выбором"])], organizationIds: ["org_family_center"], specialistIds: ["specialist_maria"], nextAction: { label: "Открыть карту", href: routes.user.map } }),
  makeArticle({ id: "article_support_companion", title: "Как подготовить сопровождение на мероприятии", category: "family", summary: "Согласуйте время, точку встречи и роль сопровождающего.", blocks: [heading("Договоритесь заранее"), paragraph("Уточните, где встретиться, сколько времени займёт путь и что именно входит в помощь."), checklist(["Точка встречи", "Время", "Нужное действие"])], nextAction: { label: "Создать запрос волонтёру", href: routes.user.volunteerRequest } }),
  makeArticle({ id: "article_social_route", title: "Как выбрать организацию для первого обращения", category: "social", summary: "Сравните услугу, формат связи и ближайший следующий шаг.", blocks: [heading("Начните с услуги"), paragraph("В карточке организации смотрите услуги, контакты и связанных специалистов."), checklist(["Определите тему", "Откройте профиль организации", "Сохраните вопрос"])], organizationIds: ["org_social_navigator"], specialistIds: ["specialist_svetlana"], nextAction: { label: "Найти организацию", href: routes.user.helpOrganizations } }),
  makeArticle({ id: "article_official_sources", title: "Как проверять актуальность официальной информации", category: "social", summary: "Demo-материал подсказывает направление, но не заменяет официальный источник.", blocks: [heading("Проверьте источник"), paragraph("Для юридических и медицинских тем уточняйте требования на официальном сайте или у профильного специалиста."), checklist(["Смотрите дату обновления", "Сохраняйте ссылку", "Уточняйте спорные детали"])], organizationIds: ["org_social_navigator"], nextAction: { label: "Задать вопрос", href: routes.user.helpQuestion } }),
  makeArticle({ id: "article_medical_navigation", title: "Как подготовить вопрос для медицинской навигации", category: "support", summary: "Навигация помогает найти сервис, но не ставит диагноз.", blocks: [heading("Сформулируйте задачу"), paragraph("Опишите, какой сервис вы ищете: запись, место, документы или маршрут."), checklist(["Назовите нужный сервис", "Укажите удобный формат", "Проверьте организацию на карте"]), info("Важно", "Demo не выдаёт медицинских диагнозов и назначений." )], organizationIds: ["org_clinic_12"], placeIds: ["place_clinic_12"], nextAction: { label: "Открыть клинику на карте", href: routes.user.place("place_clinic_12") } }),
  makeArticle({ id: "article_legal_limits", title: "Как подготовиться к юридическому вопросу", category: "documents", summary: "Соберите факты и отделите их от предположений.", blocks: [heading("Подготовьте факты"), paragraph("Запишите даты, участников и документы. Решение по правовой ситуации принимает профильный специалист."), checklist(["Факты", "Документы", "Конкретный вопрос"]), info("Ограничение demo", "Мы не выдаём definitive legal advice." )], organizationIds: ["org_legal_line"], specialistIds: ["specialist_pavel"], nextAction: { label: "Задать вопрос", href: routes.user.helpQuestion } }),
  makeArticle({ id: "article_quiet_support", title: "Как попросить спокойный формат общения", category: "support", summary: "Заранее обозначьте удобный темп и канал связи.", blocks: [heading("Согласуйте формат"), paragraph("Можно попросить письменный канал, паузу или короткие сообщения."), checklist(["Канал связи", "Темп разговора", "Нужные паузы"])], specialistIds: ["specialist_elena"], nextAction: { label: "Найти специалиста", href: routes.user.helpSpecialists } }),
  makeArticle({ id: "article_saved_materials", title: "Как собрать свои сохранённые материалы", category: "support", summary: "Сохраняйте статьи, к которым хотите вернуться перед действием.", blocks: [heading("Соберите короткий список"), paragraph("После сохранения материал появится в разделе базы знаний и поможет вернуться к следующему шагу."), checklist(["Сохраните статью", "Откройте последние материалы", "Перейдите к CTA"])], nextAction: { label: "Открыть базу знаний", href: routes.user.helpKnowledge } }),
];

export const bookingSlotsByOrganization: Record<string, BookingSlot[]> = {
  org_clinic_12: [{ id: "slot_clinic_1", label: "Завтра, 10:30", format: "offline" }, { id: "slot_clinic_2", label: "Завтра, 13:00", format: "offline" }],
  org_legal_line: [{ id: "slot_legal_1", label: "Сегодня, 18:30", format: "online" }],
  org_psych_support: [{ id: "slot_psych_1", label: "Сегодня, 20:00", format: "online" }],
  org_job_center: [{ id: "slot_job_1", label: "Завтра, 10:30", format: "online" }],
};

export const aiIntentExamples: { id: AiIntentId; label: string; sample: string }[] = [
  { id: "clinic", label: "Найти доступную клинику", sample: "Найди доступную клинику" },
  { id: "volunteer", label: "Нужен сопровождающий", sample: "Мне нужен сопровождающий завтра" },
  { id: "broken_elevator", label: "Лифт не работает", sample: "Лифт не работает" },
  { id: "job", label: "Найти работу", sample: "Помоги найти работу" },
  { id: "course", label: "Найти курс", sample: "Хочу найти доступный курс" },
  { id: "event", label: "Найти мероприятие", sample: "Куда сходить на мероприятие" },
  { id: "match", label: "Объяснить Accessibility Match", sample: "Что означает Accessibility Match?" },
  { id: "organization", label: "Найти организацию", sample: "Найди организацию, которая поможет" },
];

export const demoQuestions: DemoQuestion[] = [
  { id: "question_001", createdBy: "user_anna", category: "Доступность", topic: "Карта", question: "Как проверить свежесть данных о входе?", visibility: "public", createdAtLabel: "Сегодня", status: "answered" },
  { id: "question_002", createdBy: "user_anna", category: "Работа", topic: "Условия", question: "Как обсудить гибкий формат работы?", visibility: "private", createdAtLabel: "Вчера", status: "submitted" },
  { id: "question_003", createdBy: "user_anna", category: "Помощь", topic: "Волонтёры", question: "Что указать в комментарии к запросу?", visibility: "public", createdAtLabel: "На этой неделе", status: "answered" },
];
