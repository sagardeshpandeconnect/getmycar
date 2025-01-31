const express = require("express");
const { getCarByTitleSlug } = require("../controllers/comparison.controller");

const router = express.Router();

router.get("/:titleSlug", getCarByTitleSlug);

module.exports = router;
