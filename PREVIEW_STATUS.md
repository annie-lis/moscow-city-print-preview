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

## About rebuild — 22 October 2026

Source work commit: `79914c4a5503c7a9ee2b08f30bd4f9a1f5e97af5`.
About now has five approved sections and shared footer 06. Working copy follows
the user brief. Three original WebP illustrations (production/team/Moscow City)
are served from the shared theme asset directory; optional CMYK is not displayed.
Existing eight client logos use a simple four/two-column grid.
Page-specific CSS: `site-assets/assets/css/about.css`. No shared visual CSS or
header/footer templates changed. Home and Services HTML remain byte-identical.
Seven viewport checks passed with Geologica; inherited mobile header overflow
remains. Local desktop/tablet/mobile captures and details are in source
`tests/ABOUT_REBUILD_REPORT.md`.

Preview: https://annie-lis.github.io/moscow-city-print-preview/about.html
Theme ZIP 0.5.0 refreshed from the same source. No staging WordPress updates
were attempted in this pass; WPVibe publication remains blocked by usage cap.

## About editorial composition — latest brief, 22 October 2026

Source work: `579b43b25575c4c80083f396cf86f83ea4aa59fc`.
Supersedes previous About composition and working text. Text-only hero;
02/03 use text / original transparent art / statistics or principles;
04 text left / skyline right; 05 text left / shared Home client carousel right.
Home carousel markup is reused byte-for-byte and home.js is unchanged.
Mobile logos use a two-column grid. Shared footer 06, shell and visual tokens
unchanged. No art backgrounds, frames, shadows, masks or cropping. CMYK omitted.
Three original transparent illustrations replaced their old opaque publications.
Seven viewport checks and Home pixel parity passed; Home/Services HTML unchanged.

Preview: https://annie-lis.github.io/moscow-city-print-preview/about.html
New About has not been deployed to WordPress; WPVibe staging limit remains.

## About second visual pass — desktop scale only

Source work: `e7e41e8381223053932ec650f12e8ff59b0a18aa`.
Only About CSS changes rendering: larger hero/headings, more vertical space,
larger original illustrations and client logos. Grid proportions, HTML, copy,
components and shared carousel mechanism are unchanged. Tablet/mobile sizes
retained; seven viewport checks passed. Home/Services HTML unchanged.
Local visual deliverable: before/after comparison at desktop 1440px only.
Theme ZIP refreshed from the same source.

## Compact About — 23 October 2026

Source work: `c810fe9`. Centered unnumbered hero “Типография для бизнеса”,
then four sections 01–04 and shared footer 05. One 76px symmetric section
inset; no fixed section heights. Text/art of approach/team/space preserved.
Shared eight-logo markup uses About-only grid 4×2 (mobile 2×4); Home carousel
unchanged. Generic optional internal hero layout and scoped styles added.
Seven viewport tests and 14 Home screenshot comparisons passed. Home and
Services HTML unchanged. New screenshots are public in comparisons/:
about-compact-1440.png, about-compact-768.png, about-compact-390.png.
Existing mobile header overflow remains, screenshots use actual viewport width.

## 404 body — 23 October 2026

Source work: `48e834caa96ffa376aea78ec5b62b9b96a97e416`.
01 — УПС, shared internal section and footer 02 unchanged. Existing 31px
heading style, exact new explanation, plain Home link; original transparent
mcp-404-illustration.webp constrained to text height. Five compact numbered
navigation rows below; desktop group half content width, centered on canvas.
Mobile stacks copy / link / illustration / suggestions. Only 404 loads
not-found.css. Header/footer HTML, Home/About/Services remain unchanged.
Seven viewport and seven nested static 404 checks passed with Geologica.
Public captures: comparisons/404-editorial-1440.png and 404-editorial-390.png.
WordPress/production not changed. Theme ZIP rebuilt from the same source.

## About line breaks and outer spacing — 23 October 2026

