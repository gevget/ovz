# 28 — ANALYTICS EVENT MAP
## Будущая продуктовая аналитика

> В demo события можно логировать локально в console/debug panel.  
> Не подключать реальную аналитику без отдельного решения.

---

# 1. Naming

Format:
`object_action`

Examples:
- `place_opened`
- `route_built`
- `help_requested`

Use snake_case.

---

# 2. Core funnel events

## Landing
- `landing_viewed`
- `demo_clicked`
- `partner_cta_clicked`
- `investor_cta_clicked`

## Role
- `role_selected`
- `role_switched`

## Map
- `map_opened`
- `place_searched`
- `map_filter_applied`
- `place_opened`
- `accessibility_details_opened`
- `route_built`
- `route_selected`
- `journey_started`
- `issue_reported`

## Help
- `help_opened`
- `ai_navigator_opened`
- `ai_intent_selected`
- `article_opened`
- `specialist_opened`
- `help_requested`

## Opportunities
- `vacancy_opened`
- `vacancy_saved`
- `vacancy_applied`
- `course_opened`
- `course_enrolled`
- `event_opened`
- `event_joined`

## Community
- `post_opened`
- `post_reacted`
- `author_followed`
- `community_opened`

## Partner
- `partner_place_edited`
- `partner_accessibility_confirmed`
- `partner_content_created`

## Volunteer
- `volunteer_request_opened`
- `volunteer_request_accepted`
- `volunteer_request_completed`

---

# 3. Common properties

```ts
{
  role,
  entity_id?,
  entity_type?,
  source_screen?,
  scenario?,
  demo_session_id
}
```

---

# 4. Accessibility analytics

Track only product settings, not medical diagnosis.

Allowed:
- `content_mode`
- `text_scale`
- `high_contrast_enabled`

Avoid sending sensitive health information in real analytics unless explicitly designed with privacy review.

---

# 5. Debug analytics panel

In `?debug=1`:
show last 20 events.

Useful for QA.
