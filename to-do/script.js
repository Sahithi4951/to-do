let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTaskToDOM(Task) {
  const li = document.createElement("li");
  li.textContent = Task;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  li.appendChild(btn);

  li.addEventListener("click", function() {
  li.classList.toggle("completed");
    });

  btn.addEventListener("click", function() {
    li.remove();
    // Remove from tasks array & update localStorage
    tasks = tasks.filter(t => t !== Task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  document.getElementById("list").appendChild(li);
}


tasks.forEach(task => addTaskToDOM(task));

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let Task = document.getElementById("Task").value;
  if (Task.trim() === "") return;

  tasks.push(Task);               
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTaskToDOM(Task);              
  document.getElementById("Task").value = "";
});
