# 11 — APP INFORMATION ARCHITECTURE & NAVIGATION RULES

---

# 1. Главная навигация пользователя

Bottom navigation:

1. Главная
2. Карта
3. Помощь
4. Возможности
5. Профиль

Это единственный постоянный уровень top IA.

---

# 2. Что НЕ выносить в bottom nav

Не делать отдельными табами:
- Лента
- Друзья
- События
- Чаты
- Работа
- Курсы
- Настройки

Они живут внутри пяти зон.

---

# 3. Правило вложенности

Maximum:
- 3 уровня normal navigation;
- 4-й только для детальной сущности.

Пример:

Возможности
→ Вакансии
→ Карточка вакансии
→ Отправить резюме

Не:
Возможности
→ Работа
→ Категория
→ Подкатегория
→ Список
→ Карточка.

---

# 4. Cross-navigation

Объект может встречаться в нескольких контекстах, но иметь один canonical route.

Пример:

`OrganizationDetail`
можно открыть:
- из статьи;
- из карты;
- из поиска;
- из вакансии.

Canonical entity остаётся одной.

---

# 5. Back behavior

Правила:
- modal -> close;
- bottom sheet -> close;
- detail -> previous list;
- root tab -> exit / browser history;
- role switch -> role home.

---

# 6. Search

Глобальный search на Главной должен искать:
- места;
- статьи;
- организации;
- вакансии;
- курсы;
- события.

Search results grouped by type.

Map search ограничен местами / организациями.

---

# 7. Favorites

Один глобальный механизм избранного.

Типы:
- place;
- article;
- vacancy;
- course;
- event;
- organization.

В Профиле:
`Избранное`

С фильтром по типу.

---

# 8. Notifications

Notifications могут deep-link:
- place;
- help request;
- event;
- vacancy;
- organization;
- post.

---

# 9. Social layer

Home:
- feed preview;
- community;
- events;
- stories.

Profile:
- friends;
- subscriptions;
- posts.

Не создавать отдельный шестой social tab.

---

# 10. Partner IA

Partner bottom nav:

1. Обзор
2. Организация
3. Контент
4. Обращения
5. Профиль

`Контент`:
- вакансии;
- курсы;
- мероприятия;
- предложения.

---

# 11. Volunteer IA

Bottom nav:

1. Заявки
2. Карта
3. Сообщество
4. История
5. Профиль

---

# 12. Admin IA

Admin switches to web layout.

Sidebar:
- Overview
- Users
- Partners
- Places
- Reports
- Help Requests
- Content
- Verification
- Analytics

---

# 13. Naming rules

Use nouns for destinations:
- Карта
- Помощь
- Вакансии
- Курсы

Use verbs for actions:
- Построить маршрут
- Запросить помощь
- Отправить резюме
- Подтвердить данные

Avoid vague:
- Далее
- Подробнее
- Перейти
when action can be explicit.
