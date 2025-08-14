const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('btn');
const taskList = document.getElementById('list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
});

function createTask(text) {
  const listItem = document.createElement('li'); // Create a new list item
  listItem.textContent = text; // Set the text of the list item
  addDeleteButton(listItem); // Add a delete button to the list item
  taskList.appendChild(listItem); // Append the list item to the task list
}

function addDeleteButton(listItem) {
  const deleteBtn = document.createElement('button'); // Create a new button
  deleteBtn.textContent = 'Delete'; // Set the button text
  deleteBtn.addEventListener('click', () => {
      listItem.remove(); // Remove the list item from the DOM when clicked
  });
  listItem.appendChild(deleteBtn); // Append the button to the list item
}