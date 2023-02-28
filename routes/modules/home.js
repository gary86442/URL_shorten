const express = require("express");
const router = express.Router();
const LinksDB = require("../../models/links");
router.get("/", (req, res) => {
  res.render("index");
});

//建立短網址
router.post("/", (req, res) => {
  const origin = req.body.url;
  // 判斷是否有建立過短網址
  LinksDB.findOne({ origin })
    .lean()
    .then((links) => {
      // 如果有 直接輸出舊有的資料
      if (links) {
        res.render("index", { links });
      } else {
        // 沒建過，生成短網址(要判斷生成出的短網址是否重複)  因非同步問題先跳過功能
        let IsShortenDuplicated = true;
        let shorten;
        while (IsShortenDuplicated) {
          shorten = require("../../public/javascripts/gibberish_generator");
          console.log(shorten);
          async function newShorten() {
            await LinksDB.findOne({ shorten }).then((links) => {
              console.log("TEST");
              //如果短網址找不到資料則新增資料。
              if (!links) {
                IsShortenDuplicated = false;
                LinksDB.create({ origin, shorten }).then(() => {
                  LinksDB.findOne({ origin })
                    .lean()
                    .then((links) => {
                      res.render("index", { links });
                    });
                });
              }
            });
          }
          newShorten();
        }
      }
    });
  // }
});

//處理短網址導向
router.get("/:shorten", (req, res) => {
  const shorten = req.params.shorten;
  if (shorten !== "favicon.ico") {
    LinksDB.findOne({ shorten }).then((links) => {
      res.redirect(`${links.origin}`);
    });
  }
});
module.exports = router;
