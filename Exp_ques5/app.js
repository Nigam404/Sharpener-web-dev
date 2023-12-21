//Importing packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Importing files from own folder
const AdminRoute = require("./routes/admin");
const ShopRoute = require("./routes/shop");

//SERVER..............................................................................................
const app = express();

// Middlewares..........................................................................................
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", AdminRoute);
app.use(ShopRoute);

//middleware for 404 error.serving 404.html page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html")); 
});

//........................................................................................................
app.listen(4000);
