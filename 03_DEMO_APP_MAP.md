# 03 — DEMO APP MAP
## Полная карта интерактивного demo

> Все перечисленные ниже экраны должны существовать как кликабельные состояния или отдельные маршруты.

# 1. Demo shell

## `/demo`

Первый экран: **Выберите роль**

Cards:
1. Пользователь
2. Волонтёр
3. Партнёр
4. Администратор

Также:
- `Продолжить как гость`
- `Вернуться на сайт`

После выбора роли:
- сохранить role в client state;
- открыть role-specific home;
- дать возможность сменить роль в верхнем demo-toolbar.

# 2. Desktop presentation mode

На desktop:
- белый / слегка тёплый фон;
- в центре mockup смартфона;
- ширина телефона ~390–430 logical px;
- высота ~820–900 logical px;
- realistic bezel;
- Dynamic Island / top sensor area допустим;
- мягкая premium shadow;
- phone не растягивать на весь viewport.

Справа или сверху небольшой toolbar:
- Role
- Restart demo
- Accessibility mode
- Exit demo

На mobile:
- убрать декоративную рамку;
- demo занимает весь viewport.

# 3. Main navigation — USER

Bottom navigation:
1. Главная
2. Карта
3. Помощь
4. Возможности
5. Профиль

На Главной доступны community/feed сценарии.

# 4. USER — Home / Feed

## H01 — Главная

Blocks:
- greeting;
- search;
- quick actions;
- route home;
- request help;
- events nearby;
- recommended place;
- feed preview.

Quick actions:
- Найти доступное место
- Мне нужна помощь
- Найти работу
- Мероприятия
- Задать вопрос

## H02 — Лента
Tabs:
- Моё сообщество
- Популярное
- Подписки

Plus:
- stories;
- content presentation mode.

## H03 — Story viewer
## H04 — Post detail

Fields:
- author;
- verification;
- follow;
- title;
- description;
- images;
- date;
- reactions;
- comments preview;
- share.

## H05 — Author profile
## H06 — Community list
## H07 — Community detail
## H08 — Events feed
## H09 — Event detail

Fields:
- photos;
- title;
- date;
- place;
- organizer;
- description;
- accessibility info;
- contact;
- route;
- join/register.

## H10 — Club list
## H11 — Club detail
## H12 — Friends
## H13 — User profile
## H14 — Dating discovery

Для demo без swipe-clone Tinder. Использовать спокойный card/list UX.

# 5. USER — Map

## M01 — Map home
Elements:
- search field;
- current area;
- category chips;
- filter;
- user marker;
- place markers;
- route home shortcut;
- help button.

## M02 — Search
Search suggestions and recent.

## M03 — Categories
Examples:
- медицина;
- аптеки;
- кафе;
- госуслуги;
- образование;
- спорт;
- культура;
- магазины;
- транспорт;
- туалеты.

## M04 — Accessibility filter
Functional filters:
- без ступеней;
- пандус;
- лифт;
- доступный туалет;
- широкие проходы;
- парковка;
- тактильная навигация;
- индукционная петля;
- сопровождающий;
- тихая зона.

Button: `Применить`

## M05 — Search results
Map + cards.

## M06 — Place preview card

## M07 — Place detail
Fields:
- gallery;
- name;
- category;
- rating;
- Accessibility Match;
- verified status;
- last confirmed;
- schedule;
- address;
- contacts;
- accessibility features;
- description;
- distance;
- reviews.

Actions:
- Маршрут
- Такси
- В избранное
- Поделиться
- Сообщить об изменении

## M08 — Accessibility details
Full checklist.

## M09 — Build route
Select:
- current position;
- from;
- to;
- transport mode;
- accessibility requirements.

## M10 — Route options
Show at least 2:
- Быстрее
- Надёжнее по доступности

## M11 — Journey Mode
Step-by-step navigation.

## M12 — Entrance detail
Show:
- entrance photo;
- description;
- step-free note.

## M13 — Report issue
Types:
- лифт не работает;
- вход перекрыт;
- пандус повреждён;
- информация неверна;
- другое.

## M14 — Report success
## M15 — Taxi request demo
## M16 — Help at location
## M17 — Emergency actions

Demo disclaimer: not a real emergency service.

# 6. USER — Help

## A01 — Help home
Search + categories.

Cards:
- AI Навигатор
- Юридическая помощь
- Психологическая помощь
- Медицинская навигация
- Волонтёры
- База знаний
- Организации
- Специалисты

## A02 — AI Navigator
Chat UI.

Demo examples:
- «Как оформить льготу?»
- «Мне нужен сопровождающий завтра»
- «Найди доступную клинику рядом»
- «Куда сообщить о сломанном лифте?»

AI answers are deterministic mocked flows.

## A03 — Knowledge categories
## A04 — Article list
## A05 — Article detail

