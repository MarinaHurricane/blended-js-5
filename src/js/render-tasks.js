// import { refs } from './js/refs';


export function taskTemplate(task) {
    return ` <li class="task-list-item" data-id = ${task.id}>
    <button class="task-list-item-btn">Delete</button>
    <h3>${task.taskName}</h3>
    <p>${task.taskDescription}</p>
</li>`
};

export function tasksTemplate(tasks) {
  return tasks.map(taskTemplate).join('');
};
