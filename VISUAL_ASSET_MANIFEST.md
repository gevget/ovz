# Visual Asset Manifest — Stage N.3

Все публичные визуальные материалы — локальные WebP-файлы без удалённых URL и без изменения продуктовой логики. В Stage N.3 новые растровые assets не добавлялись: переартикулированы и проверены все 8 существующих файлов.

| Файл | Смысловой блок | Использование | Alt-текст |
|---|---|---|---|
| `public/assets/landing/accessible-entrance.webp` | Доступная среда | секция проблемы и входа | «Доступный вход в городское здание» |
| `public/assets/landing/city-route.webp` | Городской маршрут | hero/маршрутный контекст | «Городской маршрут с понятной навигацией» |
| `public/assets/landing/community-cafe.webp` | Сообщество | проверка мест сообществом | «Посетители проверяют доступность небольшого кафе» |
| `public/assets/landing/library-interior.webp` | Возможности | блок мест и знаний | «Светлый интерьер библиотеки с доступным проходом» |
| `public/assets/landing/park-promenade.webp` | Досуг | блок маршрута и отдыха | «Доступная прогулочная дорожка в парке» |
| `public/assets/landing/partner-venue.webp` | Партнёры | блок организаций | «Команда организации готовит доступное пространство» |
| `public/assets/landing/tram-interior.webp` | Транспорт | транспортный сценарий | «Салон городского трамвая с местом для коляски» |
| `public/assets/landing/volunteer-route.webp` | Помощь | волонтёрский сценарий | «Волонтёр сопровождает человека по городскому маршруту» |

Правило размещения: изображения распределяются по смысловым секциям лендинга и карточкам мест; не собираются в единую фотоленту. В интерфейсе используется `next/image` или существующий image primitive с заданным `alt`, `sizes`, `object-cover` и резервным цветом поверхности. Новые remote images в Stage N.2 не добавлялись.

## N.3 placement check

| Check | Result |
|---|---:|
| Existing local image files audited | 8/8 |
| New image files added in N.3 | 0 |
| Landing semantic placements | 8 distributed placements |
| Missing alt text in audited landing placements | 0 |
| Remote image URLs introduced | 0 |
| Image role changed | no; crop, surface and spacing only |

The landing keeps imagery in context: city/problem, map/place, route/transport, help/community, freshness and partner ecosystem. This directly addresses the previous single-gallery composition issue.

## Stage N.3 Pass F–I recheck — 2026-09-21

- Existing local WebP assets: **8/8 present and reused**.
- Landing imagery is distributed by meaning: entrance/problem, city context, venue/map, library/match, tram/journey, cafe/help, park/community and volunteer route/freshness/roles.
- CUA runtime at 390px measured 9 rendered landing images with non-zero, section-specific bounds; no image caused horizontal overflow.
- No new image generation was needed in this pass; no remote image dependency was introduced.

## Stage N.3 Final Closure Pass F–I — 2026-09-21

| Metric | Result |
|---|---:|
| Existing local assets audited | **8/8** |
| New assets | **0** |
| Landing rendered image placements | **9** non-zero placements across semantic sections |
| Remote image dependencies | **0** |
| Missing alt text in reviewed landing placements | **0** |
| Visual templates with useful image treatment | Landing hero/sections, place context and route/help/freshness/role showcases |

Решение не добавлять новые изображения принято после полного CUA-прохода: существующие WebP уже покрывают город, транспорт, место, помощь, сообщество, партнёрскую среду и роль волонтёра. Для событий, публикаций и community detail не добавлялась нерелевантная декоративная фотография: эти экраны используют text-first сценарии и реальные demo-данные без media-вложения. Это сохраняет смысловую иерархию и не возвращает прежнюю композицию «все фотографии в одном месте».

Landing просмотрен полностью на 390px и 1440px. В секции «Город в контексте» при сверхбыстром холодном скролле зафиксирован краткий момент декодирования изображения; после штатной загрузки image bounds ненулевые, alt присутствует, overflow отсутствует. Это не является постоянным layout-дефектом и не создаёт P0.
