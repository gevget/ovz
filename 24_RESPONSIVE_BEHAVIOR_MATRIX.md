# 24 — RESPONSIVE BEHAVIOR MATRIX

---

# 1. Breakpoints

Use approximate:
- 390 mobile
- 430 large mobile
- 768 tablet
- 1024 small desktop
- 1440 desktop
- 1920 wide

Avoid pixel-perfect dependency on exact breakpoints.

---

# 2. Landing

| Element | 390 | 768 | 1024+ |
|---|---|---|---|
| Header | compact + menu | compact | full nav |
| Hero | text then phone | stacked/split | 2-column |
| Phone | 100% width max 390 | 420 | 430–460 |
| Feature grid | 1 col | 2 col | 3 col |
| Sticky showcase | off | optional | on |
| Partner logos/cards | scroll/grid | grid | grid |
| FAQ | full | full | max 900 |

---

# 3. Demo shell

## Mobile < 768
- no decorative device;
- app uses full viewport;
- DemoToolbar moves into compact top drawer;
- bottom navigation respects safe area.

## Tablet 768–1023
- phone frame centered;
- toolbar top;
- optional scenario panel collapsible.

## Desktop 1024+
- phone centered;
- toolbar outside;
- guided hints outside phone.

---

# 4. App screen rules

| Component | Mobile | Tablet/Desktop phone |
|---|---|---|
| BottomNav | fixed | fixed inside device |
| BottomSheet | 80–92vh max | within phone |
| Full form | stacked | stacked |
| Card list | 1 col | 1 col |
| Map results | bottom sheet | bottom sheet |
| Long detail | scroll | scroll |

Remember: phone content keeps mobile layout even when desktop browser is wide.

---

# 5. Admin

Admin is exception.

## Mobile
Show message:
`Для удобного просмотра admin-demo откройте его на большом экране`
and simplified summary.

## 1024+
Desktop shell:
- sidebar 240–280
- content
- tables
- charts

---

# 6. Text scaling

At 150%:
- nav labels may abbreviate only if still clear;
- cards expand vertically;
- no clipped buttons;
- fixed heights avoided.

---

# 7. Orientation

Mobile landscape:
- app usable;
- avoid forced portrait;
- phone mockup may disable decorative shell.

---

# 8. Test matrix

Required manual snapshots:
- 390x844
- 430x932
- 768x1024
- 1024x768
- 1440x900
- 1920x1080
