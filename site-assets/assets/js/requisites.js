/* Requisites only: reuse the real footer action axis without duplicating its width. */
(() => {
  const layout = document.querySelector('.mcp-requisites-layout');
  const action = document.querySelector('.footer-action');
  const arrow = action?.querySelector('.footer-action-arrow');
  if (!layout || !action || !arrow) return;
  const desktop = matchMedia('(min-width:1101px)');
  const align = () => {
    if (!desktop.matches) {
      layout.style.removeProperty('--requisites-action-offset');
      layout.style.removeProperty('--requisites-label-end');
      return;
    }
    const offset = arrow.getBoundingClientRect().right - action.getBoundingClientRect().left;
    layout.style.setProperty('--requisites-action-offset', `${offset}px`);
    // The first label's text ink/advance edge, not its stretched grid-item box.
    const label = action.querySelector('span:not(.footer-action-arrow)');
    const range = document.createRange();
    range.selectNodeContents(label);
    const labelEnd = range.getBoundingClientRect().right - action.getBoundingClientRect().left;
    layout.style.setProperty('--requisites-label-end', `${labelEnd}px`);
  };
  align();
  document.fonts.ready.then(align);
  new ResizeObserver(align).observe(action);
  desktop.addEventListener('change', align);
})();
