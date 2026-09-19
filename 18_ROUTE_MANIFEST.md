# 18 — ROUTE MANIFEST
## Канонический список маршрутов приложения

> Этот файл определяет URL-архитектуру demo.  
> Codex не должен придумывать дополнительные маршруты без необходимости.

---

# 1. Public routes

| Route | Purpose |
|---|---|
| `/` | Публичный лендинг |
| `/demo` | Выбор роли |
| `/demo/scenarios` | Список guided-demo сценариев |

---

# 2. User routes

## Root

| Route | Screen |
|---|---|
| `/demo/user/home` | Главная |
| `/demo/user/feed` | Лента |
| `/demo/user/map` | Карта |
| `/demo/user/help` | Помощь |
| `/demo/user/opportunities` | Возможности |
| `/demo/user/profile` | Профиль |

## Feed / Community

- `/demo/user/feed/post/[postId]`
- `/demo/user/feed/story/[storyId]`
- `/demo/user/community`
- `/demo/user/community/[communityId]`
- `/demo/user/friends`
- `/demo/user/users/[userId]`
- `/demo/user/dating`
- `/demo/user/events`
- `/demo/user/events/[eventId]`
- `/demo/user/clubs`
- `/demo/user/clubs/[clubId]`

## Map

- `/demo/user/map/search`
- `/demo/user/map/filters`
- `/demo/user/map/place/[placeId]`
- `/demo/user/map/place/[placeId]/accessibility`
- `/demo/user/map/place/[placeId]/report`
- `/demo/user/map/route`
- `/demo/user/map/route/options`
- `/demo/user/map/journey`
- `/demo/user/map/entrance/[placeId]`
- `/demo/user/map/taxi`
- `/demo/user/map/help-at-location`
- `/demo/user/map/emergency`

## Help

- `/demo/user/help/ai`
- `/demo/user/help/knowledge`
- `/demo/user/help/articles`
- `/demo/user/help/articles/[articleId]`
- `/demo/user/help/topics`
- `/demo/user/help/specialists`
- `/demo/user/help/specialists/[specialistId]`
- `/demo/user/help/organizations`
- `/demo/user/help/organizations/[organizationId]`
- `/demo/user/help/booking/[organizationId]`
- `/demo/user/help/question`
- `/demo/user/help/questions`
- `/demo/user/help/volunteer-request`
- `/demo/user/help/requests/[requestId]`
- `/demo/user/help/emergency`

## Opportunities

- `/demo/user/opportunities/favorites`
- `/demo/user/opportunities/vacancies`
- `/demo/user/opportunities/vacancies/filters`
- `/demo/user/opportunities/vacancies/[vacancyId]`
- `/demo/user/opportunities/vacancies/[vacancyId]/apply`
- `/demo/user/opportunities/resume`
- `/demo/user/opportunities/resume/edit`
- `/demo/user/opportunities/education`
- `/demo/user/opportunities/education/[organizationId]`
- `/demo/user/opportunities/courses`
- `/demo/user/opportunities/courses/[courseId]`
- `/demo/user/opportunities/courses/[courseId]/enroll`
- `/demo/user/opportunities/offers`
- `/demo/user/opportunities/offers/[offerId]`

## Profile

- `/demo/user/profile/accessibility`
- `/demo/user/profile/accessibility/edit`
- `/demo/user/profile/friends`
- `/demo/user/profile/contact-permissions`
- `/demo/user/profile/resume`
- `/demo/user/profile/paperwork`
- `/demo/user/profile/requests`
- `/demo/user/profile/posts`
- `/demo/user/profile/become-author`
- `/demo/user/profile/notifications`
- `/demo/user/profile/notifications/settings`
- `/demo/user/profile/appearance`
- `/demo/user/profile/security`
- `/demo/user/profile/app`
- `/demo/user/profile/about`
- `/demo/user/profile/help`
- `/demo/user/profile/transactions`
- `/demo/user/profile/favorites`

---

# 3. Volunteer routes

- `/demo/volunteer/home`
- `/demo/volunteer/requests`
- `/demo/volunteer/requests/[requestId]`
- `/demo/volunteer/requests/[requestId]/active`
- `/demo/volunteer/history`
- `/demo/volunteer/map`
- `/demo/volunteer/community`
- `/demo/volunteer/profile`
- `/demo/volunteer/onboarding`

---

# 4. Partner routes

- `/demo/partner/home`
- `/demo/partner/organization`
- `/demo/partner/organization/edit`
- `/demo/partner/organization/accessibility`
- `/demo/partner/organization/accessibility/confirm`
- `/demo/partner/requests`
- `/demo/partner/requests/[requestId]`
- `/demo/partner/content`
- `/demo/partner/offers`
- `/demo/partner/offers/new`
- `/demo/partner/offers/[offerId]/edit`
- `/demo/partner/vacancies`
- `/demo/partner/vacancies/new`
- `/demo/partner/vacancies/[vacancyId]/edit`
- `/demo/partner/courses`
- `/demo/partner/courses/new`
- `/demo/partner/courses/[courseId]/edit`
- `/demo/partner/events`
- `/demo/partner/events/new`
- `/demo/partner/events/[eventId]/edit`
- `/demo/partner/analytics`
- `/demo/partner/notifications`
- `/demo/partner/profile`

---

# 5. Admin routes

Admin использует desktop-shell.

- `/demo/admin`
- `/demo/admin/users`
- `/demo/admin/partners`
- `/demo/admin/places`
- `/demo/admin/reports`
- `/demo/admin/help-requests`
- `/demo/admin/content`
- `/demo/admin/verification`
- `/demo/admin/analytics`

---

# 6. Redirect rules

- `/demo/user` -> `/demo/user/home`
- `/demo/volunteer` -> `/demo/volunteer/home`
- `/demo/partner` -> `/demo/partner/home`
- `/demo/admin` remains admin dashboard
- Unknown demo entity -> role root + toast `Объект не найден в demo-данных`

---

# 7. Back rules

- detail screen -> originating list if known;
- otherwise canonical parent route;
- modal/sheet -> close first;
- after successful form -> success state, then parent;
- role change -> corresponding role home.

---

# 8. Query params

Supported:

- `?role=user|volunteer|partner|admin`
- `?scenario=clinic|volunteer|partner-update|job|ai`
- `?guided=1`
- `?debug=1`

Do not use query params for normal entity identity when route params exist.
