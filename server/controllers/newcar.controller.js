const NewCar = require("../models/newCar.model");

const getAllCars = async (req, res) => {
  try {
    const newcars = await NewCar.find();
    res.status(200).json(newcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllCarsOfSpecificBrand = async (req, res) => {
  // const brandId = req.params.brandId;

  // console.log(req.path);
  try {
    const newcars = await NewCar.find({ brandSlug: req.params.brandSlug });
    res.status(200).json(newcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getSingleCarDetails = async (req, res) => {
  // const carId = req.params.carId;
  // console.log(req.params);
  try {
    const newcars = await NewCar.find({ titleSlug: req.params.titleSlug });
    res.status(200).json(newcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCarsByPrice = async (req, res) => {
  const price = req.params.price;
  try {
    const carsOfDefinedPrice = await NewCar.find({
      "specifications.price": { $lt: `${price}` },
    });
    res.status(200).json(carsOfDefinedPrice);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCarsBySeatingCapacity = async (req, res) => {
  const seat = req.params.seat;
  try {
    const newcars = await NewCar.find({
      "specifications.seatingcapacity": { $in: [`${seat}`] },
    });
    res.status(200).json(newcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAllCars,
  getAllCarsOfSpecificBrand,
  getSingleCarDetails,
  getCarsByPrice,
  getCarsBySeatingCapacity,
};
