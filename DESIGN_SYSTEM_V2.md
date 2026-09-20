# Навигатор доступности — Design System V2

Статус: Stage N.2 завершён  
Дата: 2026-09-20

Этот документ фиксирует визуальную систему, которая применяется поверх существующей IA и canonical state. Он не меняет роли, маршруты, сущности, расчёт Accessibility Match или shell-инварианты Stage N.1.

## Принципы

- Контент важнее декора: минимизируем шум, а не смысл.
- Один экран — один главный визуальный якорь и одно первичное действие.
- Связанные элементы группируются поверхностью и ритмом; независимые группы разделяются явным вертикальным интервалом.
- Акцентный цвет обозначает действие, выбор и ключевую идентичность продукта, а не украшает каждый элемент.
- Статус всегда передаётся текстом и иконкой, не только цветом.
- Стекло применяется только для отделения плавающего слоя: toolbar, navigation, modal, sheet и premium landing composition.
- Все существующие сценарии и состояния сохраняются.

## Foundations

### Цвет

| Токен | Назначение |
|---|---|
| `canvas` | тёплый нейтральный фон приложения |
| `surface` | основная рабочая поверхность |
| `surface-soft` | вторичная группа и тихий фон |
| `surface-elevated` | поднятая карточка и floating layer |
| `surface-overlay` | overlay с контролируемой прозрачностью |
| `ink`, `muted`, `subtle` | три уровня текста |
| `primary`, `primary-strong`, `primary-soft` | действие, выбор и фокус продукта |
| `accent`, `accent-soft` | вторичный спокойный акцент для маршрута и сообщества |
| `success`, `warning`, `danger`, `info`, `neutral` | единая семантика состояний |

Каждый semantic status имеет основной цвет, мягкий фон, границу и high-contrast вариант. В тёмной и контрастной темах значения переопределяются на уровне токенов.

### Типографика

- Системный grotesk с поддержкой кириллицы; декоративные шрифты не используются.
- App: display 30–32, H1 26–28, H2 21–22, H3 17–18, body 15–16, secondary 14, caption 13.
- Landing: hero clamp(48px, 6vw, 88px), lead 20–24, section heading 40–64.
- Admin: page title 30–36, section title 20–24, body 14–16, table 13–14.
- Bold используется как акцент. Иерархия строится размером, интервалом и контрастом.

### Ритм и контейнеры

Базовая шкала: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`.

Семантические aliases: `gutter`, `content`, `stack-xs`, `stack-sm`, `stack-md`, `stack-lg`, `section`.

- Основной mobile gutter: 16px.
- Phone content gutter: 20px.
- Карточки внутри одной группы используют `gap-3` или `gap-4`; между группами — `mt-6` и больше.
- Длинный текст ограничивается примерно 55–75 символами в строке.

### Радиусы и глубина

| Семейство | Значение |
|---|---:|
| control | 14px |
| card | 20px |
| sheet | 28px |
| feature | 28px |
| pill | 999px |

Content cards почти flat. Floating layers используют layered shadow. Device preview имеет наибольшую глубину. Modal и bottom sheet используют opaque/glass-компенсацию для читаемости.

## Component contracts

- `Button`: primary / secondary / ghost / danger; высоты 40 и 44–48px; одна primary CTA на смысловой экран.
- `Input`, `Textarea`, native `select`: label → 6–8px → control → helper/error; минимум 44px; единый focus ring.
- `Card`: `default`, `soft`, `inverse`, `elevated`; содержимое не должно повторно задавать случайную поверхность.
- `Badge` и `StateBadge`: короткий текст + semantic status; не заменяют объяснение.
- `AppScreenHeader`: canonical back target 44px, title, optional eyebrow/right action, compact для вложенных экранов.
- `BottomNavigation`: пять canonical пунктов, safe-area, active state через спокойный фон и вес, без тяжёлой pill-обводки.
- `Modal` / `BottomSheet`: focus management, Escape, close target 44px, overlay, logical action area, scroll внутри слоя.
- `PhoneFrame`: декоративный device только на desktop; mobile — full-bleed app viewport.

## Responsive matrix

Проверяем 390, 430, 768, 1024, 1440 и 1920px. На 390 app не должен ощущаться сжатым desktop. Phone content сохраняет mobile layout на desktop. Admin остаётся отдельным desktop shell с documented mobile summary.

## Motion

Feedback 100–140ms, standard 160–220ms, surface transition 240–320ms. Без bounce. `prefers-reduced-motion` и пользовательская настройка отключают несущественное движение.

## Accessibility gate

WCAG AA, видимый focus, семантические landmarks, keyboard navigation, минимум 44px для touch targets, поддержка 150% text scale, high contrast, reduced motion, alt/aria labels и отсутствие color-only states.

## Stage N.2 implementation notes

Foundation → primitives → shared shells → screen templates → individual screens. Любое повторяющееся значение сначала становится token/utility; оправданные optical fixes остаются локальными и документируются в audit.

## Финальный результат Stage N.2

- Проверено route entries: **125/125**.
- Открыто в CUA уникальных визуальных шаблонов: **31**.
- Аудировано reusable component files: **73** (71 baseline + `AppIcon` + `DemoPresentationShell`).
- Проверено публичных визуальных assets: **8**.
- Audit issues: **18 найдено / 18 исправлено** — P0: 1/1, P1: 4/4, P2: 8/8, P3: 5/5.
- Сохранены shell-инварианты Stage N.1: `DemoToolbar → PhoneFrame → content → BottomNavigation`, five canonical user zones, content-only scroll и canonical back targets.
- Исправлен только composition-дефект существующих role-home маршрутов: volunteer и partner теперь показывают уже существующие полноценные экраны вместо legacy placeholder; новые функции и сущности не добавлялись.

Ограничения финального audit: точные viewport-прогоны 390/430/768/1024/1440/1920, полный Axe/Lighthouse, screen-reader audit и browser zoom 200% недоступны текущему инструментальному окружению. Они не объявляются пройденными.

## Final contract completion — 2026-09-20

- `AppIcon` — единая semantic wrapper-точка на 77 Lucide-иконок; карта и правила вынесены в `ICON_SYSTEM.md`.
- `Chip` имеет ровно два размера (`sm`, `md`), `inline-flex`, `shrink-0`, `whitespace-nowrap`; длинные наборы фильтров используют горизонтальный rail с `overflow-x-auto`.
- Для `/demo` и `/demo/scenarios` добавлен `DemoPresentationShell`: те же настройки темы и масштаба, `DemoToolbar`, существующий `PhoneFrame`, внутренний scroll-контейнер; product bottom navigation там не добавляется, поскольку это presentation screens.
- Визуальные assets и их распределение зафиксированы в `VISUAL_ASSET_MANIFEST.md`; фотоматериалы остаются локальными и не меняют сценарии.

### Internal visual quality gate

| Категория | Оценка / 10 |
|---|---:|
| Типографика | 9 |
| Отступы и ритм | 9 |
| Цвет и контраст | 9 |
| Поверхности и glass | 9 |
| Иконография | 9 |
| Теги и rails | 9 |
| Карточки | 9 |
| Формы | 9 |
| Заголовки | 9 |
| Навигация | 9 |
| Изображения | 9 |
| Landing | 9 |
| Mobile shell | 9 |
| Admin desktop | 9 |
| Accessibility contract | 9 |

Итоговая внутренняя оценка visual direction: **9/10**. Это design-system gate и не подменяет недоступные в текущем окружении Axe/Lighthouse, screen-reader и точные six-viewport прогоны.
