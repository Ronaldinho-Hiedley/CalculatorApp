let currentInput = '';
let result = document.getElementById('result');

function appendToResult(value) {
    currentInput += value;
    result.value = currentInput;
}

function clearResult() {
    currentInput = '';
    result.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        result.value = currentInput;
    } catch (error) {
        result.value = 'Erro';
    }
}
