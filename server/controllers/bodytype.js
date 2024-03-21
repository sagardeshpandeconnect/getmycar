const BodyType = require("../models/BodyType");
const NewCar = require("../models/NewCar");

const getAllBodyTypes = async (req, res) => {
  try {
    const bodytypes = await BodyType.find();
    res.status(200).json(bodytypes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const getCarsByBodyType = async (req, res) => {
  const bodyType = req.params.bodyType;
  // console.log(req.params);
  try {
    const specificBodyTypeCars = await NewCar.find({
      bodytype: `${bodyType}`,
    });
    res.status(200).json(specificBodyTypeCars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getAllBodyTypes, getCarsByBodyType };
