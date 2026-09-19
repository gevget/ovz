# 05 — DESIGN SYSTEM & ACCESSIBILITY

# 1. Design goal

Product should feel:
- modern;
- calm;
- human;
- precise;
- premium but not luxury;
- accessible without looking like a special-needs interface.

# 2. Visual language

Base:
- very light warm-neutral background;
- white surfaces;
- dark navy text;
- clear blue primary;
- green for confirmed / accessible;
- amber for partial;
- red only for actual risk / emergency;
- purple optional for AI/community accents.

Never rely only on color.
Every status needs:
- icon;
- label;
- optional explanation.

# 3. Suggested tokens

Use CSS variables.

```css
--bg: #F7F8FA;
--surface: #FFFFFF;
--surface-2: #F0F3F7;
--text: #0E1A2B;
--text-muted: #657386;
--primary: #296EF2;
--primary-soft: #EAF1FF;
--success: #17865B;
--warning: #A66A00;
--danger: #C93A3A;
--border: #DFE5EC;
--focus: #6A5CFF;
```

Exact colors may be tuned, but contrast must remain compliant.

# 4. Typography

Use one high-quality grotesk with Cyrillic.
Preferred:
- Inter;
- Manrope;
- Onest;
- another open font with strong Cyrillic.

Avoid decorative fonts in interface.

Scale inside app:
- Display: 28–32
- H1: 24–28
- H2: 20–22
- Body: 16–17
- Secondary: 14–15
- Caption: minimum 13

Do not use 10–11 px labels.

# 5. Spacing

4px base grid.
Core spacing: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40.

# 6. Radius

- small: 12
- control: 14–16
- card: 20
- large card: 24–28
- sheet: 28 top radius

# 7. Touch targets

Minimum 44 x 44 px. Prefer 48–52 px for important controls.

# 8. Cards

Cards are the main design pattern.

Card anatomy:
- optional media;
- type / category;
- title;
- key metadata;
- accessibility status;
- CTA;
- secondary action.

Do not overload every card with all fields.

# 9. Accessibility Match component

Display: `92% подходит вам`

Never imply medical certainty.

Under score:
- 4–6 most relevant features;
- `Показать все условия`.

States:
- 85–100: Хорошо подходит
- 60–84: Подходит частично
- <60: Есть ограничения

Do not hide reasons behind color.

# 10. Map UI

Map must always have list alternative.

Map screen:
- search top;
- category chips;
- filter;
- floating actions;
- bottom sheet results;
- selected card.

Do not rely on tiny map pins.
Selected pin must have strong visual difference.

# 11. Emergency UI

Emergency actions must look clearly different.
Use red sparingly.

Demo must show:
> Это демонстрационный интерфейс. Он не вызывает реальные экстренные службы.

# 12. Accessible modes

## High contrast
Increase text contrast, borders, focus and icon visibility.

## Large text
Support at least 100%, 125%, 150%. Layout cannot break.

## Simple mode
Reduce decorative UI, secondary metadata, long paragraphs and number of simultaneous actions.
Use explicit verbs.

Bad: `Далее`
Good: `Построить маршрут`

## Reduced motion
Respect OS setting and app setting.

# 13. Voice / screen reader

Use semantic hierarchy.

For accessibility features list:
Bad: `✓ ✓ ✓`
Good: `Лифт: доступен`

Map has text alternative:
`12 мест найдено. Ближайшее — 450 м.`

# 14. Icons

Use one pack: lucide-react.
Rules:
- stroke icons;
- 20–24 px;
- icon-only buttons always have tooltip/aria-label;
- no mixing random icon packs.

# 15. Illustration strategy

Primary visuals:
- maps;
- UI;
- city details;
- entrances;
- accessibility objects;
- route diagrams;
- community photos if needed.

Avoid pity-oriented imagery.

# 16. Component states

Every major component:
- default;
- hover;
- active;
- selected;
- focus;
- disabled;
- loading;
- error.

# 17. AA checklist

Before finish:
- text contrast;
- keyboard;
- focus visible;
- modal focus management;
- field labels;
- errors announced;
- no color-only states;
- zoom 200%;
- reduced motion;
- mobile target size;
- alt text;
- screen reader nav labels.
