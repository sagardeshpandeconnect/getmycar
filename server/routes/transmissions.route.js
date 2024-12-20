const express = require("express");
const {
  getAllTransmissionTypes,
  getCarsByTransmissionType,
} = require("../controllers/transmission.controller");

const router = express.Router();

router.get("/", getAllTransmissionTypes);
router.get("/:transmission", getCarsByTransmissionType);

module.exports = router;
