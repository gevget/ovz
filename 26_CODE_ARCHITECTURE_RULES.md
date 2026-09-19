# 26 — CODE ARCHITECTURE RULES
## Правила, чтобы Codex не устроил spaghetti

---

# 1. Tech baseline

- Next.js App Router
- TypeScript strict
- Tailwind
- shadcn primitives
- lucide-react
- Zustand preferred for demo global state
- Framer Motion only where useful

---

# 2. Folder structure

```txt
src/
  app/
    (landing)/
    demo/
      user/
      volunteer/
      partner/
      admin/
  components/
    ui/
    landing/
    demo/
    map/
    help/
    opportunities/
    community/
    profile/
    partner/
    admin/
  data/
  domain/
  hooks/
  lib/
  store/
  styles/
  types/
```

---

# 3. Domain logic separation

Do not compute Accessibility Match inside JSX.

Use:
`src/domain/accessibility/calculateMatch.ts`

Do not compute role permissions ad hoc.

Use:
`src/domain/permissions.ts`

Do not mutate raw seed arrays.

Use store actions.

---

# 4. Source of truth

- types -> `20_TYPES_AND_DATA_MODELS.ts`
- copy -> `23_UI_COPY_DICTIONARY.ts`
- routes -> route constants
- seed data -> data files
- state -> store

No duplicate constants.

---

# 5. IDs

Use stable string IDs:
- `place_clinic_12`
- `org_clinic_12`
- `user_anna`

Never use array index as entity identity.

---

# 6. Components

Rule:
- page orchestrates;
- component renders;
- domain function calculates;
- store changes shared state.

---

# 7. Server/client

Demo can be mostly client-side, but:
- default components server where possible;
- add `"use client"` only when state/event needed.

Avoid marking entire app tree client unnecessarily.

---

# 8. Data

No fetch needed for required demo.

Use:
- typed seed data;
- selectors;
- local mutations.

Optional API layer can be mocked behind repository pattern later.

---

# 9. Forms

Use shared form primitives.
Validation may use zod.

Do not hand-roll inconsistent validation messages.

---

# 10. Styling

- tokens in CSS variables;
- no arbitrary one-off hex colors in page JSX;
- use spacing scale;
- no inline styles unless truly dynamic.

---

# 11. Accessibility

No custom div-button.
Use semantic:
- button
- a
- input
- dialog
- nav
- main
- section

---

# 12. Error handling

Every dynamic route:
- if entity missing -> friendly state;
- no hard crash;
- log only development.

---

# 13. Avoid

- monolithic 1000-line pages;
- duplicated card markup;
- nested ternary soup;
- magic numbers;
- fake APIs;
- timeouts pretending backend except tiny visual demo transitions.

---

# 14. File size guideline

Prefer:
- components < 250 lines
- page orchestration < 200 lines
- domain functions small/testable

Not strict, but split when complexity grows.

---

# 15. Commit-style phases

After each phase:
- build passes;
- typecheck passes;
- core route manually checked.
