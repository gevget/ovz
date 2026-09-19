# 07 — CODEX EXECUTION PLAN
## Пошаговый план реализации

> Codex должен выполнять этапы по порядку. После каждого этапа проект обязан оставаться запускаемым.

# PHASE 0 — Repo audit

Если проект уже существует:
1. изучить текущую структуру;
2. определить framework;
3. проверить existing components;
4. не ломать существующий build;
5. составить короткий TODO в `IMPLEMENTATION_STATUS.md`.

Если проекта нет: create Next.js + TypeScript project.

# PHASE 1 — Foundation

Создать:
```txt
/app
  /page.tsx
  /demo/...
/components
  /landing
  /demo
  /ui
/data
/lib
/styles
```

Setup:
- Tailwind;
- CSS variables;
- fonts;
- icons;
- metadata;
- responsive container;
- base accessibility styles.

Acceptance:
- `/` opens;
- `/demo` opens;
- no TS errors;
- no console errors.

# PHASE 2 — Design system

Build first:
- Button
- IconButton
- Card
- Badge
- Chip
- Input
- Search
- Tabs
- Modal
- Sheet
- Toast
- Avatar
- VerifiedBadge
- EmptyState
- Skeleton

Then product components:
- AccessibilityMatch
- PlaceCard
- EventCard
- VacancyCard
- CourseCard
- HelpRequestCard
- PostCard

Do not build whole pages before these exist.

# PHASE 3 — Demo shell

Implement:
- `/demo`
- RoleSelect
- PhoneFrame
- DemoToolbar
- role state
- localStorage
- reset state
- desktop / mobile behavior.

Acceptance:
- select all 4 roles;
- switch role;
- reset;
- phone frame responsive.

# PHASE 4 — Seed data

Implement `06_DEMO_DATA.md`.
No hardcoded entity data inside page components.

Acceptance:
- all key entity lists render from data modules;
- same organization reused across screens.

# PHASE 5 — User app navigation

Implement:
- Home
- Map
- Help
- Opportunities
- Profile

Build bottom nav.

Acceptance:
- nav state visible;
- browser back works;
- no dead page.

# PHASE 6 — Map flow

Implement first polished flagship flow:
Map → results → place → accessibility details → route → route options → journey mode.

Then:
- report issue;
- taxi demo;
- help at location;
- emergency disclaimer.

This is the most important demo flow.

# PHASE 7 — Help flow

Implement:
- Help home
- AI mocked assistant
- articles
- specialist
- organization
- booking
- ask question
- volunteer request
- request status

Acceptance: AI sample CTA deep-links to real screens.

# PHASE 8 — Opportunities

Implement:
- vacancy list/detail/apply;
- resume;
- education;
- course;
- event;
- club;
- partner offer.

All primary CTAs interactive.

# PHASE 9 — Community / feed

Implement:
- feed;
- tabs;
- stories;
- post;
- author;
- community;
- events;
- friends;
- dating.

Do not overbuild chat backend. Use mocked conversations where necessary.

# PHASE 10 — Profile

Implement all screens from `03_DEMO_APP_MAP.md`.
Must include:
- accessibility profile;
- appearance;
- notifications;
- my requests;
- my posts;
- resume.

# PHASE 11 — Volunteer role

Implement cross-role request continuity.

Test:
1. user creates request;
2. switch volunteer;
3. request appears;
4. volunteer accepts;
5. switch user;
6. status changed.

This is a required showcase scenario.

# PHASE 12 — Partner role

Implement:
- dashboard;
- org profile;
- accessibility checklist;
- requests;
- vacancies;
- courses;
- events;
- offers;
- analytics.

Required cross-role scenario:
1. Partner changes elevator availability.
2. Switch to user.
3. Clinic place reflects new state.
4. Accessibility Match recalculates.

# PHASE 13 — Admin role

Build lightweight admin demo. Do not spend more effort than on Map or Partner flows.

# PHASE 14 — Landing content

Only after product UI components exist.
Build landing from `01_LANDING_CONTENT.md`.
Reuse demo product components in landing illustrations.

# PHASE 15 — Landing polish

Add:
- hero composition;
- sticky header;
- section transitions;
- investor modal;
- demo CTAs;
- responsive;
- SEO.

# PHASE 16 — Accessibility pass

Run manually:
- keyboard;
- focus;
- contrast;
- screen reader labels;
- 200% zoom;
- 150% app text;
- simple mode;
- reduced motion.

Fix issues before visual polish.

# PHASE 17 — Demo polish

Add:
- microinteractions;
- transitions;
- realistic device frame;
- success states;
- tooltips;
- better content;
- shadows.

No new functionality at this stage.

# PHASE 18 — QA

## Functional
- role switch
- reset
- all nav
- favorites
- follow
- join
- apply
- help request
- volunteer accept
- partner update
- report issue

## Routing
- refresh works
- deep links work
- no 404 inside known routes

## Responsive
- 390
- 430
- 768
- 1024
- 1440
- 1920

## Quality
- no console errors
- no TS errors
- no hydration errors
- no broken image
- no lorem ipsum
- no dead CTA

# PHASE 19 — Build report

Create `IMPLEMENTATION_STATUS.md` with:
- completed screens;
- partially completed;
- known issues;
- demo flows;
- routes;
- next steps.

# Definition of Done

Project is finished when:
1. Landing fully explains product.
2. Demo opens from hero.
3. User can select role.
4. User demo has complete primary IA.
5. Flagship map flow feels production-like.
6. Volunteer cross-role flow works.
7. Partner cross-role update works.
8. Demo data are consistent.
9. Mobile and desktop work.
10. Accessibility modes visibly change the interface.
11. No old presentation styling remains.
12. No old grant numbers are reused as current investment figures.
