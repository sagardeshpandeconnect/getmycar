const FuelType = require("../models/fuelType.model");
const NewCar = require("../models/newCar.model");

const getAllFuelTypes = async (req, res) => {
  try {
    const fueltypes = await FuelType.find();
    res.status(200).json(fueltypes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getDieselCars = async (req, res) => {
  try {
    const dieselcars = await NewCar.find({
      "specifications.fueltype": { $in: ["Diesel"] },
    });
    res.status(200).json(dieselcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const getCarsByFuelType = async (req, res) => {
  console.log(req.params);
  const fuelType = req.params.fuelType;
  try {
    const specificFuelCars = await NewCar.find({
      "specifications.fueltype": { $in: [`${fuelType}`] },
    });
    res.status(200).json(specificFuelCars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getAllFuelTypes, getDieselCars, getCarsByFuelType };
