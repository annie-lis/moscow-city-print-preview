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

## Universal internal template accepted / frozen

Approved by the user on 2026-10-20. Implementation baseline: source work
commit `238d43a`; acceptance record: `602d13f`. This universal template is the
required shared foundation for About and Services. Internal footer remains
unnumbered. No further visual/layout/type/header/footer changes without a
separate task. Only acceptance documentation changed; all preview HTML and
assets are preserved.

## About technical migration

Source work commit: `99d55c0`. New `about.html` delegates to the frozen universal
internal template. Composition: 01/02 split (paper), five-stage wide 03
(paper-alt), 04/05 split (paper). No images or CTA in About content.
Only new About CSS is five-stage columns and hidden empty stage number slots.
Home, generic internal demo, vacancies and all existing shared assets are
unchanged. Static and real WordPress checked at 1920/1440/1280/1024/768/390/320.
New About content has no overflow; inherited mobile header overflow remains.
FAQ material links from the existing reference remain temporary `#` links.
Pending: final placement/replacement for «Помогаем дизайну выйти за границы
страниц брендбука». Current block 02 keeps the explicitly requested wording.

Preview: https://annie-lis.github.io/moscow-city-print-preview/about.html
Documentation: https://github.com/annie-lis/moscow-city-print/blob/work/wordpress/moscow-city-print-child/ABOUT.md

## Pages publication verification and final About wording

Final headline: «Помогаем дизайну выйти за пределы страниц брендбука.».
Only this phrase changed in About; CSS and all other page contents are unchanged.
Added `.github/workflows/verify-pages.yml` to read the Pages configuration and
verify HTTP 200 plus byte-for-byte source match at the exact public `/about.html`.
The previous dynamic Pages run built from main/root and included about.html in
the archive, but its deployment had not completed when the missing page was reported.


## First-deployment foundation 0.4.0

Source work commit: `986e1dd`.

About is now a minimal neutral scaffold; earlier dense About entries above are
historical experiments and are not the current release composition.

Published routes: index, about, services, blog, contacts, privacy-policy,
requisites, sitemap, vacancies and 404, all `.html`.
Services uses established 01–05 text through the common universal components;
it is a foundation, not a final visual migration or real-works carousel.
Blog/legal/requisites are scaffolds. Contacts/sitemap/vacancies/404 are functional.
All pages share the existing Home-based CSS; no new page-specific CSS.
Home screenshot parity is unchanged at all 6 baseline widths. New navigation
links point to real static pages. Lower crop alignment now also reacts to
content expansion; WP additionally provides real post pagination and HTTP404.

Installable child theme: `downloads/moscow-city-print-child-0.4.0.zip` (SHA256
sidecar alongside it). Parent Twenty Twenty-One required.
Deployment instructions, without production changes:
https://github.com/annie-lis/moscow-city-print/blob/work/wordpress/moscow-city-print-child/DEPLOYMENT.md


## Navigation and empty routes 0.4.1

Source work commit: `90d97a1`.

Primary: About → Services → Products → Contacts; logo links to index.html.
Utility footer: privacy policy → payment and delivery → requisites.
Sitemap/vacancies links removed from utility row; legacy pages retained.
New empty title-only routes: products.html, payment-delivery.html,
artwork-requirements.html. No content or section structure added to them.
Common CSS/JS/fonts/assets and Home sections unchanged. Existing About,
Services and Contacts content preserved. Four-item menu expands the inherited
mobile header overflow to 617px; responsive rules were deliberately not changed.
168 route/viewport checks passed; 14 normalized static/WP Home screenshot
comparisons show no changes beyond requested navigation.
Installable updated theme: downloads/moscow-city-print-child-0.4.1.zip.


## Requisites 0.4.2 (2026-10-21)

Source work commit: `6521b23`.

requisites.html now uses two shared single sections: 01 Реквизиты (paper),
02 Документы (paper-alt), then the unchanged shared footer.
Approved legal data: ИП Лис Анна Владимировна, ИНН 772425521744,
ОГРНИП 320774600200503. Documents email: mailto:office@moscowcityprint.ru.
No additional contacts, imagery, CTA, styling or page-specific CSS.
All other HTML pages, common assets/header/footer remain unchanged.
Seven widths checked in static and actual WordPress (14 checks passed).
Theme package: downloads/moscow-city-print-child-0.4.2.zip.
Publication verification now gates on exact public requisites.html content.


