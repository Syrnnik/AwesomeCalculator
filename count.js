output = document.querySelector(".numbers span");
oper = "";
number = 0;
max_chars = 7;

function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function clearOut() {
    setOutput("0");
}

function getOutput() {
    return output.textContent;
}

function setOutput(text) {
    output.textContent = text;
}

function addOutput(text) {
    if (getOutput().length == max_chars) return;
    output.textContent += text;
}

function numClick(num) {
    val = parseFloat(num);
    if (getOutput() == "0") setOutput("");
    addOutput(val);
}

function addDot() {
    if (getOutput().includes(".")) return;
    addOutput(".");
}

function operClick(char) {
    number = parseFloat(getOutput());
    setOutput("0");
    oper = char;
}

function count() {
    val = parseFloat(getOutput());
    if (oper == "+") res = number + val;
    else if (oper == "-") res = number - val;
    else if (oper == "÷") res = number / val;
    else if (oper == "x") res = number * val;
    setOutput(round(res, 2));
}
