const express = require("express");

const {
  uploadUsedCar,
  getUsedCars,
  getUsedCarsOfSpecificUser,
  deleteUsedCar,
} = require("../controllers/usedcar.controller");

const router = express.Router();

router.post("/upload", uploadUsedCar);
router.get("/", getUsedCars);
router.get("/manage/:userId", getUsedCarsOfSpecificUser);
router.delete("/delete/:carId", deleteUsedCar);

module.exports = router;
