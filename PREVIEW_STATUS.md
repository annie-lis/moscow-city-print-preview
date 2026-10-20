# Approved Home preview — shared site foundation

Updated: 2026-10-20.

- Source: `annie-lis/moscow-city-print`, branch `work`, commit `929c950`.
- Accepted visual baseline: `54c52f4:work/main_hero_preview.html`.
- Hero remains approved/frozen; banner bytes and geometry are unchanged.
- Pages are generated from the shared child-theme PHP templates by
  `tools/render-static.php`. Do not independently edit generated HTML/assets.
- Published files: `index.html`, `vacancies.html`, `site-assets/assets/`.
- Shared header/footer, markers, grid, Geologica and scripts now come from one
  theme source. The same templates are tested in real local WordPress.
- Pixel comparison with the accepted Home passed at 1920/1440/1280/1024/768/390
  with Geologica loaded. Existing tablet/mobile overflow and collapsed mobile
  client slots are documented in source `tests/FOUNDATION_REPORT.md`.

Theme structure and next page integration:
https://github.com/annie-lis/moscow-city-print/blob/work/wordpress/moscow-city-print-child/README.md

Preview: https://annie-lis.github.io/moscow-city-print-preview/

Current generated Home SHA-256: `1d0f641940541807c102ac5cbebbf13e737497d6a1a4c209de187333afd3688d`.

## Universal internal template

- Source work commit: `6777057`.
- Demo: `internal-template.html`, with noindex/nofollow, not linked from navigation.
- Shared theme template: `templates/internal.php`; single, equal split and wide sections.
- Internal-only CSS: `site-assets/assets/css/internal.css`.
- Accepted Home, vacancies, header/footer and existing shared resources are unchanged.
- Full-bleed backgrounds, content-anchored divider and responsive sections verified at
  1920/1440/1280/1024/768/390/320 in static and actual WordPress rendering.
- Existing mobile header overflow remains; new sections do not add overflow.
- Documentation: https://github.com/annie-lis/moscow-city-print/blob/work/wordpress/moscow-city-print-child/INTERNAL_TEMPLATE.md

## Final internal footer marker

Source work commit: `b3e3ed7`. Internal pages now use an unnumbered contacts
marker, preserving the existing number-slot width. Home keeps 04 and its HTML
is unchanged. No CSS, section, header, footer content or geometry changes.
Desktop/tablet/mobile and Home pixel parity checks passed; original mobile
header overflow remains unchanged.

## Explicit footer marker parameter

Source work commit: `238d43a`. Footer numbering no longer depends on
`is_front_page()` inside the shared footer. Default footer is unnumbered;
Home explicitly passes `marker_number => 04`. Existing internal-template HTML
contains an empty number span, followed by the unchanged rule and КОНТАКТЫ.
All three preview HTML files remain byte-identical; no CSS or layout changes.
WordPress/static checks and all 12 Home pixel comparisons passed.
