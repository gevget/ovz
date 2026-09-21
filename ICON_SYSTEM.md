# Icon System — Stage N.3

Статус: принят и проверен как единый визуальный контракт, 2026-09-20.

## Контракт

- Единственный набор иконок — `lucide-react@^0.468.0`; второй пакет и самодельные SVG не добавляются.
- Shared UI использует `AppIcon` из `src/components/ui/AppIcon.tsx`, а не импортирует отдельные иконки в каждом навигационном элементе.
- Базовая толщина штриха — `1.9`; иконка не является единственным носителем статуса и всегда сопровождается текстом, где это важно.
- Размеры: 16px для inline-подсказок, 18px для компактных действий, 20px для навигации, 24px для карточных акцентов, 28–32px для hero/empty states.
- Touch target кнопок и ссылок — не менее 44px; `aria-hidden="true"` у декоративных иконок задаётся самим wrapper.

## Семантическая карта

| Группа | Имена `AppIcon` |
|---|---|
| Навигация | `Home`, `Map`, `MapPin`, `MapPinned`, `Navigation`, `Route`, `List`, `Menu`, `ChevronDown`, `ChevronRight`, `ArrowLeft`, `ArrowRight`, `ExternalLink` |
| Роли и люди | `Accessibility`, `UserRound`, `Users`, `HeartHandshake`, `HandHelping`, `Building2`, `BriefcaseBusiness`, `GraduationCap`, `Headphones` |
| Действия | `Check`, `Plus`, `Minus`, `X`, `Search`, `Filter`, `SlidersHorizontal`, `Send`, `Share2`, `RotateCcw`, `MoreHorizontal`, `Camera` |
| Доступность и транспорт | `Footprints`, `BusFront`, `CarFront`, `LocateFixed`, `Volume2`, `Eye`, `Phone`, `Timer`, `Clock3` |
| Статусы и доверие | `CheckCircle2`, `CircleCheck`, `BadgeCheck`, `ShieldCheck`, `ShieldAlert`, `AlertTriangle`, `Info`, `Flag`, `LockKeyhole`, `CircleHelp`, `HelpCircle` |
| Контент и работа | `BookOpen`, `FileText`, `FileCheck2`, `Files`, `ClipboardList`, `ListChecks`, `Inbox`, `CalendarClock`, `CalendarDays`, `WalletCards`, `History`, `BarChart3`, `LayoutDashboard`, `Settings2`, `Link2` |
| Сообщество и эмоции | `MessageCircle`, `MessageCircleQuestion`, `MessageSquareWarning`, `Bell`, `Heart`, `Sparkles`, `Star` |

Карта содержит **77** семантических имён. Смысловое имя выбирается по роли действия, а не по внешнему сходству пиктограммы. Новая иконка сначала добавляется в карту и этот документ, затем используется в экранах.

## Проверка

- [x] Навигации пользователя, волонтёра и партнёра переведены на `AppIcon`.
- [x] Цвет и активность задаются контейнером навигации, не отдельным SVG.
- [x] Локальные дубли импортов разрешены только там, где иконка относится к уникальному содержимому страницы.
- [x] Декоративные иконки скрыты от скринридера; доступное имя остаётся у кнопки или ссылки.

## N.3 verification

- 77 semantic names remain mapped in `AppIcon`.
- 14 mapped names are exercised by shared UI in the current repository: 12 role-navigation names plus `ArrowLeft` and `X` in shared header/modal primitives.
- User, Volunteer and Partner bottom navigation use the same stroke, size, active-container and touch-target rules.
- Remaining 42 direct `lucide-react` import files are content-specific screen icons; they do not create a second navigation or shell system.

## Stage N.3 Pass F–I recheck — 2026-09-21

- Shared navigation, headers, modal close controls and role shells continue to use the `AppIcon` semantic map.
- Compact role navigation labels were verified at 390px and inside the 430px phone boundary on a 1440px viewport; no label is clipped in the reviewed shells.
- AppIcon inventory remains **77 mapped / 14 exercised by shared UI**. Unique content illustrations may still import Lucide directly; this is intentional and does not change the navigation icon contract.
