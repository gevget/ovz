# 17 — DEMO DATA EXPANSION V2
## Расширенный seed-набор для полного demo

> Все данные вымышлены.  
> Любые совпадения случайны.

---

# 1. Users

Create at least 12 user profiles.

## user_anna
- Анна Морозова
- 29
- Москва
- verified
- needs: step_free, elevator, accessible_toilet
- interests: кино, дизайн, прогулки

## user_igor
- Игорь Власов
- 34
- Москва
- low_vision
- needs: high_contrast, voice_hints
- interests: музыка, технологии

## user_lena
- Елена Соколова
- 41
- Москва
- hearing_support
- interests: театр, языки

## user_timur
- Тимур Алиев
- 26
- Москва
- mobility_limited
- interests: IT, настольные игры

## user_maria
- Мария Климова
- 32
- Москва
- caregiver profile
- interests: образование, медицина

Add 7 more varied profiles.

---

# 2. Volunteers

At least 6.

Fields:
- name;
- radius;
- availability;
- skills;
- languages;
- completedHelpCount;
- rating demo.

Examples:

## volunteer_max
- Максим Орлов
- radius 5 km
- transport assistance
- document delivery
- event accompaniment

## volunteer_sonya
- Софья Нестерова
- radius 3 km
- sign language basic
- event support

---

# 3. Organizations

At least 10.

Categories:
- clinic
- education
- culture
- employment
- retail
- NGO
- public service
- transport

Required:

## org_clinic_12
`Городская клиника №12`

## org_design_school
`Школа цифровых профессий «Контур»`

## org_new_stage
`Культурный центр «Новая сцена»`

## org_job_center
`Центр инклюзивной занятости «Старт»`

---

# 4. Places

At least 18.

Each must have:
- location;
- category;
- features;
- verification;
- freshness;
- image placeholder;
- organization link.

Suggested:

1. Городская клиника №12
2. Медицинский центр «Линия»
3. Кафе «Север»
4. Библиотека «Сфера»
5. Коворкинг «Точка»
6. Культурный центр «Новая сцена»
7. Центр услуг «Мой район»
8. Учебный центр «Контур»
9. Спорткомплекс «Ритм»
10. Парк «Берег»
11. Аптека «24»
12. Супермаркет «Город»
13. Пространство «Среда»
14. Кинотеатр «План»
15. Музей городской культуры
16. Железнодорожный вокзал demo
17. Транспортный узел demo
18. Центр занятости «Старт»

---

# 5. Accessibility variance

Ensure dataset contains:

- perfect matches;
- partial matches;
- unknown;
- stale;
- temporary issue;
- conflicting community report.

Do not make every place accessible.

---

# 6. Help requests

At least 10.

Statuses mixed.

Examples:

## help_001
Сопровождение до клиники
open

## help_002
Помочь забрать документы
accepted

## help_003
Сопровождение на мероприятие
completed

## help_004
Помощь с навигацией на вокзале
matching

## help_005
Забрать лекарство из аптеки
open

---

# 7. Vacancies

At least 12.

Categories:
- design
- support
- analyst
- content
- accounting
- sales
- QA
- education

Fields:
- title;
- company;
- salaryRange;
- workMode;
- accessibilityConditions;
- description;
- requirements;
- verified.

Examples:
- Junior UX researcher
- Специалист поддержки
- Контент-редактор
- QA trainee
- Координатор образовательных программ
- Аналитик данных junior

---

# 8. Courses

At least 10.

Examples:
- Основы цифрового дизайна
- QA с нуля
- Excel для работы
- Основы Python
- Контент и редактура
- Цифровая грамотность
- Работа с AI-инструментами
- Финансовая грамотность
- Английский для работы
- Подготовка к удалённой работе

Accessibility fields:
- subtitles
- transcript
- screenReaderCompatible
- flexiblePace
- signLanguage
- accessibleOfflineVenue

---

# 9. Events

At least 12.