## Payment and delivery 0.4.3 (2026-10-21)

Source work commit: `fd90dbe`.

payment-delivery.html uses three shared single sections: 01 Оплата / 02 Доставка /
03 Важно, paper / paper-alt / paper, then the unchanged shared footer.
Practical short copy: B2B/IP, bank transfer, invoice/contract, closing documents
and EDI; pickup, Moscow courier, agreed transport-company shipment to regions;
separate delivery cost/timing and readiness/deadline/heavy-run caveats.
No new rates, deadline promises, imagery, map, icons, CTA or page-specific CSS.
All other HTML pages and shared assets/components remain byte-identical.
14 static/WordPress viewport checks passed (1920 through 320).
Updated theme: downloads/moscow-city-print-child-0.4.3.zip.
Public verification gates on exact payment-delivery.html content.


## Shared footer numbering restored 0.4.4 (2026-10-21)

Source work commit: `7ea3755`.

Latest user instruction supersedes the earlier unnumbered internal footer.
All internal footers now show number → rule → КОНТАКТЫ through shared logic.
Default is next number after the last numbered content section, including split;
without numbered sections it is 01. Missing/empty marker args use the same rule.
Requisites 03, Payment/delivery 04, About 02, Services 06, internal demo 06.
Home's computed 04 remains unchanged; its HTML is byte-identical.
Only footer digits changed in generated internal pages; no CSS/JS/assets changed.
168 route/viewport checks and 18 screenshot comparisons passed. All other pixels
and footer/legal/crop coordinates remain unchanged.
Theme: downloads/moscow-city-print-child-0.4.4.zip.


## Compact requisites 0.4.5 (2026-10-21)

Source work commit: `439147d`.

Requisites and Documents no longer repeat large headings beneath markers.
Legal fields use 3 equal columns, labels Geologica 500 and ordinary 300 values;
at <=650px fields stack. Existing gutter, no cards/frames/dividers.
Documents has two short paragraphs, the office mailto and user-supplied 1–5
working day preparation time. Footer remains shared, number 03.
Only new CSS is unique-class, requisites-only; no shared CSS/layout changes.
All other HTML pages remain byte-identical. 14 static/WordPress checks passed.
Theme: downloads/moscow-city-print-child-0.4.5.zip.


## Requisites spacing 0.4.6 (2026-10-21)

Source work commit: `dd4cef7`.

Only field label/value gap changed: 20px, matching Documents paragraph spacing.
Field groups use flex-start instead of distributing extra free space.
Grid, x positions, typography and outer spacing unchanged; all HTML byte-identical.
Public verification now gates on the exact stylesheet too, since HTML did not change.
Theme package: downloads/moscow-city-print-child-0.4.6.zip.


## Payment and delivery revised conditions 0.4.7 (2026-10-21)

Source work commit: `b34243a`.

Only 01 Оплата and 02 Доставка remain; old Важно removed. Payment copy is the
five exact user-supplied conditions (invoice, contract, 100% advance payment,
closing documents/EDI, shipment after signed documents).
Delivery has three equal unframed columns: pickup free/by appointment, Moscow
from 500 ₽, regions from 1,500 ₽. Below: free delivery from 100,000 ₽ and the
individual cost/time note. Columns stack at <=650px. All copy/rates supplied
by the user, no new imagery/icons/map/CTA. Shared footer now computes 03.
Only new CSS is route-scoped payment-delivery.css, existing type/gutter/spacing.
14 static/WordPress checks passed; other HTML pages remain byte-identical.
Updated theme: downloads/moscow-city-print-child-0.4.7.zip.
Public checks now gate on both payment-delivery HTML and stylesheet.


## Payment/delivery heading cleanup 0.4.8 (2026-10-21)

Source work commit: `3a15799`.

Removed only the duplicate large Оплата/Доставка headings; markers unchanged.
Existing delivery grid bottom margin is 30px instead of 20px before the shared
free-delivery condition. Copy, grid, typography and shared shell unchanged.
14 static/WordPress viewport checks passed; other HTML pages byte-identical.
Theme package: downloads/moscow-city-print-child-0.4.8.zip.


## Current-page contacts and public sitemap 0.4.9 (2026-10-21)

Source work commit: `5497075`.

