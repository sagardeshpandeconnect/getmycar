const express = require("express");

const {
  uploadUsedCar,
  getUsedCars,
  getUsedCarsOfSpecificUser,
  deleteUsedCar,
  editUsedCar,
  getUsedCarDetailsById,
} = require("../controllers/usedcar.controller");

const router = express.Router();

router.post("/upload", uploadUsedCar);
router.get("/", getUsedCars);
router.get("/details/:carId", getUsedCarDetailsById);
router.get("/manage/:userId", getUsedCarsOfSpecificUser);
router.delete("/delete/:carId", deleteUsedCar);
router.put("/edit/:carId", editUsedCar);

module.exports = router;
