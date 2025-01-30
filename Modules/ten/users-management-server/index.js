const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Sabah", email: "sabha@gamil.com" },
  { id: 2, name: "Saboon", email: "saboon@gamil.com" },
  { id: 3, name: "Sathi", email: "sathi@gamil.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management System is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);

  //It is not plain JavaScript . Thats why it is not immutable
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
