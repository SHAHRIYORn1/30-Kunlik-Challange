let textArea = document.querySelector("#text-area");
let counter = document.querySelector(".count-show h1");
let count = 0

textArea.addEventListener("input", () => {
    count = textArea.value.length;
    counter.textContent = count;
})