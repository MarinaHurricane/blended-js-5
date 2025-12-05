// import refs from './js/refs.js';

export function themeToggleBtnHandler() {
    const themeToggleBtn = document.querySelector('#themeToggle');
    themeToggleBtn.addEventListener('click', (e) => {
    if(document.body.classList.contains('theme-light')) {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      localStorage.setItem('theme', 'light');
    };
    console.log('theme');
  });
};
  
  export function themeHandler() {
    const theme = localStorage.getItem('theme');
    console.log('theme');
  
    if(theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    };
  };
  