const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Function to add a new task to the list
function addTask(taskDescription) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskSpan = document.createElement('span');
  const deleteButton = document.createElement('button');

  checkbox.type = 'checkbox';
  taskSpan.innerText = taskDescription;
  deleteButton.innerText = 'Delete';

  // Add event listener for delete button
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  newTaskInput.value = ''; // Clear input field after adding task
}

// Add click event listener for "Add Task" button
addTaskButton.addEventListener('click', function() {
  const taskDescription = newTaskInput.value;
  if (taskDescription) {
    addTask(taskDescription);
  } else {
    alert('Please enter a task description!');
  }
});
