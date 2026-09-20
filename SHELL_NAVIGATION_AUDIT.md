# Stage N.1 — Shell / Navigation / Back Behavior Audit

Дата: 2026-09-19. Scope: только shell, navigation, canonical Back и scroll-архитектура User / Volunteer / Partner; новые продуктовые функции не добавлялись.

## Итог

Проверено 78 User-маршрутов, 10 Volunteer-маршрутов и 24 Partner-маршрутов. Редиректные корни отмечены N/A по phone-frame и навигации; все экранные маршруты проходят через общий `DemoPhoneShell` и соответствующую BottomNavigation.

Ключевые исправления:

- `MapRouteFrame` и `HelpRouteFrame` теперь сохраняют BottomNavigation на root и nested Map/Help routes.
- Профиль User теперь использует `DemoToolbar → PhoneFrame → экран → BottomNavigation`, включая root и все профильные nested routes.
- Нижняя навигация является `shrink-0`, поэтому контентный scroll не поглощает её и не создаёт перекрытия.
- User Opportunities активен для Opportunities, Events и Clubs; Partner Content активен для Content, Vacancies, Courses, Events и Offers.
- Все вызовы `router.back()` в scope удалены; закрытие фильтров карты возвращается на canonical `/demo/user/map`.
- Для экранных заголовков введён общий `AppScreenHeader` с `backHref`, `onBack`, `rightAction` и `compact`.

## Runtime QA

Представительные экраны проверены в браузере через CUA на локальном сервере `http://localhost:3100`:

- User Map: phone-frame, Map header, modal bottom-sheet и видимая BottomNavigation одновременно.
- User Help: phone-frame, прокручиваемый контент и активная Help-вкладка.
- User Profile: phone-frame, визуальный заголовок «Мой профиль», прокручиваемый профиль и активная Profile-вкладка.
- User Profile nested: canonical Back на `/demo/user/profile`, BottomNavigation сохранена.
- Volunteer Home и nested Active Help: phone-frame, VolunteerBottomNavigation и canonical Back.
- Partner Home и nested Vacancy Edit: phone-frame, PartnerBottomNavigation и canonical Back.

## Root causes / result counts

| Проверка | До Stage N.1 | После Stage N.1 |
|---|---:|---:|
| User routes вне PhoneFrame | 19 Profile route entries; unknown route был в отдельном shell | 0 экранных routes |
| User Map/Help routes без BottomNavigation | 28 экранных routes: 13 Map + 15 Help | 0 |
| Volunteer/Partner routes без BottomNavigation | root/shared shell path и отсутствие shrink-0 | 0 экранных routes |
| Missing canonical Back / non-canonical fallback | 0 missing links; 1 `router.back()` fallback в Map filters | 0; canonical `/demo/user/map` |
| Active-tab bugs on nested content | 4 User Events/Clubs rows + 12 nested Partner content rows | 0 для проверенных parent groups |
| Scroll/height risk | 3 independent frames without explicit shrink-0 + 1 filter screen с min-h-full | content-only scroll + shrink-0 nav |

## User routes

