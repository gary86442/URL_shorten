const mongoose = require("mongoose");
// const LinksDB = require();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", () => {
  console.log("DB Error!");
});

db.once("open", () => {
  console.log("DB connected");
});

module.exports = db;
