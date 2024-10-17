// 6 basic conditions >,<, ===, !== , <=,>=

//array declare
//index,length, push,

const numbers = [12, 13, 15, 23];

//for
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//object

const student = {
  name: "Kazi Mithfa",
  age: 29,
  designation: ["student", "software developer", "politician"],
};

const myVariable = "age";

console.log(student.age); //accessing through dot operator
console.log(student["age"]); //accessing through backet operator

console.log(student[myVariable]); //access via property name in a variable

console.log(student.designation[1]);
