const express = require("express");

const {
  uploadUsedCar,
  getUsedCars,
  getUsedCarsOfSpecificUser,
} = require("../controllers/usedcar");

const router = express.Router();

router.post("/upload", uploadUsedCar);
router.get("/", getUsedCars);
router.get("/manage/:userId", getUsedCarsOfSpecificUser);

module.exports = router;
