const express = require("express");

const shopController = require("../controllers/shopC");

const router = express.Router();

router.get("/", shopController.getShop); //passing shop controller function.

module.exports = router;
