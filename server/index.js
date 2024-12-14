const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const {
  brandRoute,
  newCarRoute,
  featuredCarRoute,
  searchedCarRoute,
  bodyTypeRoute,
  fuelTypeRoute,
  transmissionRoute,
  comparisonRoute,
  authRoute,
  usedCarRoute,
} = require("./routes");
const { uploadDataToDatabase } = require("./services/uploadData");

// Specify the path to your .env.development file
const envPath = path.resolve(__dirname, ".env.development");

// !CONFIGURATIONS
dotenv.config({ path: envPath });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://192.168.43.5:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// !ROUTES
app.use("/brands", brandRoute);
app.use("/newcars", newCarRoute);
app.use("/featured", featuredCarRoute);
app.use("/search", searchedCarRoute);
app.use("/bodytype", bodyTypeRoute);
app.use("/fueltype", fuelTypeRoute);
app.use("/transmission", transmissionRoute);
app.use("/comparison", comparisonRoute);
app.use("/auth", authRoute);
app.use("/usedcars", usedCarRoute);

// !MONGOOSE SETUP
const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// Function to upload file to database
// uploadDataToDatabase();
