let taskInput = document.getElementById("task");
let addTaskButton = document.getElementById("addtask");
let taskList = document.getElementById("tasklist");
let notificationContainer = document.getElementById("notification-container");

// Add Task
addTaskButton.addEventListener("click", function () {
    addTask();
});

//for pressing Enter in keyboard, it will also add task instead of clicking add task button manually

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        addTask();
    }
});

function addTask() {
    let taskText = taskInput.value.trim();
    if (!taskText) return;

    // Create task element

    let taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} <button class="delete-button">Remove</button>`;

    // Add event to delete task

    taskItem.querySelector(".delete-button").addEventListener("click",()=> {
        taskItem.remove();
         showNotification(`Task removed: ${taskText}`);
    });

    // Append task to list

    taskList.appendChild(taskItem);

    // Show notification
        
    showNotification(`Task added: ${taskText}`);

    // Clear input field
    taskInput.value = "";
}

function showNotification(message) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `${message} <span class="close-button">&times;</span>`;

    notification.querySelector(".close-button").addEventListener("click", function () {
        notification.remove();
    });

    notificationContainer.appendChild(notification);

    // Auto-remove after 2 seconds
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
