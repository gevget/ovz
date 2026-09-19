# 25 — ASSET MANIFEST
## Что нужно подготовить для интерфейса и лендинга

---

# 1. Principles

Assets must support product storytelling.

Prefer:
- UI
- maps
- entrances
- places
- people in natural context

Avoid generic disability stock imagery.

---

# 2. Required asset groups

## A. Branding
- logo light
- logo dark
- favicon
- OG cover

## B. Place images
At least 18 cover images/placeholders:
- clinic exterior
- clinic entrance
- cafe
- library
- coworking
- theatre
- public service center
- education center
- sports center
- park
- pharmacy
- supermarket
- community space
- cinema
- museum
- station
- transport hub
- employment center

## C. Entrance images
At least 5:
- step-free entrance
- ramp
- elevator lobby
- tactile entrance
- partially accessible entrance

## D. User avatars
12 fictional avatars or neutral generated placeholders.

## E. Volunteer avatars
6.

## F. Specialist avatars
8.

## G. Partner/organization logos
10 fictional logos/monograms.

## H. Post media
8–12 images.

## I. Event media
8–12 images.

---

# 3. Map assets

Needed:
- base stylized city map SVG or local map layer;
- place pins;
- route line states;
- user location marker;
- route step icons;
- entrance marker.

Do not bake text into map image.

---

# 4. Landing visual assets

Hero:
- no photo required;
- interface is enough.

Optional:
- 2–4 contextual photography blocks.

If photos unavailable:
use interface-led layout rather than weak stock.

---

# 5. Placeholder policy

Until final assets:
- use aspect-ratio boxes with meaningful gradients or generated neutral images;
- never show broken image icons;
- keep consistent image dimensions.

---

# 6. Image ratios

- Place card: 4:3
- Event card: 16:10
- Post: 4:3 or 1:1
- Avatar: 1:1
- Hero interface: device frame
- Entrance: 4:3

---

# 7. File naming

```txt
/assets/
  brand/
  places/
  entrances/
  users/
  volunteers/
  specialists/
  organizations/
  posts/
  events/
  map/
```

Examples:
`place-clinic-12-cover.webp`
`place-clinic-12-entrance.webp`
`avatar-anna.webp`

---

# 8. Optimization

- webp/avif when possible;
- lazy loading below fold;
- width/height specified;
- no 5MB hero images;
- alt text data-driven.
