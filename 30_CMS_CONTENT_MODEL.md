# 30 — CMS CONTENT MODEL
## Модель контента для будущей админки/CMS

---

# 1. Why

Articles, events, courses, vacancies and partner offers should not be hardcoded forever.

Demo can use seed data shaped like future CMS.

---

# 2. Article model

Fields:
- id
- slug
- title
- summary
- category
- body blocks
- contentMode variants
- related organizations
- related specialists
- status
- publishedAt
- updatedAt
- author
- sourceNote

---

# 3. Post model

- id
- authorType
- authorId
- title
- body
- media
- tags
- reactions
- status
- publishedAt

---

# 4. Event model

- id
- title
- description
- organizationId
- placeId
- startsAt
- endsAt
- accessibility summary
- registration type
- capacity
- status

---

# 5. Vacancy model

- id
- organizationId
- title
- salary
- workMode
- accessibility conditions
- description
- requirements
- status
- publishedAt

---

# 6. Course model

- id
- organizationId
- title
- description
- format
- duration
- accessibility features
- enrollment link/action
- status

---

# 7. Partner offer

- id
- organizationId
- title
- description
- category
- validFrom
- validTo
- terms
- status

---

# 8. Place editorial data

Separate:
- factual accessibility data
- editorial description
- media
- partner marketing content

Do not allow partner promo text to overwrite accessibility facts.

---

# 9. Workflow

Recommended:

`draft -> review -> published -> archived`

For accessibility facts:
separate verification workflow.

---

# 10. Content variants

For selected content support:
- normal
- simple

Simple version is curated content, not automatic truncation only.

Voice uses semantic normal/simple text.

---

# 11. Source / freshness

For sensitive factual articles, future CMS should store:
- source URL
- source title
- reviewedAt
- reviewer

Demo may omit real links but model should support them.
