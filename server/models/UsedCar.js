const mongoose = require("mongoose");

const usedCarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    ownerType: {
      type: String,
      required: true,
    },
    kmDriven: {
      type: Number,
      required: true,
    },
    picture: {
      type: Object,
      required: true,
    },
    comments: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

const Item = mongoose.model("UsedCar", usedCarSchema);

module.exports = Item;
