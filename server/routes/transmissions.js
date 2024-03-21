const express = require("express");
const {
  getAllTransmissionTypes,
  getCarsByTransmissionType,
} = require("../controllers/transmission");

const router = express.Router();

router.get("/", getAllTransmissionTypes);
router.get("/:transmission", getCarsByTransmissionType);

module.exports = router;
