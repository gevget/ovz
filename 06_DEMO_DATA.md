# 06 — DEMO DATA

> Использовать вымышленные данные. Не создавать впечатление, что demo содержит реальные медицинские рекомендации или реальные экстренные службы.

# 1. Seed users

## user_anna
```ts
{
  id: "user_anna",
  name: "Анна",
  city: "Москва",
  verified: true,
  needs: ["step_free", "elevator", "accessible_toilet"],
  interests: ["кино", "дизайн", "путешествия"]
}
```

## volunteer_max
```ts
{
  id: "volunteer_max",
  name: "Максим",
  city: "Москва",
  verified: true,
  volunteer: true,
  radiusKm: 5
}
```

## partner_clinic
```ts
{
  id: "partner_clinic",
  organizationId: "org_clinic_12"
}
```

# 2. Places

Create at least 12.

Required:

## place_clinic_12
**Городская клиника №12**

Features:
- step_free: true
- elevator: true
- accessible_toilet: false
- accessible_parking: true
- tactile_navigation: partial
- hearing_loop: false
- entrance_photo: true

Verification:
- organization verified
- community confirmed 12 days ago

## place_cafe_sever
**Кафе «Север»**

## place_library
**Городская библиотека**

## place_coworking
**Коворкинг «Точка»**

## place_theatre
**Новая сцена**

## place_mfc
**Городской центр услуг**

Add remaining places across categories.

# 3. Route

Seed route: Anna current location → clinic_12

Options:

### Fast
- 28 min
- one difficult crossing
- accessibility reliability 78%

### Accessible
- 34 min
- step-free
- accessible metro exit
- accessibility reliability 96%

# 4. Accessibility issue

```ts
{
  id: "issue_001",
  placeId: "place_clinic_12",
  type: "elevator",
  status: "resolved",
  createdBy: "user_demo",
  text: "Лифт временно не работал",
  confirmedAt: "demo-date"
}
```

Partner flow may change `elevator` state locally.

# 5. Help request

Cross-role seed:

```ts
{
  id: "help_001",
  createdBy: "user_anna",
  title: "Нужно сопровождение до клиники",
  dateLabel: "Завтра, 11:30",
  locationLabel: "м. Парк → Городская клиника №12",
  status: "open",
  estimatedDuration: "1,5 часа"
}
```

When volunteer accepts: `status = "accepted"`.
When completed: `status = "completed"`.
User sees same status.

# 6. Vacancies

At least 8.

Example:

## vacancy_ux
**Junior UX researcher**

Company: `Доступные сервисы`

Fields:
- hybrid;
- salary demo range;
- accessible office;
- flexible hours;
- remote option;
- verified partner.

# 7. Courses

At least 6.

Example: **Основы цифрового дизайна**
- online;
- subtitles;
- transcript;
- flexible pace;
- verified provider.

# 8. Events

At least 8.

Example: **Кинопоказ с тифлокомментированием**
Fields:
- date;
- venue;
- accessibility;
- organizer;
- capacity;
- join.

# 9. Knowledge articles

At least 12.
Categories:
- льготы;
- документы;
- работа;
- образование;
- транспорт;
- медицина;
- жильё;
- помощь близкому.

Concrete titles:
- `Как подготовиться к поездке в новое место`
- `Что проверить перед посещением клиники`
- `Как составить запрос на сопровождение`

Avoid legal certainty if source is not connected to current official data.

# 10. Posts

At least 10.
Types:
- user story;
- place update;
- event;
- useful tip;
- organization update.

Each:
- author;
- verified;
- date;
- title;
- body;
- media optional;
- reactions.

# 11. Notifications

Examples:
- `Волонтёр откликнулся на ваш запрос`
- `Информация о клинике обновлена`
- `До мероприятия осталось 2 часа`
- `Работодатель посмотрел ваше резюме`

# 12. Partner data

Organization: `Городская клиника №12`

Partner dashboard metrics marked `Демо-данные`:
- profile views 1240
- route builds 318
- saved 96
- questions 24
- accessibility confirmations 14

Never present these as real.

# 13. Admin data

Seed:
- 24 pending reports
- 8 verification requests
- 13 new partners
- 41 help requests this week

Label entire admin analytics: `Demo dataset`.

# 14. Data architecture

```txt
/src/data/
  users.ts
  places.ts
  organizations.ts
  vacancies.ts
  courses.ts
  events.ts
  articles.ts
  posts.ts
  helpRequests.ts
  notifications.ts
```

Use relational IDs rather than copying embedded data everywhere.
