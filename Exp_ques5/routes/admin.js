const express = require("express");
const path = require("path");

const router = express.Router();

//GET-route middleware '/add-product'
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin.html")); //serving index.html page
});

//POST-route middleware '/product'.
router.post("/product", (req, res, next) => {
  res.redirect("/"); //redirect to path '/'.
  console.log(`Product name- ${req.body.title}`); //it will be undefined if we dont use 'body-parser' middleware.
  console.log(`Quantity- ${req.body.size}`);
});

//Contact us
router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.get("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
});

module.exports = router;
