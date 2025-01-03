const cors = require("cors");

const corsConfig = cors({
  origin: ["http://192.168.1.100:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

module.exports = corsConfig;
