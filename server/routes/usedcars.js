const express = require("express");

const { uploadUsedCar } = require("../controllers/usedcar");

const router = express.Router();

router.post("/upload", uploadUsedCar);

module.exports = router;
