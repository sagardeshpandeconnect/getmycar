const express = require("express");
const {
    getAllUsedCars, pushUsedCarDataToDb
  } = require("../controllers/usedcar");

  const router = express.Router();

router.get("/", getAllUsedCars);
router.post("/submit-form", pushUsedCarDataToDb);

module.exports = router;