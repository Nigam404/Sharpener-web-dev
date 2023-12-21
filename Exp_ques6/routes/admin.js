const express = require("express");
const productController = require("../controllers/productC");
const contactController = require("../controllers/contactC");

const router = express.Router();

//GET-route middleware '/add-product'
router.get("/add-product", productController.getAddProduct); //passing product controller function.

//POST-route middleware '/product'.
router.post("/product", productController.postProduct); //passing product controller function.

//Contact us
router.get("/contactus", contactController.contactus); //passing contact controller function.

router.get("/success", contactController.success); //passing contact controller function.

module.exports = router;