Source work: `e7ce793dd5b53b7c281c0cf0e3ec2ff375afa99c`.
NBSP and balanced wrapping fix Russian hanging words; no wording, font sizes,
images or grid changes. Moscow City name is kept intact across lines.
Visible section insets are now 38px above the marker / below the content;
content top also reserves the existing 38px marker row. No fixed heights.
The old clients bottom 76px compounded with footer top 38px; only the About
inset changed, footer untouched. No spacer or clients-wrap padding was present.
At 1440 page height is 2901px (was 3053). Home/Services unchanged.
Seven viewport checks and actual line-end checks at 1440/768/390 passed.
Full capture: comparisons/about-rhythm-1440.png.

## 404 suggestions aligned left — 23 October 2026

Source work: `56ed871689a5e93883259bee5a8fe064a652096e`.
CSS-only body adjustment: suggestions align to Axis B and match description
width (44ch, bounded by the existing left column). The right contain illustration
grows with the hero row (~27%); text column gets half-inset vertical breathing
room. Typography, two-column grid, marker, header/footer, HTML and image unchanged.
Seven viewport and seven nested Pages checks passed.
Screenshot: comparisons/404-left-1440.png.

## 404 illustration 1.7× — 23 October 2026

Source work: `710fc0b7d852fa18bb0e9fca84a34b9fb063d8b6`.
Only desktop illustration positioning/sizing changed; image file and HTML
unchanged. Absolute centered image uses 170% row height with contain and
intrinsic width, bounded by its right column. Mobile sizing unchanged.
Left copy, suggestions, marker, grid, header/footer coordinates verified
identical before/after at seven widths. Capture: comparisons/404-art-170-1440.png.

## 404 unified hero composition — 23 October 2026

Source work: `58a0b464ccf3d71eaf47a6193a44ce1afa70bb2d`.
Full right-column illustration with intrinsic ratio. Home link is centered
vertically between description and suggestions heading; midpoint checked <1px.
Existing grid, gaps, typography and 44ch left-aligned suggestions retained.
Mobile breakpoint, dimensions and stack unchanged. Seven viewport + seven
nested Pages checks passed. Only page-specific CSS changes rendering.
Capture: comparisons/404-hero-composition-1440.png.

## About — two quieter illustrations, 23 October 2026

Source work: `946ff8a6e2ed43fbc98ebeeb0659fa058cc0f299`.
01 now text / stats, with no image or reserved third column. Team slightly larger;
team and skyline use CSS opacity .75 without blur or original-file changes.
Numbered sections share visible outer inset19px (top content57 reserves marker).
Footer transition has no spacer/wrapper bottom padding: About bottom19 + unchanged
footer top38. Header/footer/hero, Home/Services and logo sizes unchanged.
Full page1440: 2493px instead of2901px. Seven About responsive checks and14 Home
pixel comparisons pass. Russian rendered lines reviewed on1440/768/390; all texts
unchanged. Full screenshots: comparisons/about-two-illustrations-{1440,768,390}.png.
Theme ZIP refreshed; no live WordPress or production changes in this pass.

## 404 compact information column — 23 October 2026

Source work: `9750f407f35aab925f4d3a582b0b5340d30a16d3`.
Left copy and suggestions share one intrinsic group. Equal 19px gaps around
Home replace flex stretching, negative margin and separate 76px list margin.
Desktop illustration fills the unchanged right column, auto height / contain.
Mobile keeps the information group together before the existing illustration.
Header/footer, typography, left reading measure, shared grid and other pages
unchanged. Seven viewport + seven nested Pages404 checks passed with Geologica.
Full captures: comparisons/404-compact-left-{1440,768,390}.png. ZIP refreshed.
No live WordPress or production changes.

## 404 precise vertical rhythm — 23 October 2026

