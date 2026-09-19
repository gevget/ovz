# 32 — IMPLEMENTATION HANDOFF CHECKLIST
## Финальный чек-лист перед передачей Codex

---

# 1. Source of truth order

Codex читает в таком порядке:

1. `README.md`
2. `00_MASTER_PRODUCT_2026.md`
3. `03_DEMO_APP_MAP.md`
4. `11_APP_INFORMATION_ARCHITECTURE_AND_NAV_RULES.md`
5. `18_ROUTE_MANIFEST.md`
6. `19_SCREEN_REGISTRY.md`
7. `20_TYPES_AND_DATA_MODELS.ts`
8. `21_COMPONENT_CONTRACTS.md`
9. `22_STATE_MACHINES.md`
10. `23_UI_COPY_DICTIONARY.ts`
11. `26_CODE_ARCHITECTURE_RULES.md`
12. `31_SEED_DATA_CORE.ts`
13. remaining supporting docs

---

# 2. Before coding

Confirm:
- framework initialized;
- all docs copied into repo `/docs`;
- no contradictory old prototype code;
- fonts and icon package chosen;
- screenshots from old project treated only as historical reference.

---

# 3. Build order

Do not start 100 screens at once.

Order:
1. tokens
2. primitives
3. product cards
4. data
5. store
6. demo shell
7. user nav
8. flagship map flow
9. help
10. opportunities
11. community
12. profile
13. volunteer
14. partner
15. admin
16. landing
17. QA

---

# 4. Critical flows before breadth

Before adding minor screens, complete:

- Place -> Match -> Route -> Journey
- User request -> Volunteer accepts -> User sees update
- Partner accessibility update -> User sees recalculation
- Vacancy -> Apply
- AI -> deep link into real action

---

# 5. Demo integrity rules

- one entity = one canonical ID;
- shared changes persist across roles;
- reset returns seed state;
- no fake backend;
- no broken CTA;
- no placeholder Lorem Ipsum;
- no current real-world claims without source.

---

# 6. Visual review checkpoints

Review after:
- design system
- map flow
- partner flow
- landing hero
- full responsive pass

Do not postpone all design review until the end.

---

# 7. Performance guardrails

- no massive image bundles;
- lazy-load below fold;
- no unnecessary chart libs;
- avoid huge animation packages;
- bundle demo data sensibly.

---

# 8. Accessibility guardrails

Before final:
- keyboard
- focus
- contrast
- text scaling
- reduced motion
- semantic labels
- map list alternative

---

# 9. Definition of complete handoff

A new developer should be able to answer without asking product questions:

- What are the roles?
- What are the routes?
- What are the entities?
- What components exist?
- What are the states?
- What data exist?
- What are the core flows?
- What are the UI labels?
- What is the acceptance criteria?
- What must not be invented?

If any answer is unclear, update docs before implementation.

---

# 10. First Codex prompt

Recommended initial prompt:

> Изучи все файлы в `/docs` в порядке, указанном в `32_IMPLEMENTATION_HANDOFF_CHECKLIST.md`.  
> Не начинай разработку сразу.  
> Сначала создай `IMPLEMENTATION_STATUS.md`, опиши текущий стек, структуру repo, выявленные противоречия и план Phase 0–3.  
> После этого приступай только к Foundation + Design System + Demo Shell.  
> Не реализуй остальные разделы до успешной сборки и проверки первых фаз.

---

# 11. Second Codex prompt

After Phase 0–3:

> Продолжай строго по `07_CODEX_EXECUTION_PLAN.md`.  
> Следующий приоритет — seed data и полный flagship flow карты.  
> Используй типы из `20_TYPES_AND_DATA_MODELS.ts`, контракты из `21_COMPONENT_CONTRACTS.md`, состояния из `22_STATE_MACHINES.md`.  
> Не дублируй данные внутри page components.

---

# 12. Final QA prompt

> Проведи audit проекта по `27_QA_AND_ACCEPTANCE_TESTS.md`.  
> Исправь type errors, broken routes, dead CTA, inconsistent shared state, keyboard/focus issues и responsive overflow.  
> Обнови `IMPLEMENTATION_STATUS.md` фактами, без оптимистичных формулировок.
