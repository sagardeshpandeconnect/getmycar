const express = require("express");
const cookieParser = require("cookie-parser");
const corsConfig = require("./configs/cors.config");
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

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(corsConfig);

// Routes
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

module.exports = app;
