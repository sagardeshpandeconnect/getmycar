const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const setupMiddlewares = (app) => {
  app.use(express.json());
  app.use(bodyParser.json());
  
  const allowedOrigins = [
    process.env.FRONTEND_URL_LOCALHOST,
    process.env.FRONTEND_URL_IP
  ];
  
  app.use(cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));
};

module.exports = setupMiddlewares;
