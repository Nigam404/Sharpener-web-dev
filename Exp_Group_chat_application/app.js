const express = require("express");
const bodyparser = require("body-parser");
var application_routes = require("./routes"); //importing our routes.js file

const app = express();

//middlewares...
app.use(bodyparser.urlencoded({ extended: false }));
app.use(application_routes); //using routes path

app.listen(3000);
