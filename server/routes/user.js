const express = require("express");
const {
    registerUser, getUserInfo
} = require("../controllers/user");

  const router = express.Router();

router.get("/", getUserInfo);
router.post("/authenticate", registerUser);

module.exports = router;