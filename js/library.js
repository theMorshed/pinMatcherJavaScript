function generatePin() {
    const displayPinField = document.getElementById('display-pin-field');
    const randomPin = Math.round(Math.random() * 10000);
    const randomPinLength = randomPin + '';
    if (randomPinLength.length === 4) {
        displayPinField.value = randomPin;
    }else {
        generatePin();
    }
}

function displayPin() {
    let calculatorDisplayField = document.getElementById('calculator-display');
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