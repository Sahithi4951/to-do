let btn = document.getElementById("btn");
let list = document.getElementById("list");
let text = document.getElementById("text");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

btn.addEventListener("click", function(e){
    e.preventDefault()

    const li = document.createElement("li")
    li.textContent = text.value;
    document.getElementById("list").appendChild(li);
    
    const button = document.createElement("button");
    button.textContent = "❌";
    li.appendChild(button);

})

list.addEventListener("click", function() {
    li.classList.toggle("completed");
    });
