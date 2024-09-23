/*
True
1. Truthy
2. any number positive or negative (+ve or -ve) will be truthy accept 0
3. any string other than empty string
4. empty object is a truthy value
5. empty array is truthy



False
1.false
2. 0
3. empty string
4. undefine is false
5. null is false





*/

const x = 4;

let y = {};
if (y) {
  console.log("true");
} else {
  console.log(" not true");
}

//optional
//check falsy
const z = "";
if (!z) {
  console.log("value is falsy");
}

// check true
const a = " ";
if (!!a) {
  console.log("value is truthy");
}
