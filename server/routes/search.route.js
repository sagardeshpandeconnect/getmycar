const express = require("express");
const { getSearchedCars } = require("../controllers/search.controller");

const router = express.Router();

router.get("/", getSearchedCars);

module.exports = router;
