# Visual System Audit

Дата: 2026-09-19  
Scope: Stage N.2 — полный visual design system audit и polish. Product IA, роли, сущности, state machine и shell-инварианты Stage N.1 не меняются.

## Typography

- Базовая типографика уже использует системный sans stack и token-driven `ink` / `muted` цвета.
- Найдена повторяющаяся ручная типографика: `text-[11px]`, `text-[13px]`, `tracking-[...]`, а также одноразовые `text-[1.08em]`.
- Root-cause fix: 13px оставлен как минимальный UI-caption token для нижней навигации, остальные повторяющиеся caption/status варианты переводятся на `text-xs` и semantic tokens. Заголовки экранов унифицированы через `AppScreenHeader`.

## Spacing

- Основной ритм соответствует 4/8/12/16/20/24/32/40 px.
- Повторяются ручные `gap-2`, `p-4`, `p-5` и `mt-5/6`; это допустимые Tailwind scale values, но route-specific layouts иногда смешивают их без общего content wrapper.
- Root-cause fix: shared screen frames сохраняют единый `px-5 py-5` / `p-5` rhythm; screen-specific tweaks ограничены hero/detail cases.

## Containers

- Demo mobile content живёт внутри общего `DemoPhoneShell → PhoneFrame`.
- Admin — отдельный desktop shell по документации; на mobile остаётся summary state.
- Найдено, что inverse surfaces нельзя надёжно задавать локальным `bg-*` поверх базового `Card`; вводится явный `Card tone="inverse"`.

## Headers

- User, Map, Help, Opportunities, Social, Profile, Volunteer и Partner используют `AppScreenHeader` или совместимые route wrappers.
- Admin использует отдельный desktop topbar, что соответствует IA.
- Header title hierarchy: eyebrow 12/13 px, title 18/20 px, back target 44 px.

## Buttons

- `Button`, `IconButton`, `Chip` имеют targets не менее 44 px.
- У `Button` были hard-coded hover hex values; заменены semantic hover tokens.
- Screen-specific links styled as buttons остаются только там, где нужен link navigation; CTA states и disabled state сохраняются.

## Cards

- `Card` — shared border/radius/shadow base; `Card tone="inverse"` используется для dark hero surfaces.
- Default card remains white surface, soft cards use semantic surface tokens.
- Repeated one-off cards в route screens не меняют entity content, только visual composition.

## Forms

- `Input`, `Textarea`, `SearchBar` используют общие control height, radius, border и focus behavior.
- Native selects в Partner/Admin сохраняются как documented controls, но получают единый semantic surface styling.
- Проверены Help request, vacancy create, organization edit, accessibility edit и filter forms.

## Navigation

- BottomNavigation / VolunteerBottomNavigation / PartnerBottomNavigation сохраняют Stage N.1 contracts: ровно 5 пунктов, active parent groups, `shrink-0`, content-only scroll.
- DemoToolbar остаётся внешним desktop control bar и не добавляется внутрь PhoneFrame.
- Admin sidebar остаётся desktop-only; mobile summary не превращается в шестой user tab.

## Icons

- Используется существующий `lucide-react`; новая icon library не добавляется.
- Decorative icons имеют `aria-hidden`; controls получают visible/accessible labels.
- Непоследовательные текстовые glyphs в route content не расширялись функционально и отмечены как residual limitation.

## Badges / Chips

- `Badge`, `Chip`, `StateBadge`, `VerifiedBadge` сохраняют semantic status plus text; цвет не является единственным носителем значения.
- Repeated success/warning/danger backgrounds переводятся на tokens.

## Lists

- Map сохраняет pin + list alternative.
- Admin tables сохраняют table semantics; user lists используют cards/list rows.
- Long Russian labels проверены в 150% text state на representative mobile screens.

## Modals / Sheets

- `Modal` provides dialog semantics, Escape, backdrop close, focus return and keyboard loop.
- `BottomSheet` remains the existing modal alignment variant; no new overlay architecture added.
- Map selected-place sheet and social story viewer checked visually.

