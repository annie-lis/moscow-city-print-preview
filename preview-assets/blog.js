/* GitHub Pages demonstration only. WordPress uses native server-side WP_Query. */
(() => {
  const source = document.querySelector('#mcp-blog-preview-data');
  if (!source) return;
  const data = JSON.parse(source.textContent), root = document.querySelector('.mcp-blog');
  const form = root.querySelector('.mcp-blog-search'), input = form.querySelector('[type=search]');
  const filters = root.querySelector('.mcp-blog-filters'), list = root.querySelector('.mcp-blog-list');
  const pager = root.querySelector('.mcp-blog-pagination');
  const empty = document.createElement('p'); empty.className = 'mcp-blog-empty'; empty.setAttribute('role', 'status'); list.after(empty);
  list.setAttribute('aria-live', 'polite');
  let timer;
  const read = () => {
    const p = new URL(location.href).searchParams;
    return {search: p.get('blog_search') || '', category: Object.hasOwn(data.topics, p.get('blog_category')) ? p.get('blog_category') : '', page: Math.max(1, Number.parseInt(p.get('blog_page'), 10) || 1)};
  };
  const urlFor = state => {
    const u = new URL(location.href); u.hash = '';
    for (const key of ['blog_search', 'blog_category', 'blog_page']) u.searchParams.delete(key);
    if (state.search) u.searchParams.set('blog_search', state.search);
    if (state.category) u.searchParams.set('blog_category', state.category);
    if (state.page > 1) u.searchParams.set('blog_page', state.page);
    return u.pathname + u.search;
  };
  const element = (tag, cls, value) => {
    const node = document.createElement(tag); if (cls) node.className = cls; if (value != null) node.textContent = value; return node;
  };
  const render = () => {
    const state = read(), query = state.search.toLocaleLowerCase('ru').trim();
    const matches = data.items.filter(item => (!state.category || item.topic.slug === state.category) && (!query || (item.title + ' ' + item.content).toLocaleLowerCase('ru').includes(query)));
    const pages = Math.ceil(matches.length / data.per_page), offset = (state.page - 1) * data.per_page;
    const items = matches.slice(offset, offset + data.per_page);
    input.value = state.search;
    for (const [i, a] of [...filters.querySelectorAll('a')].entries()) {
      const category = ['', ...Object.keys(data.topics)][i];
      a.href = urlFor({...state, category, page: 1});
      if (category === state.category) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    }
    list.replaceChildren(); list.start = offset + 1; list.hidden = !items.length;
    empty.hidden = !!items.length; empty.textContent = matches.length && state.page > 1 ? 'На этой странице нет материалов.' : state.search || state.category ? 'Материалы не найдены.' : 'Публикаций пока нет.';
    for (const [i, item] of items.entries()) {
      const li = element('li'), link = element('a', 'mcp-blog-row'); link.href = item.url;
      const meta = element('span', 'mcp-blog-meta'), time = element('time', '', item.date); time.dateTime = item.iso;
      meta.append(time, element('span', '', item.topic.name));
      const arrow = element('span', 'mcp-blog-arrow', '→'); arrow.setAttribute('aria-hidden', 'true');
      link.append(element('span', 'mcp-blog-index', String(offset + i + 1).padStart(2, '0')), meta, element('span', 'mcp-blog-row-title', item.title), arrow);
      li.append(link); list.append(li);
    }
    pager.replaceChildren(); pager.hidden = pages <= 1;
    const visible = [...new Set([1, state.page - 1, state.page, state.page + 1, pages])].filter(p => p >= 1 && p <= pages).sort((a, b) => a - b);
    let last = 0;
    for (const page of visible) {
      if (last && page > last + 1) { const dots = element('span', '', '…'); dots.setAttribute('aria-hidden', 'true'); pager.append(dots); }
      const a = element('a', '', page); a.href = urlFor({...state, page}); a.setAttribute('aria-label', `Страница ${page}`);
      if (page === state.page) a.setAttribute('aria-current', 'page'); pager.append(a); last = page;
    }
    if (state.page < pages) { const next = element('a', '', '→'); next.href = urlFor({...state, page: state.page + 1}); next.rel = 'next'; next.setAttribute('aria-label', 'Следующая страница'); pager.append(next); }
  };
  const go = (url, replace = false) => { history[replace ? 'replaceState' : 'pushState'](null, '', url); render(); };
  form.addEventListener('submit', e => { e.preventDefault(); clearTimeout(timer); go(urlFor({...read(), search: input.value.trim(), page: 1})); });
  input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => go(urlFor({...read(), search: input.value.trim(), page: 1}), true), 180); });
  for (const nav of [filters, pager]) nav.addEventListener('click', e => { const a = e.target.closest('a'); if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; e.preventDefault(); clearTimeout(timer); go(a.href); });
  window.addEventListener('popstate', render); render();
})();
