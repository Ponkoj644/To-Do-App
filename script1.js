// All Variable//
const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskDiv = document.getElementById("all-task");
const errorDiv = document.getElementById("error-div");

addTask.addEventListener("submit", function (e) {
  e.preventDefault();

  // Take input field value//
  const taskText = taskInput.value;

  if (taskText) {
    errorDiv.innerHTML = "";
    taskInput.value = "";

    // Create div//
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    // Create Input field//
    const singleTaskText = document.createElement("input");
    singleTaskText.type = "Text";
    singleTaskText.value = taskText;
    singleTaskText.setAttribute("readonly", "readonly");

    //Create Edit button //
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";

    // Create Complete button //
    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";

    // Create Delete button //
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    // Create Component //

    singleTaskDiv.appendChild(singleTaskText);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    //Add the task//
    taskDiv.appendChild(singleTaskDiv);

    // Edit task Function //
    editTask.addEventListener("click", function (e) {
      if (editTask.innerText == "Edit") {
        editTask.innerText = "Save";

        // my line//
        // completeTask.innerText = "Complete";
        // alert("Your task is edited. Click 'Complete' to save it.");

        singleTaskText.removeAttribute("readonly");

        // My line
        completeTask.innerText = "Complete";

        singleTaskText.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskText.setAttribute("readonly", "readonly");

        //My line
        alert("Your task is edited. Click 'Complete' to save it.");
      }
    });

    // Complete task Function //
    completeTask.addEventListener("click", function (e) {
      if (completeTask.innerText == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");

        //My line
        alert("Your task is completed.");
      }
    });
  } else {
    errorDiv.innerHTML = `<p>Please write your task !</p>`;
  }
});

// 1.02.00
