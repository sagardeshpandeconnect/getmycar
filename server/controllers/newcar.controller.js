const NewCar = require("../models/newCar.model");
const { handleRequest } = require("./errorHandling");

// Constants for Field Names
const FIELDS = {
  PRICE: "specifications.price",
  SEATING_CAPACITY: "specifications.seatingcapacity",
  FUEL_TYPE: "specifications.fueltype",
  TRANSMISSION_TYPE: "specifications.transmission",
};

// Controllers
const getAllCars = async (req, res) => {
  await handleRequest(res, () => NewCar.find());
};

const getAllCarsOfSpecificBrand = async (req, res) => {
  const { brandSlug } = req.params;
  await handleRequest(res, () => NewCar.find({ brandSlug }));
};

const getSingleCarDetails = async (req, res) => {
  const { titleSlug } = req.params;
  await handleRequest(res, () => NewCar.find({ titleSlug }));
};

const getCarsByPrice = async (req, res) => {
  const { price } = req.params;
  await handleRequest(res, () =>
    NewCar.find({ [FIELDS.PRICE]: { $lt: price } })
  );
};

const getCarsByBodyType = async (req, res) => {
  const { bodyType } = req.params;
  await handleRequest(res, () => NewCar.find({ bodytype: bodyType }));
};

const getCarsByFuelType = async (req, res) => {
  const { fuelType } = req.params;
  await handleRequest(res, () =>
    NewCar.find({ [FIELDS.FUEL_TYPE]: { $in: [fuelType] } })
  );
};

const getCarsByTransmissionType = async (req, res) => {
  const { transmission } = req.params;
  await handleRequest(res, () =>
    NewCar.find({ [FIELDS.TRANSMISSION_TYPE]: { $in: [`${transmission}`] } })
  );
};

const getCarsBySeatingCapacity = async (req, res) => {
  const { seat } = req.params;
  await handleRequest(res, () =>
    NewCar.find({ [FIELDS.SEATING_CAPACITY]: { $in: [seat] } })
  );
};

module.exports = {
  getAllCars,
  getAllCarsOfSpecificBrand,
  getSingleCarDetails,
  getCarsByPrice,
  getCarsByBodyType,
  getCarsByFuelType,
  getCarsByTransmissionType,
  getCarsBySeatingCapacity,
};
