# 16 — DEMO SCENARIOS & PRESENTATION SCRIPT
## Как показывать продукт инвестору / партнёру

---

# 1. Demo mode

Add `Сценарии` button in external DemoToolbar.

Panel:

- Найти доступную клинику
- Запросить помощь
- Найти работу
- Сходить на мероприятие
- Обновить доступность как партнёр
- Проверить отчёт как администратор

Each scenario:
- explains goal in one line;
- button `Начать`;
- navigates to start.

---

# 2. Scenario A — Accessible clinic

Duration:
~60 seconds

Flow:

1. User Home
2. `Найти доступное место`
3. Search `клиника`
4. Clinic 12
5. `92% подходит вам`
6. Accessibility details
7. Route
8. Compare fast vs accessible
9. Select accessible
10. Journey mode
11. Entrance photo

Narrative:
**Продукт не просто показывает место — он объясняет, подходит ли оно конкретному человеку и как туда попасть.**

---

# 3. Scenario B — Volunteer ecosystem

Duration:
~90 seconds

1. User requests accompaniment
2. Request created
3. Role -> Volunteer
4. Request appears
5. Volunteer accepts
6. Role -> User
7. User sees volunteer assigned

Narrative:
**Роли живут в одной системе, а не в отдельных приложениях.**

---

# 4. Scenario C — Partner data loop

Duration:
~90 seconds

1. User sees Clinic 12 — 92%
2. Role -> Partner
3. Organization
4. Accessibility checklist
5. Elevator -> unavailable
6. Confirm
7. Role -> User
8. Clinic now lower score + warning
9. Route suggests another entrance / alternative

Narrative:
**Данные доступны не статично: партнёры и сообщество поддерживают их актуальность.**

---

# 5. Scenario D — Job

1. Opportunities
2. Vacancy
3. Accessibility conditions
4. Resume
5. Apply
6. Applied state

Narrative:
**Продукт закрывает не только физическую доступность, но и доступ к возможностям.**

---

# 6. Scenario E — AI Navigator

1. Help
2. AI Navigator
3. `Мне нужен сопровождающий завтра`
4. Clarify
5. Prefilled request
6. Submit

Narrative:
**AI не заменяет сервисы — он сокращает путь до нужного действия.**

---

# 7. Presentation safe mode

Add toggle:
`Guided demo`

When on:
- highlights next CTA;
- displays tiny hint outside phone;
- does not block normal interaction.

---

# 8. Reset

Every scenario can:
- reset only scenario state;
- restart from beginning.

---

# 9. Demo reliability

Do not depend on:
- geolocation;
- camera;
- real map API;
- auth;
- backend;
- external AI;
- payment.

Everything required for presentation must work offline after app load.

---

# 10. Investor demo order

Recommended:

1. Hero / landing
2. Clinic scenario
3. Volunteer cross-role
4. Partner update
5. Opportunities
6. Admin overview
7. Return to landing investment block

Total:
5–7 minutes.
