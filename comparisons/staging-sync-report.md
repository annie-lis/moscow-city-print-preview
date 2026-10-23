# Синхронизация server draft MCP — 23 октября 2026

Источник: `94726cd1a6c81097776f8dfd522922b4d0c867c2`, ветка `work`,
`wordpress/moscow-city-print-child/`.
Назначение: только `madfox.com.ru`, `mcp-minimal-child-wpvibe-draft`.
Production не подключался. Активная тема стенда не переключалась.

## Результат и границы синхронизации

**PHP/CSS/JS/data синхронизированы. Полное физическое зеркало assets НЕ создано.**
WPVibe записывает текстовые файлы draft, но не поддерживает запись PNG/WebP
в каталог темы. Runtime assets подключены через существующий `mcp_image_urls`.
Для полной автономности папки draft остаётся скопировать оригинальные binary
assets из Git файловым доступом, без удаления server-only файлов.

Сверены 54 текстовых файла: 32 уже совпадали по содержимому (без оконечных
пустых строк форматтера read_file); 9 обновлены; 13 добавлены. Записи PHP прошли
проверку синтаксиса инструмента. Код/стили из Git не перерабатывались.

Обновлены:

- functions.php, 404.php, style.css;
- inc/internal-sections.php, inc/routes.php;
- assets/css/internal.css, assets/js/site.js;
- template-parts/home/clients.php, template-parts/internal/content.php.

Добавлены:

- single.php, home.php, templates/about.php, templates/blog.php;
- data/about.php, data/services.json, FILE_TREE.txt;
- template-parts/page-content.php, template-parts/pages/not-found.php;
- template-parts/internal/hero.php, template-parts/components/client-carousel.php;
- assets/css/about.css, assets/css/not-found.css.

Функциональные файлы остальных маршрутов, общего header/footer, токенов,
основного CSS, меню и marks уже совпадали и не переписывались.
Markdown-документы и неиспользуемая библиотека иллюстраций остаются в Git/ZIP;
они не импортировались в Media и не подключались к frontend.

## Overrides / Media / сохранённые данные

- Существующие 10 ключей mcp_image_urls сохранены. Logo и 8 client PNG совпадают
  с Git по размерам и сохранённым byte sizes Media metadata. Это не SHA-проверка
  удалённых binary-файлов. Для hero сохранён оригинальный URL, не scaled-copy.
- Добавлены 3 ключа: images/illustrations/mcp-404-illustration-final.webp,
  mcp-illustration-team-production.webp, mcp-illustration-moscow-city.webp.
- Новые Media attachments 103/104/105 импортированы из текущего публичного
  preview, где эти исходники побайтно совпадают с Git. Размеры соответственно
  1530×1028, 879×887, 1774×887; без смены графики/масштаба/фильтров в CSS.
- Исходные 10 Media mappings не заменялись. Старые attachments не удалялись.
- Посты/страницы, их content/meta, плагины, чтение/меню WP не изменялись.
  Единственная настройка — расширение mcp_image_urls; добавлены 3 Media записи.
- При option write WPVibe автоматически очистил WP Super Cache и object cache
  только madfox.com.ru. Draft preview обходит обычный page cache.
- В базе обнаружены wp_template_part ID 11/19/21/38. Они сохранены; текущая
  PHP-оболочка их не выводит. Custom CSS не найден в полученном списке publish
  записей; wp_custom_css_cb уже исключён кодом Git, в head его стиля нет.
- Старые Pages 77/78 сохранены. Elementor установлен, не активен по WP-CLI
  inventory предыдущей ревизии; данные Elementor не очищались.

## Server-only / legacy — сохранено всё

Ничего не удалялось: rollback-ценность этих файлов не исключена.

- canvas-test.css;
- assets/js/mcp-clients.js, mcp-clock.js, mcp-footer.js,
  mcp-section-numbering.js;
