const express = require("express");
const {
  getPopularCars,
  getJustLaunchedCars,
  getUpcomingCars,
} = require("../controllers/featuredcar");

const router = express.Router();

router.get("/popular", getPopularCars);
router.get("/just-launched", getJustLaunchedCars);
router.get("/upcoming", getUpcomingCars);

module.exports = router;
