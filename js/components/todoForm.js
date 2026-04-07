function initForm() {
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-input");

    form.addEventListener("submit", (e) => {
        // 1. prevent page refresh
        e.preventDefault();

        // 2. get input value and clean it
        const text = input.value.trim();

        // 3. dont add if empty
        if (!text) return;

        // 4. create new todo object
        const newTodo = {
            id: generateId(),       // from helpers.js
            text: text,
            completed: false,
            createdAt: Date.now()
        };

        // 5. get existing todos, add new one, save
        const todos = getTodos();           // from storage.js
        todos.push(newTodo);
        saveTodos(todos);                   // from storage.js

        // 6. re-render the list
        renderList(todos);                  // from todoList.js

        // 7. clear input
        input.value = "";
    });
}
