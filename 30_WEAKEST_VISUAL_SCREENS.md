# 30 weakest visual screens — Stage N.2

Это контрольный список representative screens, через которые прошёл третий route/art-direction pass. «Исправлено» означает выравнивание существующего UI, а не добавление новой функции.

| Экран | Основная слабость | Исправление |
|---|---|---|
| Landing Hero | слишком большой первый блок | компактный hero, контекстное изображение |
| Landing Accessibility | пустой визуальный ритм | распределённое изображение и секционный gap |
| Landing Community | карточки слипались | явный gap и статусная иерархия |
| Demo Role Select | слабый выбор роли | selected/hover/focus карточки |
| Demo Scenarios | desktop-композиция вне shell | общий `PhoneFrame` presentation shell |
| User Home | конкурировали hero и match | один главный акцент, спокойная вторичная карточка |
| User Map | перегруженный список | ритм PlaceCard, статусы, фильтр |
| Place Detail | слабая иерархия | media → match → actions |
| Accessibility Match | результат был плоским | score, причина и mismatch разделены |
| Route Options | неясна надёжность | выделены время, пересадки и предупреждение |
| Journey | прогресс терялся | компактная status/progress композиция |
| Help Home | много равных CTA | один primary action и группы карточек |
| AI Navigator | сценарные варианты слипались | чипы и форма выровнены |
| Opportunities Home | много направлений | hero и card rails разделены |
| Vacancy Detail | действие терялось | CTA закреплён в иерархии detail |
| Event Detail | неясны место и вход | metadata/status grouping |
| Feed | плотный поток | surface, avatar и vertical rhythm |
| Community | слабые статусы | semantic badge и действие |
| Profile | перегруженный заголовок | header и sections разнесены |
| Accessibility Profile | поля без групп | form contract и helper text |
| Volunteer Home | legacy placeholder | подключён полноценный существующий home |
| Active Help | критичное действие не выделялось | danger/success hierarchy |
| Partner Home | legacy placeholder | подключён полноценный существующий dashboard |
| Partner Accessibility | формы были плотными | form spacing и status block |
| Admin Overview | таблица конкурировала с summary | desktop rhythm и summary blocks |
| Admin Reports | статусы выглядели одинаково | semantic status system |
| Admin Verification | доверие не читалось | shield/badge hierarchy |
| User Help Request | шаги неочевидны | step rhythm и primary CTA |
| Partner Content | много типов сущностей | content group и active nav |
| Admin Analytics | слабая data hierarchy | chart/card spacing |
| Not-found | нейтральный тупик | понятный возврат и empty state |

Итого: **30/30 контрольных экранов исправлены** в рамках существующей IA и сценариев.

## Stage N.3 Final Closure evidence — 2026-09-21

Ниже закреплён реальный список из 30 benchmark-экранов с причиной и закрытием. Строка `Not-found` из исторического списка остаётся отдельным regression check и не входит в эти 30 benchmark-экранов.

