# 22 — STATE MACHINES
## Канонические переходы состояний

---

# 1. Help Request

```txt
draft
  -> submitted
submitted
  -> matching
  -> cancelled
matching
  -> accepted
  -> cancelled
accepted
  -> volunteer_on_way
  -> cancelled
volunteer_on_way
  -> active
  -> cancelled
active
  -> completed
completed
  -> terminal
cancelled
  -> terminal
```

Demo actions must respect this order.

---

# 2. Accessibility Report

```txt
submitted
  -> under_review
under_review
  -> verified
  -> rejected
verified
  -> terminal
rejected
  -> terminal
```

User can create.
Admin can review.
Partner can see related report for own place.

---

# 3. Partner Verification

```txt
incomplete
  -> pending
pending
  -> verified
  -> update_requested
update_requested
  -> pending
verified
  -> outdated
outdated
  -> pending
```

---

# 4. Vacancy Application

```txt
not_applied
  -> draft
draft
  -> submitted
submitted
  -> terminal (demo)
```

Do not simulate recruitment decision unless explicitly added later.

---

# 5. Event

```txt
available
  -> joined
joined
  -> cancelled_by_user
available
  -> full
available
  -> ended
```

---

# 6. Course enrollment

```txt
available
  -> enrolled
enrolled
  -> completed (optional demo)
available
  -> closed
```

---

# 7. Favorite

```txt
false <-> true
```

Shared across lists and details.

---

# 8. Follow

```txt
not_following <-> following
```

---

# 9. Partner place data

Change flow:

```txt
verified_data
  -> edited_local
  -> confirm_changes
  -> verified_data_updated
```

Upon confirm:
- user-visible place updates;
- lastConfirmedLabel changes to `Обновлено партнёром`;
- match recalculates.

---

# 10. Guided demo scenario

```txt
idle
  -> started
  -> step_n
  -> completed
  -> restartable
```

Never lock normal navigation.

---

# 11. Application state ownership

Shared global:
- role
- entities
- favorites
- help requests
- partner changes
- settings

Local:
- modal open
- current tab
- temporary form draft
- animation state
