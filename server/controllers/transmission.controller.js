const Transmission = require("../models/transmission.model");
const { handleRequest } = require("./errorHandling");

const getAllTransmissionTypes = async (req, res) => {
  await handleRequest(res, () => Transmission.find());
};

module.exports = { getAllTransmissionTypes };
