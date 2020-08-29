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






