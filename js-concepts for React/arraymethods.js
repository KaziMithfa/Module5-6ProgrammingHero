// Array of objects

const products = [
  { name: "Kazi Mithfa", age: 27 },
  { name: "Kazi Sanjad", age: 28 },
  { name: "Kazi Papu", age: 29 },
  { name: "Kazi Mostafa", age: 30 },
];

const names = products.map((product) => product.name);
//console.log(names);

//if we dont need return we will return forEach

// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.name));

// filter: we will give a condition. jara eta fullfill korbe tara return hbe

const cheap = products.filter((product) => product.age > 28);
//console.log(cheap);

const speicificName = products.filter((p) => p.name.includes("M"));
//console.log(speicificName);

//4. find we will give you only the first element which meets the condition

const special = products.find((p) => p.name.includes("f"));
console.log(special);
