# CODEX MASTER PROMPT — НАВИГАТОР ДОСТУПНОСТИ 2026

Ты работаешь внутри репозитория проекта **«Навигатор доступности»**.

В папке проекта уже лежит комплект продуктовой, UX, UI, data и engineering-документации.  
Твоя задача — не перепроектировать продукт заново, а **последовательно реализовать его по документации**, сохраняя рабочее состояние проекта после каждого этапа.

---

## 1. Сначала изучи документацию

Перед изменением кода прочитай минимум следующие файлы в указанном порядке:

1. `README.md`
2. `00_MASTER_PRODUCT_2026.md`
3. `33_MASTER_INDEX_AND_CONFLICT_RULES.md`
4. `03_DEMO_APP_MAP.md`
5. `04_DEMO_APP_UX_AND_INTERACTIONS.md`
6. `05_DESIGN_SYSTEM_AND_ACCESSIBILITY.md`
7. `07_CODEX_EXECUTION_PLAN.md`
8. `11_APP_INFORMATION_ARCHITECTURE_AND_NAV_RULES.md`
9. `12_SCREEN_BEHAVIOR_AND_STATE_MATRIX.md`
10. `13_ROLE_PERMISSIONS_AND_CROSS_ROLE_LOGIC.md`
11. `14_MAP_AND_ACCESSIBILITY_ENGINE_SPEC.md`
12. `18_ROUTE_MANIFEST.md`
13. `19_SCREEN_REGISTRY.md`
14. `20_TYPES_AND_DATA_MODELS.ts`
15. `21_COMPONENT_CONTRACTS.md`
16. `22_STATE_MACHINES.md`
17. `23_UI_COPY_DICTIONARY.ts`
18. `24_RESPONSIVE_BEHAVIOR_MATRIX.md`
19. `26_CODE_ARCHITECTURE_RULES.md`
20. `27_QA_AND_ACCEPTANCE_TESTS.md`
21. `31_SEED_DATA_CORE.ts`
22. `34_DEMO_STORE_SCHEMA.ts`
23. `35_ACCESSIBILITY_ENGINE.ts`
24. `36_ROUTE_CONSTANTS.ts`

После этого просмотри остальные документы `01–32`, потому что они содержат landing content, investor/partner copy, demo scenarios, expanded data, CMS/API contracts и handoff rules.

---

## 2. Не начинай сразу строить весь продукт

Сначала проведи audit репозитория.

Создай или обнови:

`IMPLEMENTATION_STATUS.md`

В нём зафиксируй:

- текущий framework и версии;
- текущую структуру repo;
- что уже реализовано;
- какие документы найдены;
- выявленные конфликты;
- что можно переиспользовать;
- риски;
- план реализации Phase 0–3.

Если документация и текущий код противоречат друг другу — следуй `33_MASTER_INDEX_AND_CONFLICT_RULES.md`.

---

## 3. Техническая цель

Нужно получить один web-проект из двух частей:

### `/`
Публичный лендинг проекта.

### `/demo`
Интерактивное demo мобильного продукта.

На desktop demo отображается внутри premium generic smartphone frame на светлом фоне.

На mobile декоративная рамка телефона исчезает и приложение занимает viewport.

Admin-demo использует desktop web-shell.

---

## 4. Технологический baseline

Если repo уже использует совместимый современный стек — не переписывай его без причины.

Предпочтительно:

- Next.js App Router
- TypeScript strict
- Tailwind
- shadcn/ui primitives
- lucide-react
- Zustand для shared demo state
- Framer Motion только для осмысленных transitions

Не подключай backend, auth, платные карты, внешнюю AI API, real emergency API или CRM на первом этапе.

Demo должен надёжно работать на локальных данных.

---

## 5. Главный продуктовый принцип

Это НЕ просто карта доступности.

Продукт объединяет:

- доступные места;
- персональные маршруты;
- помощь;
- базу знаний;
- специалистов;
- волонтёров;
- работу;
- обучение;
- события;
- сообщества;
- партнёрскую экосистему.

Главная логика:

**не каталог → а жизненный сценарий.**

---

## 6. Основная IA пользователя

Постоянная нижняя навигация:

1. Главная
2. Карта
3. Помощь
4. Возможности
5. Профиль

Не добавляй шестой основной таб без отдельной команды.

---

## 7. Роли

Реализовать:

- Пользователь
- Волонтёр
- Партнёр
- Администратор

Все роли работают на shared state.

Пример:

Пользователь создаёт запрос помощи  
→ переключаем роль на Волонтёра  
→ волонтёр видит тот же request  
→ принимает  
→ пользователь видит обновлённый status.

То же самое с данными места:

Партнёр меняет доступность лифта  
→ пользователь сразу видит обновлённую карточку  
→ Accessibility Match пересчитывается.

---

## 8. Главный flagship flow

Первым полноценным flow реализуй:

**Карта → место → Accessibility Match → детали доступности → построение маршрута → варианты маршрута → Journey Mode → вход в здание.**

Он должен выглядеть лучше остальных частей ранней версии.

Используй scoring logic из `35_ACCESSIBILITY_ENGINE.ts`.

Не вычисляй Match прямо внутри React JSX.

---

## 9. Порядок реализации

Работай строго этапами.

### Stage A
Foundation:
- app structure
- tokens
- typography
- base styles
- primitives
- routing constants

