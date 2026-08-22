let count = 0;
let countElement = document.querySelector(".review");


function addBtn() {
    count++;
    countElement.textContent = count;
}

function subtractBtn() {
    if (count > 0) {
        count--;
       countElement.textContent = count;
    }
}