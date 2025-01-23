const FuelType = require("../models/fuelType.model");
const { handleRequest } = require("./errorHandling");

const getAllFuelTypes = async (req, res) => {
  await handleRequest(res, () => FuelType.find());
};

module.exports = { getAllFuelTypes };
