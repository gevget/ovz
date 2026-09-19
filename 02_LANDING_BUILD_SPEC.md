# 02 — LANDING BUILD SPEC
## Инструкция Codex: публичный лендинг

# 1. Цель

Собрать premium product landing page, который одновременно:
- объясняет продукт;
- показывает социальную ценность;
- выглядит как технологический стартап;
- не выглядит как государственный портал;
- демонстрирует глубину продукта;
- ведёт пользователя в интерактивное demo;
- содержит отдельные CTA для партнёров и инвесторов.

# 2. Технологии

Использовать:
- Next.js App Router;
- TypeScript;
- Tailwind CSS;
- shadcn/ui для базовых primitives;
- lucide-react;
- Framer Motion только для аккуратных transitions;
- local assets;
- no backend;
- no auth.

Не подключать тяжёлые UI-библиотеки ради единичных компонентов.

# 3. Route
`/`

# 4. Desktop layout

Baseline:
- 1440 px design width;
- content max-width 1240–1280 px;
- большие поля;
- 12-column grid;
- section padding 120–160 px;
- hero почти в высоту первого viewport;
- sticky header после первого scroll.

# 5. Mobile

Design mobile-first from 390 px.

На mobile:
- hero phone mockup уходит ниже текста;
- карточки превращаются в stacks;
- никакого horizontal overflow;
- CTA не меньше 44 px;
- типографика не должна становиться микроскопической.

# 6. Visual direction

Не копировать старую презентацию.

Новый стиль:
- светлый фон;
- очень чистая типографика;
- мягкий технологичный blue/cyan accent;
- дополнительный warm accent для human/community слоя;
- большие радиусы 20–32 px;
- стекло использовать ограниченно;
- мягкие тени;
- сильная работа с whitespace;
- карты и интерфейсы — главные иллюстрации.

Избегать:
- стоковых фотографий «человек в инвалидной коляске улыбается в камеру»;
- синего «госуслуги»-стиля;
- медицинских клише;
- градиентов ради градиентов.

# 7. Hero

Desktop composition:

LEFT:
- eyebrow;
- H1;
- lead;
- CTA;
- microcopy.

RIGHT:
- большой реалистичный phone mockup;
- внутри реальный экран demo;
- 3–4 floating UI cards.

Phone не должен быть декоративным PNG. Он должен использовать тот же React screen component, что `/demo`.

# 8. Demo CTA behavior

Все CTA `Открыть демо` → `/demo`.

Role CTA:
- `/demo?role=user`
- `/demo?role=volunteer`
- `/demo?role=partner`
- `/demo?role=admin`

# 9. Sections

1. Header
2. Hero
3. Problem
4. Product pillars
5. Accessibility Match
6. Journey
7. Help
8. Work & Learning
9. Community
10. Live data / verification
11. Roles
12. Partners
13. Investors
14. Impact
15. Demo CTA
16. FAQ
17. Footer

# 10. Motion

Использовать motion для:
- появления блоков;
- mockup screen transitions;
- floating cards;
- route line animation;
- accordion FAQ.

Не использовать:
- parallax на каждом экране;
- endless marquee;
- aggressive blur;
- auto-playing text animations;
- движения, мешающие чтению.

Поддерживать `prefers-reduced-motion`.

# 11. Interactive product illustrations

Не рисовать product screenshots статичными изображениями, если компонент можно переиспользовать.

Например:
- Accessibility Match card;
- Place card;
- route preview;
- help request;
- vacancy card.

Все они должны быть настоящими React components.

# 12. Investor form

CTA `Обсудить проект` открывает modal.

Fields:
- Имя
- Компания
- Роль
- Email / Telegram
- Тип интереса: Инвестиции / Партнёрство / Пилот / Данные и интеграции
- Комментарий

Submit: показать success-state локально. Не отправлять реальные данные без backend.

# 13. Accessibility

Обязательно:
- keyboard navigation;
- semantic HTML;
- visible focus;
- correct headings;
- aria labels;
- contrast AA;
- no text inside raster images;
- reduced-motion support;
- 200% browser zoom without breakage;
- interactive target min 44x44;
- alt text.

# 14. SEO

Add:
- title;
- description;
- OpenGraph;
- Twitter cards;
- semantic sections;
- FAQ schema;
- Organization/Product schema only when factual data is available.

# 15. Acceptance criteria

Landing готов, если:
- весь контент из `01_LANDING_CONTENT.md` представлен;
- структура понятна без demo;
- кнопка demo работает;
- role CTA работают;
- hero phone использует shared demo components;
- desktop/mobile адаптивны;
- Lighthouse accessibility target >= 95 в demo environment;
- нет lorem ipsum;
- нет сломанных ссылок;
- нет claims со старыми цифрами из презентации.