Source work:`e3d57fb22f39273aa3a34fc292e0918f376e8688`.
Equal gaps around Home19→38px; heading-to-first-list-text32→24px (-25%).
Desktop image110% width with intrinsic height/contain, top-19px. Mobile image
size/position, stacking breakpoint, global grid and typography unchanged.
All HTML unchanged, including404/header/footer and Home/About/Services.
Seven responsive + seven nested Pages404 checks passed. Theme ZIP refreshed.
Full captures:comparisons/404-vertical-rhythm-{1440,768,390}.png.
No live WordPress or production changes.

## 404 shared right axis — 23 October 2026

Source work:`e86238633caee1b87b39a85d5d358f9ad0fce4b9`.
Desktop image's right edge matches header/content right guide; flex/end alignment
in the same art cell, flex-shrink0. Width110%, top-19px and all other layout
unchanged. At1440 image shifts57.52px left to right edge1350.25.
Seven before/after geometry comparisons confirm only image x changes ondesktop;
all mobile geometry unchanged. Seven route + seven nested Pages404 checks passed.
Capture:comparisons/404-right-axis-1440.png. Theme ZIP refreshed.
No HTML, original-image, live WordPress or production changes.

## About editorial illustration scale — 23 October 2026

Source work:`0f0aff0dc0433f1824a2e2480e94fa367795e640`.
Both existing illustrations reduced1.45× through intrinsic CSS sizing; opacity.75
retained, source files untouched. Team centered, skyline centered in its right
cell. No reserved image height. At1440 section02:625→455px,03:506→373px;
page2493→2189px. Seven before/after audits confirm exact scale factor and no
section-height increase;01/04 and hero/header/footer dimensions unchanged.
Seven About responsive checks passed. HTML, all texts, fonts, global grid and
Main/Services unchanged. Full capture:comparisons/about-editorial-art-1440.png.
Theme ZIP refreshed; no live WordPress or production changes.

## 404 raised illustration / compact transition — 23 October 2026

Source work:`6118c683323fe802b0bc5d297e352fe239cda40f`.
Image moves38px up and19px right ondesktop, unchanged width/height/contain.
Matching flow compensation removes vacated image space; intro bottom19→0,
404 section bottom38→19. At1440 contacts starts59px closer. Footer internal
geometry and left content unchanged. Seven before/after audits confirm the
requested deltas; all mobile geometry identical. Seven responsive + seven nested
Pages404 checks passed. Theme ZIP refreshed. Capture:comparisons/404-lift-compact-1440.png.
No HTML, shared CSS, other page, source-image, live WordPress or production changes.

## 404 exact positional follow-up — 23 October 2026

Source work:`1a86f32fdd875b7d46422c29154c6fbe1d580671`.
Desktop illustration moves exactly22px up and14px right from6118c68.
No scale/contrast/opacity/spacing/flow changes. Left and footer positions intact.
Seven before/after audits confirm exact deltas and otherwise unchanged geometry;
all mobile geometry identical. Seven responsive + seven nested Pages404 checks pass.
Capture:comparisons/404-exact-offset-1440.png. Theme ZIP refreshed.
No live WordPress or production changes.

## About — measured Home rhythm and sections01–04, 23 October 2026

Source work:`8ae140c7ecaa707ba76d129116029fa7c7119820`.
Measured Home desktop padding38/38, marker38; mobile72/38, marker34.
About now shares inset38 and inherited markers, reserving its text marker row
(content top76 desktop,72 mobile). Hero remains symmetric57px, unchanged.
01:compact vertical stats with19px gap;02:unchanged-size team illustration
meets the section bottom and transparent strokes extend19px into03;03:wider
text52/48, skyline shifted right, heading single-line at1440/1920 without font
reduction;04:“Компании, которые нам доверяют”, original two-row logos.
Seven About responsive checks +14 Home pixel comparisons pass. Russian lines
reviewed on1440/768/390, existing NBSP retained. Other text, fonts, shared shell,
Main/Services and image files unchanged. Source report:tests/ABOUT_HOME_RHYTHM_REPORT.md.
Full captures:comparisons/about-home-rhythm-{1440,768,390}.png.
Close-ups:comparisons/about-home-rhythm-section-{01,02,03}-1440.png.
Theme ZIP refreshed; no live WordPress or production changes.

