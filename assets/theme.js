document.addEventListener('change', (event) => {
  if (!event.target.matches('[data-variant-select]')) return;
  const url = new URL(window.location.href);
  url.searchParams.set('variant', event.target.value);
  window.location.assign(url);
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const menu = document.querySelector('.menu[open]');
  if (menu) { menu.open = false; menu.querySelector('summary').focus(); }
});
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu[open]');
  if (menu && !menu.contains(event.target)) menu.open = false;
});
