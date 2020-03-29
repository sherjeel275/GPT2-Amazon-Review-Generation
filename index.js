//  index.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://reinvald:mepP8NhdN93IY6Vm@cluster0-xf5wa.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("successful connection to MongoDB Atlas!");

    // Make the appropriate DB calls
    // await listDatabases(client);
    // await list(client);
  } catch (e) {
    console.error(e);
  } finally {
    //await client.close();
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

async function list(client) {
  client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    });
}

//main().catch(console.error);

app.get("/test", function(req, res) {
  client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }
      res.send(result);
    });

  //console.log(results);
  //res.send(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

/*
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
