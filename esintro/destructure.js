const actor = {
  name: "Kazi Mithfa",
  age: 29,
  phone: "0173282828128",
  money: 1244565566,
};

// in right side is an object the left side of descrtuctring is an object is as well
//use property name as a variable

const { phone, age: boyos } = actor;

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;

//
function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [prothom, dithio] = doubleThem(6, 9);
console.log(prothom);
