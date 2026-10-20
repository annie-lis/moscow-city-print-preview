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
