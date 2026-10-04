const composer = document.querySelector('#composer');
const message = composer.querySelector('textarea');
const toggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('#sidebar');

composer.addEventListener('submit', event => {
  event.preventDefault();
  message.focus();
});

toggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
