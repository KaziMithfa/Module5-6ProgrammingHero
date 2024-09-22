const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 60000 },
  { id: 3, name: "hp", price: 75000 },
  { id: 6, name: "Asus", price: 68000 },
];

//map
const names = products.map((product) => product.name);
console.log(names);

//for Each
products.forEach((p) => console.log(p.id));

//reduce

const total = products.reduce(
  (previoud, current) => previoud + current.price,
  0
);

console.log(total);
