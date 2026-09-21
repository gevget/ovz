# Component Design Audit — Stage N.3

Статус: финальный аудит Stage N.3, 2026-09-20.

## Inventory

| Family | Scope | Baseline finding | V3 direction |
|---|---|---|---|
| Tokens/config | `tokens.css`, Tailwind | semantic base exists; palette and spacing aliases incomplete | add V3 neutral/accent/geometry/material aliases |
| Actions | `Button`, `IconButton`, toolbar actions | usable but hover/elevation and CTA hierarchy vary | one tactile, quiet action contract |
| Surfaces | `Card`, `Badge`, `StateBadge`, `EmptyState` | cards are reusable but screen-local tones and nesting remain | six card roles, restrained elevation |
| Forms | `Input`, `Textarea`, selects, `SearchBar` | geometry mostly shared; select/focus variants drift | unified field anatomy and error rhythm |
| Tags | `Chip`, `Badge` | nowrap contract exists, but semantic Tag usage is mixed | one semantic tag family + rails |
| Icons | `AppIcon` plus direct Lucide imports | 77 mapped names, 44 files still import directly | wrapper for repeated UI, documented exceptions |
| Shell | `DemoPhoneShell`, `PhoneFrame`, headers, bottom navs | N.1 invariant passes | preserve exactly; improve material only |
| Landing | primitives, showcases, forms, gallery | strong content but dense local classes and repeated card patterns | editorial grid, story rhythm, proof hierarchy |
| Role modules | User, Volunteer, Partner, Admin | route families feel partly authored at different times | shared density, type and surface grammar |

## Baseline issues to close

1. Replace 46 source hex literals with semantic tokens or explicit map illustration variables.
2. Reduce 18 arbitrary geometry/spacing values to aliases or documented optical exceptions.
3. Remove the two remaining 11px UI labels; minimum meaningful text remains 13px.
4. Make secondary palette families available without turning screens into rainbow UI.
5. Consolidate common direct icon usage into `AppIcon` where it is repeated by shared UI.
6. Normalize card padding, section gaps, form control height, heading rhythm and CTA order across the role frames.
7. Improve landing hero and section grid without moving or deleting content.
8. Recheck long Russian labels at 150% and 390px.

## State coverage required in final pass

Default, hover, active, selected, focus, disabled, loading, error, success, empty, long-copy and reduced-motion states remain in scope. No state may be removed to make a screen look simpler.

## Completion evidence

Final status, 20 reference screens, 20 random screens, issue counts and route-by-route results will be recorded in `FULL_VISUAL_ROUTE_AUDIT.md`, `VISUAL_QUALITY_SCORECARD.md`, `IMPLEMENTATION_STATUS.md` and `FINAL_QA_REPORT.md`.

## Final result

| Check | Result |
|---|---:|
| Reusable component files | 73/73 audited |
| Shared visual primitives | 12/12 reviewed |
| Shared icon map | 77 names mapped |
| Semantic icon names exercised by shared UI | 14 |
| Direct Lucide import files | 42; remaining imports are screen-specific content icons |
| Typography minimum | 13px for product captions; previous 11px labels removed |
| Shell/navigation contract | preserved; N.1 = 10/10 |
| Product logic/IA/state changes | 0 |

The remaining direct Lucide imports are intentional page-content icons, not duplicate navigation or shell icon systems. Full Axe/Lighthouse and screen-reader execution remain external-tool limitations documented in the QA reports.

## Pass F–I delta

| Area | Result | Evidence |
|---|---|---|
| Semantic token layer | Closed for shared V3 roles | `tokens.css` aliases + Tailwind semantic color/spacing/type names |
| Card hierarchy | Improved | default Card is flat; elevated/floating roles retain depth; compact match is inset |
| Action motion | Improved | shared Button/Chip/IconButton/CTA no longer lift or scale on hover/press |
| Navigation labels | Closed | compact labels fit the 430px device on both mobile and desktop presentation |
| Runtime sample | 30/30 | 390px CUA: 15 User, 8 Volunteer, 7 Partner; 0 overflow/error |
| Full page inventory | 125/125 | static route matrix retained and cross-linked |

Remaining direct Lucide imports are content-specific icons. The six remaining source hex lines are legacy help/map illustration utility classes; their visual roles are documented as the only screen-local exceptions and do not introduce a second palette.
