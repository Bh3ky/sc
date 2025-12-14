async function loadPartial(id, path) {
    const res = await fetch(path);
    document.getElementById(id).innerHTML = await res.text();
}

loadPartial("site-header", "/partials/header.html");
loadPartial("site-footer", "/partials/footer.html");

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});