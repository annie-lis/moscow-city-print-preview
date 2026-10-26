# Публикация staging MCP — 26 октября 2026

**Сборка опубликована: https://madfox.com.ru/**, без preview-токена.
Runtime соответствует work 97a5f96, подготовительный отчёт c61252b.
В этом проходе дизайн, тексты, шрифты и изображения не редактировались.

## Авторизация и операция

Пользователь просмотрел подготовленный preview, прямо разрешил publish на
madfox.com.ru и подтвердил актуальный резервный backup файлов и БД.
Повторно прочитанные functions.php и data/about.php совпали с Git.
Вызван штатный WPVibe publish_draft_theme с saved_customizations=set_aside.
Инструмент подтвердил:

- draft опубликован в mcp-minimal-child;
- предыдущая активная тема сохранена в mcp-minimal-child-wpvibe-backup;
- WP Super Cache и object cache автоматически очищены после publish.

После операции authenticated site_info показывает активную версию 0.5.0,
parent Martanda, полноценные PHP index/header/footer/front/home/single/page/404.
Theme list показывает прежнюю 3.20.0 неактивной; draft больше нет.
Старые файлы/данные не чистились. Active file inventory: 85 файлов; старые
mcp-*.js, canvas-test.css, templates/front-page.html, page-uslugi.html,
page-o-tipografii.html сохранены. Старые CSS/HTML не подключены к MCP shell.
Production moscowcityprint.ru не подключался и не изменялся.

## Публичные маршруты

Без токена получен HTML настоящего опубликованного WordPress для:

- / — Home, footer 04;
- /about/ — три иллюстрации, footer 05;
- /requisites/, /payment-delivery/ — footer 03;
- /privacy-policy/, /sitemap/ — footer 02;
- /services/, /products/, /artwork-requirements/ — текущие заготовки, footer 01;
- /blog/ — функциональный пустой каталог реальных Posts, footer 02;
- /mcp-live-not-found-c61252b/ — native WordPress error404 body/template,
  согласованная новая иллюстрация, footer 02.

Ни одна страница не содержит preview banner, preview-токен или asset URL draft.
Ресурсы CSS/JS идут из активного /themes/mcp-minimal-child/assets/; их SHA-версии
совпадают с Git. Runtime images используют сохранённый Media mapping (14 keys).
Центральное подключение Geologica сохранено. Демо-статьи не публиковались.
Живого Single Post URL пока нет; шаблон был синхронизирован и локально проверен.

## Индексация

- blog_public=0 прочитан до и после publish, значение не менялось.
- Все 11 публичных HTML содержат meta robots noindex, nofollow.
- Никаких действий по открытию индексации или production cache не выполнялось.

## Проверки после публикации

`tests/results/published.json`: **77 успешных сравнений** (11 маршрутов ×
1920/1440/1280/1024/768/390/320) с теми же Git templates.
Проверены геометрия/текст/шрифт, header/footer/marks, legal alignment,
динамическая нумерация, #contacts и отсутствие новых main overflow/JS exceptions.
Источник HTML — публичные URL без токена; ассеты и настоящий cached Geologica
воспроизведены в локальном Chromium. Для Blog использован тот же Git компонент
с пустым набором Posts, без статических demo fixtures.
Новые PHP diagnostics в полученном публичном HTML не обнаружены.
В public-режиме тест также проверяет noindex/nofollow, отсутствие preview URLs,
точные href верхнего меню, логотипа и всех четырёх legal links футера.

Меню осталось: About → /about/, Services → /services/, Products → /products/,
Contacts → #contacts текущей страницы; логотип → /. Footer legal links ведут
на privacy-policy/payment-delivery/requisites/sitemap. Все целевые страницы
получены без preview и совпали с Git. Legacy pages не удалялись.

Независимые Google Lighthouse проверки публичных URL:

| URL | Профиль | Best Practices |
|---|---|---:|
| / | desktop | 100/100, замечаний нет |
| /about/ | mobile | 100/100, замечаний нет |
| /mcp-live-not-found-c61252b/ | desktop | 96/100, errors-in-console |

Инструмент для 404 вернул только общую фразу "Browser errors were logged to the
console" без сообщения/stack trace. Она требует уточнения: нельзя по этому
summary установить, относится ли она к HTTP 404 самого документа или к ресурсу.
MCP JS в replay исполнился без исключений; визуальный шаблон/WordPress error404
state проверены. Независимый сырой HTTP status frontend не получен: cloud proxy
и внешний web-open ограничили прямой запрос. Поэтому отдельный curl/DevTools
readback HTTP 404 и точного console message остаётся явно обозначенной границей,
а не заменён предположением. Новые редакционные/визуальные исправления не делались.

Дополнительно выполнен read через стандартный WordPress URL Details REST API:
для / возвращены метаданные успешного HTTP ответа; для неизвестного URL получен
no_response с прямым сообщением сервера о HTTP status, отличном от 200. Таким
образом, soft-404 (200 на неизвестном URL) исключён. REST envelope 404 этого API
не выдаётся за отдельно измеренный numeric status frontend.

Другие границы: серверный PHP error log не проверялся; вывод и функциональная
работа маршрутов проверены. Прежнее узкое mobile header overflow не переделывалось.
Lighthouse Best Practices не означает полного performance/SEO/a11y аудита.

## Откат и дальнейшие изменения

Предыдущая тема — mcp-minimal-child-wpvibe-backup, плюс подтверждённый hosting
backup пользователя. Ничего из этого не удалять. Следующий штатный publish
обновляет WPVibe rollback-каталог, поэтому перед ним сохранять актуальный backup.

madfox.com.ru — основной живой staging; WordPress draft создаётся снова при
следующей согласованной задаче. Порядок: сначала отдельный логический pass в work,
затем draft sync, проверка и подтверждённый publish. Источник истины — work;
независимых серверных визуальных правок быть не должно. Текущие статусы страниц
зафиксированы в root STAGING.md, без повышения технической готовности до
визуального согласования.
