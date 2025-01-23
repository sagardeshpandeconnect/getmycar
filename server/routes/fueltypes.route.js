const express = require("express");
const { getAllFuelTypes } = require("../controllers/fueltype.controller");

const router = express.Router();

router.get("/", getAllFuelTypes);

module.exports = router;
