const express = require("express");
const router = express.Router();

//GET-route middleware '/add-product'
//we can use router.get or router.use .Both will work perfectly.
router.get("/add-product", (req, res, next) => {
  res.send(`<form action='/admin/product' method='POST'>
      <input type='text' name='title' placeholder='Enter product name'>
      <input type='number' name='size' placeholder='Enter quantity'>
      <button>Submit</button>
  </form>`);
});

//POST-route middleware '/product'.
router.post("/product", (req, res, next) => {
  res.redirect("/"); //redirect to path '/'.
  console.log(`Product name- ${req.body.title}`); //it will be undefined if we dont use 'body-parser' middleware.
  console.log(`Quantity- ${req.body.size}`);
});

module.exports = router;
