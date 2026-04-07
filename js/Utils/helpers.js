function generateId() {
    return Date.now().toString();
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    // output: "Apr 3, 2026"
}