// Get the HTML Elements
let firstNumberElement = $('#firstNumber');
let secondNumberElement = $('#secondNumber');
let operatorButton = $('#operator');
let equalsButton = $('#equals-button');
let resultButton = $('#result-button');
let plusButton = $('#plus-button');
let minusButton = $('#minus-button');
let divideButton = $('#divide-button');
let multiplyButton = $('#multiply-button');
let clearButton = $('#clear-button');

// Minus Button
minusButton.click(function() {
    operatorButton.text($(this).text());
});

// Plus Button
plusButton.click(function() {
    operatorButton.text($(this).text());
});

// Divide Button
divideButton.click(function() {
    operatorButton.text($(this).text());
});

// Multiply Button
multiplyButton.click(function() {
    operatorButton.text($(this).text());
});

// Equals Button
equalsButton.click(function() {
    let firstNumber = firstNumberElement.val();
    let secondNumber = secondNumberElement.val();
    let operator = operatorButton.text();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.text(result);
    }
});

// Clear Button Logic
clearButton.click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorButton.text('+');
    resultButton.text('RESULT');
});