## Empty / Error / Success

- `EmptyState`, not-found, missing entity, submitted report and missing active help states checked.
- State feedback remains local/shared demo state; no backend behavior introduced.

## Phone Shell

- `DemoPhoneShell` is the single route frame for User / Volunteer / Partner mobile product screens.
- `PhoneFrame` disappears on narrow viewport and is centered on desktop; admin remains the documented exception.
- No Stage N.1 navigation/back regressions found in visual audit.

## Landing

- Landing follows the product-tech visual direction: real React demo UI, calm light canvas, dark navy hero surfaces, restrained accent use.
- Hero and section rhythm are coherent; inverse showcase surfaces are now tokenized to avoid Card background collisions.
- No pity-oriented imagery, fake product screenshots or new claims added.

## Admin

- Desktop shell is visually coherent: persistent sidebar, topbar, content canvas, metrics, tables, filters and detail-oriented controls.
- Overview and Reports were checked as primary admin templates; Users, Partners, Places, Help Requests, Content, Verification and Analytics were checked as route variants.
- Admin labels remain English where current product copy uses registry labels; no IA/copy rewrite is made in this stage.

## Responsive

- Representative desktop and PhoneFrame mobile states checked through CUA.
- 150% text control remains available; fixed navigation and content scroll remain separated.
- Browser automation did not provide a full six-viewport matrix or Axe/Lighthouse; this is reported as a limitation rather than guessed as PASS.

## Inconsistencies

1. Inverse hero cards mixed the shared `Card` base with local arbitrary backgrounds; one Partner hero rendered as a white card with white text.
2. Semantic success/warning/danger surfaces were repeated as hex values across screens and primitives.
3. Button hover colors were arbitrary hex values in the shared Button primitive.
4. Visual screen wrappers are structurally consistent after N.1, but older screen content still contains some route-local card/CTA styling.
5. Social feed content could widen its flex item beyond the phone viewport and clip the shared bottom navigation; fixed at the shared shell boundary and in the feed scroll container.
6. Dynamic CUA direct navigation can retain the last selected role in the toolbar; this is existing shared demo state behavior, not a visual IA change.

## Root-cause fixes

- Added semantic surface/status/hover tokens in `tokens.css` and Tailwind config.
- Added explicit inverse tone to the shared `Card` primitive and migrated dark hero cards.
- Removed repeated arbitrary semantic colors from shared Button, StateBadge, modal overlay and key status surfaces.
- Added `min-w-0` and wrapped labels in all three shared bottom navigations; constrained `DemoPhoneShell` and social feed content so five canonical tabs remain visible on narrow screens.
- Preserved the existing shell/header/navigation contracts instead of adding route-local replacements.

## Screen-specific fixes

The 20 weakest templates selected for this pass:

1. Landing Hero — semantic inverse surface and CTA color consistency.
2. Demo Role Select — role card rhythm and shared control tokens.
3. User Home — hero/card hierarchy and shared surface tokens.
4. Map — selected-place sheet and status surfaces.
5. Place Detail — match/status hierarchy.
6. Route Options — recommended route and reliability surface.
7. Journey — progress, warning and action hierarchy.
8. Help Home — navigator hero and search/control rhythm.
9. AI Navigator — scenario chips and response form rhythm.
10. Opportunities Home — inverse hero and section card consistency.
11. Feed — story rail, tabs and loading/empty treatment.
12. Profile — profile summary and nested section cards.
13. Volunteer Home — request card hierarchy and availability state.
14. Volunteer Active Help — empty/active state treatment.
15. Partner Dashboard — inverse hero defect and metric cards.
16. Partner Accessibility — form row and state control consistency.
17. Partner Content — content navigation cards and statuses.
18. Admin Overview — metrics and desktop canvas consistency.
19. Admin Reports — filter/table/status hierarchy.
20. Help Request form / not-found — form progression and terminal-state clarity.

The fixes are intentionally system-first: token → primitive → shared frame → route composition. No new feature, entity, role, route or interaction was introduced.
