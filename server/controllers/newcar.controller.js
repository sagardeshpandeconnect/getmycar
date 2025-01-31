const NewCar = require("../models/newCar.model");
const { handleRequest } = require("./errorHandling");
const paginate = require("../middlewares/pagination.middleware");
const { catchAsync } = require("../utils/catchAsync");

// Constants for Field Names
const FIELDS = {
  PRICE: "specifications.price",
  SEATING_CAPACITY: "specifications.seatingcapacity",
  FUEL_TYPE: "specifications.fueltype",
  TRANSMISSION_TYPE: "specifications.transmission",
};

// Controllers

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

const getCarsByFuelType = catchAsync(async (req, res) => {
  const { fuelType } = req.params;

  const cars = await NewCar.find({ [FIELDS.FUEL_TYPE]: { $in: [fuelType] } });
  if (!cars) {
    return next(new AppError("No cars found with that fueltype", 404));
  }
  res.status(200).json(cars);
});

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
  getAllCarsOfSpecificBrand,
  getSingleCarDetails,
  getCarsByPrice,
  getCarsByBodyType,
  getCarsByFuelType,
  getCarsByTransmissionType,
  getCarsBySeatingCapacity,
};
