const Transmission = require("../models/Transmission");
const NewCar = require("../models/NewCar");

const getAllTransmissionTypes = async (req, res) => {
  try {
    const transmissionTypes = await Transmission.find();
    res.status(200).json(transmissionTypes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCarsByTransmissionType = async (req, res) => {
  console.log(req.params);
  const transmission = req.params.transmission;
  try {
    const newcars = await NewCar.find({
      "specifications.transmission": { $in: [`${transmission}`] },
    });
    res.status(200).json(newcars);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getAllTransmissionTypes, getCarsByTransmissionType };
