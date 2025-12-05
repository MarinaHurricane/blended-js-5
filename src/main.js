/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

// import { refs } from './js/refs';

import { refs } from './js/refs.js';
import { taskTemplate } from './js/render-tasks.js';
import { tasksTemplate } from './js/render-tasks.js';
import { saveToLocalStorage } from './js/local-storage-api.js';
import { getFromLocalStorage } from './js/local-storage-api.js';
import { themeToggleBtnHandler } from './js/theme-switcher.js';
import { themeHandler } from './js/theme-switcher.js'

let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
  themeHandler();
  tasks = getFromLocalStorage('tasks');
  refs.list.innerHTML = tasksTemplate(tasks);
  console.log(tasks);
});

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(refs.form);
  const task = Object.fromEntries(formData.entries());
  task.id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const { id, taskName, taskDescription } = task;

  tasks.push(task);
  saveToLocalStorage('tasks', tasks);
  const markup = taskTemplate(task);
  refs.list.insertAdjacentHTML('beforeend', markup);

  refs.form.reset();
});


refs.list.addEventListener('click', (e) => {
  const liElem = e.target.closest('li');
  const deleteBtn = e.target.closest('.task-list-item-btn');
  if(!deleteBtn) return;
  const id = liElem.dataset.id;
  tasks = tasks.filter(task => task.id !== id);
  saveToLocalStorage('tasks', tasks);
  liElem.remove();
});

themeToggleBtnHandler(); 






