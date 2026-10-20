(() => {
  const track = document.querySelector('.clients-track');
  const prev = document.querySelector('.clients-prev');
  const next = document.querySelector('.clients-next');
  if (!track || !prev || !next) return;

  const cards = [...track.children];
  const visible = 4;
  let index = 0;
  const max = Math.max(0, cards.length - visible);

  const render = () => {
    track.style.transform = `translateX(-${index * 25}%)`;
  };

  prev.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    render();
  });

  next.addEventListener('click', () => {
    index = Math.min(max, index + 1);
    render();
  });
})();
