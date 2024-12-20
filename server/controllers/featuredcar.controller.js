const NewCar = require("../models/newCar.model");

const getPopularCars = async (req, res) => {
  try {
    const popularcars = await NewCar.find({ featured: "popular" });
    res.status(200).json(popularcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getTrendingCars = async (req, res) => {
  try {
    const trendingCars = await NewCar.find({ featured: "trending" });
    res.status(200).json(trendingCars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUpcomingCars = async (req, res) => {
  try {
    const upcomingCars = await NewCar.find({ featured: "upcoming" });
    res.status(200).json(upcomingCars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getPopularCars,
  getTrendingCars,
  getUpcomingCars,
};
