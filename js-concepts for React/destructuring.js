// 1. Array Destructuring

const numbers = [42, 65];

//const x = numbers[0];
//const y = numbers[1];

const [x, y] = [42, 65];
//console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
const [first, second] = [90, 34];
//console.log(boxify(90, 34));

const student = {
  name: "Kazi Mithfa",
  age: 29,
  designation: ["student", " software developer", " politician"],
  movies: ["first Movie", "second Movie"],
};

const [firstMovie, secondMovie] = student.movies;
console.log([firstMovie, secondMovie]);

// object er destructuring
const { name, age } = { name: "Anny", age: 25 };
