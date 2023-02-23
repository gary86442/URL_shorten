const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const app = express();

const port = 3000;

// setting template engine
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// server listening
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
