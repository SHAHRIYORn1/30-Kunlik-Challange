let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {

    if(display.value === "") {
        return alert("Please enter a value to calculate.");
    }else if(display.value.includes("undefined") || display.value.includes("NaN")) {
        display.value = "";
        return alert("Invalid value.");
    }
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}