const brandRoute = require("./brands");
const newCarRoute = require("./newcars");
const featuredCarRoute = require("./featuredcars");
const searchedCarRoute = require("./search");
const bodyTypeRoute = require("./bodytypes");
const fuelTypeRoute = require("./fueltypes");
const transmissionRoute = require("./transmissions");
const comparisonRoute = require("./comparison");

const setupRoutes = (app) => {
  app.use("/brands", brandRoute);
  app.use("/newcars", newCarRoute);
  app.use("/featured", featuredCarRoute);
  app.use("/search", searchedCarRoute);
  app.use("/bodytype", bodyTypeRoute);
  app.use("/fueltype", fuelTypeRoute);
  app.use("/transmission", transmissionRoute);
  app.use("/comparison", comparisonRoute);
};

module.exports = setupRoutes;
