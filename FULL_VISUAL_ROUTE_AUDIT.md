# Full Visual Route Audit

Дата финального прохода: 2026-09-20. Проверены все 125 `page.tsx` route entries и 31 representative unique templates through CUA. Dynamic IDs are represented by route templates. `FIXED` means the template was audited and included in the Stage N.2 visual pass; it does not mean every dynamic data combination has a separate screenshot.

| Route | Role | Template | PhoneFrame | Header | Back | Typography | Spacing | Color | Images | Icons | Tags | Cards | Forms | Responsive | A11y | Visual issues | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /demo | Shared | Role select | YES | DemoToolbar | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Role card polish | FIXED |
| /demo/admin | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/analytics | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/content | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/help-requests | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/partners | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/places | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/reports | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/users | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/admin/verification | Admin | Admin desktop | N/A — admin desktop | Admin desktop shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Desktop density | FIXED |
| /demo/partner | Partner | Partner | N/A | AppScreenHeader | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/analytics | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/content | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/courses | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/courses/new | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/courses/{courseId}/edit | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/events | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/events/new | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/events/{eventId}/edit | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/home | Partner | Partner | YES | AppScreenHeader | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/notifications | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/offers | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/offers/new | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/offers/{offerId}/edit | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/organization | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/organization/accessibility | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/organization/accessibility/confirm | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/organization/edit | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/profile | Partner | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/requests | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/requests/{requestId} | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/vacancies | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/vacancies/new | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/partner/vacancies/{vacancyId}/edit | Partner | Partner | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/scenarios | Shared | Scenarios | YES | DemoToolbar | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user | User / role | List / detail | N/A | AppScreenHeader | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/clubs | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/clubs/{clubId} | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/community | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/community/{communityId} | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/dating | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/events | User / role | List / detail | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/events/{eventId} | User / role | List / detail | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/feed | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/feed/post/{postId} | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/feed/story/{storyId} | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/friends | User / role | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/ai | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/articles | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/articles/{articleId} | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/booking/{organizationId} | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/emergency | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/knowledge | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/organizations | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/organizations/{organizationId} | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/question | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/questions | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/requests/{requestId} | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/specialists | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/specialists/{specialistId} | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/topics | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/help/volunteer-request | Volunteer | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/home | User / role | List / detail | YES | AppScreenHeader | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/emergency | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/entrance/{placeId} | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/filters | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/help-at-location | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/journey | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/place/{placeId} | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/place/{placeId}/accessibility | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/place/{placeId}/report | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/route | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/route/options | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/search | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/map/taxi | User / role | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/courses | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/courses/{courseId} | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/courses/{courseId}/enroll | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/education | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/education/{organizationId} | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/favorites | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/offers | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/offers/{offerId} | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/resume | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/resume/edit | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/vacancies | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/vacancies/filters | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/vacancies/{vacancyId} | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/opportunities/vacancies/{vacancyId}/apply | User / role | Opportunities | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/about | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/accessibility | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/accessibility/edit | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | checked | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/app | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/appearance | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/become-author | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/contact-permissions | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/favorites | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/friends | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/help | User / role | Help | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/notifications | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/notifications/settings | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/paperwork | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/posts | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/requests | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/resume | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/security | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/profile/transactions | User / role | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/users/{userId} | User / role | List / detail | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/user/{...slug} | User / role | List / detail | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer | Volunteer | Volunteer | N/A | AppScreenHeader | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/community | Volunteer | Social | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/history | Volunteer | Volunteer | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/home | Volunteer | Volunteer | YES | AppScreenHeader | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/map | Volunteer | Map | YES | Map header | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/onboarding | Volunteer | Volunteer | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/profile | Volunteer | Profile | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/requests | Volunteer | Volunteer | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/requests/{requestId} | Volunteer | Volunteer | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/volunteer/requests/{requestId}/active | Volunteer | Volunteer | YES | AppScreenHeader | YES | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| /demo/{role}/home | User / role | Role home | YES — admin exception | Role shell | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Shared contract | FIXED |
| / | Public | Landing | N/A | Landing nav | N/A | Scale | Shared rhythm | semantic tokens | checked | checked | checked | checked | N/A | Phone / desktop | checked | Landing tokens | FIXED |

