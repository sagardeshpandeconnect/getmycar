const cors = require("cors");

const corsConfig = cors({
  origin: ["http://192.168.1.101:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

module.exports = corsConfig;
