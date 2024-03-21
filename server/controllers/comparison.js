const NewCar = require("../models/NewCar");

const getCarByTitleSlug = async (req, res) => {
  // console.log(req);
  // const comparisonSlug = req.params.comparisonSlug;
  // console.log(comparisonSlug);
  // const secondCarTitleSlug = req.params.secondCarTitleSlug;
  try {
    const newcars = await NewCar.find({
      titleSlug: req.params.titleSlug,
    });
    res.status(200).json(newcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getCarByTitleSlug,
};
