# 12 — SCREEN BEHAVIOR & STATE MATRIX
## Состояния ключевых экранов

---

# 1. Every major screen must support states

Minimum:

- default
- loading
- empty
- error
- success / updated
- offline-like simulated state if relevant

---

# 2. Map home

## Default
Map + pins + cards.

## Loading
Skeleton cards + map overlay.

## No results
Message:
`Ничего не найдено с текущими фильтрами`

Actions:
- Сбросить фильтры
- Изменить радиус

## Location unavailable
Use:
`Не удалось определить местоположение`

Actions:
- Ввести адрес
- Повторить

Do not block map entirely.

---

# 3. Place detail

States:
- verified fresh;
- verified stale;
- community only;
- accessibility warning;
- temporary issue;
- partner-updated.

Freshness labels:
- `Подтверждено недавно`
- `Данные требуют проверки`
- `Есть новое сообщение`

---

# 4. Route

States:
- 2+ route options;
- no accessible route;
- partial accessibility;
- route updated;
- obstacle reported.

If no fully accessible route:
Do not hide result.
Show:
`Полностью подходящий маршрут не найден`
and explain restrictions.

---

# 5. Help request

Statuses:

- draft
- submitted
- matching
- accepted
- volunteer_on_way
- active
- completed
- cancelled

Each status has:
- label;
- next action;
- timestamp.

---

# 6. Vacancy

Statuses:
- open
- saved
- applied
- closed

Applied state:
replace main CTA with:
`Отклик отправлен`

---

# 7. Event

Statuses:
- available
- joined
- full
- ended
- cancelled

---

# 8. Course

Statuses:
- available
- enrolled
- closed
- completed

---

# 9. Partner object verification

Statuses:
- incomplete
- pending
- verified
- update_requested
- outdated

---

# 10. Notifications

Read/unread.

Grouped:
- Сегодня
- Вчера
- Ранее

---

# 11. Post

States:
- normal
- liked
- saved
- followed author
- reported

---

# 12. Form states

Forms:
- pristine
- dirty
- invalid
- submitting
- success
- error

Never reset user-entered text on validation error.

---

# 13. Demo simulated failure buttons

Optional hidden / debug menu:

`Simulate state`

Can trigger:
- no location;
- empty results;
- stale data;
- no accessible route.

Useful for presentation and QA.
