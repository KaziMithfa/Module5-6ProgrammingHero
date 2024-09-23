function sum(a, b, c) {
  //console.log(arguments);
  //Arguments is an array like object
  //we can convert arguments to array

  const args = [...arguments];
  console.log(args);
  const sum = a + b + c;
  return sum;
}

const total = sum(13, 12, 15, 18, 21);
console.log(total);
