const cors = require("cors");

const corsConfig = cors({
  origin: ["http://192.168.43.5:5174"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

module.exports = corsConfig;
