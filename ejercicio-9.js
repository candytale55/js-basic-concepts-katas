/*  Implementa la función denominada sumAll que toma un array de números
 como argumento y devuelve la suma de todos los números de la matriz.  */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numberArray) {
    return numberArray.reduce((sum, currentVal) => sum + currentVal, 0);
}

console.log(sumAll(numbers)); // 151
