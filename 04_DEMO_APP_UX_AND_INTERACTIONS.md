# 04 — DEMO APP UX & INTERACTIONS

# 1. Goal

Demo must feel like a coherent real product, not a Figma slideshow.

Every visible primary CTA should do something.

Allowed demo behaviors:
- navigate;
- open sheet/modal;
- update local state;
- toggle favorite;
- follow;
- submit mocked form;
- show success;
- create mocked item;
- switch role.

Not allowed:
- buttons that visually look active but do nothing;
- `href="#"`;
- random lorem ipsum;
- dead-end cards.

# 2. State

Use client-side state.

Recommended:
- Zustand or lightweight React context;
- persist in `localStorage`.

State includes:
- current role;
- selected accessibility needs;
- favorites;
- followed users;
- joined events;
- accepted volunteer requests;
- profile settings;
- demo notifications;
- current route;
- viewed onboarding.

Add `Reset demo` button.

# 3. Navigation

Use proper URL routes where practical.

Example:
- `/demo/user/home`
- `/demo/user/map`
- `/demo/user/map/place/central-clinic`
- `/demo/user/help`
- `/demo/user/opportunities/vacancies`
- `/demo/user/profile`

Role switch should navigate safely to role home.

# 4. First-run scenario

On role = user first visit:

Screen: **Что важно учитывать?**

Selectable cards:
- Передвигаюсь на коляске
- Сложно ходить по лестницам
- Нужен лифт
- Нарушение зрения
- Использую screen reader
- Нарушение слуха
- Нужен простой интерфейс
- Нужен сопровождающий

CTA: `Настроить приложение`

This seeds Accessibility Match.

Provide: `Пропустить`

# 5. Main demo scenarios

## FLOW A — Find accessible place
Home → Map → Search → Place → Accessibility details → Build route → Route options → Journey mode.

## FLOW B — Report accessibility problem
Place → Report issue → Select type → Comment → Submit → Success → place shows local `Есть новое сообщение`.

## FLOW C — Request volunteer
Help → Volunteers → Request form → Confirm → Request status.

Switch role to Volunteer:
Volunteer dashboard → same request → Accept → Active help → Complete.

This cross-role continuity is required.

## FLOW D — Find job
Opportunities → Vacancy list → Vacancy → Send resume → Confirm → applied state.

## FLOW E — Join event
Home / Community → Event → check accessibility → route → join.

## FLOW F — AI Navigator
Help → AI → choose sample question → mocked step-by-step answer → CTA to related screen.

Example:
`Мне нужен сопровождающий завтра` → AI response → `Создать запрос волонтёру` → prefilled form.

## FLOW G — Partner updates place
Switch to Partner → Dashboard → Organization → Accessibility checklist → Change elevator status → Confirm.

Switch to User → same Place → updated accessibility state.

# 6. Demo data continuity

The same entities must be reused across modules.

Example: `Городская клиника №12` appears as:
- map place;
- organization;
- search result;
- article-related organization;
- partner account;
- destination in route.

Do not create duplicate entities with different data.

# 7. Phone mockup

Desktop `/demo`:
- 9:19.5 ratio;
- max height around 86vh;
- rounded shell;
- subtle hardware buttons;
- inner dark bezel;
- screen rounded clipping;
- shadow.

Do not use Apple's trademarks or exact copyrighted marketing assets. A generic premium smartphone inspired by current devices is enough.

# 8. Demo toolbar

Outside phone:
- project logo;
- role selector;
- `Restart`;
- accessibility shortcut;
- `На сайт`.

Optional `Сценарии` opens:
- Найти доступное место
- Запросить волонтёра
- Найти работу
- Обновить объект как партнёр

Clicking starts a flow from the correct screen.

# 9. Content mode

Global setting:
- Обычный
- Простой
- Голосовой

## Normal
Standard text.

## Simple
- shorter sentences;
- larger spacing;
- reduced secondary information;
- simple labels.

## Voice
Do not implement full speech synthesis as a dependency unless trivial.
Instead show:
- prominent `Прослушать`;
- voice status UI;
- compatible semantic structure.

Browser SpeechSynthesis can be progressive enhancement.

# 10. Empty / loading / error states

Create reusable states:
- No saved places
- No volunteer requests nearby
- Search no results
- Network simulation error optional

Do not leave any unhandled blank screen.

# 11. Forms

Use:
- clear labels;
- inline validation;
- large tap areas;
- bottom-fixed CTA on mobile only when useful.

Avoid:
- 12 fields on one screen;
- placeholders as labels.

# 12. Feedback

Every state-changing action:
- favorite -> icon + toast;
- join -> status change;
- send resume -> applied;
- request help -> request created;
- report issue -> report created.

# 13. Accessibility interactions

Keyboard:
- entire demo navigable;
- escape closes modal;
- focus trapped inside dialog;
- focus restored after close.

Screen reader:
- buttons named;
- current nav state announced;
- map alternatives available as list;
- icons never standalone without labels where meaning is essential.

# 14. Acceptance criteria

Demo is ready when:
- role switching works;
- all main flows work without reload;
- cross-role volunteer flow works;
- partner change is visible to user;
- at least 40 meaningful screens/states are reachable;
- no visible primary control is dead;
- reset returns initial demo state;
- desktop frame + mobile full-screen both work.
