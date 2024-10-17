// falsy => '',0, null, undefined,false
// truthy => '',0,false, null, undefined

let myVar = 5;
//check truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

let myMoney = 50;
if (!myMoney) {
}

// ternary
const money = 80;
let food = money > 100 ? "birayni" : "cha biscuit";
console.log(food);

let drink = money > 100 && myVar > 100 ? "Coke" : "filter water";
console.log(drink);

// number to string conversion
const num1 = 52;
// kono ekta sonka er sather ekta empty string jog korle oita string ae convert hoiye jai
const numStr = num1 + "";
console.log(numStr);

// string to number conversion

const input = "560";
const intinput = +input;
console.log(intinput);

let isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");

isActive ? showUser() : hideUser();
// use & if the left side is true then the right side will be executed
isActive && showUser();

// use || if the left side is false then the right side will be executed
isActive || hideUser();

// toogle boolean
isActive = !isActive;
