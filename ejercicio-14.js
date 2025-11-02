/*  Contador de repeticiones: 
    Crea una función que nos devuelva el número de veces 
    que se repite cada una de las palabras que lo conforma.  */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];


function repeatCounter(array) {  
  const result = {}
  for (const word of array) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;   
}
console.log(repeatCounter(counterWords));
//  { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
