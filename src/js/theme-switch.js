import { refs } from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function getTheme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === null) {
    refs.bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
    return;
  }

  if (currentTheme === 'dark') {
    refs.bodyRef.classList.add(Theme.DARK);
    refs.switchRef.checked = true;
    return;
  }

  refs.bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', 'light');
  return;
};

export function switchTheme(e) {
  
  if (localStorage.getItem('theme') === 'light') {
    refs.bodyRef.classList.remove(Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');

    return;
  }
  if (localStorage.getItem('theme') === 'dark') {
    refs.bodyRef.classList.add(Theme.LIGHT);
    refs.bodyRef.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
      
    return;
  }
}

