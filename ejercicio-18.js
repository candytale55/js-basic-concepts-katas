/* Probando For: 
    Usa un bucle for para recorrer todos los destinos del array y 
    elimina los elementos que tengan el id 11 y 40. 
    Imprime en un console log el array. 
 */

const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }]


/* Non destructive */

const updatedPlacesToTravel = placesToTravel.filter(place => place.id !== 11 && place.id !== 40);
console.log(updatedPlacesToTravel);

/* Destructive */

for (let i = 0; i < placesToTravel.length; i++){
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
    }
}

console.log(placesToTravel);