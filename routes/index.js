const express = require("express");
const router = express.Router();
const home = require("./modules/home2");

router.use("/", home);

module.exports = router;
