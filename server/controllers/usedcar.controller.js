const UsedCar = require("../models/usedCar.model");
const cloudinary = require("cloudinary").v2;

const uploadUsedCar = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      mobile,
      price,
      brand,
      carName,
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
      carName,
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
  // console.log(req.params);
  try {
    const usedcars = await UsedCar.find({ userId: req.params.userId });
    res.status(200).json(usedcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteUsedCar = async (req, res) => {
  // console.log(req.params.carId);

  try {
    const car = await UsedCar.findById(req.params.carId);
    console.log(car.picture.pictureId);
    await cloudinary.uploader
      .destroy(car.picture.pictureId)
      .then((result) => console.log(result));

    const usedcars = await UsedCar.findByIdAndDelete({ _id: req.params.carId });
    res.status(200).json(usedcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  uploadUsedCar,
  getUsedCars,
  getUsedCarsOfSpecificUser,
  deleteUsedCar,
};
