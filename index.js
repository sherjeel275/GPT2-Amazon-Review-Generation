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
    console.log("\n successful connection to MongoDB Atlas! \n");
  } catch (e) {
    console.error(e);
  } finally {
    //await client.close();
  }
}

/*
 * route to fetch all reviews in Atlas belonging to one of the four cohorts
 */
app.post("/getCohort", function(req, res) {
  console.log("fetching reviews from cohort" + req.body.cohort + "...");
  client
    .db("reviews")
    .collection("cohort" + req.body.cohort)
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }
      console.log("query completed");
      res.send(result);
    });
});

main().catch(console.error);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
