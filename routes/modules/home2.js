const express = require("express");
const router = express.Router();
const LinksDB = require("../../models/links");
router.get("/", (req, res) => {
  res.render("index");
});
//處理短網址導向
router.get("/:shorten", (req, res) => {
  const shorten = req.params.shorten;
  if (shorten !== "favicon.ico") {
    async function reductionUrl(shorten) {
      try {
        const links = await LinksDB.findOne({ shorten });
        await res.redirect(`${links.origin}`);
      } catch (error) {
        console.log(error);
      }
    }
    reductionUrl(shorten);
  }
});
module.exports = router;
