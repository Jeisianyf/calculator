var clear = document.querySelector('#c').value;
var divise = document.querySelector('#divise').value;
var operators = document.querySelectorAll('.op');

var numbers = document.querySelectorAll('.numbers');
var num7 = document.querySelector('button[value="7"]');
var num8 = document.querySelector('button[value="8"]');
var num9 = document.querySelector('button[value="9"]');

var num4 = document.querySelector('button[value="4"]');
var num5 = document.querySelector('button[value="5"]');
var num6 = document.querySelector('button[value="6"]');

var num1 = document.querySelector('button[value="1"]');
var num2 = document.querySelector('button[value="2"]');
var num3 = document.querySelector('button[value="3"]');
var point = document.querySelector('button[value="."]')

var displayView = document.querySelector('.view')

var arrayCount = [undefined, undefined, undefined];

let number = '';

var calculo = 0

function numberButton(num) {
    number = number + num.innerText; //Concatenação
    showDisplay(number);

}

function pressOp(op) {
    arrayCount[0] = number;
    arrayCount[1] = op.innerText;
    console.log(op.innerText);
    showDisplay(op.innerText);
    number = '';
}

function result() {
    arrayCount[2] = number;
    // Can be Used Switch 
    if (arrayCount[1] == "+") {
        calculo = Number(arrayCount[0]) + Number(arrayCount[2]);
        showDisplay(calculo);
    } else if (arrayCount[1] == "-") {
        calculo = Number(arrayCount[0]) - Number(arrayCount[2]);
        showDisplay(calculo);
    } else if (arrayCount[1] == "X") {
        calculo = Number(arrayCount[0]) * Number(arrayCount[2]);
        showDisplay(calculo);
    } else if (arrayCount[1] == "/") {
        calculo = Number(arrayCount[0]) / Number(arrayCount[2]);
        showDisplay(calculo);
    }
    
}

function limpar() {
    console.log("Clear");
    number = '';
    arrayCount[1] = undefined;
    showDisplay(number);
}

function showDisplay(content) {
    displayView.innerText = content;
}






