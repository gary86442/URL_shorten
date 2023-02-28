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

router.post("/", (req, res) => {
  const origin = req.body.url;
  isOriginInDB(origin);
  //確認是否有建立過
  async function isOriginInDB(origin) {
    const links = await LinksDB.findOne({ origin }).lean();
    if (links) {
      res.render("index", { links });
    } else {
      isShortenInDB();
      async function isShortenInDB() {
        let isShortenRepeat = true;
        let shorten;
        while (isShortenRepeat) {
          shorten = require("../../public/javascripts/gibberish_generator");
          const links = await LinksDB.findOne({ shorten }).lean();
          if (!links) {
            isShortenInDB = false;
            await LinksDB.create({ origin, shorten });
            const newData = await LinksDB.findOne({ origin }).lean();
            await res.render("index", { links: newData });
          }
        }
      }
    }
  }
});
module.exports = router;
