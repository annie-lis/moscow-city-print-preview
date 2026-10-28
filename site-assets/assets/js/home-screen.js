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
  refresh();
  setInterval(refresh, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
