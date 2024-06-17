let taskCounter = 1;

function saveTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");

  var task = taskInput.value;
  var date = dateInput.value;

  if (task.trim() === "" || date.trim() === "") {
    alert("Please enter a task and date.");
    return;
  }

  var taskContainer = document.createElement("div");
  taskContainer.className = "task-container";

  var taskNumber = document.createElement("span");
  taskNumber.className = "task-number";
  taskNumber.textContent = taskCounter + ". ";

  var taskElement = document.createElement("span");
  taskElement.textContent = task + " - " + date;

  var editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.onclick = function() {
    editTask(taskElement);
  };

  var editIcon = document.createElement("img");
  editIcon.src = "https://cdn-icons-gif.flaticon.com/6454/6454112.gif";
  editIcon.className = "button-icon";
  editButton.appendChild(editIcon);

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.onclick = function() {
    deleteTask(taskContainer);
  };

  var deleteIcon = document.createElement("img");
  deleteIcon.src = "https://cdn-icons-gif.flaticon.com/11677/11677485.gif"; 
  deleteIcon.className = "button-icon";
  deleteButton.appendChild(deleteIcon);

  taskContainer.appendChild(taskNumber);
  taskContainer.appendChild(taskElement);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  document.getElementById("tasksContainer").appendChild(taskContainer);

  taskInput.value = "";
  dateInput.value = "";

  taskCounter++;
}

function editTask(taskElement) {
  var newTask = prompt("Edit task:", taskElement.textContent.split(" - ")[0]);
  if (newTask !== null) {
    taskElement.textContent = newTask + " - " + taskElement.textContent.split(" - ")[1];
  }
}

function deleteTask(taskContainer) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskContainer.remove();
    updateTaskNumbers();
  }
}

function updateTaskNumbers() {
  var taskContainers = document.querySelectorAll(".task-container");
  taskCounter = 1;
  taskContainers.forEach(function(taskContainer) {
    var taskNumber = taskContainer.querySelector(".task-number");
    taskNumber.textContent = taskCounter + ". ";
    taskCounter++;
  });
}