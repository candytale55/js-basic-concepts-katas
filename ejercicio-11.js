/* Calcular promedio de strings: Crea una función que reciba 
por parámetro un array y cuando es un valor number lo sume 
y de lo contrario cuente la longitud del string y lo sume. */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixedArray) {
    const numberArray = mixedArray.map(element =>
        typeof element === 'string' ? element.length : element);
    // console.log(numberArray);
    return (numberArray.reduce((sum, current)=> sum + current, 0) / numberArray.length).toFixed(2);
}

console.log(averageWord(mixedElements));
