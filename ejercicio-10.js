/* Calcular un promedio (media) */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberArray) {
    return (numberArray.reduce((sum, currentVal) => sum + currentVal, 0) / numberArray.length).toFixed(2);
}

console.log(average(numbers));