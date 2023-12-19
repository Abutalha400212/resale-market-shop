require("dotenv").config();
const { MongoClient } = require("mongodb");
const { config } = require("../config");

const url = config.database_url;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

async function connectToDatabase() {
  try {
    await client.connect();
    dbConnection = client.db("reseller-market");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

function getDB() {
  return dbConnection;
}

module.exports = {
  connectToDatabase,
  getDB,
  client,
};
