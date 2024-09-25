const user = { id: 1, name: "Kazi Mithfa" };
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  owner: "Alia",
  address: {
    street: "Kochur voot er goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
const shopObj = JSON.parse(shopJSON);
