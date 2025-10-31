/* Completa la función que tomando dos números como argumento devuelva el más alto. */

function getMaxNumber(numberOne , numberTwo) {
    return numberOne > numberTwo ? numberOne : numberTwo; 
}

console.log(getMaxNumber(23, 45)); // 45

console.log(getMaxNumber(87, 45)); // 87