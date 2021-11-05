const task = document.querySelector("#task"),
  addTask = document.querySelector("#add-task"),
  listTasks = document.querySelector("#list-tasks");
// console.log(task, addTask, listTasks);

addTask.addEventListener("click", () => {
  if (task.value === "") {
    return false;
  }
  let newTask = document.createElement("li");
  newTask.innerText = task.value;
  listTasks.appendChild(newTask);
  task.value = "";
});
