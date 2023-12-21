//Importing packages
const express = require("express");
const bodyParser = require("body-parser");

//Importing files from own folder
const AdminRoute = require("./routes/admin");
const ShopRoute = require("./routes/shop");

//SERVER..............................................................................................
const app = express();

// Middlewares..........................................................................................
app.use(bodyParser.urlencoded({ extended: false })); //executes always

app.use("/admin", AdminRoute); //show path to admin.js
//Here we can also pass the common part of URL so full url path of admin.js will be like "localhost:4000/admin/add-product" and "localhost:4000/admin/product"

app.use(ShopRoute); //show path to shop.js

app.use((req, res, next) => {
  res.status(404).send(`<h2>404 Page Not Found!</h2>`); //middleware for 404 error.
});

//........................................................................................................
app.listen(4000);
