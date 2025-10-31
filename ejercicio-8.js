/* Buscar la palabra más larga 
 Completa la función que tomando un array de strings como argumento devuelva el más largo,
 en caso de que dos strings tenga la misma longitud deberá devolver el primero. */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return ("Parámetro inválido. Se requiere un array con por lo menos un elemento")
    }
    array.sort((a, b) => b.length - a.length)
    return array[0];
}

console.log(findLongestWord(avengers));





