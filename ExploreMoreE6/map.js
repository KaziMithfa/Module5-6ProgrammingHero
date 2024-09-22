//map loop through each element of the array and do the operation that you passed in the call back function and hold the result from each opearation in an array and finally returns you the array
const numbers = [2, 3, 5, 56, 60];

const doubled = [];

function doubleIt(num) {
  console.log("num is now ", num);
  return num * 2;
}

const double2 = (n) => n * 2;

const result = numbers.map(doubleIt);
// console.log(result);
const output = numbers.map(double2);
//console.log(output);

const output2 = numbers.map((n) => n * 2);
console.log(output2);

// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }

// console.log(doubled);