### Stage B
Product components:
- PlaceCard
- AccessibilityMatch
- AccessibilityFeatureList
- RouteOptionCard
- HelpRequestCard
- VacancyCard
- CourseCard
- EventCard
- PostCard
- VerifiedBadge

### Stage C
Demo data + store:
- typed entities
- seed data
- Zustand/shared state
- localStorage persistence
- reset demo

### Stage D
Demo shell:
- `/demo`
- role selection
- PhoneFrame
- DemoToolbar
- guided scenarios
- role switching

### Stage E
Flagship map flow

### Stage F
Help + AI scripted demo

### Stage G
Opportunities

### Stage H
Community / feed / events

### Stage I
Profile

### Stage J
Volunteer cross-role flow

### Stage K
Partner cross-role flow

### Stage L
Admin

### Stage M
Landing page

### Stage N
Accessibility, responsive, QA, polish

Не переходи к следующему крупному Stage, пока текущий не собирается без ошибок.

---

## 10. Данные

Не хардкодь entity data внутри page components.

Используй canonical IDs.

Одна сущность должна переиспользоваться во всех местах.

Например:

`place_clinic_12`

должна быть той же клиникой:
- на карте;
- в поиске;
- в маршруте;
- у партнёра;
- в связанных статьях;
- в запросах помощи.

Расширяй данные по `17_DEMO_DATA_EXPANSION_V2.md`.

---

## 11. UX-правила

Каждый primary CTA должен работать.

Запрещены:
- `href="#"`;
- визуально активные кнопки без действия;
- тупиковые экраны без причины;
- lorem ipsum;
- дубли сущностей;
- случайные тексты.

State-changing action обязательно даёт feedback:
- toast;
- changed status;
- success state;
- changed CTA.

---

## 12. Accessibility

Сам продукт должен демонстрировать хорошую доступность.

Обязательно:

- semantic HTML;
- keyboard navigation;
- visible focus;
- dialog focus management;
- contrast AA;
- min target 44x44;
- reduced motion;
- text scale up to 150%;
- high contrast mode;
- screen-reader-friendly labels;
- list alternative to map.

Не используй цвет как единственный носитель статуса.

---

## 13. Лендинг

Лендинг строить ПОСЛЕ появления продуктовых компонентов.

Используй:
- `01_LANDING_CONTENT.md`
- `02_LANDING_BUILD_SPEC.md`
- `08_LANDING_STORYBOARD_AND_SECTION_LOGIC.md`
- `09_LANDING_VISUAL_DIRECTION_AND_COMPONENTS.md`
- `10_LANDING_INVESTOR_PARTNER_COPY_AND_FORMS.md`

Не рисуй интерфейсы лендинга отдельными фейковыми картинками.

Переиспользуй реальные React-компоненты demo.

---

## 14. Визуальный стиль

Интерфейс должен быть:

- светлый;
- чистый;
- современный;
- технологичный;
- спокойный;
- human;
- premium без luxury;
- не похожий на государственный портал;
- не похожий на медицинский сайт.

Не используй pity-oriented imagery.

Не превращай accessibility в визуальную тему из одних wheelchair-icons.

---

## 15. Не делать

Без отдельной команды НЕ:

- подключать production backend;
- строить real auth;
- отправлять формы наружу;
- подключать реальные emergency services;
- делать юридические или медицинские обещания;
- использовать старые грантовые суммы как актуальную инвестиционную потребность;
- добавлять реальные статистические claims без источника;
- менять продуктовую IA;
- переименовывать ключевые сущности;
- добавлять сложность только ради «красоты архитектуры».

---

## 16. Проверка после каждого этапа

После каждого Stage:

1. запусти typecheck;
2. запусти lint;
3. запусти build;
4. исправь ошибки;
5. вручную проверь ключевой route;
6. обнови `IMPLEMENTATION_STATUS.md`.

Не оставляй проект в промежуточном нерабочем состоянии.

---

## 17. QA перед завершением

Используй `27_QA_AND_ACCEPTANCE_TESTS.md`.

Особенно проверить:

- user → volunteer shared request;
- partner → user accessibility update;
- Accessibility Match recalculation;
- favorites consistency;
- deep links;
- unknown entity handling;
- 390px layout;
- 150% text;
- keyboard;
- focus;
- reduced motion;
- no dead CTA.

---

## 18. Что сделать прямо сейчас

В ЭТОМ ПЕРВОМ ПРОХОДЕ:

1. Изучи документацию.
2. Проведи audit repo.
3. Создай `IMPLEMENTATION_STATUS.md`.
4. Составь конкретный implementation plan.
5. Реализуй только:
   - Foundation;
   - Design tokens;
   - Base UI primitives;
   - Type/data foundation;
   - Demo shared store;
   - Route constants;
   - `/demo` Role Select;
   - PhoneFrame;
   - DemoToolbar;
   - базовый shell пользовательского приложения;
   - Bottom Navigation.
6. Запусти build/typecheck/lint.
7. Исправь найденные ошибки.
8. Обнови `IMPLEMENTATION_STATUS.md`.
9. В финальном ответе дай:
   - что реализовано;
   - какие файлы изменены;
   - что осталось;
   - найденные противоречия;
   - следующий рекомендуемый Stage.

НЕ начинай пока полноценно собирать Map, Help, Opportunities, Partner и Landing.

Цель первого прохода — создать **очень прочный фундамент**, после которого дальнейшие экраны собираются быстро и без архитектурного хаоса.
