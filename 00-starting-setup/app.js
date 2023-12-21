const path = require("path");
const errorhandler = require("./controller/404Handler");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminroutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminroutes);
app.use(shopRoutes);

app.use(errorhandler.error404); //passing 404 error handler controller function

app.listen(3000);
