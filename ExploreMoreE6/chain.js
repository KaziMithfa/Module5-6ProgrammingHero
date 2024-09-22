//data access

const products = {
  count: 5000,
  data: [
    { id: 1, name: "Anny", price: 10000 },
    { id: 2, name: "Tuku", price: 20000 },
  ],
};

const user = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "36 Ashraf Ali Road",
      second: "Patherghata",
      third: "Chattogram",
    },
    city: "Dhaka",
  },
};

console.log(user.address.street.second);

const user2 = {
  id: 5002,
  name: "pori bibir majar",
  address: {
    city: "Chattogram",
    country: "Bangladesh",
  },
};

console.log(user2.address.street?.second);
