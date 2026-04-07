function createTodoItem(todo) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    // ✅ build HTML
    li.innerHTML = `
        <input 
            type="checkbox" 
            class = "todo-checkbox" ${todo.completed ? "checked" : ""} 
        />
        <span class="todo-text">${todo.text}</span>
        <span class="todo-date">${formatDate(todo.createdAt)}</span>
        <button class="delete-btn">Delete</button>
    `;

    // ✅ attach AFTER innerHTML is set
    li.querySelector(".todo-checkbox").onchange = function () {
        handleComplete(todo.id);
    };

    li.querySelector(".delete-btn").onclick = function () {
        handleDelete(todo.id);
    };

    return li;
}