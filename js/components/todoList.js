// todoList.js
function renderList(todos) {
    const list = document.querySelector("#todo-list");
    list.innerHTML = "";

    if (todos.length === 0) {
        list.innerHTML = `<p class="empty">No todos yet. Add one!</p>`;
        return;
    }

    todos.forEach(todo => {
        const item = createTodoItem(todo);
        list.appendChild(item);
    });
}