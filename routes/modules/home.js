const express = require("express");
const router = express.Router();
const LinksDB = require("../../models/links");
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const link = req.body.url;
});
module.exports = router;
