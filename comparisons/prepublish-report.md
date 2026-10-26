# Подготовка публикации madfox.com.ru — 26 октября 2026

**Готов server draft; публикация ожидает отдельного подтверждения пользователя.**
Runtime исходник — `97a5f96`, ветка work, `wordpress/moscow-city-print-child/`.
Последующий commit этого отчёта меняет только документацию/проверки, не тему.
Production moscowcityprint.ru не подключался и не изменялся.

## Что подготовлено

Прочитаны и сравнены 26 ключевых существующих файлов draft: 19 совпали с Git,
7 обновлены; добавлены 6 новых runtime-файлов Blog/Article. Legacy сохранён.

Обновлены functions.php, inc/navigation.php, single.php, templates/blog.php,
FILE_TREE.txt, data/about.php, assets/css/about.css.
Добавлены inc/blog.php, inc/article-seo.php, template-parts/blog/{catalog,article}.php,
assets/css/{blog,article}.css. Functions/single/SEO/article CSS прочитаны повторно
после записи и совпали с Git. CSS/JS в server HTML имеют версии SHA-256 текущих
Git-файлов. Общие header/footer, grid/tokens, Home/404 и служебные тексты не менялись.

В Media импортирована только новая иллюстрация About 01 (attachment 106,
1448×1086), из текущего публичного preview с оригиналом Git. В существующий
mcp_image_urls добавлен ключ images/illustrations/library/01-printing-press-stack.webp;
прежние 13 mappings сохранены. Изображения, включая оригинальный hero без scaled
копии, доступны через штатный helper. Это рабочая конфигурация текущего стенда;
полное физическое зеркало binary assets в папке темы по-прежнему не создавалось.
В ZIP темы и Git оригиналы присутствуют; перенос на другой WordPress требует
assets либо переноса Media mappings вместе с Media.

При option write WPVibe автоматически очистил только cache madfox.com.ru
(WP Super Cache / object cache). Ничего не удалялось. Страницы, их content/meta,
записи, плагины, reading options и меню не перезаписывались.

## Состав публикации после подтверждения

| Маршрут | Результат | Footer |
|---|---|---:|
| / | Принятая Home, текущий banner_hero.png | 04 |
| /about/ | Текущая About с 3 иллюстрациями, включая новую в 01 | 05 |
| /requisites/ | Согласованные реквизиты и документы | 03 |
| /payment-delivery/ | Согласованные условия оплаты и доставки | 03 |
| /privacy-policy/ | Согласованная политика, сохранённые structured sections Page 3 | 02 |
| /sitemap/ | Группированная карта сайта | 02 |
| /blog/ | Функциональный каталог реальных WP Posts, сейчас пустой | 02 |
| Single Post | Универсальный шаблон, SEO и article navigation | 01 |
| /services/, /products/, /artwork-requirements/ | Текущие заготовки без новых текстов | 01 |
| Неизвестный URL | Текущая 404, новый актуальный asset и список ссылок | 02 |

Демо-статьи GitHub Pages не переносятся в WP. В текущей БД нет опубликованных
Post; Single подтверждён source readback и локальным WP integration предыдущего
прохода, но живого article URL на стенде сейчас нет.
Отдельного /contacts/ нет: верхнее меню ведёт к #contacts текущей страницы.
Меню прежнее: О типографии / Услуги / Продукция / Контакты.

## Индексация и проверка

- blog_public прочитан дважды: **0**. Настройка не менялась.
- Все 11 полученных preview HTML содержат meta robots noindex, nofollow.
  Preview сам также включает noindex; после публикации требуется независимая
  проверка public meta/HTTP и повторное чтение blog_public.
- tests/results/prepublish.json: **77 проверок прошли**, 11 маршрутов ×
  1920/1440/1280/1024/768/390/320. Geometry/text/fonts/header/footer/crop/legal,
  contact anchor, dynamic footer number, main overflow, JS errors.
- Сравнивается реальный server PHP output с текущими Git templates. Для Blog
  control использует тот же компонент с пустым набором реальных Posts, без demo.
- Geologica подключается централизованно один раз. Browser replay использует
  настоящий cached Geologica и Git assets; прямой cloud browser egress к стенду
  ограничен proxy. Полная end-to-end проверка живой сети пока не заявляется.
- В head нет CSS Martanda/Elementor, старых style.css/canvas-test.css или mcp-*.js.
  Martanda Premium sticky JS сохранён: не находит .site-header-holder, MCP header
  не перестраивает. Preview UI исключён из parity (его body padding-bottom 50px).
- Прежний overflow замороженного header на узком mobile не менялся; новых
  переполнений основного контента нет. Файлы иллюстраций и их тон не редактировались.

## Что осталось перед переключением

1. Пользователь открывает текущий tokenized server preview и подтверждает именно
   публикацию этой сборки на madfox.com.ru. Токен не записывается в Git.
2. Подтверждает актуальную резервную копию **файлов и БД** стенда. Это требование
   инструмента WPVibe Publish; известных backup plugins в active inventory нет,
   подходит backup в панели hosting. Последнее подтверждение относится к копии
   от 23 октября; перед переключением нужно подтвердить её актуальность либо
   наличие более свежей копии.
3. Учесть штатный механизм WPVibe: publish заменяет содержимое активной темы
   файлами draft и сохраняет прежнюю live theme в mcp-minimal-child-wpvibe-backup.
   Уже существующий backup-каталог заменяется при следующем publish, поэтому
   host-level backup должен включать и его. Draft напрямую не активировать.
4. Saved Site Editor overrides, если конфликтуют, штатный publish откладывает
   (сохраняет для восстановления), не удаляет. Старые Pages/Elementor data/legacy
   не чистить; старые runtime assets/HTML сейчас не подключены, но оставлены.

## План после отдельного подтверждения

Использовать штатный publish_draft_theme только для madfox.com.ru. Очистить его
page cache; проверить публичные маршруты, native 404, noindex/blog_public=0,
ресурсы, меню/#contacts/footer и desktop/mobile. Production не трогать.
Окончательный отчёт публикации и публичный URL — только после выполнения.

Дальнейший цикл: work является источником истины → синхронизация draft → preview
и проверка → публикация на staging в рамках согласованной задачи. При расхождении
исправлять Git первым, не делать незаписанные независимые визуальные правки в WP.
