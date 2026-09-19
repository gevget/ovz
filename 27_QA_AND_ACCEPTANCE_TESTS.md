# 27 — QA & ACCEPTANCE TESTS
## Given / When / Then сценарии

---

# 1. User finds accessible place

GIVEN role = user and needs include step-free + elevator  
WHEN user opens Clinic 12  
THEN Accessibility Match is shown  
AND reasons include relevant features  
WHEN user opens route options  
THEN accessible route is recommended over faster incompatible route.

---

# 2. Report issue

GIVEN user is on place detail  
WHEN user reports broken elevator  
THEN report appears in shared state  
AND success state is shown  
AND admin can see same report.

---

# 3. Volunteer cross-role

GIVEN user creates help request  
WHEN role changes to volunteer  
THEN request is visible  
WHEN volunteer accepts  
THEN request status = accepted  
WHEN role changes back to user  
THEN user sees same accepted status.

---

# 4. Partner accessibility update

GIVEN Clinic 12 elevator = true  
WHEN partner changes elevator to false and confirms  
THEN shared place data updates  
WHEN user opens Clinic 12  
THEN elevator shows unavailable  
AND Accessibility Match recalculates.

---

# 5. Vacancy application

GIVEN user has resume  
WHEN user opens vacancy and sends resume  
THEN application state becomes submitted  
AND CTA changes to `Отклик отправлен`.

---

# 6. Event join

GIVEN event available  
WHEN user joins  
THEN event state for user becomes joined  
AND CTA updates.

---

# 7. Favorites consistency

WHEN user favorites place from list  
THEN place detail shows favorite  
AND Profile/Favorites contains same place.

---

# 8. Notifications deep link

GIVEN notification links to help request  
WHEN clicked  
THEN correct request opens.

---

# 9. Missing entity

WHEN route contains unknown ID  
THEN app does not crash  
AND shows friendly error  
AND offers return action.

---

# 10. Accessibility modes

WHEN text scale = 150%  
THEN no primary CTA clips.

WHEN reduced motion enabled  
THEN non-essential animations disabled.

WHEN high contrast enabled  
THEN text, borders and focus become stronger.

---

# 11. Keyboard

User must be able to:
- navigate header
- open/close dialog
- use tabs
- activate primary CTA
- move through forms

Focus visible at all times.

---

# 12. Landing

WHEN visitor clicks `Открыть демо`  
THEN `/demo` opens.

WHEN visitor selects partner role CTA  
THEN `/demo?role=partner` or partner home opens.

---

# 13. Forms

Invalid submit:
- fields keep entered values;
- errors visible and announced.

Valid submit:
- success state;
- no page crash.

---

# 14. Responsive

Required:
- no horizontal scroll on 390;
- phone centered on 1440;
- admin usable on 1024+;
- landing readable at 200% zoom.

---

# 15. Build gates

Before Done:
- `npm run build`
- typecheck
- lint
- no console errors in main flows
- no dead primary CTA
