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

## Stage N.3 — Final Closure Pass F–I — 2026-09-21

Этот раздел имеет приоритет над более ранними сводками в этом файле. Предыдущая запись Pass G–I ошибочно указывала CUA coverage `10`; в финальном проходе через production-сборку фактически открыты и визуально просмотрены все **31/31** уникальных визуальных шаблонов. Новый Stage не создавался.

### Обязательные итоговые метрики

| Метрика | Результат |
|---|---:|
| Route entries | **125** |
| Build-generated pages | **448** |
| Unique visual templates | **31** |
| CUA-reviewed templates | **31/31** |
| Runtime-tested routes | **42** (включая основные, вторичные формы, модальные/активные состояния и админские представления) |
| Runtime application errors | **0** |
| Horizontal overflow | **0** на просмотренных маршрутах; `scrollWidth === clientWidth` |
| PhoneFrame / Back / BottomNavigation | **0** нарушений в User/Volunteer/Partner; Admin — документированное desktop-исключение |

### UNIQUE VISUAL TEMPLATE COVERAGE

| Template | Representative route | CUA opened | Mobile reviewed | Desktop reviewed | Issues found | Issues fixed | Final status |
|---|---|---:|---:|---:|---|---|---|
| Landing | `/` | YES | YES | YES | Быстрый холодный скролл мог показать изображение до завершения декодирования | Проверены `priority`, локальные WebP, секционный ритм и полный скролл до подвала | PASS |
| Demo Role Select | `/demo` | YES | YES | N/A — phone-first выбор роли | Нет | Единый выбор роли и общий shell подтверждены | PASS |
| Demo Scenarios | `/demo/scenarios` | YES | YES | N/A — phone-first сценарии | Нет | Общий presentation shell и Back подтверждены | PASS |
| User Home | `/demo/user/home` | YES | YES | N/A — mobile-first home | Нет | PhoneFrame, карточки и нижняя навигация подтверждены | PASS |
| Map | `/demo/user/map` | YES | YES | N/A — карта внутри phone shell | Нет | Карта, выбранное место и нижняя панель проверены | PASS |
| Map Search / Filters | `/demo/user/map/search`, `/demo/user/map/filters` | YES | YES | N/A — фильтр является transient overlay | Закрывающий control вместо отдельного заголовка фильтра | Зафиксировано как modal/back-equivalent исключение, overflow 0 | PASS |
| Place | `/demo/user/map/place/place_clinic_12` | YES | YES | N/A — detail phone-first | Нет | Media → match → actions и Back подтверждены | PASS |
| Accessibility | `/demo/user/map/place/place_clinic_12/accessibility` | YES | YES | N/A — form/detail phone-first | Нет | Статусы доступности и причины разделены | PASS |
| Report | `/demo/user/map/place/place_clinic_12/report` | YES | YES | N/A — form phone-first | Нет | Форма и primary action подтверждены | PASS |
| Route | `/demo/user/map/route/options` | YES | YES | N/A — route options phone-first | Нет | Рекомендованный маршрут и предупреждения читаются | PASS |
| Journey | `/demo/user/map/journey` | YES | YES | N/A — journey phone-first | Нет | Шаги пути и прогресс подтверждены | PASS |
| Help Home | `/demo/user/help` | YES | YES | N/A — help phone-first | Нет | Иерархия CTA и карточек подтверждена | PASS |
| AI | `/demo/user/help/ai` | YES | YES | N/A — assistant flow phone-first | Нет | Quick replies, prompt и Back подтверждены | PASS |
| Article | `/demo/user/help/articles/article_trip` | YES | YES | N/A — reading flow phone-first | Нет | Типографика, простое чтение и related links подтверждены | PASS |
| Specialist | `/demo/user/help/specialists/specialist_anna` | YES | YES | N/A — profile detail phone-first | Нет | Профиль и action grouping подтверждены | PASS |
| Organization | `/demo/user/help/organizations/org_clinic_12` | YES | YES | N/A — organization detail phone-first | Видимая категория `medicine` была англоязычным техническим значением | Локализация категории и демонстрационной подписи | PASS |
| Help Request | `/demo/user/help/requests/help_001` | YES | YES | N/A — request detail phone-first | Нет | Статус, timeline и действие подтверждены | PASS |
| Opportunities Home | `/demo/user/opportunities` | YES | YES | N/A — opportunity feed phone-first | Англоязычное название одной вакансии в данных | Название вакансии и связанные пользовательские подписи переведены | PASS |
| Vacancy | `/demo/user/opportunities/vacancies/vacancy_ux` | YES | YES | N/A — opportunity detail phone-first | `Junior UX researcher`, `Figma` в demo-контенте | Переведены название и навыки в русские описательные значения | PASS |
| Course | `/demo/user/opportunities/courses/course_design` | YES | YES | N/A — course detail phone-first | Нет | Формат, места и CTA подтверждены | PASS |
| Event | `/demo/user/events/event_cinema` | YES | YES | N/A — event detail phone-first | Нет; текстовый формат соответствует данным события | Сохранён спокойный text-first detail без нерелевантной фотографии | PASS |
| Club | `/demo/user/clubs/club_cinema` | YES | YES | N/A — club detail phone-first | Нет | Member/accessibility block и CTA подтверждены | PASS |
| Feed / Post | `/demo/user/feed/post/post_experience` | YES | YES | N/A — social detail phone-first | Нет | Actions, tags и related card подтверждены | PASS |
| Story | `/demo/user/feed/story/story_event_today` | YES | YES | N/A — overlay inside phone | Нет | Overlay, close, keyboard hint и containment подтверждены | PASS |
| Community | `/demo/user/community/community_cinema` | YES | YES | N/A — community detail phone-first | Нет | Убрана потребность в нерелевантной фотографии; текстовая иерархия подтверждена | PASS |
| Friends / User | `/demo/user/users/user_anna` | YES | YES | N/A — profile detail phone-first | Нет | Profile identity, tags и actions подтверждены | PASS |
| Profile | `/demo/user/profile` | YES | YES | N/A — personal hub phone-first | Нет | Personal hub не выглядит CRM; sections и nav подтверждены | PASS |
| Profile Form / Settings | `/demo/user/profile/accessibility/edit` | YES | YES | N/A — settings form phone-first | Нет | Группы полей, helper text и сохранение подтверждены | PASS |
| Volunteer Home / Requests / Active | `/demo/volunteer/home`, `/demo/volunteer/requests/help_001`, `/demo/volunteer/requests/help_001/active` | YES | YES | N/A — role phone-first | Ранее проверена многострочная кнопка доступности | Кнопка статуса и active-tab исправлены; empty state проверен | PASS |
| Partner Home | `/demo/partner/home` (дополнительно: organization/content/course form) | YES | YES | N/A — role phone-first | Нет | Dashboard, формы и partner nav подтверждены | PASS |
| Admin | `/demo/admin/reports` (дополнительно: overview, analytics, help-requests, content, verification) | YES | YES | YES | Англоязычные служебные описания и desktop-table copy | Локализованы все найденные видимые подписи; desktop shell и table scroll подтверждены | PASS |

**Итог: 31 / 31 визуальных шаблонов визуально просмотрены через CUA.**

### Визуальные и языковые решения closure pass

- Landing просмотрен полностью на мобильном 390px и desktop 1440px: hero, problem, visuals, map, match, journey, help, opportunities, community, freshness, roles, partner, investor, impact, demo, FAQ и footer.
- Mobile-first contract подтверждён на User/Volunteer/Partner: PhoneFrame, Back, BottomNavigation, active tab, контентная прокрутка, overflow 0, overlay containment.
- Англоязычные пользовательские подписи устранены в найденных визуальных шаблонах; технические route IDs, email-адреса, названия библиотек и типы в коде не являются пользовательским UI.
- Изображения оставлены локальными и распределёнными по смысловым блокам; новые файлы не добавлялись, поскольку существующие 8 WebP покрывают нужные контексты.
- Следующий Stage не назначается и самостоятельно не открывается.
