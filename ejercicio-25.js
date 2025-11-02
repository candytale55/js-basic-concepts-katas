/* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas. */

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

console.log("Average sale:", allSales/products.length);

// option with reduce

const averageSale = products.reduce(((sum, product) => sum + product.sellCount), 0)/ products.length;
console.log("Average sale:", averageSale);