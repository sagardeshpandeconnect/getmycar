const express = require("express");

const {
  uploadUsedCar,
  getUsedCarsOfSpecificUser,
} = require("../controllers/usedcar");

const router = express.Router();

router.post("/upload", uploadUsedCar);
router.get("/manage/:userId", getUsedCarsOfSpecificUser);

module.exports = router;
