const express = require("express");
const {
  getAllTransmissionTypes,
} = require("../controllers/transmission.controller");

const router = express.Router();

router.get("/", getAllTransmissionTypes);

module.exports = router;
