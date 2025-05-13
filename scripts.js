document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.classList.toggle('completed', task.completed);

      li.innerHTML = `
        <span>${task.text}</span>
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Edit</button>
      `;

      li.querySelector('.delete-btn').addEventListener('click', () => {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      });

      li.querySelector('.edit-btn').addEventListener('click', () => {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim() !== '') {
          tasks[index].text = newText.trim();
          localStorage.setItem('tasks', JSON.stringify(tasks));
          renderTasks();
        }
      });

      li.addEventListener('click', () => {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      });

      taskList.appendChild(li);
    });
  }

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      renderTasks();
    }
  });

  renderTasks();
});
