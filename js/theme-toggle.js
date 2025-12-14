const root = document.documentElement;

if (localStorage.theme === "dark") {
    root.classList.add("dark");
}

document.addEventListener("click", (e) => {
    if (e.target.id === "themeToggle") {
        root.classList.toggle("dark");
        localStorage.theme = root.classList.contains("dark") ? "dark" : "light";
    }
});