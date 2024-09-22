//filters selects elements based on a condition and returns an array that fullfilled the condition

const numbers = [1, 5, 7, 8, 4];
const players = [75, 65, 67, 72, 55];

const selected = players.filter((p) => p > 70);

const friends = ["Tom", "John", "Michael", "Oliver", "Joshna"];
const oddFriends = friends.filter((friend) => friend.length > 4);

console.log(oddFriends);
