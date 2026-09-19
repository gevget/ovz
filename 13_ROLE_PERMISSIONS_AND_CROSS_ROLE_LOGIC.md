# 13 — ROLE PERMISSIONS & CROSS-ROLE LOGIC

---

# 1. Purpose

Demo must show that roles are not isolated mockups.

They operate on shared entities and shared state.

---

# 2. User permissions

Can:
- view places;
- favorite;
- report issue;
- create help request;
- join event;
- apply vacancy;
- enroll course;
- follow users;
- create post;
- edit own profile.

Cannot:
- verify organization;
- edit place official data;
- moderate users;
- see partner analytics.

---

# 3. Volunteer permissions

Can:
- all basic user actions;
- see eligible help requests;
- accept request;
- update help status;
- complete request;
- set availability radius.

Cannot:
- see private user details before acceptance;
- edit official organization data.

---

# 4. Partner permissions

Can:
- edit own organization;
- update accessibility checklist;
- publish vacancy;
- publish course;
- publish event;
- respond to incoming request;
- view demo analytics.

Cannot:
- edit other organizations;
- moderate platform;
- access private user profile fields.

---

# 5. Admin permissions

Can:
- moderate content;
- review reports;
- review verification;
- view platform-level demo analytics;
- resolve accessibility reports.

Cannot:
- impersonate private user in demo unless explicitly entering preview mode.

---

# 6. Shared state examples

## Help request

User creates:
`help_001`

Volunteer sees:
same ID.

Volunteer accepts:
`status = accepted`

User sees:
same updated object.

---

## Place accessibility

Partner changes:

`place_clinic_12.elevator = false`

User sees:
- warning;
- changed Accessibility Match;
- updated freshness;
- route may change.

---

## Accessibility report

User creates report.

Admin sees:
same report in moderation.

Admin marks:
`verified`

Place shows:
`Есть подтверждённое изменение`.

---

# 7. Privacy rules in demo

Before volunteer accepts:
show:
- first name;
- approximate area;
- task;
- time.

Hide:
- exact phone;
- exact home address.

After accepted:
allow mocked contact details.

---

# 8. Role switch UI

Role switch is outside phone in DemoToolbar.

Switching:
- preserves shared state;
- resets current route to role home;
- shows toast:
`Роль изменена: Волонтёр`

---

# 9. Role badges

Inside app only where relevant:
- Волонтёр
- Партнёр
- Проверенная организация

Do not label ordinary user as `ОВЗ пользователь`.

---

# 10. Demo story continuity

Required presentation narrative:

1. User finds clinic.
2. User creates volunteer request.
3. Switch volunteer.
4. Volunteer accepts.
5. Switch partner.
6. Partner reports elevator unavailable.
7. Switch user.
8. Match score and route update.
9. Switch admin.
10. Admin sees related accessibility report.

This proves ecosystem logic.
