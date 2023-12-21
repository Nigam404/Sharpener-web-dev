const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    `<h4>Welcome to my Shop- go to <i><b>/admin/add-product</b></i> to add product in cart.</h4>`
  );
});

module.exports = router;
