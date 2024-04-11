const express = require("express");
const {
  getPopularCars,
  getTrendingCars,
  getUpcomingCars,
} = require("../controllers/featuredcar");

const router = express.Router();

router.get("/popular", getPopularCars);
router.get("/trending", getTrendingCars);
router.get("/upcoming", getUpcomingCars);

module.exports = router;
