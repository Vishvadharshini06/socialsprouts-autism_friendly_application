document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    loadTasks();

    // Add new task
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTask(taskText);
        saveTask(taskText);
        taskInput.value = ""; // Clear input field
    });

    // Function to add task to UI
    function addTask(taskText) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const taskContent = document.createElement('span');
        taskContent.innerText = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.innerText = "✔";
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', function () {
            taskItem.classList.toggle('completed');
            updateTaskStatus(taskText);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "✖";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
            deleteTask(taskText);
        });

        // Append buttons and content to taskItem
        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);

        // Append the taskItem to the task list
        taskList.appendChild(taskItem);
    }

    // Save task to localStorage
    function saveTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTask(task.text);
            if (task.completed) {
                document.querySelectorAll('.task-item').forEach(item => {
                    if (item.firstChild.innerText === task.text) {
                        item.classList.add('completed');
                    }
                });
            }
        });
    }

    // Update task status in localStorage
    function updateTaskStatus(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            if (task.text === taskText) {
                task.completed = !task.completed;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Delete task from localStorage
    function deleteTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
