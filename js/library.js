const displayPinField = document.getElementById('display-pin-field');
let calculatorDisplayField = document.getElementById('calculator-display');
const successMessage = document.getElementById('success-message');
const failureMessage = document.getElementById('failure-message');

function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    const randomPinLength = randomPin + '';
    if (randomPinLength.length === 4) {
        displayPinField.value = randomPin;
    }else {
        generatePin();
    }
}

function displayPin() {
    const userClicked = event.target.innerText;
    if (userClicked === 'C') {
        calculatorDisplayField.value = '';
    }else if(userClicked === '<') {
        let calculatorDisplay = calculatorDisplayField.value;
        const calculatorValueArray = calculatorDisplay.split('');
        calculatorValueArray.pop();
        const calculatorValue = calculatorValueArray.join('');
        calculatorDisplayField.value = calculatorValue;
    }else {
        calculatorDisplayField.value += event.target.innerText;
    }
}

function matchPin() {
    if (calculatorDisplayField.value === displayPinField.value) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    } else {
        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}