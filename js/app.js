function handleComplete(id) {
    const todos = getTodos();

    const updated = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });

    saveTodos(updated);
    renderList(updated);    // ✅ make sure this line exists
}

function handleDelete(id) {
    const todos = getTodos();
    const updated = todos.filter(todo => todo.id !== id);
    saveTodos(updated);
    renderList(updated);    // ✅ make sure this line exists
}

function init() {
    const todos = getTodos();
    renderList(todos);
    initForm();
}

init();