// 1. JSON

const student = {
  name: "Kazi Mithfa",
  age: 29,
  designation: ["student", " software developer", " politician"],
  movies: ["first Movie", "second Movie"],
};

// converting it to a JSON object
const studentJSON = JSON.stringify(student);
//console.log(student);
//console.log(studentJSON);

// converting it to a JavaScript Object
const studentObj = JSON.parse(studentJSON);
//console.log(studentObj);

//2. fetch

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

//Normal fetch structure
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// keys , values

// this will give all the properties or keys of student Object
const keys = Object.keys(student);

//this will give all the values of student Object
const values = Object.values(student);

// Arrayr er modhe loop chalite hole most of the case amra forEach looop  ta ke use korbo

const numbers = [10, 13, 122, 45, 67];
numbers.forEach((number) => {
  //console.log(number);
});

// Arrayr prothek element theke ami jodi kichu return pethe chai tahole amra map korbo

numbers.map((number) => {
  number * 2;
});

// for of on array like object
// loop on an object using for in

// add or remove from an array

const products = [
  { name: "Kazi Mithfa", age: 27 },
  { name: "Kazi Sanjad", age: 28 },
  { name: "Kazi Papu", age: 29 },
  { name: "Kazi Mostafa", age: 30 },
];

//copy arrayProducts and add newProduct Object to it
const newProduct = { name: "Jewl", age: 53 };

// const newProducts = [...products];
// products.push(newProduct);
// //newProducts.push(newProduct);
// console.log(newProducts);
// console.log(products);

//copy products array and add new Product
const newProducts = [...products, newProduct];
//console.log(newProducts);

//create a  new array without one specific item

// remove "Kazi Mithfa" means create a new array without Kazi Mithfa

const remaining = products.filter((product) => product.name !== "Kazi Mithfa");

console.log(remaining);
