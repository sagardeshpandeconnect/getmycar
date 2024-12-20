const express = require("express");
const {
  getPopularCars,
  getTrendingCars,
  getUpcomingCars,
} = require("../controllers/featuredcar.controller");

const router = express.Router();

router.get("/popular", getPopularCars);
router.get("/trending", getTrendingCars);
router.get("/upcoming", getUpcomingCars);

module.exports = router;
