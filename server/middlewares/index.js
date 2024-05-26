const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const setupMiddlewares = (app) => {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
};

module.exports = setupMiddlewares;
