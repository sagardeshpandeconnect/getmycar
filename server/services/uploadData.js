const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");
const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: ".env.development" });

// Watch the source data file for changes
const sourceDataPath = "./data/newcars.json";
const watcher = chokidar.watch(sourceDataPath, { persistent: true });

const mongoUrl = process.env.MONGO_URL;
// console.log(mongoUrl);

// Function to read data from source
function readDataFromSource(sourceDataPath) {
  return JSON.parse(fs.readFileSync(sourceDataPath, "utf8"));
}

async function uploadDataToDatabase() {
  const client = new MongoClient(mongoUrl);

  try {
    await client.connect();
    console.log("successfully connected to database");
    // Configure your Atlas collection
    const database = client.db("carwale");
    const collection = database.collection("newcars");

    // Ensure that the collection is empty
    await collection.deleteMany({});

    // Read JSON data from file
    const jsonData = readDataFromSource(sourceDataPath);
    // console.log(jsonData);
    console.log("file is changed so modified data is being added");

    // Insert each document from JSON file into the collection
    await collection.dropIndexes();
    await collection.insertMany(jsonData, {
      ordered: false,
    });
    console.log("data added successfully");
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

// Start watching the source data file
function start() {
  watcher.on("ready", () => {
    console.log("Watching for changes in the source data file...");
  });
}

function dataChange() {
  console.log("new data is being added");
}

// Watch for changes in the source data file
function modifyDbData() {
  watcher.on("change", async (path) => {
    await uploadDataToDatabase();
    console.log(`File ${path} has been changed`);
    // Read the updated data from the source file (or any other source)
    // const newData = readDataFromSource(sourceDataPath);
    // console.log(newData);
    // Upload the new data to MongoDB
    // dataChange();
  });
}

module.exports = { start, modifyDbData, uploadDataToDatabase };
