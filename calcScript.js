let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = "";
    }
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "0";
    display.innerText = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
}
