let time = document.querySelector('.time');
let date = new Date();


setInterval(() => {
    date = new Date();

    time.innerHTML = date.toLocaleTimeString();
}, 1000);