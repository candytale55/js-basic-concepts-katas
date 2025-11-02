/* Probando For...in: 
    Usa un for...in para imprimir por consola los datos del alienígena. */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (prop in alien) {
    console.log(`${prop}: ${alien[prop]}`);
}