| Route | PhoneFrame | BottomNav | ActiveTab | Back | Scroll | Status |
|---|---|---|---|---|---|---|
| `/demo/user` | N/A | N/A | N/A | N/A | N/A | PASS |
| `/demo/user/{...slug}` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/user/clubs` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/clubs/{clubId}` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/community` | FIXED | FIXED | N/A | PASS | FIXED | FIXED |
| `/demo/user/community/{communityId}` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/user/dating` | FIXED | FIXED | N/A | PASS | FIXED | FIXED |
| `/demo/user/events` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/events/{eventId}` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/feed` | FIXED | FIXED | N/A | PASS | FIXED | FIXED |
| `/demo/user/feed/post/{postId}` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/user/feed/story/{storyId}` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/user/friends` | FIXED | FIXED | N/A | PASS | FIXED | FIXED |
| `/demo/user/help` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/ai` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/articles` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/articles/{articleId}` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/booking/{organizationId}` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/emergency` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/knowledge` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/organizations` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/organizations/{organizationId}` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/question` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/questions` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/requests/{requestId}` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/specialists` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/specialists/{specialistId}` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/topics` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/help/volunteer-request` | FIXED | FIXED | Help | FIXED | FIXED | FIXED |
| `/demo/user/home` | FIXED | FIXED | Home | N/A | FIXED | FIXED |
| `/demo/user/map` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/emergency` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/entrance/{placeId}` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/filters` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/help-at-location` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/journey` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/place/{placeId}` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/place/{placeId}/accessibility` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/place/{placeId}/report` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/route` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/route/options` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/search` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/map/taxi` | FIXED | FIXED | Map | FIXED | FIXED | FIXED |
| `/demo/user/opportunities` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/courses` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/courses/{courseId}` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/courses/{courseId}/enroll` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/education` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/education/{organizationId}` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/favorites` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/offers` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/offers/{offerId}` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/resume` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/resume/edit` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/vacancies` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/vacancies/{vacancyId}` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/vacancies/{vacancyId}/apply` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/opportunities/vacancies/filters` | FIXED | FIXED | Opportunities | FIXED | FIXED | FIXED |
| `/demo/user/profile` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/about` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/accessibility` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/accessibility/edit` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/app` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/appearance` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/become-author` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/contact-permissions` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/favorites` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/friends` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/help` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/notifications` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/notifications/settings` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/paperwork` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/posts` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/requests` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/resume` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/security` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/profile/transactions` | FIXED | FIXED | Profile | FIXED | FIXED | FIXED |
| `/demo/user/users/{userId}` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |

## Volunteer routes

| Route | PhoneFrame | BottomNav | ActiveTab | Back | Scroll | Status |
|---|---|---|---|---|---|---|
| `/demo/volunteer` | N/A | N/A | N/A | N/A | N/A | PASS |
| `/demo/volunteer/community` | FIXED | FIXED | Community | N/A | FIXED | FIXED |
| `/demo/volunteer/history` | FIXED | FIXED | History | N/A | FIXED | FIXED |
| `/demo/volunteer/home` | FIXED | FIXED | Requests | N/A | FIXED | FIXED |
| `/demo/volunteer/map` | FIXED | FIXED | Map | N/A | FIXED | FIXED |
| `/demo/volunteer/onboarding` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/volunteer/profile` | FIXED | FIXED | Profile | N/A | FIXED | FIXED |
| `/demo/volunteer/requests` | FIXED | FIXED | Requests | N/A | FIXED | FIXED |
| `/demo/volunteer/requests/{requestId}` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/volunteer/requests/{requestId}/active` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |

## Partner routes

| Route | PhoneFrame | BottomNav | ActiveTab | Back | Scroll | Status |
|---|---|---|---|---|---|---|
| `/demo/partner` | N/A | N/A | N/A | N/A | N/A | PASS |
| `/demo/partner/analytics` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/partner/content` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/courses` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/courses/{courseId}/edit` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/courses/new` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/events` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/events/{eventId}/edit` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/events/new` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/home` | FIXED | FIXED | Overview | N/A | FIXED | FIXED |
| `/demo/partner/notifications` | FIXED | FIXED | N/A | FIXED | FIXED | FIXED |
| `/demo/partner/offers` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/offers/{offerId}/edit` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/offers/new` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/organization` | FIXED | FIXED | Organization | FIXED | FIXED | FIXED |
| `/demo/partner/organization/accessibility` | FIXED | FIXED | Organization | FIXED | FIXED | FIXED |
| `/demo/partner/organization/accessibility/confirm` | FIXED | FIXED | Organization | FIXED | FIXED | FIXED |
| `/demo/partner/organization/edit` | FIXED | FIXED | Organization | FIXED | FIXED | FIXED |
| `/demo/partner/profile` | FIXED | FIXED | Profile | N/A | FIXED | FIXED |
| `/demo/partner/requests` | FIXED | FIXED | Requests | FIXED | FIXED | FIXED |
| `/demo/partner/requests/{requestId}` | FIXED | FIXED | Requests | FIXED | FIXED | FIXED |
| `/demo/partner/vacancies` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/vacancies/{vacancyId}/edit` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |
| `/demo/partner/vacancies/new` | FIXED | FIXED | Content | FIXED | FIXED | FIXED |

## Verification checklist

- [x] Typecheck.
- [x] Lint.
- [x] Production build after final audit edits.
- [x] Final browser smoke after production build/restart.
- [x] No product Stage advancement; next product stage remains governed by `IMPLEMENTATION_STATUS.md` and the master index.

## Stage N.2 hard invariant recheck — 2026-09-20

| Проверка | До исправления | После исправления |
|---|---:|---:|
| Всего route entries | 125 | 125 |
| Ожидаемые desktop Admin exceptions | 10 concrete routes | 10 |
| Неожиданные маршруты вне `PhoneFrame` | 2 (`/demo`, `/demo/scenarios`) | 0 |
| Неожиданно отсутствующая `BottomNavigation` | 0 | 0 |
| Отсутствующий canonical Back на вложенных экранах | 0 | 0 |
| Ошибки active tab | 0 | 0 |

`/demo` и `/demo/scenarios` теперь используют `DemoPresentationShell`, то есть входят в существующий визуальный device boundary, но не получают role-specific bottom navigation. `/demo/admin/**` сохраняет единственное предусмотренное desktop-исключение. CUA smoke после изменения подтвердил `PhoneFrame` и отсутствие application error state.

## Stage N.3 final recheck — 2026-09-20

| Check | Result |
|---|---:|
| Routes checked | 125/125 |
| Unexpected routes outside PhoneFrame | 0 |
| Expected Admin desktop exceptions | 10 |
| Unexpected missing BottomNavigation | 0 |
| Missing canonical Back | 0 |
| Active-tab errors | 0 |
| Current production CUA application errors | 0 after clean 3100 restart |
| N.1 shell score | 10/10 |

The N.3 visual pass changed shared material/tokens only. No shell boundary, route IA, navigation destination, state machine or role permission was changed.
