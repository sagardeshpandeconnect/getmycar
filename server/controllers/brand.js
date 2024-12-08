const Brand = require("../models/Brand");

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// const getSpeicificBrandById = async (req, res) => {
//   console.log(req.params);
//   try {
//     // const brandId = req.params.id;
//     const brand = await Brand.findById(req.params.brandId);
//     res.status(200).json(brand);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

module.exports = {
  getAllBrands,
  // getSpeicificBrandById
};
