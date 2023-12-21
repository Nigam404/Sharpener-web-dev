const path = require("path");
exports.contactus = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};

exports.success = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
};
