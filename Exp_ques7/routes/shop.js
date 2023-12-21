const path = require("path");
const productController = require("../controller/productC");

const express = require("express");

const router = express.Router();

router.get("/", productController.getShop); //passing controller fun getShop

module.exports = router;
