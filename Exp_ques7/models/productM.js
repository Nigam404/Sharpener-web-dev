const fs = require("fs");
const path = require("path");
const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(__dirname, "data", "products.json"); //storing files in data folder.
    fs.readFile(p, (err, filecontent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(filecontent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(filecontent));
      }
    });
  }
};
