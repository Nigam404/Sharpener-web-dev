const path = require("path");

const express = require("express");

const productController = require("../controller/products");

const router = express.Router();



// /admin/add-product => GET
router.get("/add-product", productController.getAddProduct); //passing the controller function

// /admin/add-product => POST
router.post("/add-product", productController.postAddProduct);//passing another controller fun

exports.routes = router;

