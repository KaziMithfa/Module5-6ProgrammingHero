const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Subham", email: "subham@gmail.com" },
  { id: 2, name: "Subham2", email: "subham2@gmail.com" },
  { id: 3, name: "Subham3", email: "subham3@gmail.com" },
  { id: 4, name: "Subham4", email: "subham4@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management Server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api is hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