Examples:
- Кинопоказ с тифлокомментированием
- Лекция о цифровых профессиях
- Настольные игры
- Экскурсия в музей
- Встреча сообщества
- Карьерный день
- Концерт
- Практикум по резюме
- Городская прогулка
- Инклюзивный спортивный день
- Книжный клуб
- Открытая мастерская

---

# 10. Clubs / communities

At least 8.

- Кино без барьеров
- Дизайн и digital
- Работа удалённо
- Родители и близкие
- Городские прогулки
- Настольные игры
- Музыка
- Путешествия

Fields:
- memberCount demo
- moderators
- verification
- city
- tags.

---

# 11. Posts

At least 18.

Mix:
- personal experience;
- accessibility update;
- event;
- job tip;
- useful guide;
- partner update.

Examples:
- `Как я проверяю новое место перед поездкой`
- `В «Новой сцене» заработал второй лифт`
- `5 вопросов работодателю про доступность офиса`
- `Куда сходить на выходных`
- `Как попросить сопровождение без лишних объяснений`

---

# 12. Stories

At least 8.

Short:
- event today;
- route tip;
- place update;
- volunteer call;
- new course.

---

# 13. Knowledge base

At least 20 articles.

Categories:

## Документы
- Как подготовить документы к обращению
- Что сохранить после подачи заявления

## Работа
- Как описать необходимые условия работодателю
- Как подготовиться к удалённому собеседованию

## Транспорт
- Что проверить перед поездкой
- Как выбрать маршрут с пересадкой

## Доступность
- Как читать карточку доступности
- Что значит «частично доступно»

## Помощь
- Как создать запрос волонтёру
- Что написать в комментарии к запросу

## Близким
- Как помочь человеку спланировать поездку
- Как не делать всё вместо человека

---

# 14. Specialists

At least 8 demo specialists.

Categories:
- юрист;
- психолог;
- карьерный консультант;
- навигатор по соцуслугам.

Each:
- name;
- verified;
- organization;
- specialties;
- nextSlot demo;
- format.

Do not create medical diagnoses or treatment advice.

---

# 15. Notifications

At least 20.

Examples:
- Волонтёр откликнулся на ваш запрос
- Информация о лифте обновлена
- Ваш отклик на вакансию отправлен
- Через 2 часа начинается мероприятие
- Организация ответила на вопрос
- Появился новый курс по вашему интересу
- Друг принял заявку
- Ваш отчёт о доступности проверен

---

# 16. Partner analytics dataset

For 3 partner organizations.

Metrics:
- profile views
- route starts
- favorites
- messages
- applications
- data confirmations

Always label:
`Demo data`.

---

# 17. Admin moderation queue

At least:
- 8 accessibility reports;
- 5 partner verifications;
- 6 post reports;
- 4 duplicate places;
- 7 help requests requiring review.

---

# 18. AI Navigator scripted conversations

Create at least 8.

1. Find clinic
2. Volunteer request
3. Broken elevator
4. Find job
5. Find course
6. Event nearby
7. Explain Accessibility Match
8. Find organization

---

# 19. Data relationships

Required relations:

- vacancy -> organization
- course -> organization
- event -> place + organization
- article -> organization / specialist
- post -> user / organization
- helpRequest -> user + volunteer
- report -> place + user
- partner account -> organization
- organization -> place(s)

---

# 20. Demo date policy

Avoid hardcoded current real dates where they may go stale.

Use helpers:
- `Сегодня, 18:30`
- `Завтра, 11:00`
- `12 дней назад`
- `На этой неделе`

Where stable ISO dates are needed internally:
generate relative to demo initialization.

---

# 21. Seed quantity target

Minimum final dataset:

- users: 12
- volunteers: 6
- organizations: 10
- places: 18
- help requests: 10
- vacancies: 12
- courses: 10
- events: 12
- communities: 8
- posts: 18
- stories: 8
- articles: 20
- specialists: 8
- notifications: 20

This volume is enough to make lists feel real without turning demo into a content project.
