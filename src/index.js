import { refs } from './js/refs.js';
import menuTemplate from './templates/menu.hbs';
import menu from './menu.json';
// import switchTheme from './js/theme-switch.js';

const markup = menuTemplate(menu);

refs.menuRef.insertAdjacentHTML('beforeend', markup);

refs.switchRef.addEventListener('change', switchTheme);

// localStorage.removeItem('theme');

function getTheme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === null) {
    refs.bodyRef.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    return;
  }

  if (currentTheme === 'dark') {
    refs.bodyRef.classList.add('dark-theme');
    refs.switchRef.checked = true;
    return;
  }

  refs.bodyRef.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
  return;
}
getTheme();



function switchTheme(e) {
  console.log(localStorage.getItem('theme') === 'light');
  if (localStorage.getItem('theme') === 'light') {
    refs.bodyRef.classList.remove('light-theme');
    refs.bodyRef.classList.add('dark-theme');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');

    return;
  }
  if (localStorage.getItem('theme') === 'dark') {
    refs.bodyRef.classList.add('light-theme');
    refs.bodyRef.classList.remove('dark-theme');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
    return;
  }
}
