var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  var task = taskInput.value;
  if (task !== "") {
    var taskItem = document.createElement("div");
    taskItem.className = "taskItem";
    
    var taskText = document.createElement("span");
    taskText.textContent = task;
    taskItem.appendChild(taskText);
    
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editTask(this.parentNode);
    });
    taskItem.appendChild(editButton);
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      deleteTask(this.parentNode);
    });
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
    tasks.push(task);
    
    taskInput.value = "";
  }
}

