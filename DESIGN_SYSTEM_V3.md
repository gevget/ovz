# Навигатор доступности — Design System V3

Статус: Stage N.3 завершён; документ — рабочий контракт визуальной системы.
Дата: 2026-09-20.

V3 усиливает существующую V2 поверх текущей IA, canonical state и N.1 shell. Он не меняет роли, маршруты, Accessibility Match, state machines, backend или содержание сценариев.

## Art direction

Интерфейс должен ощущаться спокойным, точным, человеческим и архитектурным. Сильные элементы получают контраст и пространство, вторичные — уменьшают визуальный шум. Цвет, glass и motion используются как средства ориентации, а не как декор.

## Layered system

`Token → primitive → shared shell → route frame → template → screen`.

Каждая повторяющаяся геометрия, цвет, тень, spacing или состояние сначала получает semantic token. Screen-local исключение допустимо только для map illustration, device geometry и editorial hero composition.

## Foundations

- Mobile-first reference: 390px; intentional adaptations: 430 / 768 / 1024 / 1440 / 1920.
- Grid discipline: `page-container` с gutter, content max-width и predictable 1/2/3/4-column transitions.
- Spacing: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128` плюс aliases `page-gutter`, `card-gap`, `section-gap`, `content-stack`, `inline-gap`.
- Typography: system grotesk with Cyrillic; app body 15–16px, secondary 14px, caption 13px minimum; no 11px product copy.
- Radii: `sm 12`, `control 14`, `card 20`, `feature 28`, `pill full`.
- Shadows: xs / sm / md / floating / device; content cards remain nearly flat, floating layers carry depth.

## Color architecture

Neutral-first canvas and surfaces remain the base. Primary blue preserves interaction identity. Semantic families: teal for accessibility/navigation, violet for intelligent/knowledge moments, green for success, amber for caution, coral for human attention, rose for selective community emphasis. One screen normally uses one accent plus semantic states.

No screen-level hex values are allowed outside explicitly documented map/editorial illustration tokens. High contrast replaces translucency with opaque surfaces and stronger borders.

## Component contracts

- `Button`: primary / secondary / ghost / danger, 40 or 44–48px, no label wrapping where avoidable.
- `Card`: content / interactive / selection / metric / alert / media; no unnecessary card nesting.
- `Input`, `Textarea`, `select`, `SearchBar`, `Toggle`: one family, 44–52px controls, label → 6–8px → control → helper/error.
- `Chip`/Tag: `sm` or `md`, `inline-flex`, `shrink-0`, `white-space: nowrap`, horizontal rail on mobile.
- `AppIcon`: semantic Lucide mapping, 16/18/20/24px defaults, 1.75–1.9 stroke, accessible wrapper.
- `AppScreenHeader`: compact nested header with canonical Back; landing root uses expressive header.
- `PhoneFrame`: all User/Volunteer/Partner product screens and presentation demo screens on desktop; Admin remains the only desktop exception.
- `BottomNavigation`: fixed inside phone, safe-area aware, one shared visual language for User/Volunteer/Partner.

## Motion and materials

Feedback 100–140ms, standard 160–220ms, surface 240–320ms. No bounce and no scale-up hover. Glass is restricted to sticky header, toolbar, navigation, modal, bottom sheet and landing composition; content cards use opaque surfaces.

## Accessibility gate

Visible focus, semantic landmarks, keyboard operation, 44px touch targets, 150% text scale, high contrast, reduced motion, alt text and non-color-only statuses remain mandatory. Full Axe/Lighthouse, screen reader, exact browser zoom and all six viewport screenshots are documented as environment limitations unless separately available.

## Baseline audit

- 125 route entries, 31 unique visual templates, 73 reusable TSX files, 8 local WebP assets.
- 46 screen/source hex literals, 18 arbitrary geometry/spacing utilities, 2 files with 11px UI copy, 44 component files importing Lucide directly.
- N.1 shell result is already green: 0 unexpected PhoneFrame violations, 0 missing canonical Back, 0 active-tab bugs; this must remain 10/10 after V3.

## Quality gate

Every dimension in `VISUAL_QUALITY_SCORECARD.md` must reach at least 9/10, except documented external-tool checks. The score must cite route/component evidence; it must not be raised merely by changing the number.

## Stage N.3 closure

- Token layer expanded with violet/coral/rose/teal accents, map illustration variables, quiet surfaces, semantic spacing aliases and hero/inset elevation.
- Shared primitives now enforce tactile buttons, nowrap badges/chips, field elevation, balanced headings and a single semantic back/close icon entry point.
- Landing composition keeps the existing image story distributed across problem, city, map, route, help, community and partner sections; no new product content or route was introduced.
- User, Volunteer and Partner screens remain inside `PhoneFrame`; Admin remains the only desktop exception. N.1 shell result remains 10/10.
- Final implementation metrics: 125/125 route entries, 31/31 visual templates, 73/73 reusable TSX component files, 8/8 existing local WebP assets audited, 0 new assets added in N.3, 14 semantic AppIcon names actually exercised by shared UI, 77 names mapped.
- Verified with `npm run typecheck`, `npm run lint`, `npm run build` (`448/448`) and CUA/AX production smoke after a clean server restart.