- parts/header.html, parts/footer.html;
- templates/front-page.html, page.html, page-o-tipografii.html, page-uslugi.html;
- assets/images/hero-paper.png, logo-text.png;
- assets/images/clients/{alpha,city,huawei,karavaevy,koros,mti-bank,one-factor,
  p7,pnk,td-plastic,trendlaw,vtb}.png.

Старый большой style.css обновлён до Git theme header (236 bytes); прежний текст
вместе с другими pre-sync файлами сохранён в локальном ignored snapshot
work/staging-sync-before.json. Активная старая тема и wpvibe-backup не изменены.

## Что действительно подключается

Во всех 11 полученных server preview HTML: mcp-fonts (один Geologica request),
mcp-tokens, mcp-site, общий site.js. На внутренних страницах — mcp-page и
mcp-internal; About/payment/privacy/requisites/sitemap/404 добавляют только свой
page-specific CSS. home.js подключён только Home.

Нет CSS Martanda, legacy style.css/canvas-test.css, старых mcp-*.js, Elementor
CSS/оболочки, вывода прежних HTML templates. Значения ?ver у MCP CSS/JS равны
SHA-256 текущих файлов Git (12 знаков), вычисленным на сервере.

Дополнительно остаются штатные WP inline emoji/image/skip-link стили,
jQuery/jQuery Migrate, UI WPVibe preview и Martanda Premium sticky-header.min.js.
Последний прочитан: работает только с .site-header-holder. Такого узла в MCP
нет; скрипт не создаёт wrappers и не меняет header. Плагин не отключался.
UI preview добавляет body padding-bottom:50px; для parity исключены только
banner и его body class. Это служебный preview-отступ, не изменение footer.

## Проверка

Получен настоящий PHP output Home, About, Payment & Delivery, Privacy Policy,
Requisites, Sitemap, Services, Products, Artwork Requirements, Blog и неизвестного
URL с новым 404. Нет PHP errors/warnings. Маркеры footer: Home 04, About 05,
Payment/Requisites 03, Privacy/Sitemap/404 02, placeholders/Blog 01.

`tests/staging-sync.cjs` сравнивает server HTML с Git на 1920/1440/1280/1024/
768/390/320: геометрию всех элементов canvas, текст, fonts, header/footer,
crop/legal alignment, #contacts, отсутствие нового main overflow и JS errors.
Скрипт исполняет также прочитанный sticky-header.js с локальной копией jQuery.
Все **77 сравнений прошли**. Результат — `tests/results/staging-sync.json`, screenshots в ignored
work/routes-check/staging-sync-*.png.

Это replay реального server HTML в Chromium с локальными Git assets и cached
Geologica. Прямой egress к madfox.com.ru из облачного браузера возвращает proxy
403: полная проверка живой сети/кеша и HTTP status через этот браузер не заявляется.
Native 404 template и его output подтверждены; actual unknown URL выводит УПС
и текущую иллюстрацию, левый список и footer 02.

Single Article: single.php и выбор template_include синхронизированы; исходный
контракт и локальный WP integration проверены предыдущим техническим проходом.
На staging нет опубликованных Post, поэтому живой article URL сейчас не проверен.
Новая тестовая статья/контент не создавались ради этой проверки.

## Что осталось

1. Полное физическое размещение binary assets (включая неиспользуемую библиотеку)
   требует файлового доступа к hosting: копировать из Git поверх draft без purge.
   Сейчас runtime зависит от Media mappings; не удалять их до переноса.
2. Проверить Single Article на staging при появлении согласованной статьи.
3. Открыть tokenized preview в обычном браузере для полной сетевой проверки
   ресурсов, mobile и нативного HTTP 404. Токен не хранится в Git.
4. Legacy purge, отключение Martanda Premium, switch/publish темы не выполнялись.
   Незавершённые страницы не наполнялись и не редизайнились.
5. К концу прохода WPVibe израсходовал доступный лимит 100 calls / 24h.
   Дополнительные write/readback и статья через API в этом проходе не выполнялись.
   Продолжение потребует доступного API-лимита или штатного файлового доступа.
