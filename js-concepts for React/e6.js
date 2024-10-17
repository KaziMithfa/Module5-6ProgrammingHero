const numbers = [12, 13, 15, 23];

const student = {
  name: "Kazi Mithfa",
  age: 29,
  designation: ["student", " software developer", " politician"],
};

// 1. template String
const about = `My name is ${student.name} and I am ${student.age} years old. I am a ${student.designation}`;
//console.log(about);

// arrow function
const give = () => 55;

const addNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
};

const add = (num1, num2, num3) => num1 + num2 + num3;

//addNumbers(4, 5);

//spread operator
const newNumbers = [...numbers];

const currentNumbers = [...numbers, 55];
numbers.push(99);
numbers.push(98);
numbers.push(97);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