All header Contacts links use #contacts, targeting the current page's shared
footer. Removed contacts.html; no separate contact page in route/scaffold registry.
Sitemap explicitly lists the ten approved pages/sections, contacts via #contacts.
No CSS or footer markup changes; dynamic section numbers unchanged. All other
HTML differs only in the contact href. 154 internal-route and 14 Home checks
passed in static and real WordPress at seven widths; PHP lint passed.
Theme: downloads/moscow-city-print-child-0.4.9.zip.
Public workflow verifies exact sitemap/Home output and retired contacts.html 404.


## Grouped sitemap 0.4.10 (2026-10-21)

Source work commit: `a93fc4b`.

Sitemap uses the approved internal single-section template, marker 01 КАРТА САЙТА,
three link groups (Основные / Информация / Служебные). No bullet lists, cards,
frames or decoration. Scoped sitemap.css only, 3/2/1 columns at 900/650px.
Contacts remains #contacts. Shared header/footer/templates/styles unchanged;
footer number follows the section as 02. All other HTML byte-identical.
14 static/WordPress checks passed at seven widths; desktop/mobile inspected.
Updated installable theme: downloads/moscow-city-print-child-0.4.10.zip.
Public verification gates on exact sitemap HTML and its route-specific CSS.


## Current published privacy policy 0.4.11 (2026-10-21)

Source work commit: `6444b0d`.

Full policy from https://moscowcityprint.ru/privacy-policy/; source publication
date 22 September 2026. All 16 actual sections, lists, wording, operator details
and document date preserved. Main repository records exact source transcription
and browser tests comparing every paragraph, heading and list item.
Shared internal section 01 ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ; automatic footer 02.
Scoped privacy-policy.css: 76ch reading column, inherited Geologica type scale
and spacing; no imagery/cards/icons/CTA. Shared shell/CSS and all other HTML
unchanged. 14 static/WordPress checks passed at seven widths.
Theme: downloads/moscow-city-print-child-0.4.11.zip.
Public verification gates on exact policy HTML and route-specific CSS.


## Shared 404 page 0.4.12 (2026-10-22)

Source work commit: `b4f17e1`.

01 — 404, Страница не найдена, exact supplied explanation, one main-content
link Вернуться на главную →. Shared internal components/type/spacing only;
no new CSS or graphic elements. Shared footer immediately follows, dynamic 02.
Native WordPress HTTP 404 retained. 14 static/WP width checks plus 7 nested
Pages-route browser checks passed. Other HTML pages byte-identical.
Pages custom 404 is exported with --pages-base=/moscow-city-print-preview/
so its assets and navigation work at arbitrary nested missing URLs. #contacts
stays local. Publication checks exact nested 404 body and HTTP 404 status.
Theme package: downloads/moscow-city-print-child-0.4.12.zip.


## Intermediate Martanda WordPress foundation 0.5.0 (2026-10-22)

Source work commit: `3e76017`.

Theme ZIP now targets installed Martanda and keeps the accepted modular MCP
visual system. Native WP menu support (same flat anchor markup), local #contacts,
legal sitemap link. About/Services/Products/Artwork/Blog are blank common-shell
Page skeletons; approved Home/legal/sitemap/payment/requisites/404 retained.
No shared visual CSS changes; Home geometry unchanged beyond requested links.
70 static checks, 14 Home comparisons, 21 comparisons of actual madfox server HTML
at seven widths passed. Real WordPress preview inspected for Home/Requisites/Services.

Important: NOT an activated/live staging release. Files prepared in existing
WPVibe draft on madfox.com.ru, active theme unchanged. Auto-review blocked privacy
protected metadata import with --force; original content/status retained. Native
menu is created but empty (fallback works). Publishing needs explicit post-preview
confirmation and site-wide backup confirmation under WPVibe publish rules.
Exact state, rollback and outstanding checks in source theme STAGING_STATUS.md
and DEPLOYMENT.md; no private preview URL or backup snapshots published here.
Installable review package: downloads/moscow-city-print-child-0.5.0.zip.


## Authorized policy import completed (2026-10-22)

Source work status commit: `3330ea9`.

Following explicit user authorization, approved data/privacy-policy.php sections
were imported into Page 3 _mcp_internal_sections using native WP-CLI, and that
Page was published. Exact metadata readback matched source; original post_content
was compared with its saved copy and remains unchanged. WP draft preview showed
all 16 sections and markers 01/02. The public /privacy-policy/ URL was reachable
by independent Google PageSpeed check. Active theme was NOT switched, so the
structured new-theme output remains preview-only pending separate publication.
No theme code, static HTML, assets or downloadable package changed in this step.
