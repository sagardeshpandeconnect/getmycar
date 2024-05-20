const express = require("express");
const cors = require("cors");

const setupMiddlewares = (app) => {
  app.use(express.json());
  app.use(cors());
};

module.exports = setupMiddlewares;
