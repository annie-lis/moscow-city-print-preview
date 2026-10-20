(() => {
  const canvas = document.querySelector('.canvas');
  const legal = document.querySelector('.footer-legal');
  const mark = document.querySelector('.mark.bl');
  const stroke = [...mark.querySelectorAll('line')].find(line =>
    line.y1.baseVal.value === line.y2.baseVal.value);
  const align = () => {
    const midpoint = mark.querySelector('svg').createSVGPoint();
    midpoint.x = (stroke.x1.baseVal.value + stroke.x2.baseVal.value) / 2;
    midpoint.y = (stroke.y1.baseVal.value + stroke.y2.baseVal.value) / 2;
    // getScreenCTM includes the lower mark's scaleY(-1):
    // the horizontal crop rule is at y=40, or 6px from the flipped mark top.
    const strokeOffset = midpoint.matrixTransform(stroke.getScreenCTM()).y - mark.getBoundingClientRect().top;
    const legalCenter = legal.getBoundingClientRect().top + parseFloat(getComputedStyle(legal).borderTopWidth) / 2;
    const top = legalCenter - canvas.getBoundingClientRect().top - strokeOffset;
    canvas.style.setProperty('--legal-crop-top', `${top}px`);
  };
  const observer = new ResizeObserver(align);
  observer.observe(legal);
  // Expanding page content moves legal without changing legal's own dimensions.
  observer.observe(canvas);
  window.addEventListener('load', align);
  window.addEventListener('resize', align);
  if (document.fonts) document.fonts.ready.then(align);
  align();
})();
