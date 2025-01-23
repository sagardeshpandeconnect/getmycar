const UsedCar = require("../models/usedCar.model");
const cloudinary = require("../configs/cloudinary.config");
const { handleRequest } = require("./errorHandling");

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

// const getUsedCars = async (req, res) => {
//   try {
//     const usedcars = await UsedCar.find();
//     res.status(200).json(usedcars);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

const getUsedCars = async (req, res) => {
  await handleRequest(res, () => UsedCar.find());
};

// const getUsedCarsOfSpecificUser = async (req, res) => {
//   // console.log(req.params);
//   try {
//     const usedcars = await UsedCar.find({ userId: req.params.userId });
//     res.status(200).json(usedcars);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

const getUsedCarsOfSpecificUser = async (req, res) => {
  const { userId } = req.params;
  await handleRequest(res, () => UsedCar.find({ userId }));
};

const deleteUsedCar = async (req, res) => {
  try {
    // Find the car from MongoDB
    const car = await UsedCar.findById(req.params.carId);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Delete the car from MongoDB first
    const deletedCar = await UsedCar.findByIdAndDelete(req.params.carId);

    // Now that the car is deleted, attempt to delete the image from Cloudinary
    const result = await cloudinary.uploader.destroy(car.picture.pictureId);
    // console.log("Cloudinary response:", result);

    // If Cloudinary deletion failed, log the error but still respond that the car is deleted
    if (result.result !== "ok") {
      console.error("Cloudinary deletion failed:", result);
    }

    // Send response after both operations are completed
    res.status(200).json({
      message: "Used car deleted successfully",
      success: true,
      deletedCar,
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
const deleteImageFromCloudinary = async (req, res) => {
  try {
    const { encodedId } = req.params;
    console.log(encodedId);

    if (!encodedId) {
      return res.status(400).json({
        message: "encodedId is required",
        success: false,
      });
    }

    // Call Cloudinary's destroy method
    const result = await cloudinary.uploader.destroy(encodedId);
    console.log("Cloudinary response:", result);

    // If Cloudinary deletion failed
    if (result.result !== "ok") {
      console.error("Cloudinary deletion failed:", result);
      return res.status(400).json({
        message: "Image not found or deletion failed",
        success: false,
      });
    }
    // Send response after successful deletion
    res.status(200).json({
      message: "Old image deleted successfully",
      success: true,
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// const getUsedCarDetailsById = async (req, res) => {
//   // console.log(req.params);
//   try {
//     const usedcars = await UsedCar.findById(req.params.carId);
//     res.status(200).json(usedcars);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

const getUsedCarDetailsById = async (req, res) => {
  const { carId } = req.params;
  await handleRequest(res, () => UsedCar.findById(carId));
};

const editUsedCar = async (req, res) => {
  try {
    const { carId } = req.params; // Get car ID from the request parameters
    const updatedData = req.body; // Get updated car data from the request body

    // Find the car by ID and update it with the new data
    const updatedCar = await UsedCar.findByIdAndUpdate(carId, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is applied
    });

    // If the car does not exist, return a 404 error
    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Respond with the updated car details
    res.status(200).json({
      message: "Used car updated successfully",
      success: true,
      updatedCar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  uploadUsedCar,
  getUsedCars,
  getUsedCarsOfSpecificUser,
  deleteUsedCar,
  editUsedCar,
  getUsedCarDetailsById,
  deleteImageFromCloudinary,
};
