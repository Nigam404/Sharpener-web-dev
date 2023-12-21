const path = require("path");
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin.html")); //serving admin.html page
};

exports.postProduct = (req, res, next) => {
  res.redirect("/"); //redirect to path '/'.
  console.log(`Product name- ${req.body.title}`); //it will be undefined if we dont use 'body-parser' middleware.
  console.log(`Quantity- ${req.body.size}`);
};
