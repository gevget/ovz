# 29 — API CONTRACT DRAFT
## Будущий backend-контракт

> Demo не требует backend.  
> Этот файл нужен, чтобы frontend не проектировался так, будто данные навсегда локальные.

---

# 1. Conventions

Base:
`/api/v1`

Response:
```json
{
  "data": {},
  "meta": {}
}
```

Error:
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "..."
  }
}
```

---

# 2. Auth

Future:
- `POST /auth/login`
- `POST /auth/logout`
- `GET /me`

Demo:
local role selection only.

---

# 3. Places

- `GET /places`
- `GET /places/:id`
- `GET /places/:id/accessibility`
- `POST /places/:id/reports`
- `PATCH /partner/places/:id/accessibility`

Filters:
- category
- lat/lng
- needs
- verified
- radius

---

# 4. Routes

- `POST /routes/plan`

Request:
```json
{
  "from": {"lat": 0, "lng": 0},
  "toPlaceId": "place_clinic_12",
  "needs": ["step_free", "elevator"]
}
```

Response:
list of route options.

---

# 5. Help

- `GET /help-requests`
- `POST /help-requests`
- `GET /help-requests/:id`
- `POST /help-requests/:id/accept`
- `POST /help-requests/:id/status`

---

# 6. Content

- `GET /articles`
- `GET /articles/:id`
- `GET /posts`
- `GET /events`
- `GET /courses`
- `GET /vacancies`

---

# 7. User

- `GET /me/profile`
- `PATCH /me/profile`
- `GET /me/favorites`
- `POST /me/favorites`
- `DELETE /me/favorites/:entityId`
- `GET /me/notifications`

---

# 8. Partner

- `GET /partner/dashboard`
- `GET /partner/organization`
- `PATCH /partner/organization`
- CRUD `/partner/vacancies`
- CRUD `/partner/courses`
- CRUD `/partner/events`
- CRUD `/partner/offers`

---

# 9. Admin

- `GET /admin/reports`
- `POST /admin/reports/:id/verify`
- `POST /admin/reports/:id/reject`
- `GET /admin/verifications`
- `GET /admin/analytics`

---

# 10. API abstraction in frontend

Even with local data, use repository functions:

```ts
placeRepository.getById(id)
helpRequestRepository.create(payload)
```

Demo implementation reads Zustand/seed data.

Future implementation can call HTTP without rewriting screens.
