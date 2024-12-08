const express = require("express");
const {
  getAllFuelTypes,
  getDieselCars,
  getCarsByFuelType,
} = require("../controllers/fueltype");

const router = express.Router();

router.get("/", getAllFuelTypes);
router.get("/:fuelType", getCarsByFuelType);
router.get("/diesel", getDieselCars);

module.exports = router;
