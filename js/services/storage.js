const STORAGE_KEY = "todos";

function getTodos() {
    const todos = localStorage.getItem(STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function clearTodos() {
    localStorage.removeItem(STORAGE_KEY);
}