/* Shared clients controller: original Home strip, optional two-row column gallery. */
(() => {
  document.querySelectorAll('.clients-wrap').forEach(wrap => {
    const track = wrap.querySelector('.clients-track');
    const prev = wrap.querySelector('.clients-prev');
    const next = wrap.querySelector('.clients-next');
    if (!track || !prev || !next) return;
    const paired = wrap.dataset.clientRows === '2';
    let viewport;
    if (paired) {
      const logos = [...track.children];
      const half = Math.ceil(logos.length / 2);
      const columns = [];
      for (let i = 0; i < half; i++) {
        const column = document.createElement('div');
        column.className = 'client-column';
        column.append(logos[i]);
        if (logos[i + half]) column.append(logos[i + half]);
        columns.push(column);
      }
      track.replaceChildren(...columns);
      // Extra columns are preview-only repetitions of the original agreed brands.
      const targetPairs = Math.max(columns.length, Math.min(32, Math.ceil((Number(wrap.dataset.previewCount) || logos.length) / 2)));
      for (let pair = columns.length; pair < targetPairs; pair++) {
        const clone = columns[pair % columns.length].cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('img').forEach(img => { img.alt = ''; });
        track.append(clone);
      }
      prev.textContent = '‹';
      next.textContent = '›';
      viewport = document.createElement('div');
      viewport.className = 'clients-viewport';
      track.before(viewport);
      viewport.append(track);
      wrap.classList.add('is-ready');
    }
    const cards = [...track.children];
    if (!cards.length) return;
    let index = 0;
    const visible = () => paired ? Math.min(cards.length, Number(getComputedStyle(wrap).getPropertyValue('--clients-visible')) || 4) : 4;
    const render = () => {
      const max = Math.max(0, cards.length - visible());
      index = Math.max(0, Math.min(max, index));
      if (paired) {
        track.style.setProperty('--clients-count', visible());
        const step = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
        track.style.transform = `translateX(-${index * step}px)`;
        prev.disabled = index === 0;
        next.disabled = index === max;
      } else {
        // Preserve the accepted Home component's four-slot25% step exactly.
        track.style.transform = `translateX(-${index * 25}%)`;
      }
    };
    prev.addEventListener('click', () => { index--; render(); });
    next.addEventListener('click', () => { index++; render(); });
    if (paired) {
      render();
      new ResizeObserver(render).observe(viewport);
    }
  });
})();
