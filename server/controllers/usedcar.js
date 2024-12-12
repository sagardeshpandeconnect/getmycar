const UsedCar = require("../models/UsedCar");

const uploadUsedCar = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      price,
      brand,
      year,
      month,
      ownerType,
      kmDriven,
      comments,
    } = req.body;

    const usedcar = new UsedCar({
      name,
      email,
      mobile,
      price,
      brand,
      year,
      month,
      ownerType,
      kmDriven,
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

module.exports = { uploadUsedCar };
