const BodyType = require("../models/bodyType.model");
const { handleRequest } = require("./errorHandling");

const getAllBodyTypes = async (req, res) => {
  await handleRequest(res, () => BodyType.find());
};

module.exports = { getAllBodyTypes };
