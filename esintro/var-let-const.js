//we normally use let and const

//exception
//in array can not be reassigned but can be modified in terms of const
const numbers = [23, 33, 44, 56, 67];
numbers[1] = 55;
numbers.push(34, 36, 38);

console.log(numbers);

//object:
const student = {
  name: "Moyna Pakhi",
  class: 12,
};

// in case of const we can update the property of the object
student.name = "Kokil Konti";
console.log(student);
