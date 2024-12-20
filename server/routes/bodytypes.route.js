const express = require("express");
const {
  getAllBodyTypes,
  getCarsByBodyType,
} = require("../controllers/bodytype.controller");

const router = express.Router();

router.get("/", getAllBodyTypes);
router.get("/:bodyType", getCarsByBodyType);

module.exports = router;
