const express = require("express");
const {
  getAllCars,
  getAllCarsOfSpecificBrand,
  getSingleCarDetails,
  getPopularCars,
  getCarsByPrice,
  getCarsBySeatingCapacity,
} = require("../controllers/newcar.controller");
// const { getCarByTitleSlug } = require("../controllers/comparison");

const router = express.Router();

router.get("/", getAllCars);
router.get("/price/:price", getCarsByPrice);
router.get("/seatingcapacity/:seat", getCarsBySeatingCapacity);
router.get("/:brandSlug", getAllCarsOfSpecificBrand);
router.get("/:brandSlug/:titleSlug", getSingleCarDetails);
// router.get("/comparison/:titleSlug", getCarByTitleSlug);
// router.get("/popular", getPopularCars);

module.exports = router;
