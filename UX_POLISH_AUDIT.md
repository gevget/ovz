# UX Polish Audit — 2026-09-20

## Цель

Поднять визуальное качество проекта «Навигатор доступности» с базового уровня до устойчивого 8/10 за счёт system-first изменений: общие правила применяются ко всем страницам, а затем проверяются representative screens и route families. Product IA, роли, сущности, state machine и Stage N.1 navigation contracts не менялись.

## Что улучшено на верхнем уровне

- Добавлены семантические роли `accent`, `accent-soft`, `warm` и `warm-soft` с dark-theme overrides.
- Введены общие `.page-container`, `.page-section`, `.surface-grid` и `.landing-media`.
- Зафиксирован единый вертикальный ритм страниц: 4rem / 5rem / 6rem по breakpoint вместо разрозненных больших отступов.
- Shared `Button`, `Card`, `Input` и `Badge` получили согласованные тени, focus-ring, border и hover/press transitions.
- Убрана ошибка, при которой декоративная маска hero осветляла основной текстовый контент.
- Для глубоких demo-ссылок toolbar показывает роль текущего route, даже если store был открыт с другой стартовой ролью.
- Внутренние шаги landing showcase сокращены с чрезмерного `space-y-28` / `min-height: 24rem` до более плотного сценарного ритма.

## Landing

Landing теперь использует 8 оптимизированных WebP-изображений в `public/assets/landing/`:

1. hero — городской маршрут;
2. problem — доступный вход;
3. gallery — кафе;
4. gallery — низкопольный трамвай;
5. gallery — волонтёрский маршрут;
6. gallery — партнёрское пространство;
7. gallery — парковая прогулка;
8. gallery — библиотека.

Вынесен `LandingVisualGallery`: editorial grid с шестью сюжетами, captions и доступными alt-текстами. Hero стал двухслойным: интерактивный demo-screen плюс контекстное изображение маршрута. Problem-flow получил реальное изображение входа. Секции перестали иметь «пустой» ритм между заголовком, контентом и следующим блоком.

## Demo coverage

Общие изменения автоматически применяются ко всем существующим `125` route entries и `31` визуальному template, зафиксированным в `FULL_VISUAL_ROUTE_AUDIT.md`. Через браузер повторно проверены:

- landing hero и gallery;
- User Map со списком и выбранным PlaceCard;
- Partner Profile через deep-link;
- shared toolbar role selection;
- существующие shell, fixed bottom navigation и back contracts Stage N.1.

PlaceCard теперь показывает тематические реальные изображения вместо gradient-placeholder, сохраняя `role="img"`, доступное имя, favorite action, match и action buttons.

## Проверки и ограничения

- `npm run typecheck` — passed.
- `npm run lint` — passed без warnings/errors; остаётся штатное предупреждение Next.js о deprecated `next lint`.
- `npm run build` — passed; сгенерировано `448/448` статических страниц.
- Dev server поднят на `http://localhost:3100`.
- Полные Axe/Lighthouse, screen-reader audit, browser zoom 200% и точная matrix `390/430/768/1024/1440/1920` не выполнялись из-за доступных инструментов; выполнен CUA/AX + screenshot fallback.
- Изображения в проекте — WebP; исходные PNG остаются в `.codex/generated_images` и не являются частью runtime bundle.

## Противоречия

Новых продуктовых противоречий не найдено. Сохраняется ранее задокументированный conflict `06_DEMO_DATA.md` (`help_001: open`) против canonical `matching` в `20/22/31`; runtime продолжает использовать `matching` по правилу `33_MASTER_INDEX_AND_CONFLICT_RULES.md`. Следующий продуктовый Stage canonical-документацией не задан и самостоятельно не начинался.

## Incremental pass: 8.0 → 8.5

- Device frame переведён на semantic `device` token с поддержкой dark/high-contrast themes; нижняя навигация получила отдельную мягкую elevation-тень.
- Demo toolbar стал sticky, с аккуратным border/backdrop и единым `control-select` focus state. Это сохраняет контекст роли, accessibility и text scale во время длинного scroll.
- Textarea и IconButton теперь визуально совпадают с Input/Button по focus, transition и hover behavior.
- Role cards получили subtle lift/active shadow без изменения selection semantics.
- Admin shell локализован на русский язык, а active section и title корректно определяются для nested admin routes.
- QA отдельно поймал и устранил stale Next chunk после build: dev был остановлен и поднят заново перед финальным CUA smoke. Source/runtime после чистого старта стабилен.

## Landing composition and Russian copy pass — 2026-09-20

- Убран отдельный плотный фотоблок из шести карточек: изображения теперь распределены по смысловым разделам лендинга — контекст города, вход, карта, доступность, путь, помощь, сообщество, контроль данных и экосистема.
- Hero больше не растягивается на полный экран: высота телефонного прототипа и вертикальные поля уменьшены, заголовок получил более компактный desktop-размер.
- В блоке «Проверка сообществом» добавлен явный `space-y-3` между карточками; в сценарном showcase сокращены высоты шагов и промежутки.
- Убраны видимые англоязычные подписи `Community Verification`, `Accessibility Match`, `Journey mode`, `Guided demo`, `consumer`, `production` и связанные демо-лейблы; пользовательский текст приведён к русской терминологии.
- `LandingVisualGallery` больше не монтируется в лендинг; runtime использует распределённые изображения через `LandingShowcases`.

## Дополнительный проход русской терминологии — 2026-09-20

- Вынесена единая нормализация пользовательских подписей в `src/lib/localizeVisibleCopy.ts` и `src/lib/localizeVisibleNode.ts`.
- Общие бейджи, кнопки, заголовки экранов, раздел помощи, профиль и кабинет партнёра теперь не показывают англоязычные демо-термины.
- Тестовые данные помощи очищены от видимых `AI`, `Accessibility Match`, `screen reader`, `shared state`, `placeholder` и других англоязычных фрагментов; внутренние идентификаторы и значения типов не менялись.
