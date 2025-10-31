

/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]) // HULK



/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

avengers.splice(0,1,"IRONMAN")
console.log(avengers); // [ 'IRONMAN', 'SPIDERMAN', 'BLACK PANTHER' ]


/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length); // 3


/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty");
rickAndMortyCharacters1.push("Summer");

console.log(rickAndMortyCharacters1); // [ 'Rick', 'Beth', 'Jerry', 'Morty', 'Summer' ]


/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.*/

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();

console.log(rickAndMortyCharacters2[0]); // Rick
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length-1]); // Summer


/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters); // [ 'Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez' ]