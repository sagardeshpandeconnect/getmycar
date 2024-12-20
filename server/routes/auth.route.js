const express = require("express");
const { Signup, Login } = require("../controllers/auth.controller");
const { userVerification } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

module.exports = router;
