const mongoose = require("mongoose");

const bodyTypeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  bodyTypeSlug: { type: String },
  image: { type: String, required: true },
});

const BodyType = mongoose.model("BodyType", bodyTypeSchema);
module.exports = BodyType;
