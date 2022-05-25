const number1 = Number(prompt('Enter first number:'));
const operation = prompt('Enter operation:');
const number2 = Number(prompt('Enter second number:'));

if (String(number1) !== 'NaN' && String(number2) !== 'NaN') {
    if (operation === '+') {
        alert('Ваш результат: ' + (number1 + number2));
    } else if (operation === '-') {
        alert('Ваш результат: ' + (number1 - number2));
    } else if (operation === '*') {
        alert('Ваш результат: ' + (number1 * number2));
    } else if (operation === '/') {
        alert('Ваш результат: ' + (number1 / number2));
    } else {
        alert('Такой операции не существует');
    }
} else {
    alert('Number 1 or number 2 is not a number!')
}
