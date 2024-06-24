const express = require("express");
const loadEnv = require("./config/env");
const connectDB = require("./database/connection");
const setupMiddlewares = require("./middlewares");
const setupRoutes = require("./routes");
const { uploadDataToDatabase } = require("./services/uploadData");
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
loadEnv();

// Create Express app
const app = express();

// Setup middlewares
setupMiddlewares(app);

// Setup routes
setupRoutes(app);

// Load SSL certificate and key
const options = {
  key: fs.readFileSync(path.resolve(__dirname, '../client/getmycar-privateKey.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../client/getmycar.crt')),
};

// Connect to the database and start the server
const PORT = process.env.PORT || 6001;
connectDB().then(() => {
  https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server started on port: ${PORT}`);
  });
});


// Function to upload file to database
// uploadDataToDatabase();
