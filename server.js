// node.js server for interacting with mongo
const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

// set up express app
const app = express();
const dev = app.get("env") !== "production";
app.use(bodyParser.json());

// mongo client
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://reinvald:mepP8NhdN93IY6Vm@cluster0-xf5wa.mongodb.net/test?retryWrites=true&w=majority&wtimeoutMS=0&j=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  autoReconnect: true
});

// check if in prod
if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
} else {
  app.use(morgan("dev"));
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
  console.log("NEW fetching reviews from cohort" + req.body.cohort + "...");

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
    "NEW updating review " +
      req.body._id +
      " in cohort " +
      req.body.cohort +
      "..."
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
});

main().catch(console.error);

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;
  console.log("server started!");
});
