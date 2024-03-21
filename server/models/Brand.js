const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    // brandId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   unique: true,
    // },
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    urlbrand: { type: String, required: true },
  },
  { timestamps: true }
);

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
