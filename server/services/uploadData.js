const { MongoClient } = require("mongodb");
const fs = require("fs");

const sourceDataPath = "./data/newcars.json";
// const sourceDataPath = "./data/transmissions.json";

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

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
    const database = client.db("getmycar");
    const collection = database.collection("newcars");
    // const collection = database.collection("transmissions");

    // Ensure that the collection is empty
    await collection.deleteMany({});

    // Read JSON data from file
    const jsonData = readDataFromSource(sourceDataPath);
    // console.log(jsonData);
    console.log("Please wait, data is being added");

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

module.exports = { uploadDataToDatabase };
