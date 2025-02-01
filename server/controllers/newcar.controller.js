const NewCar = require("../models/newCar.model");
const { catchAsync } = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// Constants for Field Names
const FIELDS = {
  PRICE: "specifications.price",
  SEATING_CAPACITY: "specifications.seatingcapacity",
  FUEL_TYPE: "specifications.fueltype",
  TRANSMISSION_TYPE: "specifications.transmission",
};

// Controllers

const getAllCarsOfSpecificBrand = catchAsync(async (req, res, next) => {
  const { brandSlug } = req.params;
  const cars = await NewCar.find({ brandSlug });

  if (!cars || cars.length === 0) {
    return next(new AppError("No cars found for this brand", 404));
  }

  res.status(200).json(cars);
});

const getSingleCarDetails = catchAsync(async (req, res, next) => {
  const { titleSlug } = req.params;
  const car = await NewCar.find({ titleSlug });

  if (!car || car.length === 0) {
    return next(new AppError("No car found with that title", 404));
  }

  res.status(200).json(car);
});

const getCarsByPrice = catchAsync(async (req, res, next) => {
  const { price } = req.params;

  const cars = await NewCar.find({ [FIELDS.PRICE]: { $lt: price } });

  if (!cars || cars.length === 0) {
    return next(new AppError("No cars found within that price range", 404));
  }

  res.status(200).json(cars);
});

const getCarsByBodyType = catchAsync(async (req, res, next) => {
  const { bodyType } = req.params;
  const cars = await NewCar.find({ bodytype: bodyType });

  if (!cars || cars.length === 0) {
    return next(new AppError("No cars found with that body type", 404));
  }

  res.status(200).json(cars);
});

const getCarsByFuelType = catchAsync(async (req, res, next) => {
  const { fuelType } = req.params;

  const cars = await NewCar.find({ [FIELDS.FUEL_TYPE]: { $in: [fuelType] } });

  if (!cars || cars.length === 0) {
    return next(new AppError("No cars found with that fuel type", 404));
  }

  res.status(200).json(cars);
});

const getCarsByTransmissionType = catchAsync(async (req, res, next) => {
  const { transmission } = req.params;
  const cars = await NewCar.find({
    [FIELDS.TRANSMISSION_TYPE]: { $in: [`${transmission}`] },
  });

  if (!cars || cars.length === 0) {
    return next(new AppError("No cars found with that transmission type", 404));
  }

  res.status(200).json(cars);
});

const getCarsBySeatingCapacity = catchAsync(async (req, res, next) => {
  const { seat } = req.params;
  const cars = await NewCar.find({
    [FIELDS.SEATING_CAPACITY]: { $in: [seat] },
  });

  if (!cars || cars.length === 0) {
    return next(new AppError("No cars found with that seating capacity", 404));
  }

  res.status(200).json(cars);
});

module.exports = {
  getAllCarsOfSpecificBrand,
  getSingleCarDetails,
  getCarsByPrice,
  getCarsByBodyType,
  getCarsByFuelType,
  getCarsByTransmissionType,
  getCarsBySeatingCapacity,
};
