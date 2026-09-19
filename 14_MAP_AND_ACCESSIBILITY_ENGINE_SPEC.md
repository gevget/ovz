# 14 — MAP & ACCESSIBILITY ENGINE SPEC
## Уточнение главного продуктового ядра

---

# 1. Map objective

Map answers:

> «Подходит ли мне это место и как мне туда добраться с минимальным риском?»

Not:
> «Что находится рядом?»

---

# 2. Place model

Minimum fields:

```ts
type Place = {
  id: string
  name: string
  category: string
  address: string
  coordinates: { lat: number; lng: number }
  schedule: string
  verified: boolean
  lastConfirmedLabel: string
  accessibility: AccessibilityFeatures
  rating?: number
  images: string[]
  organizationId?: string
}
```

---

# 3. Accessibility features

```ts
type AccessibilityFeatures = {
  stepFree: boolean | "partial" | "unknown"
  ramp: boolean | "partial" | "unknown"
  elevator: boolean | "partial" | "unknown"
  accessibleToilet: boolean | "partial" | "unknown"
  wideDoors: boolean | "partial" | "unknown"
  accessibleParking: boolean | "partial" | "unknown"
  tactileNavigation: boolean | "partial" | "unknown"
  hearingLoop: boolean | "partial" | "unknown"
  quietZone: boolean | "partial" | "unknown"
  assistanceAvailable: boolean | "partial" | "unknown"
}
```

---

# 4. Demo Accessibility Match

Use a transparent deterministic scoring model.

Example:

User needs:
- stepFree = required
- elevator = required
- accessibleToilet = preferred

Weights:
- required: 3
- preferred: 1

Scoring:
- true = full weight
- partial = 0.5
- unknown = 0.25
- false = 0

Score:
`earned / total * 100`

Show explanation.

Do not imply clinical or legal certification.

---

# 5. Match labels

85–100:
`Хорошо подходит`

60–84:
`Подходит частично`

0–59:
`Есть ограничения`

If a required feature = false:
also show:
`Критичное ограничение`

---

# 6. Route scoring demo

Route model:

```ts
{
  durationMin: 34,
  transfers: 1,
  stepFree: true,
  elevatorReliability: 0.96,
  obstacleCount: 0,
  accessibilityReliability: 0.96
}
```

Rank options:
1. accessibility reliability
2. critical compatibility
3. duration

Do not choose fastest by default if less accessible.

---

# 7. Route labels

Examples:

- `Надёжнее по доступности`
- `Быстрее на 6 минут`
- `Есть участок с ограничением`
- `Лифт на пересадке подтверждён`

---

# 8. Place freshness

Use:
- organization confirmation;
- community confirmation;
- moderator confirmation.

Store:
- source;
- date label;
- confidence.

---

# 9. Report issue

User chooses:
- вход;
- лифт;
- пандус;
- туалет;
- парковка;
- проход;
- информация;
- другое.

Can add:
- comment;
- photo placeholder.

---

# 10. Map accessibility

Provide list alternative.

Controls:
- zoom buttons;
- search;
- filters;
- selected place card.

Pins:
minimum 32 px hit region.

---

# 11. Demo map implementation

No need for paid maps.

Allowed:
- stylized local map;
- static SVG map;
- lightweight OpenStreetMap integration if available;
- generated mock coordinates.

Priority:
reliable demo behavior over real geocoding.

---

# 12. Acceptance

Map demo is successful if user can:

- search;
- filter;
- inspect;
- understand match;
- compare route options;
- see entrance;
- report issue;
- start journey mode.
