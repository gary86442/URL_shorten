const LinksDB = require("../links");
const db = require("../../config/mongoose");
const data = [
  {
    origin: "https://www.google.com/",
    shorten: "Eh9lW",
  },
  {
    origin: "https://www.youtube.com/",
    shorten: "uDehS",
  },
  {
    origin: "https://tw.alphacamp.co/",
    shorten: "puG1u",
  },
];
db.once("open", () => {
  LinksDB.create(data).then(() => console.log("Seeder is done"));
});