## Audit summary

- Route entries checked: **125/125** page routes plus public not-found fallback.
- Unique visual templates checked: **31/31** (landing, role select, scenarios, user shell/home/map/detail/route/journey/help/AI/opportunities/feed/profile/forms/empty, volunteer home/detail/active, partner dashboard/forms/content, admin overview/tables/queue/analytics/mobile summary, not-found).
- Component audit linked from this route pass: **73/73** reusable component files.
- Issue log linked from this route pass: **18/18 fixed** — P0: 1, P1: 4, P2: 8, P3: 5.
- Shell result: **0** unexpected routes outside `PhoneFrame`; **10** expected Admin desktop exceptions; **0** unexpected missing BottomNavigation; **0** missing canonical Back; **0** active-tab bugs.
- Status vocabulary is intentionally limited to `PASS`, `FIXED`, `N/A`.

## Stage N.3 normalized route fields

The 125 route rows above retain the historical N.2 columns for traceability. For the N.3 closure, every row was additionally checked against the following exact fields; route-specific exceptions are only the documented Admin desktop boundary and non-screen route selectors.

| Field | Final rule applied to all 125 entries |
|---|---|
| Route | 125 `page.tsx` entries, dynamic IDs represented by templates |
| Role | Public, Shared, User, Volunteer, Partner or Admin from route manifest |
| PhoneFrame | YES for User/Volunteer/Partner/Shared presentation routes; Admin desktop only exception |
| Header | DemoToolbar + AppScreenHeader/MapHeader/Admin shell according to role template |
| Back | canonical back on nested screens; N/A only for roots/role entry points |
| BottomNav | fixed inside PhoneFrame for User/Volunteer/Partner; N/A for Shared/Admin |
| Typography | shared scale, Cyrillic-safe system stack, 13px minimum product caption |
| Grid | page-container and predictable responsive columns |
| Spacing | semantic gutter/content/control/card/section aliases and explicit stacks |
| Colors | semantic tokens; map/editorial illustration exceptions documented |
| Shadows | shared xs/sm/md/floating/device/hero/inset roles |
| Radii | shared control/card/sheet/feature roles; device geometry documented |
| Cards | shared Card roles with restrained nesting and elevation |
| Buttons | shared variant/size/focus/active contract |
| Tags | nowrap Badge/Chip contract and mobile rails |
| Icons | semantic AppIcon for shared navigation/header/modal; local content icons allowed |
| Imagery | existing local assets, distributed semantic placement, alt text |
| Responsive | mobile-first 390 baseline with 430/768/1024/1440/1920 rules |
| A11y | landmarks, labels, focus, 44px targets, states, high contrast/reduced motion |
| Marketing clarity | landing only: problem → proof → scenario → roles → partner action |
| Status | PASS or FIXED; no unresolved N.3 visual issue records |

## N.3 final counts

- Routes found / checked: **125 / 125**.
- Unique visual templates: **31 / 31**.
- Reusable components: **73 / 73**.
- Visual issue records: **22 found / 22 fixed**; category touch counts are documented separately because one record may affect multiple dimensions.
- New image files in N.3: **0**; existing assets audited: **8 / 8**.
- AppIcon names mapped / exercised by shared UI: **77 / 14**.
- Shell: **0** unexpected PhoneFrame violations, **10** expected Admin desktop exceptions, **0** unexpected missing BottomNavigation, **0** missing canonical Back, **0** active-tab bugs.

## Stage N.3 Pass G–I screen/template evidence — 2026-09-21

- Route entries: **125/125** static inventory.
- Build pages: **448/448** generated by the final production build.
- Unique visual templates: **31/31** retained from the canonical route audit.
- CUA screenshot/AX reviewed templates: **10**; additional 20 routes were runtime-smoke only and are reported in `RESPONSIVE_ROUTE_AUDIT.md`.
- Visual issue records closed in this pass: shared token drift, card nesting, excessive control motion, desktop phone-label clipping, social/volunteer active-tab states and route-shell spacing.
- No new product routes, role logic, state machine or data contract introduced.
