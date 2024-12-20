const dotenv = require("dotenv");
const path = require("path");

const loadEnvironmentVariables = () => {
  const envPath = path.resolve(__dirname, "../.env.development");
  dotenv.config({ path: envPath });
};

module.exports = loadEnvironmentVariables;
