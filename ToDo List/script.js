// script.js

// Get the task list element
const taskList = document.getElementById('task-list');

// Get the add task form elements
const addTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');

// Initialize an empty task list
let tasks = [];

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.textContent = task.text;
    if (task.completed) {
      taskListItem.style.textDecoration = 'line-through';
    }
    taskList.appendChild(taskListItem);
  });
}

// Function to add a new task
function addTask(taskText) {
  const newTask = {
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  renderTaskList();
}

// Function to delete a task
function deleteTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  renderTaskList();
}

// Function to mark a task as completed
function markTaskAsCompleted(taskIndex) {
  tasks[taskIndex].completed = true;
  renderTaskList();
}

// Add event listeners to the add task form
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    newTaskInput.value = '';
  }
});

// Add event listeners to the task list items
taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const taskIndex = Array.prototype.indexOf.call(taskList.children, e.target);
    if (e.target.style.textDecoration === 'line-through') {
      markTaskAsCompleted(taskIndex);
    } else {
      deleteTask(taskIndex);
    }
  }
});

// Initialize the task list
renderTaskList();