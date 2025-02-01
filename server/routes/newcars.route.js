const express = require("express");
const {
  getAllCarsOfSpecificBrand,
  getSingleCarDetails,
  getCarsByPrice,
  getCarsByBodyType,
  getCarsByFuelType,
  getCarsByTransmissionType,
  getCarsBySeatingCapacity,
} = require("../controllers/newcar.controller");
const paginate = require("../middlewares/pagination.middleware");

const router = express.Router();

router.get("/price/:price", getCarsByPrice);
router.get("/bodytype/:bodyType", getCarsByBodyType);
router.get("/fueltype/:fuelType", paginate, getCarsByFuelType);
router.get("/transmission/:transmission", getCarsByTransmissionType);
router.get("/seatingcapacity/:seat", getCarsBySeatingCapacity);
router.get("/:brandSlug", getAllCarsOfSpecificBrand);
router.get("/:brandSlug/:titleSlug", getSingleCarDetails);

module.exports = router;
