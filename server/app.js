const express = require("express");
const cookieParser = require("cookie-parser");
const corsConfig = require("./configs/cors.config");
const helmet = require("helmet");
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
const errorHandler = require("./middlewares/errorHandler.middleware");
const AppError = require("./utils/appError");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(corsConfig);
app.use(helmet());
// Error-handling middleware
app.use(errorHandler);

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
// Handle 404 routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
