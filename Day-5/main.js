let body = document.querySelector("body");
let container = document.querySelector(".container");
let button = document.querySelector("button");

function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
}