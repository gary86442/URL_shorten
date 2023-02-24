const express = require("express");
const router = express.Router();
const LinksDB = require("../../models/links");
router.get("/", (req, res) => {
  res.render("index");
});

//建立短網址
router.post("/", (req, res) => {
  const origin = req.body.url;

  // const shorten = require("../../public/javascripts/gibberish_generator");
  // LinksDB.create({ origin, shorten }).then(() => {
  //   res.render("show", { shorten });
  // });
  // 判斷是否有建立過短網址;
  LinksDB.findOne({ origin })
    .lean()
    .then((links) => {
      // 如果有 直接輸出舊有的資料
      if (links) {
        res.render("show", { shorten: links.shorten });
      } else {
        // 沒建過，生成短網址(要判斷生成出的短網址是否重複)
        let IsShortenDuplicated = true;
        let shorten;
        let count = 0;
        while (count < 10) {
          shorten = require("../../public/javascripts/gibberish_generator");
          console.log(count);
          count++;
          LinksDB.findOne({ shorten })
            .then((links) => {
              console.log(`sec.${links}`);
              console.log(IsShortenDuplicated);
              //如果短網址找不到資料則新增資料。
              if (!links) {
                IsShortenDuplicated = false;
                LinksDB.create({ origin, shorten }).then(() => {
                  LinksDB.findOne({ origin })
                    .lean()
                    .then((links) => {
                      res.render("show", { links });
                    });
                });
              }
            })
            .catch((error) => console.log(error));
        }
      }
    });
});

module.exports = router;