## 404 matches About illustration treatment — 23 October 2026

Source work:`3ed5e2d7d2fce7c8446b7042fa6874d9fedb5bea`.
Computed About team/skyline opacity.75, filter:none, blend:normal verified.
404 now uses exactly opacity.75 with the same default filter/blend and transparent
background. No image-file, scale, position, spacing or other page changes.
Seven full before/after geometry audits and seven responsive + seven nested
Pages404 checks pass. Theme ZIP refreshed. Side-by-side:
comparisons/404-about-tone-comparison-1440.png. Full404:
comparisons/404-about-tone-1440.png. No live WordPress or production changes.

## About final polish — 23 October 2026

Source work:`0d8b4571a894bfddf0082e01b2bfac61e0813f7a`.
Home and About paddings re-measured before/after; existing shared38px rhythm
already correct, so no padding/height changes. Stats19px left (>1100), team9.5px
lower, skyline9.5px right (>900). All image sizes/opacity, text, layout, hero,
header/footer, Main/Services and original assets unchanged. Seven responsive
checks + seven before/after geometry audits pass. Source table/report:
tests/ABOUT_FINAL_POLISH_REPORT.md. Captures:comparisons/about-final-polish-1440.png
and comparisons/about-final-polish-01-03-1440.png. Theme ZIP refreshed.
No live WordPress or production changes.

## New graphite404 illustration — 23 October 2026

Source work:`c008b4854824508597121cde61127bf2dac68b6f`, including incoming user
asset commits d5f672d/4613358. New original file is mcp-404-illustration-final.webp
(1530×1028 RGBA); old mcp-404-illustration.webp removed from publication and ZIP.
404 template uses new src and correct intrinsic dimensions. Same contain and
right-column layout, no deformation/cropping. Legacy opacity.75 removed so
the new asset uses its own graphite tone without filters. Source file unchanged.
Seven responsive + seven nested Pages404 checks pass; template HTML unchanged
except image src/dimensions. Main/About/Services and shared shell unchanged.
Capture:comparisons/404-new-graphite-1440.png. Theme ZIP refreshed and asset bytes
verified. No live WordPress or production changes.

Publication check follow-up: updated the public-resource probe to the new final
asset as well as source assertions; the previous run correctly saw404 for the
retired filename. Page HTML and image publication were already correct.

## 404 final image-only scale/placement — 23 October 2026

Source work:`c801d8aa61d0b2bbe47571ff5435077c4f60b8ff`.
Desktop artwork +10%, right edge+30px, top-20px. Upper-right transform origin
keeps the full image within viewport while preserving all layout/section heights.
Right air26.75px on tested desktop widths; image does not intersect footer.
Existing tone/file/contain and all other element geometry unchanged. Tablet/mobile
transform:none. Seven before/after audits + seven responsive and seven nested
Pages404 checks pass. All HTML/other pages unchanged. Theme ZIP refreshed.
Captures:comparisons/404-final-position-{1440,1920}.png.
No live WordPress or production changes.

## 404 body offset with fixed header/footer — 23 October 2026

Source work:`c55b95fb3a508faaebf0c7e832dcaca24b089229`.
Visible desktop logo-to-marker gap41.73px; section shifted21px down, unchanged
flow height/internal spacing. Image additionally10px right; no scale/tone/y
changes beyond common section movement. Header/footer/crop/legal geometry stays
identical on seven before/after viewport audits. Seven responsive + seven nested
Pages404 checks pass. All HTML and other pages unchanged. Captures:
comparisons/404-content-offset-{1440,1920}.png. Current theme ZIP refreshed.
No live WordPress or production changes.
