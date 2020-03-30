//  index.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://reinvald:mepP8NhdN93IY6Vm@cluster0-xf5wa.mongodb.net/test?retryWrites=true&w=majority&wtimeoutMS=0&j=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  autoReconnect: true
});

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

async function checkConnection() {
  if (!client.isConnected) {
    await client.connect();
  }
}

/*
 * route to fetch all reviews in Atlas belonging to one of the four cohorts
 */
app.post("/getCohort", function(req, res) {
  console.log("fetching reviews from cohort" + req.body.cohort + "...");

  if (!client.isConnected) {
    checkConnection();

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
  } else {
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
  }
});

/*
 * route to update review based on user response
 */
app.post("/addFeedback", function(req, res) {
  console.log(
    "updating review " + req.body._id + " in cohort " + req.body.cohort + "..."
  );

  if (!client.isConnected) {
    checkConnection();

    client
      .db("reviews")
      .collection("cohort" + req.body.cohort)
      .updateMany(
        { _id: req.body._id },
        {
          $push: {
            feedback: {
              guess: req.body.guess,
              confidence_ranking: req.body.confidence_ranking,
              feedback: req.body.feedback
            }
          }
        }
      )
      .then(result => {
        const { matchedCount, modifiedCount } = result;
        if (matchedCount && modifiedCount) {
          console.log(`Successfully updated the item.`);
          res.send(result);
        }
      })
      .catch(err => console.error(`Failed to update the item: ${err}`));
  } else {
    client
      .db("reviews")
      .collection("cohort" + req.body.cohort)
      .updateMany(
        { _id: req.body._id },
        {
          $push: {
            feedback: {
              guess: req.body.guess,
              confidence_ranking: req.body.confidence_ranking,
              feedback: req.body.feedback
            }
          }
        }
      )
      .then(result => {
        const { matchedCount, modifiedCount } = result;
        if (matchedCount && modifiedCount) {
          console.log(`Successfully updated the item.`);
          res.send(result);
        }
      })
      .catch(err => console.error(`Failed to update the item: ${err}`));
  }

  /*
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
  */
});

main().catch(console.error);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
