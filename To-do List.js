const addTask = document.getElementById('task-input');
const addTaskBtn = document.getElementById('btn');
const taskList = document.getElementById('list');

// addTaskBtn.addEventListener( 'click',() =>{
//   const task = addTask.value.trim();
//   if (task != ''){
//     createTask(task);
//     addTask.value = '';
//   }
// } );

function addToList() {
  const task = addTask.value.trim();
  if (task !== ''){
    createTask(task);
    addTask.value = '';
  }
}
addTaskBtn.addEventListener('click', addToList);

addTask.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addToList();
  }
});

function createTask(text){
  const taskItem = document.createElement('li');
  taskItem.textContent = text;
  addDeleteButton(taskItem);
  taskList.appendChild(taskItem);
}

function addDeleteButton(taskItem){
  const delBtn = document.createElement('button');
  delBtn.textContent = 'x';
  delBtn.addEventListener('click',() => {
    taskItem.remove();
    });
  taskItem.appendChild(delBtn);
}


