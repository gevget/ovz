# Component Visual Audit — Stage N.2

Статус: Stage N.2 завершён. Дата: 2026-09-20.  
Scope: reusable UI, shared shells, role systems and landing primitives. Product behavior and component contracts remain canonical.

## Audit legend

- `FIXED` — visual contract checked and aligned with V2 system.
- `REVIEW` — component is reusable but needs route-specific visual verification.
- `PASS` — no change required after visual inspection.

## UI primitives

| Component | Family | States checked | Status |
|---|---|---|---|
| Avatar | identity | default, sizes, fallback | FIXED |
| Badge | metadata | default, inverse, long text | FIXED |
| BottomSheet | overlay | open, close, scroll, mobile | FIXED |
| Button | action | primary, secondary, ghost, danger, disabled, focus | FIXED |
| Card | surface | default, soft, inverse, elevated | FIXED |
| Chip | selection | default, selected, focus | REVIEW |
| EmptyState | terminal | empty, action, long copy | REVIEW |
| IconButton | action | label, focus, hover, disabled | FIXED |
| Input | form | default, focus, error, disabled | FIXED |
| Modal | overlay | dialog, close, Escape, focus return | FIXED |
| SearchBar | form | empty, query, clear, focus | REVIEW |
| Skeleton | loading | content-shaped loading | REVIEW |
| StateBadge | status | success, warning, danger, neutral, demo | FIXED |
| Textarea | form | default, focus, resize, error | FIXED |
| Toast | feedback | success, dismiss, reduced motion | REVIEW |

## Shared demo and navigation

| Component | Contract | Status |
|---|---|---|
| AppScreenHeader | title, eyebrow, canonical back, right action | FIXED |
| DemoPhoneShell | toolbar → phone → content → navigation | FIXED |
| DemoToolbar | role, scenarios, accessibility, scale, reset, exit | FIXED |
| PhoneFrame | desktop device / mobile full bleed | FIXED |
| BottomNavigation | five user zones, active parent group | FIXED |
| VolunteerBottomNavigation | five volunteer zones | FIXED |
| PartnerBottomNavigation | five partner zones, content group | FIXED |
| RoleSelect | role cards, selected state, CTA | REVIEW |
| AccessibilityMatch | score, label, reasons, mismatch | REVIEW |
| AccessibilityFeatureList | label, icon, status text, relevance | REVIEW |
| PlaceCard | media, match, status, actions | REVIEW |
| RouteOptionCard | duration, reliability, warning, selection | REVIEW |
| VerifiedBadge | demo verification disclosure | REVIEW |

## Role systems

| Area | Components | Status |
|---|---|---|
| User / Map | MapCanvas, MapHeader, FilterSheet, route/detail screens | REVIEW |
| User / Help | HelpRouteFrame, HelpComponents, HelpScreens | REVIEW |
| User / Opportunities | route frame, cards, detail/form screens | REVIEW |
| User / Social | SocialRouteFrame, SocialComponents, SocialScreens | REVIEW |
| User / Profile | ProfileRouteFrame, ProfileComponents, ProfileScreens | REVIEW |
| Volunteer | VolunteerAppShell, screens, cards, filters, active help | REVIEW |
| Partner | PartnerAppShell, screens, forms, analytics | REVIEW |
| Admin | AdminShell, tables, queues, charts, mobile summary | REVIEW |

## Landing

| Component | Visual responsibility | Status |
|---|---|---|
| LandingPrimitives | container, media, section title, timeline | REVIEW |
| LandingShowcases | product proof, route story, community verification | REVIEW |
| LandingForms | partner/investor interaction surfaces | REVIEW |
| LandingVisualGallery | editorial media variants | REVIEW |

## Review rule

Каждый route-specific visual pass обязан проверять не только shell, но и header, intro, каждую card group, controls, CTA-zone, terminal state и navigation.

## Финальный охват

- **73/73** файлов reusable components просмотрены через source audit и representative CUA smoke (71 baseline + 2 новых shared primitives).
- **31/31** уникальных визуальных шаблонов открыты в production runtime.
- Все baseline-статусы `REVIEW` закрыты финальным обходом; отметка оставлена в таблице как история первоначального аудита.
- Итог issue log: P0 **1/1**, P1 **4/4**, P2 **8/8**, P3 **5/5**.

## Final contract additions — 2026-09-20

| Component | Contract | Status |
|---|---|---|
| `AppIcon` | semantic Lucide map, 77 names, fixed stroke and accessible decorative output | FIXED |
| `Chip` | two sizes, nowrap, shrink-safe horizontal rail | FIXED |
| `DemoPresentationShell` | toolbar → PhoneFrame → scroll content for `/demo` and `/demo/scenarios` | FIXED |
| `LandingVisualGallery` | eight local assets distributed across semantic sections | FIXED |

Итоговый охват: **73/73 reusable component files**; два новых shared primitives — `AppIcon` и `DemoPresentationShell` — включены в audit.
