const numbers = [1, 2, 3, 4];

const glass = { name: "Anny", color: "white", price: 12, isCleaned: true };

//optional

const keys = Object.keys(glass);
console.log(keys);

for (const key of keys) {
  const value = glass[key];
  console.log(key, value);
}
