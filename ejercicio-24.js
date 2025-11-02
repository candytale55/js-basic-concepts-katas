/* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos. */

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let allSales = 0; 

for (let product of products) {
    allSales += product.sellCount;    
}

console.log(allSales);

// option with reduce

const totalSales = products.reduce(((sum, product) => sum + product.sellCount), 0);
console.log(totalSales);