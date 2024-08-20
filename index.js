// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(inpute) {
    display.value += inpute;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";

    }
}