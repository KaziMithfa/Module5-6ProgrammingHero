const getAge = (person) => person.age;
const student = { name: "Anny", age: 20 };

const age = getAge(student);

// no parameter

const getPi = () => Math.PI;
console.log(getPi());

// large arrow function
//if we want to write more than 1 line in that case we can give the second bracket .In addition we need the return statement also

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mul = x * y * z;
  const result = sum + mul;
  return result;
};
