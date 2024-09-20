const glass = { name: "Anny", color: "white", price: 12, isCleaned: true };
const keys = Object.keys(glass);

const values = Object.values(glass);

//it will return a two dimensional array or we can say array of an array

// const pair = Object.entries(glass);
// console.log(pair);

const { isCleaned, ...shortGlass } = glass;

//freeze
Object.freeze(glass);
glass.source = "Bangladesh";
console.log(glass);
