//We can use the spread operator in array and object

const max = Math.max(6, 23, 45, 1, 89, 20);
const numbers = [3, 4, 6, 22, 19, 12, 14];
const arrayMax = Math.max(...numbers);

// use spread operator to copy
const nums = [4, 5, 87, 9];

const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends];
friends.push(100);
console.log(dosto);

//advanced
const sonkha = [...friends, 999];
