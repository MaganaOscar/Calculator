var display = "";
var op = "";
var op1 = "";
var op2 = "";
var elem = document.getElementById("display");

var ans = null;

function press(num) {
    if(display.includes(".")) {
        if (num != ".") {
            display = display + num;
            elem.innerHTML = display;
        }
    } else {
        display = display + num;
        elem.innerHTML = display;
    }
}

function setOP(operation) {
    op = operation;
    op1 = elem.innerHTML;
    elem.innerHTML = op;
    display = "";
}

function calculate() {
    op2 = elem.innerHTML;
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);

    if (op === "+") {
        ans = op1 + op2;
    } else if (op === "-") {
        ans = op1 - op2;
    } else if (op === "*") {
        ans = op1 * op2;
    } else if (op === "/") {
        if (op2 === 0) {
            ans = "Infinity";
        } else {
            ans = op1 / op2;
        }
    }
    elem.innerHTML = ans;
}

function clr() {
    display = "";
    op = "";
    op1 = "";
    op2 = "";
    elem.innerHTML = 0;
}