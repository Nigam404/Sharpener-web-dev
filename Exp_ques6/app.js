//Importing packages
const express = require("express");
const bodyParser = require("body-parser");

//Importing files from own folder
const AdminRoute = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const errorController = require("./controllers/error404C");

//SERVER..............................................................................................
const app = express();

// Middlewares..........................................................................................
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", AdminRoute);
app.use(ShopRoute);

//middleware for 404 error
app.use(errorController.error404); //passing error404 controller function.

//........................................................................................................
app.listen(4000);
