const API = "https://6a1d3348bcc4f20d5ca421e3.mockapi.io/tasks";
let editingId = null;
let tasks = [];

// DOM Elements
const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const cancelBtn = document.getElementById("cancel-edit");

// GET - Load Tasks
async function loadTasks() {
    try {
        const response = await fetch(API);


        if (!response.ok) {
            throw new Error("Failed to load tasks");
        }


        tasks = await response.json();


        renderTasks();


    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// POST - Add Task
async function addTask(task) {
    try {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        if (!response.ok) {
            throw new Error("Failed to create task");
        }

        await loadTasks();

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// PUT - Update Task
async function updateTask(task) {
    try {
        const response = await fetch(`${API}/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        if (!response.ok) {
            throw new Error("Failed to update task");
        }

        await loadTasks();

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// DELETE - Remove Task
async function deleteTask(id) {
    try {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete task");
        }

        await loadTasks();

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// Form Submit
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = form.title.value.trim();

    if (!title) {
        alert("Title is required");
        return;
    }

    const task = {
        title: title,
        description: form.description.value.trim(),
        priority: form.priority.value,
        status: form.status.value,
        dueDate: form.dueDate.value
    };

    if (editingId) {
        task.id = editingId;
        await updateTask(task);

        editingId = null;

        form.querySelector("button[type='submit']").textContent = "Add Task";

        cancelBtn.style.display = "none";

    } else {
        await addTask(task);
        cancelBtn.style.display = "none";
    }

    form.reset();
});

// Render Tasks
function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");
        li.className = `task-card ${task.priority}`;

        if (task.status === "done") {
            li.classList.add("completed");
        }

        const info = document.createElement("div");

        info.innerHTML = `
            <strong>${task.title}</strong><br>
            Description: ${task.description || "None"}<br>
            Priority: ${task.priority}<br>
            Status: ${task.status}<br>
            Due Date: ${task.dueDate || "N/A"}
        `;

        // EDIT
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => startEdit(task));

        // DONE
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Mark Done";

        // ✅ disable if already done
        if (task.status === "done") {
            doneBtn.disabled = true;
            doneBtn.textContent = "Completed";
        }

        doneBtn.addEventListener("click", () => {
            updateTask({
                ...task,
                status: "done"
            });
        });

        // DELETE
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(info);
        li.appendChild(editBtn);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

//Edit tasks
function startEdit(task) {

    form.title.value = task.title;
    form.description.value = task.description || "";
    form.priority.value = task.priority;
    form.status.value = task.status;
    form.dueDate.value = task.dueDate || "";

    editingId = task.id;

    form.querySelector("button[type='submit']").textContent = "Update Task";
    cancelBtn.style.display = "inline-block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function cancelEdit() {
    editingId = null;
    form.reset();
    form.querySelector("button[type='submit']").textContent = "Add Task";
    cancelBtn.addEventListener("click", cancelEdit);
    cancelBtn.style.display = "none";
}

// Initial Load
document.addEventListener("DOMContentLoaded", loadTasks);

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("task-form");
    const list = document.getElementById("task-list");
    const cancelBtn = document.getElementById("cancel-edit");

    cancelBtn.addEventListener("click", cancelEdit);

});