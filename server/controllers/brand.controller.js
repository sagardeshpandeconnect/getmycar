const Brand = require("../models/brand.model");
const { handleRequest } = require("./errorHandling");

const getAllBrands = async (req, res) => {
  await handleRequest(res, () => Brand.find());
};

module.exports = {
  getAllBrands,
};
