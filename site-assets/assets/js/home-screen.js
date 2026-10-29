/* Client clock is Moscow-local; no self-measuring typography or viewport-fit JS. */
(() => {
  'use strict';
  const dateParts = date => Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short'
  }).formatToParts(date).filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  const minutes = time => /^([01]\d|2[0-3]):[0-5]\d$/.test(time || '') ? Number(time.slice(0, 2)) * 60 + Number(time.slice(3)) : null;
  const dates = input => String(input || '').split(/[\s,;]+/).filter(Boolean);
  const statusAt = (date, config) => {
    const p = dateParts(date), iso = `${p.year}-${p.month}-${p.day}`;
    if (!config.schedule_confirmed || Number(config.calendar_year) !== Number(p.year)) return null;
    const opens = minutes(config.opens), closes = minutes(config.closes);
    const lunchStart = minutes(config.lunch_start), lunchEnd = minutes(config.lunch_end);
    if (opens === null || closes === null || opens >= closes) return null;
    if ((config.lunch_start || config.lunch_end) && (lunchStart === null || lunchEnd === null || lunchStart >= lunchEnd || lunchStart < opens || lunchEnd > closes)) return null;
    if (dates(config.holidays).includes(iso) || (['Sat', 'Sun'].includes(p.weekday) && !dates(config.workdays).includes(iso))) return 'Выходной';
    const time = Number(p.hour) * 60 + Number(p.minute);
    if (time < opens || time >= closes) return 'Отдыхаем';
    if (lunchStart !== null && lunchEnd !== null && time >= lunchStart && time < lunchEnd) return 'Обед';
    return 'Работаем';
  };
  // CommonJS export enables deterministic boundary tests without a browser clock mock.
  if (typeof module !== 'undefined' && module.exports) module.exports = { statusAt, dateParts };
  if (typeof document === 'undefined') return;
  const container = document.querySelector('[data-home-status]');
  const configNode = document.getElementById('mcp-home-config');
  if (!container || !configNode) return;
  let config;
  try { config = JSON.parse(configNode.textContent); } catch { return; }
  const refresh = () => {
    const now = new Date(), parts = dateParts(now);
    container.querySelector('[data-status-date]').textContent = `${parts.day}.${parts.month}`;
    container.querySelector('[data-status-state]').textContent = statusAt(now, config) || 'Уточните график';
  };
  // The menu's grid frame spans visible logo ink bottom to visible title ink top.
  // Logo PNG has tightly cropped alpha bounds; title bounds use loaded font metrics.
  const screen = document.querySelector('.mcp-home-screen');
  const logo = screen.querySelector('.mcp-home-logo img');
  const title = screen.querySelector('.mcp-home-title');
  const anchor = title.querySelector('.mcp-home-accent');
  const nav = screen.querySelector('.mcp-home-nav');
  const context = document.createElement('canvas').getContext('2d');
  let layoutFrame = 0;
  const alignMenu = () => {
    if (window.matchMedia('(max-width:767px)').matches) {
      nav.style.removeProperty('--nav-ink-start');
      nav.style.removeProperty('--nav-ink-end');
      return;
    }
    const rect = screen.getBoundingClientRect();
    const style = getComputedStyle(title);
    context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const metrics = context.measureText(title.textContent.replace(/\s+/g, ' ').trim());
    const titleTop = anchor.getBoundingClientRect().bottom - metrics.actualBoundingBoxAscent;
    const start = logo.getBoundingClientRect().bottom - rect.top;
    const end = titleTop - rect.top;
    if (end <= start) return;
    // Center the navigation's visible ink as a group, excluding line-box leading.
    const first = nav.firstElementChild;
    const last = nav.lastElementChild;
    const menuStyle = getComputedStyle(first);
    context.font = `${menuStyle.fontWeight} ${menuStyle.fontSize} ${menuStyle.fontFamily}`;
    const baseline = item => {
      const probe = document.createElement('span');
      probe.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline;padding:0;margin:0';
      item.lastElementChild.append(probe);
      const y = probe.getBoundingClientRect().bottom;
      probe.remove();
      return y;
    };
    const firstInk = baseline(first) - context.measureText(first.textContent).actualBoundingBoxAscent;
    const lastInk = baseline(last) + context.measureText(last.textContent).actualBoundingBoxDescent;
    const frame = nav.getBoundingClientRect();
    const inkOffset = (firstInk + lastInk - frame.top - frame.bottom) / 2;
    nav.style.setProperty('--nav-ink-start', `${start - inkOffset}px`);
    nav.style.setProperty('--nav-ink-end', `${rect.height - end + inkOffset}px`);
  };
  const scheduleLayout = () => {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(alignMenu);
  };
  const ready = async () => {
    if (document.fonts) await document.fonts.ready;
    try { await logo.decode(); } catch { /* Image load event retries on recovery. */ }
    scheduleLayout();
  };
  new ResizeObserver(scheduleLayout).observe(screen);
  const contentObserver = new ResizeObserver(scheduleLayout);
  contentObserver.observe(logo);
  contentObserver.observe(title);
  window.addEventListener('resize', scheduleLayout);
  logo.addEventListener('load', scheduleLayout);
  if (document.fonts) document.fonts.addEventListener('loadingdone', scheduleLayout);
  const observePreviewToolbar = () => {
    const toolbar = document.getElementById('wpvibe-preview-banner');
    if (!toolbar) return;
    const reserve = () => document.body.style.setProperty('--mcp-preview-toolbar-height', `${toolbar.getBoundingClientRect().height}px`);
    new ResizeObserver(reserve).observe(toolbar);
    reserve();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observePreviewToolbar, { once: true });
  else observePreviewToolbar();
  ready();
  refresh();
  setInterval(refresh, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
