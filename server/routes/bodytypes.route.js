const express = require("express");
const { getAllBodyTypes } = require("../controllers/bodytype.controller");

const router = express.Router();

router.get("/", getAllBodyTypes);

module.exports = router;
