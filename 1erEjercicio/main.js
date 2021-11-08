//Aqui capturo al input
const addTask = document.querySelector("#add-task");

//aqui capturo el boton
const submitTask = document.querySelector("#submit-task");

// aqui el msg de error
const error = document.querySelector('#error-msg');

//aqui la lista en la que voy a añadir los elementos despues
const listTasks = document.querySelector("#list-tasks");

// aqui capturo todas las tareas listadas, es una funcion porque se debe refrescar siempre que se llame
function tasks() {
  return document.querySelectorAll(".task");
}

// este es el arreglo convencional en el que voy a guardar los datos para mejor manejo
const tasksArray = [];

// en esta funcion creo un nuevo elemento li con los datos que le paso
function newListElement(task) {
  const newTask = document.createElement("li");
  newTask.setAttribute("id", `task-${tasksArray.length}`);
  newTask.classList.add("task");
  newTask.innerText = task;
  return newTask;
}

// en esta funcion añado el nuevo elemento creado a la lista y limpio el input 
function addTaskToList(task) {
  tasksArray.push(task);
  listTasks.appendChild(newListElement(tasksArray.at(-1)));
}

submitTask.addEventListener("click", () => {
  // valido si el input esta vacio null o undefined y en ese caso remuevo la clase que vuelve el error invisible y salgo de la funcion con el return false
  if (!addTask.value) {
    error.classList.remove('not-visible');
    console.warn("No se puede añadir una tarea vacia");
    return false;
  }
  // si la validacion va bien compruebo que el error no sea visible 
  if (!error.classList.contains('not-visible')) error.classList.add('not-visible');

  // añado la tarea a la lista
  addTaskToList(addTask.value);
  addTask.value = "";
});

// extra guardar las tareas
function save() {
  const tasks = JSON.stringify(tasksArray);
  localStorage.setItem('tasks', tasks);
  console.info('SAVE DATA');
}

function load() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  console.info('LOAD DATA');
  return tasks;
}

const cargar = document.querySelector('#cargar');

const guardar = document.querySelector('#guardar');

cargar.addEventListener('click', () => {
  const tasks = load();
  if(!tasks){
    console.warn('Nada para cargar');
    return false;
  }
  tasks.forEach(task => {
    addTaskToList(task);
  });
});

guardar.addEventListener('click', () => {
  if(!tasksArray || tasksArray.length < 1) {
    console.warn('Nada para guardar');
    return false;
  }
  save();
});
