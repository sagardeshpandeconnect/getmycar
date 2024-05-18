const mongoose = require("mongoose");

const oldCarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    specifications: {
      price: Number,
      kilometer: Number,
      fueltype: Array,
      registrationyear: Number,
      manufacturingyear: Number,
      noofowners: Number,
      transmission: Array,
      color: String,
      insurance: String,
      registrationtype: String,
    },
  },
  { timestamps: true }
);

const OldCar = mongoose.model("OldCar", oldCarSchema);
module.exports = OldCar;