Fields:
- title;
- content mode;
- text;
- media;
- related;
- contacts;
- organizations;
- save.

## A06 — Popular topics
## A07 — Specialists list
## A08 — Specialist profile
## A09 — Organizations list
## A10 — Organization detail
## A11 — Appointment / booking
## A12 — Ask question
## A13 — My questions

## A14 — Volunteer request form
Steps:
1. Что нужно?
2. Где?
3. Когда?
4. Комментарий
5. Контакты
6. Confirm

## A15 — Request status
## A16 — Emergency help screen

# 7. USER — Opportunities

## O01 — Opportunities home
Sections:
- Work
- Education
- Courses
- Events
- Clubs
- Partner offers

## O02 — Favorites
## O03 — Vacancy list
## O04 — Vacancy filters

## O05 — Vacancy detail
Fields:
- title;
- salary;
- company;
- format;
- accessibility / conditions;
- description;
- requirements;
- save;
- ask;
- send resume.

## O06 — Apply vacancy
## O07 — Resume
## O08 — Edit resume
## O09 — Education directions
## O10 — Education organization list
## O11 — Education organization detail
## O12 — Course list

## O13 — Course detail
Fields:
- title;
- provider;
- format;
- accessibility;
- description;
- duration;
- benefits;
- enroll.

## O14 — Course enrollment
## O15 — Partner offers
## O16 — Offer detail
## O17 — Events
Reuse H08/H09.
## O18 — Clubs
Reuse H10/H11.

# 8. USER — Profile

## P01 — My profile
Fields:
- avatar;
- name;
- verification;
- status;
- interests;
- accessibility profile shortcut;
- friends;
- resume;
- requests;
- posts.

## P02 — Accessibility profile
## P03 — Edit functional needs
## P04 — Friends
## P05 — Contact permissions
## P06 — Resume

## P07 — Disability paperwork navigator
Demo only:
- checklist;
- stages;
- useful links placeholders.

Do not pretend to submit real government forms.

## P08 — My requests
## P09 — My posts
## P10 — Become an author
## P11 — Notifications
## P12 — Notification settings

## P13 — Appearance
Controls:
- theme;
- text scale;
- contrast;
- simple mode;
- reduced motion;
- voice hints.

## P14 — Security
## P15 — App settings
## P16 — About
## P17 — Help
## P18 — Transactions
Demo empty/history state.

# 9. VOLUNTEER role

Reuse user screens unless replaced.

## V01 — Volunteer dashboard
Blocks:
- requests nearby;
- scheduled help;
- completed;
- impact;
- availability toggle.

## V02 — Requests map/list
## V03 — Help request detail
Fields:
- task;
- date;
- location;
- accessibility context;
- requester privacy;
- estimated time.

CTA: `Откликнуться помочь`

## V04 — Accept confirmation
## V05 — Active help
## V06 — Complete request
## V07 — Volunteer profile
## V08 — Become volunteer onboarding
## V09 — Volunteer history

Volunteer still can use:
- Map
- Community
- Help
- Profile

# 10. PARTNER role

## B01 — Partner dashboard
Metrics:
- profile completeness;
- incoming requests;
- saved/favorited;
- listing views;
- accessibility verification status.

## B02 — Organization profile
## B03 — Edit organization
## B04 — Accessibility checklist
## B05 — Confirm accessibility
## B06 — Incoming requests
## B07 — Request detail
## B08 — Offers
## B09 — Create/edit offer
## B10 — Vacancies
## B11 — Create/edit vacancy
## B12 — Courses
## B13 — Create/edit course
## B14 — Events
## B15 — Create/edit event
## B16 — Organization notifications
## B17 — Partner analytics

Analytics are mocked demo data.

# 11. ADMIN role

For admin role change demo frame from phone to compact web-app window.

## AD01 — Overview
## AD02 — Users
## AD03 — Partners
## AD04 — Places
## AD05 — Accessibility reports
## AD06 — Help requests
## AD07 — Content moderation
## AD08 — Verification queue
## AD09 — Analytics

Keep simple and visual.

# 12. Global components

- TopBar
- BottomNavigation
- SearchBar
- Chip
- FilterSheet
- Modal
- BottomSheet
- Toast
- EmptyState
- Skeleton
- Avatar
- VerifiedBadge
- AccessibilityMatch
- AccessibilityFeature
- PlaceCard
- EventCard
- VacancyCard
- CourseCard
- UserCard
- OrganizationCard
- HelpRequestCard
- PostCard
- NotificationItem
- DemoToolbar
- PhoneFrame

# 13. Required cross-links

- Place -> Route
- Place -> Report issue
- Event -> Place -> Route
- Organization -> Map place
- Article -> Specialist/Organization
- Vacancy -> Company
- Vacancy -> Resume
- Course -> Provider
- User -> Friends
- Post -> Author
- Help request -> Map
- Partner -> Organization -> Accessibility verification

No dead-end screens except final success states.
