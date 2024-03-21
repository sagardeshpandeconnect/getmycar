const express = require("express");
const { getSearchedCars } = require("../controllers/search");

const router = express.Router();

router.get("/", getSearchedCars);

module.exports = router;
