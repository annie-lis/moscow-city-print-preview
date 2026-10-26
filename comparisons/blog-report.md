# Blog / Single Article — 26 октября 2026

Рабочая ветка work. Источник каркаса — текущая тема после e896710.
Собраны каталог и универсальная статья без изменения общего header/footer,
токенов, главного CSS, осей или принятой Home/About/Services/404.

## Результат

- Hero 01 — БЛОГ с согласованными заголовком, подзаголовком и правым текстом.
- Лёгкая строка поиска с линией только hover/focus, рубрики без кнопок/карточек.
- Строки номер / дата / рубрика / заголовок / стрелка, без excerpts и изображений.
- Нативный WP_Query: только publish Posts, поиск + рубрика вместе, pagination 8.
- Статья без обязательных секций и картинки: breadcrumbs, metadata, H1,
  optional excerpt lead, поток the_content, H2/H3, списки, quote, optional images.
- Нижний navigation grid удерживает «Все статьи» в центре при пустой стороне.
- Title/canonical/description/OG/BlogPosting/BreadcrumbList и даты.
- Никакие реальные Posts не редактировались/не импортировались; staging не менялся.

## Проверки

1. 21 static responsive check: Blog, short/long article × 7 widths
   1920/1440/1280/1024/768/390/320. Текст/структура, Geologica, H1, main overflow,
   общий shell, legal/crop и нижняя навигация; footer Blog 02 / Article 01.
2. GitHub Pages demo interactions: поиск, рубрика + поиск, pagination, пустая
   выдача, back/history, focus-line. Demo data из tools, не из WordPress БД.
3. Disposable local WordPress: поиск/рубрика AND, страницы выдачи, исключение
   draft, query arrays, metadata/schema/canonical, optional lead и adjacent links.
   Созданы только тестовые Posts/terms с локальным host guard; после проверки
   удалены собственные fixtures, reading option восстановлена. Existing Hello
   world! сохранён. Local parent Twenty Twenty-One; не live тест на Martanda.
4. PHP lint / foundation contracts / metadata escaping + SEO-plugin ownership.
5. Все 12 прежних HTML страниц кроме Blog совпали с e896710 побайтно.
6. 14 screenshot-сравнений Home и 7 nested Pages 404 проверок прошли.
7. Ранее существовавшее переполнение замороженного mobile header не менялось;
   нового overflow основного контента нет.

## Header и preview

В принятом меню нет Blog, а brief одновременно просит неизменный header и active
Blog. Уточнение отправлено пользователю; до ответа принят вариант без изменения
header. Native menu поддерживает активный Blog при назначении через WordPress;
самовольного пятого пункта не добавлялось.

Основные review URLs: blog.html, article-short.html, article-long.html.
Контент статей демонстрационный; эти preview noindex/nofollow. Desktop screenshots
1440 и дополнительные 768/390 — comparisons/blog-*.png, article-short-*.png,
article-long-*.png в preview repo. Все дополнительные demo-ссылки каталога рабочие.

Блог использует тот же header/footer. Новые стили изолированы в blog.css и
article.css, fixtures/preview JS не включаются в устанавливаемую WordPress тему.
До развёртывания создать/назначить рубрики через редактор и добавить реальные
Posts. Ссылка на старый архив появится только при настройке реального URL.
Production и основной main не менялись; синхронизация серверного draft в этот
проход не входила. Новый WordPress код подготовлен и проверен локально.
