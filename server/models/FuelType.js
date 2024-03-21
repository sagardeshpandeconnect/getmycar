const mongoose = require("mongoose");

const fuelTypeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  fuelSlug: { type: String, required: true },
  image: { type: String, required: true },
});

const FuelType = mongoose.model("FuelType", fuelTypeSchema);
module.exports = FuelType;
