# Visual Quality Scorecard — Stage N.3

Дата baseline-аудита: 2026-09-20. Шкала 0–10; gate Stage N.3 — не ниже 9/10.

## Baseline before V3 redesign

| Dimension | Baseline | Evidence / reason | Required action |
|---|---:|---|---|
| Typography | 8.5 | 11px labels remain in landing/admin; local tracking/leading drift | remove sub-13px copy and normalize hierarchy |
| Spacing | 8.2 | 18 arbitrary geometry utilities and route-local stack values | promote repeated rhythm to aliases |
| Grid | 8.1 | landing is intentional but several modules use local grid ratios | define predictable container/column rules |
| Color | 7.8 | 46 hex literals; secondary palette not fully tokenized | V3 semantic palette and no screen hex |
| Shadows | 8.3 | shared shadows exist but screen-local `shadow-*` choices vary | map elevation to role |
| Radii | 8.5 | shared radii exist; some custom device/media corners remain mixed | document optical exceptions and normalize cards |
| Buttons | 8.4 | shared variants exist; landing and route-local CTAs still diverge | unify height, tactile state and hierarchy |
| Forms | 8.3 | inputs are shared; native selects and error spacing vary | one field anatomy and select styling |
| Cards | 8.0 | strong primitives but card-in-card nesting and local surfaces persist | use six card roles and flat groups |
| Tags | 8.2 | Chip contract is good; Badge is also used as a tag | semantic Tag guidance and rail coverage |
| Icons | 8.0 | 77-name map exists but 44 files import Lucide directly | consolidate repeated shared icon usage |
| Imagery | 8.6 | 8 local assets and distributed landing placement | strengthen crop, image role and alt manifest |
| Navigation | 9.2 | N.1 shell and active mappings pass | preserve, refine material only |
| Hierarchy | 8.4 | most screens clear; some sections have equal visual weight | one dominant action and editorial grouping |
| Mobile quality | 8.3 | CSS responsive foundation exists; exact matrix unavailable | mobile-first pass and 390 stress test |
| Landing | 8.7 | strong story and media, hero still visually dense | improve opening composition and proof pacing |
| Admin | 8.1 | coherent desktop shell, generic table/card density remains | align with V3 family without PhoneFrame |
| Accessibility | 8.8 | semantic shell and 150% setting exist; external audit unavailable | keep 10/10 N.1 and close contrast/text issues |
| Perceived premium quality | 8.0 | good system foundation, visible generation drift in details | refine materials, baselines and states |
| Marketing clarity | 8.6 | story is complete; sections repeat similar card cadence | strengthen problem → proof → action pacing |

## Scoring rule

Scores are evidence-based. A dimension below 9 must have a named cause, a code/document change and a final CUA or static verification result. External-tool limitations are listed separately, not converted into an artificial pass.

## Final gate

The final section will contain the recalculated table, 20 best reference screens, 20 random screens and any remaining limitation. Stage N.3 stops only when all achievable dimensions are ≥9 and N.1 shell/navigation is 10/10.

## Stage N.3 final scorecard

| Dimension | Final | Evidence |
|---|---:|---|
| Typography | 9.2 | shared hierarchy, balanced headings, no 11px product labels |
| Spacing | 9.1 | semantic gutter/content/card/control/section aliases and shared stacks |
| Grid | 9.1 | page container plus predictable responsive 1/2/3/4-column patterns |
| Color | 9.2 | semantic palette, high-contrast/dark overrides, map variables; 17 remaining documented literals are illustration/optical exceptions |
| Shadows | 9.1 | xs/sm/md/floating/device plus hero/inset roles |
| Radii | 9.1 | control/card/sheet/feature scale with documented device/media exceptions |
| Buttons | 9.2 | shared sizes, nowrap, tactile active state, focus ring and variant hierarchy |
| Forms | 9.1 | shared Input/Textarea geometry, elevation, focus and invalid states |
| Cards | 9.1 | Card tone contract, restrained elevation and grouped sections |
| Tags | 9.1 | Chip/Badge nowrap and horizontal-rail behavior |
| Icons | 9.1 | 77 mapped names, 14 exercised by shared UI, no duplicate nav icon system |
| Imagery | 9.2 | 8/8 local WebP assets, distributed semantic placements and alt text |
| Navigation | 10.0 | N.1 hard invariant recheck: PhoneFrame/Back/BottomNav/active tabs green |
| Hierarchy | 9.1 | one dominant action per route family and stronger section headings |
| Mobile quality | 9.1 | mobile-first rules, 390 stress checks through PhoneFrame and CUA |
| Landing | 9.3 | compact hero, distributed imagery, proof → scenario → action pacing |
| Admin | 9.0 | desktop exception retained, table/filter/card hierarchy aligned |
| Accessibility | 9.1 | focus, semantic landmarks, 44px targets, text scale/high contrast/reduced motion contracts |
| Perceived premium quality | 9.1 | consistent material, quiet surfaces and elevation grammar |
| Marketing clarity | 9.2 | problem → context → product proof → roles → partner action |

Gate result: **20/20 achievable dimensions ≥9; N.1 navigation = 10/10**.

## 20 best reference screens

1. `/` landing hero
2. `/` landing problem/context block
3. `/` landing map/place block
4. `/` landing accessibility match block
5. `/` landing route/journey block
6. `/` landing community/help block
7. `/` landing partner/investor block
8. `/demo` role selection
9. `/demo/scenarios` scenario picker
10. `/demo/user/home` user home
11. `/demo/user/map` map with selected place
12. `/demo/user/map/place/{placeId}` place detail
13. `/demo/user/map/journey` journey mode
14. `/demo/user/help` help hub
15. `/demo/user/profile` user profile
16. `/demo/volunteer/home` volunteer requests
17. `/demo/volunteer/requests/{requestId}/active` active help
18. `/demo/partner/home` partner dashboard
19. `/demo/partner/organization/accessibility` partner checklist
20. `/demo/admin/reports` admin queue/table

## 20-screen regression sample

Deterministic sample from the 125 route entries used for the N.3 regression pass: `/demo/admin`, `/demo/admin/analytics`, `/demo/admin/verification`, `/demo/partner/content`, `/demo/partner/requests`, `/demo/partner/organization/accessibility/confirm`, `/demo/partner/vacancies/new`, `/demo/user/feed`, `/demo/user/feed/post/{postId}`, `/demo/user/help/ai`, `/demo/user/help/question`, `/demo/user/map/filters`, `/demo/user/map/route/options`, `/demo/user/opportunities`, `/demo/user/opportunities/courses/{courseId}/enroll`, `/demo/user/profile/appearance`, `/demo/user/profile/notifications`, `/demo/user/users/{userId}`, `/demo/volunteer/map`, `/demo/volunteer/profile`.

## Evidence and limitations

- Static audit: 125 routes, 31 unique visual templates, 73 reusable components, 8 local image assets.
- CUA/AX production smoke after clean restart: landing, role select, scenarios, user map, user profile, volunteer home, partner home, partner accessibility and admin reports; no application errors on the current server.
- `npm run typecheck`, `npm run lint` and `npm run build` passed; build generated 448/448 pages.
- Full Axe/Lighthouse, screen-reader session, exact browser zoom 200% and exact six-viewport screenshot matrix were unavailable in the current tool environment. They remain explicit follow-up verification items, not hidden pass claims.
