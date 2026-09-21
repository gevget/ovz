# Responsive Route Audit — P0

Дата аудита: 2026-09-21. Матрица охватывает 125 route entries из src/app/**/page.tsx; динамические IDs представлены каноническими шаблонами, как в FULL_VISUAL_ROUTE_AUDIT.md. FIXED означает, что маршрут подключён к исправленному общему shell/template и прошёл статический контракт; browser smoke выполнен на landing и representative user/volunteer/partner screens. Полный шеститочечный визуальный прогон каждого route entry недоступен из-за отсутствия agent-browser/Playwright в окружении.

| Route | 320 | 360 | 390 | 430 | 768 | Desktop | Horizontal overflow | Card overflow | Header | Back | BottomNav | Scroll | Overlay | Text scale | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /demo | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Demo toolbar | N/A | N/A | PASS | PhoneFrame | PASS | FIXED |
| /demo/admin | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/analytics | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/content | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/help-requests | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/partners | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/places | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/reports | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/users | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/admin/verification | N/A | N/A | N/A | N/A | N/A | PASS | PASS | PASS | Admin shell | N/A | N/A | PASS | Desktop | PASS | FIXED |
| /demo/partner | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/analytics | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/content | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/courses | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/courses/new | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/courses/{courseId}/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/events | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/events/new | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/events/{eventId}/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/home | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/notifications | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/offers | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/offers/new | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/offers/{offerId}/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/organization | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/organization/accessibility | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/organization/accessibility/confirm | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/organization/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/profile | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/requests | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/requests/{requestId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/vacancies | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/vacancies/new | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/partner/vacancies/{vacancyId}/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/scenarios | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Demo toolbar | N/A | N/A | PASS | PhoneFrame | PASS | FIXED |
| /demo/user | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/clubs | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/clubs/{clubId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/community | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/community/{communityId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/dating | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/events | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/events/{eventId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/feed | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/feed/post/{postId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/feed/story/{storyId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/friends | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/ai | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/articles | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/articles/{articleId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/booking/{organizationId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/emergency | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/knowledge | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/organizations | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/organizations/{organizationId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/question | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/questions | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/requests/{requestId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/specialists | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/specialists/{specialistId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/topics | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/help/volunteer-request | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/home | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/emergency | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/entrance/{placeId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/filters | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/help-at-location | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/journey | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/place/{placeId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/place/{placeId}/accessibility | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/place/{placeId}/report | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/route | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/route/options | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/search | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/map/taxi | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/courses | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/courses/{courseId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/courses/{courseId}/enroll | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/education | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/education/{organizationId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/favorites | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/offers | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/offers/{offerId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/resume | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/resume/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/vacancies | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/vacancies/filters | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/vacancies/{vacancyId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/opportunities/vacancies/{vacancyId}/apply | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/about | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/accessibility | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/accessibility/edit | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/app | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/appearance | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/become-author | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/contact-permissions | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/favorites | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/friends | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/help | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/notifications | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/notifications/settings | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/paperwork | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/posts | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/requests | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/resume | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/security | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/profile/transactions | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/users/{userId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/user/{...slug} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader / route header | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/community | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/history | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/home | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/map | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/onboarding | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/profile | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/requests | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/requests/{requestId} | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/volunteer/requests/{requestId}/active | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | AppScreenHeader | PASS | PASS | PASS | PhoneFrame | PASS | FIXED |
| /demo/{role}/home | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Role shell | PASS | Role-dependent | PASS | PhoneFrame | PASS | FIXED |
| / | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Landing shell | N/A | N/A | PASS | Viewport | PASS | FIXED |

## P0 verification notes

- PhoneFrame is the shared desktop boundary and mobile fullscreen shell; mobile uses a grid with auto / minmax(0,1fr) / auto semantics and keeps bottom navigation in view.
- AppScreenHeader now has a predictable default back destination (/demo); role home screens resolve their root back action to the role selector instead of self-linking.
- Modal, toast and story-viewer overlays are portaled into the nearest PhoneFrame overlay root; landing/admin retain viewport-level fallback behavior.
- Shared Card/Button/Input/Textarea primitives and page/app containers explicitly allow shrinking and wrapping. Landing hero and content copy use mobile-safe wrapping.
- Chromium 390px smoke on `/demo/user/home` reported `document/body scrollWidth = 390px`, main width `390px`, and BottomNavigation at the viewport bottom (`y=1535`, `h=65` in the 1600px capture).
- The six viewport columns are a static/template matrix. Runtime screenshots were checked at 390px for / and /demo/user/home; typecheck, lint and production build are required release gates.

## Stage N.3 Pass H CUA runtime evidence — 2026-09-21

The static matrix above remains **125 route entries**. Runtime evidence is reported separately and is not inflated to claim a full six-width pass.

| Runtime sample | Routes | Width | Overflow | PhoneFrame | Content region | Bottom nav | Back | App errors |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| User | 15 | 390px | 0 | 15/15 | 15/15 | 15/15 | 15/15 | 0 |
| Volunteer | 8 | 390px | 0 | 8/8 | 8/8 | 8/8 | 8/8 | 0 |
| Partner | 7 | 390px | 0 | 7/7 | 7/7 | 7/7 | 7/7 | 0 |
| Total | 30 | 390px | **0** | **30/30** | **30/30** | **30/30** | **30/30** | **0** |

Representative screenshot/AX review covers 10 templates: public landing, role select, scenarios, User Map, User place detail, User Profile, User Help, Volunteer Home, Partner Home and Admin Reports. Desktop 1440px smoke covered public landing and User Home; both had 0 overflow. Exact 320/360/430/768/1024/1920 runtime sweeps, Axe/Lighthouse and screen-reader checks remain unavailable and are explicitly not claimed.

Post-build hardening smoke: at a 375px viewport the public landing rendered 9 images with `document.scrollWidth === clientWidth` (overflow 0); `/demo/user/home` rendered the role shell with PhoneFrame and navigation, also with overflow 0. The viewport override was reset after verification.
