const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6salq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    // Send a ping to confirm a successful connection

    const database = client.db("insertDB");
    const coffeCollection = database.collection("coffee2");
    const userCollection = database.collection("user");

    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // user related apis

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    app.patch("/user", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const updatedDoc = {
        $set: {
          lastLoggedAt: user.lastLoggedAt,
        },
      };

      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();

      const result = await cursor.toArray();
      res.send(result);
    });

    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // getting the data from database to server

    app.get("/coffees", async (req, res) => {
      const cursor = coffeCollection.find();

      const result = await cursor.toArray();
      res.send(result);
    });

    // getting the data of a particular data

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.findOne(query);
      res.send(result);
    });

    // deleting the data from the database

    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.deleteOne(query);
      res.send(result);
    });

    // updating the data

    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedcoffee = req.body;

      const coffee = {
        $set: {
          name: updatedcoffee.name,
          quantity: updatedcoffee.quantity,
          supplier: updatedcoffee.supplier,
          taste: updatedcoffee.taste,
          category: updatedcoffee.category,
          details: updatedcoffee.details,
          photo: updatedcoffee.photo,
        },
      };

      const result = await coffeCollection.updateOne(filter, coffee, options);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("coffee making server is running");
});

app.listen(port, () => {
  console.log(`Coffee server is running on port: ${port}`);
});
