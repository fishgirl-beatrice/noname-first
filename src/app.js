(() => {
  const search = document.querySelector('[data-search]');
  const filter = document.querySelector('[data-category]');
  const cards = [...document.querySelectorAll('[data-post-card]')];
  const empty = document.querySelector('[data-empty]');
  if (!search || !filter || !cards.length) return;
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    const category = filter.value;
    let visible = 0;
    cards.forEach(card => {
      const ok = (!q || (card.dataset.search || '').includes(q)) && (!category || card.dataset.category === category);
      card.hidden = !ok;
      if (ok) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  search.addEventListener('input', apply);
  filter.addEventListener('change', apply);
})();
