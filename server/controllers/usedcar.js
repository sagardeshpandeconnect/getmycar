const OldCar = require("../models/UsedCar");

const getAllUsedCarsOfSpecificUser = async (req, res) => {
    // const userId = req.params.userId;
  
    // console.log(req.path);
    try {
      const allCarsOfSpecificUser = await UsedCar.find({ userId: req.params.userId });
      res.status(200).json(allCarsOfSpecificUser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  module.exports = {
    getAllUsedCarsOfSpecificUser
  };