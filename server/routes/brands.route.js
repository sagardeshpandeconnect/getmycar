const express = require("express");
const {
  getAllBrands,
  //  getSpeicificBrandById
} = require("../controllers/brand.controller");

const router = express.Router();

router.get("/", getAllBrands);
// router.get("/:brand", getSpeicificBrandById);

module.exports = router;
