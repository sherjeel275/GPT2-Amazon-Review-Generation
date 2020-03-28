//  index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();

//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

/*
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://reinvald:mepP8NhdN93IY6Vm@cluster0-xf5wa.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://reinvald:mepP8NhdN93IY6Vm@cluster0-xf5wa.mongodb.net/test?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client
    .db()
    .admin()
    .listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
