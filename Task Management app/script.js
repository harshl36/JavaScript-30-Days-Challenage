// script.js

// Array to store tasks
let tasks = [];

// Function to create a new task
function createTask(title, description, dueDate) {
  return {
    id: Date.now(), // Unique ID based on the current timestamp
    title,
    description,
    dueDate,
    completed: false,
  };
}

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  displayTasks();
}

// Function to update a task
function updateTask(id, updatedTask) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    displayTasks();
  }
}

// Function to delete a task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  displayTasks();
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the task list

  if (tasks.length === 0) {
    const noTasksMessage = document.createElement("li");
    noTasksMessage.textContent = "No tasks yet. Add a new task to get started.";
    taskList.appendChild(noTasksMessage);
  } else {
    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <div>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p>Due: ${task.dueDate}</p>
        </div>
        <div>
          <button class="edit" data-id="${task.id}">Edit</button>
          <button class="delete" data-id="${task.id}">Delete</button>
        </div>
      `;

      // Add event listeners for edit and delete buttons
      const editButton = taskItem.querySelector(".edit");
      editButton.addEventListener("click", () => editTask(task.id));

      const deleteButton = taskItem.querySelector(".delete");
      deleteButton.addEventListener("click", () => deleteConfirmation(task.id));

      taskList.appendChild(taskItem);
    });
  }
}

// Function to edit a task
function editTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("due-date").value = task.dueDate;

    // Add event listener for form submission to update the task
    const form = document.getElementById("task-form");
    form.addEventListener("submit", (e) => updateTaskHandler(e, id), {
      once: true,
    });
  }
}

// Function to handle task update
function updateTaskHandler(e, id) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const updatedTask = createTask(title, description, dueDate);
  updatedTask.id = id; // Preserve the task ID
  updateTask(id, updatedTask);
  e.target.reset();
}

// Function to handle delete confirmation
function deleteConfirmation(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    deleteTask(id);
  }
}

// Event listener for form submission
document.getElementById("task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const newTask = createTask(title, description, dueDate);
  addTask(newTask);
  e.target.reset();
});

// Initial display of tasks
displayTasks();
