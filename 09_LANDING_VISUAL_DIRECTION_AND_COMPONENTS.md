# 09 — LANDING VISUAL DIRECTION & COMPONENTS
## Уточнение визуальной системы главной страницы

---

# 1. Visual concept

Лендинг должен выглядеть как современный product-tech проект, а не:
- НКО-презентация;
- медицинский сайт;
- госуслуга;
- типичный SaaS-шаблон.

Ключевые ассоциации:

- clarity;
- trust;
- city;
- navigation;
- human autonomy;
- real product;
- data-backed accessibility.

---

# 2. Основной визуальный приём

**Интерфейс — главный визуальный контент.**

Hero, секции, CTA и роли должны использовать реальные компоненты demo-приложения.

Не рисовать фейковые скриншоты отдельно.

---

# 3. Landing component inventory

## Structural

- `LandingHeader`
- `LandingSection`
- `SectionEyebrow`
- `Hero`
- `StickyProductShowcase`
- `FeatureGrid`
- `RoleSwitcher`
- `InvestorCTA`
- `PartnerCTA`
- `FAQ`
- `Footer`

## Product showcase

- `PhoneFrame`
- `PlaceCard`
- `AccessibilityMatch`
- `RoutePreview`
- `HelpRequestCard`
- `VacancyCard`
- `EventCard`
- `CommunityPost`
- `VerificationBadge`

## Decorative

- `FloatingFeatureBadge`
- `RouteLine`
- `SoftGrid`
- `MapDotPattern`
- `GlowBlob`

Decorative components должны оставаться subtle.

---

# 4. Hero composition

Desktop:

LEFT 45–50%
- eyebrow;
- H1;
- lead;
- CTA;
- trust line.

RIGHT 50–55%
- phone;
- floating cards;
- route line;
- subtle map texture.

Phone slightly tilted only if readability remains perfect.
Default: frontal.

---

# 5. Product visual hierarchy

Приоритет:

1. Interface
2. Map / route
3. Accessibility details
4. Data signals
5. Human photo only when it adds context

---

# 6. Photography

Если использовать фото:

Подходят:
- человек в городе;
- вход в здание;
- общественный транспорт;
- кафе / библиотека / кампус;
- волонтёр рядом с пользователем без постановочной жалости.

Не подходят:
- клинические крупные планы;
- «страдающий человек»;
- медицинские приборы;
- рукопожатия бизнесменов;
- stock CSR clichés.

---

# 7. Background system

Секции:

- `surface-white`
- `surface-soft`
- `surface-map`
- `surface-dark` — максимум 1–2 раза на весь лендинг

Dark section можно использовать:
- investors;
- final CTA.

---

# 8. Motion language

Micro motion:
- 160–240ms UI;
- 350–500ms section appearance;
- no elastic overshoot.

Hero:
- route line draws once;
- badges fade/slide;
- phone screen subtle transition.

Interaction:
- role switch updates phone screen;
- feature card hover highlights corresponding UI area.

---

# 9. Interface zoom

В некоторых секциях не показывать весь телефон.

Допустимы:
- crop карточки;
- enlarged detail;
- split-screen;
- exploded interface layers.

Это делает лендинг живее.

---

# 10. Do / Don't

## DO
- реальные продуктовые компоненты;
- большие заголовки;
- чистые поверхности;
- аккуратные линии;
- визуализация маршрутов;
- понятные статусы.

## DON'T
- 3D-иконки инвалидных колясок;
- случайные эмодзи;
- 20 разных оттенков синего;
- frosted glass на каждом блоке;
- слишком много градиента;
- «инновационный AI» как декоративный buzzword.
