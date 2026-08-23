let colorBox = document.querySelector('.color-box');


function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}