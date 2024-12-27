const mongoose = require("mongoose");

const newCarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleSlug: { type: String, required: true },
    brand: { type: String, required: true },
    brandSlug: { type: String, required: true },
    brand_id: { type: String, required: true },
    featured: { type: String },
    bodytype: { type: String, required: true },
    usagetype: { type: String, required: true },
    image: { type: String, required: true },
    specifications: {
      price: Number,
      engine: Number,
      safety: Number,
      fueltype: Array,
      transmission: Array,
      seatingcapacity: Number,
    },
    keyfeatures: { type: Array, required: true },
    prosandcons: [{ pros: Array }, { cons: Array }],
    verdict: { type: String, required: true },
    summary: { type: Array },
    faq: [
      { price: [{ question: String, answer: String, _id: false }] },
      { performance: [{ question: String, answer: String }] },
      { specifications: [{ question: String, answer: String }] },
      { features: [{ question: String, answer: String }] },
      { safety: [{ question: String, answer: String }] },
    ],
    comparisonSlug: { type: String },
  },
  { timestamps: true }
);

const NewCar = mongoose.model("NewCar", newCarSchema);
module.exports = NewCar;
