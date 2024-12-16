const UsedCar = require("../models/UsedCar");

const uploadUsedCar = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      mobile,
      price,
      brand,
      year,
      month,
      city,
      ownerType,
      kmDriven,
      picture,
      comments,
    } = req.body;

    const usedcar = new UsedCar({
      userId,
      name,
      email,
      mobile,
      price,
      brand,
      year,
      month,
      city,
      ownerType,
      kmDriven,
      picture,
      comments,
    });
    await usedcar.save();
    res.status(201).json({
      message: "Used car data uploaded successfully",
      success: true,
      usedcar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUsedCars = async (req, res) => {
  try {
    const usedcars = await UsedCar.find();
    res.status(200).json(usedcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUsedCarsOfSpecificUser = async (req, res) => {
  console.log(req.params);
  try {
    const usedcars = await UsedCar.find({ userId: req.params.userId });
    res.status(200).json(usedcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { uploadUsedCar, getUsedCars, getUsedCarsOfSpecificUser };
