/* Crea una función que reciba por parámetro un array y 
   compruebe si existen elementos duplicados, en caso que existan 
   los elimina para retornar un array sin los elementos duplicados.
*/


const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


/* Hace lo mismo pero no es lo que pide el problema */

function getNoDuplicatesSet(array) {
    return [... new Set(array)];
}
console.log(getNoDuplicatesSet(duplicates));



/* Borra el elemento del array (destructivo) */

function removeDuplicates(array) {
    
    for (let i = 0; i <= array.length; i++){
        for (let j = i + 1; j <= array.length; j++){
            if (array[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}

console.log(removeDuplicates(duplicates));


