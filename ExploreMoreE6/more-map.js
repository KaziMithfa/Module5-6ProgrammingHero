const numbers = [12, 14, 13, 18, 7];

const fiveBonus = numbers.map((num) => num + 5);
// console.log(fiveBonus);

const halves = numbers.map((num) => num / 2);

const friends = ["Tom", "John", "Michael", "Oliver"];

const lengths = friends.map((frnd) => frnd.length);
//console.log(lengths);

const firstLetter = friends.map((frnd) => frnd[0]);
console.log(firstLetter);
