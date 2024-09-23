//primitives are pass by value
// non primitives are pass by reference
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
  a = 27;
  const result = a * b;
  return result;
}

console.log(num1);
const output = multiply(num1, num2);
//console.log(output);

let student1 = { name: "Anny", partner: "Mp" };
let student2 = { name: "Raj", partner: "Simran" };

function makeMovie(couple1, couple2) {
  couple1.name = "Tuku";
}

console.log(student1, student2);

makeMovie(student1, student2);
console.log(student1, student2);
