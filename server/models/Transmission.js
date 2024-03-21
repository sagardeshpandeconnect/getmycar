const mongoose = require("mongoose");

const transmissionSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  transmissionSlug: { type: String, required: true },
  image: { type: String, required: true },
});

const Transmission = mongoose.model("Transmission", transmissionSchema);
module.exports = Transmission;
