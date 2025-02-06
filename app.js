function numberInput(value) {
    document.getElementById('inputField').value += value;
}

function clearDisplay() {
    document.getElementById('inputField').value = '';
}

function deleteDisplay() {
    let display = document.getElementById('inputField');
    display.value = display.value.slice(0, -1);
}

function operatorEqual() {
    let display = document.getElementById('inputField');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}