| # | Экран | Слабость | Корень проблемы | Закрытие |
|---:|---|---|---|---|
| 1 | Landing Hero | Первый экран был слишком длинным | Не хватало плотной иерархии CTA и продукта | Компактный hero и PhoneFrame demo |
| 2 | Landing Accessibility | Слабый визуальный ритм | Смысловой блок не имел локального контекста | Фото места и match-композиция |
| 3 | Landing Community | Карточки визуально слипались | Не был задан card gap на цепочке проверки | Явный gap и status hierarchy |
| 4 | Demo Role Select | Роли выбирались без достаточного сигнала | Selected state был слабым | Card selected/hover/focus contract |
| 5 | Demo Scenarios | Сценарии выглядели как desktop-страница | Отдельный presentation shell | Общий PhoneFrame и Back |
| 6 | User Home | Hero и match конкурировали | Два одинаково сильных акцента | Один главный акцент и спокойная secondary card |
| 7 | User Map | Карта и список перегружали первый экран | Слабое разделение карты, фильтров и sheet | Map rhythm, filter rail, bottom sheet |
| 8 | Place Detail | Неясно, с чего начинать проверку | Media, match и actions были равноправны | Media → match → actions |
| 9 | Accessibility Match | Результат был плоским | Причины и итог не разделялись | Score, reasons и mismatch blocks |
| 10 | Route Options | Надёжность маршрута читалась поздно | Не было явного recommended state | Выделены время, пересадки и предупреждения |
| 11 | Journey | Прогресс терялся | Слишком много равных шагов | Timeline и текущий шаг |
| 12 | Help Home | Слишком много равных CTA | Сервисы и задачи не группировались | Один primary action и card groups |
| 13 | AI Navigator | Варианты сценария слипались | Quick replies не имели ритма | Чипы, поле и action hierarchy |
| 14 | Opportunities Home | Много направлений конкурировали | Не было entry point | Hero и rails по типам возможностей |
| 15 | Vacancy Detail | Главное действие терялось | CTA находился среди метаданных | Закреплена action hierarchy |
| 16 | Event Detail | Неясны место и вход | Metadata была одним плотным текстом | Группы даты, места и доступности |
| 17 | Feed / Post | Поток выглядел плотным | Нет поверхности между автором, текстом и actions | Surface, avatar и vertical rhythm |
| 18 | Community | Слабое доверие к статусам | Badge не отделялся от основного текста | Semantic status и join action |
| 19 | Profile | Профиль напоминал список настроек | Не было personal hub hierarchy | Sections и summary header |
| 20 | Accessibility Profile | Поля воспринимались одной формой | Не хватало групп и helper text | Form groups и понятное сохранение |
| 21 | Volunteer Home | Был legacy placeholder | Роль не использовала существующий home flow | Полноценный home dashboard |
| 22 | Active Help | Критичное действие не выделялось | Status, timer и cancel имели один вес | Success/danger hierarchy |
| 23 | Partner Home | Был legacy placeholder | Не был подключён существующий partner dashboard | Полноценный partner home |
| 24 | Partner Accessibility | Чек-лист был плотным | Поля и подтверждение не разделялись | Field spacing и status block |
| 25 | Admin Overview | Summary конкурировал с очередями | Не было уровней операционного внимания | Summary cards и controlled density |
| 26 | Admin Reports | Статусы выглядели одинаково | Не хватало semantic state language | Status badges и detail panel |
| 27 | Admin Verification | Доверие читалось слабо | Тип сущности был техническим | Локальные entity labels и shield hierarchy |
| 28 | User Help Request | Шаги были неочевидны | Не было короткого progress rhythm | Step rhythm и primary CTA |
| 29 | Partner Content | Типы материалов смешивались | Английские табы и слабая группировка | Русские tabs, content groups и active nav |
| 30 | Admin Analytics | Слабая data hierarchy | Метрики, бары и качество были равноправны | Metric grid, chart spacing и quality section |

### 20 benchmark routes, открытых повторно в closure pass

`/`, `/demo`, `/demo/scenarios`, `/demo/user/home`, `/demo/user/map`, `/demo/user/map/place/place_clinic_12`, `/demo/user/map/place/place_clinic_12/accessibility`, `/demo/user/map/route/options`, `/demo/user/help`, `/demo/user/opportunities`, `/demo/user/community/community_cinema`, `/demo/user/profile`, `/demo/user/profile/accessibility/edit`, `/demo/volunteer/home`, `/demo/volunteer/requests/help_001/active`, `/demo/partner/home`, `/demo/partner/organization/accessibility`, `/demo/partner/content`, `/demo/admin/reports`, `/demo/admin/analytics`.

Все 30 benchmark-экранов закрыты; новых P0/P1 по shell, Back, navigation, overflow и overlay containment не осталось.
