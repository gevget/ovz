# 21 — COMPONENT CONTRACTS
## Контракты ключевых UI-компонентов

---

# 1. Rule

Каждый компонент должен быть:
- typed;
- reusable;
- state-aware;
- accessible;
- independent from page routing where possible.

Page decides navigation. Component emits events.

---

# 2. PlaceCard

```ts
type PlaceCardProps = {
  place: Place
  match?: AccessibilityMatchResult
  variant: "compact" | "map" | "list" | "featured"
  selected?: boolean
  onOpen?: (placeId: string) => void
  onFavorite?: (placeId: string) => void
  onRoute?: (placeId: string) => void
}
```

Required states:
- default
- selected
- favorited
- stale
- warning

---

# 3. AccessibilityMatch

```ts
type AccessibilityMatchProps = {
  result: AccessibilityMatchResult
  compact?: boolean
  onDetails?: () => void
}
```

Must display:
- score
- label
- reason summary
- critical mismatch if any

Never display score without explanation.

---

# 4. AccessibilityFeatureList

```ts
type AccessibilityFeatureListProps = {
  features: AccessibilityFeatures
  userNeeds?: UserNeedKey[]
  highlightRelevant?: boolean
}
```

Each row:
- label
- status icon
- text status
- optional relevance badge

---

# 5. RouteOptionCard

```ts
type RouteOptionCardProps = {
  route: RouteOption
  recommended?: boolean
  onSelect: (routeId: string) => void
}
```

Show:
- duration
- transfers
- reliability
- labels
- accessibility warnings

---

# 6. HelpRequestCard

```ts
type HelpRequestCardProps = {
  request: HelpRequest
  viewerRole: Role
  onOpen?: () => void
  onAccept?: () => void
}
```

Volunteer must not receive private exact contact before accepted state.

---

# 7. VacancyCard

```ts
type VacancyCardProps = {
  vacancy: Vacancy
  saved?: boolean
  applied?: boolean
  onOpen: () => void
  onSave?: () => void
}
```

---

# 8. VacancyDetail

Required sections:
- title / org
- salary
- work mode
- accessibility conditions
- description
- requirements
- CTA area

CTA states:
- default -> `Отправить резюме`
- applied -> `Отклик отправлен`
- closed -> disabled `Вакансия закрыта`

---

# 9. CourseCard / CourseDetail

Same event pattern.

Detail must show accessibility features:
- subtitles
- transcript
- screen reader
- flexible pace
- sign language
- offline venue access

---

# 10. EventCard

```ts
type EventCardProps = {
  event: Event
  joined?: boolean
  onOpen: () => void
}
```

---

# 11. PostCard

```ts
type PostCardProps = {
  post: Post
  liked?: boolean
  saved?: boolean
  followingAuthor?: boolean
  onOpen?: () => void
  onReact?: () => void
  onSave?: () => void
}
```

---

# 12. VerifiedBadge

Variants:
- organization
- author
- volunteer

Tooltip explains:
`Профиль прошёл проверку в рамках demo-модели.`

Do not imply official government verification.

---

# 13. FilterSheet

Props:
- groups
- selected values
- onApply
- onReset

Must:
- support keyboard
- preserve selections until apply
- have clear reset

---

# 14. SearchBar

Modes:
- global
- map
- opportunity

Must support:
- clear
- recent searches
- no-results state

---

# 15. PhoneFrame

```ts
type PhoneFrameProps = {
  children: React.ReactNode
  title?: string
  fullBleedMobile?: boolean
}
```

No device-specific trademark.

---

# 16. DemoToolbar

Controls:
- role switch
- scenarios
- accessibility
- reset
- exit

Desktop only.

---

# 17. StateBadges

Centralize:
- verified
- pending
- stale
- partial
- warning
- demo

Do not create one-off color labels per screen.

---

# 18. Acceptance

A component is done if:
- types compile;
- keyboard works;
- hover/focus/disabled exists;
- long Russian text does not break layout;
- 150% text works.
